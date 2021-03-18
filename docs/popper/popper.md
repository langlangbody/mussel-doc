## 说明： 需要引用外部包`popper.js`

```shell
npm i -D popper.js
```

`popper.vue`
```html
<template>
  <component :is="tagName">
    <transition
      :name="transition"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
      @after-leave="doDestroy">
      <span
        v-show="!disabled && showPopper"
        ref="popper"
        class="popper">
        {{ content }}
        <slot name="content"></slot>
      </span>
    </transition>
    <div ref="reference" class="reference">
       <slot></slot>
    </div>
  </component>
</template>

<script>
  import Popper from 'popper.js'
  import { on, off } from './dom'

  export default {
    name: 'Popper',
    props: {
      tagName: {
        type: String,
        default: 'div'
      },
      trigger: {
        type: String,
        default: 'hover',
        validator: value => [
          'clickToOpen',
          'click', // Same as clickToToggle, provided for backwards compatibility.
          'clickToToggle',
          'hover',
          'focus'
        ].indexOf(value) > -1
      },
      delayOnMouseOver: {
        type: Number,
        default: 10
      },
      delayOnMouseOut: {
        type: Number,
        default: 10
      },
      disabled: {
        type: Boolean,
        default: false
      },
      content: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      boundariesSelector: String,
      forceShow: {
        type: Boolean,
        default: false
      },
      dataValue: {
        default: null
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      visibleArrow: {
        type: Boolean,
        default: true
      },
      transition: {
        type: String,
        default: ''
      },
      stopPropagation: {
        type: Boolean,
        default: false
      },
      preventDefault: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },

    data () {
      return {
        reference: null,
        popperJS: null,
        showPopper: false,
        currentPlacement: '',
        popperOptions: {
          placement: 'bottom',
          computeStyle: {
            gpuAcceleration: false
          }
        }
      }
    },

    watch: {
      showPopper (value) {
        if (value) {
          this.$emit('show', this)
          if (this.popperJS) {
            this.popperJS.enableEventListeners()
          }
          this.updatePopper()
        } else {
          if (this.popperJS) {
            this.popperJS.disableEventListeners()
          }
          this.$emit('hide', this)
        }
      },

      forceShow: {
        handler (value) {
          this[value ? 'doShow' : 'doClose']()
        },
        immediate: true
      },

      disabled (value) {
        if (value) {
          this.showPopper = false
        }
      }
    },

    created () {
      this.appendedArrow = false
      this.appendedToBody = false
      this.popperOptions = Object.assign(this.popperOptions, this.options)
    },

    mounted () {
      this.popper =  this.$refs.popper || document.querySelector('.popper')
      this.reference = this.$refs.reference || document.querySelector('.reference')

      switch (this.trigger) {
        case 'clickToOpen':
          on(this.reference, 'click', this.doShow)
          on(document, 'click', this.handleDocumentClick)
          break
        case 'click': // Same as clickToToggle, provided for backwards compatibility.
        case 'clickToToggle':
          on(this.reference, 'click', this.doToggle)
          on(document, 'click', this.handleDocumentClick)
          break
        case 'hover':
          on(this.reference, 'mouseover', this.onMouseOver)
          on(this.popper, 'mouseover', this.onMouseOver)
          on(this.reference, 'mouseout', this.onMouseOut)
          on(this.popper, 'mouseout', this.onMouseOut)
          break
        case 'focus':
          on(this.reference, 'focus', this.onMouseOver)
          on(this.popper, 'focus', this.onMouseOver)
          on(this.reference, 'blur', this.onMouseOut)
          on(this.popper, 'blur', this.onMouseOut)
          break
      }
    },

    destroyed () {
      this.destroyPopper()
    },

    methods: {
      doToggle (event) {
        if (this.stopPropagation) {
          event.stopPropagation()
        }

        if (this.preventDefault) {
          event.preventDefault()
        }

        if (!this.forceShow) {
          this.showPopper = !this.showPopper
        }
      },

      doShow () {
        this.showPopper = true
      },

      doClose () {
        this.showPopper = false
      },

      doDestroy () {
        if (this.showPopper) {
          return
        }

        if (this.popperJS) {
          this.popperJS.destroy()
          this.popperJS = null
        }

        if (this.appendedToBody) {
          this.appendedToBody = false
          document.body.removeChild(this.popper.parentElement)
        }
      },

      createPopper () {
        this.$nextTick(() => {
          if (this.visibleArrow) {
            this.appendArrow(this.popper)
          }

          if (this.appendToBody && !this.appendedToBody) {
            this.appendedToBody = true
            document.body.appendChild(this.popper.parentElement)
          }

          if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy()
          }

          if (this.boundariesSelector) {
            const boundariesElement =
              document.querySelector(this.boundariesSelector)
            if (boundariesElement) {
              this.popperOptions.modifiers =
                Object.assign({}, this.popperOptions.modifiers)
              this.popperOptions.modifiers.preventOverflow =
                Object.assign({}, this.popperOptions.modifiers.preventOverflow)
              this.popperOptions.modifiers.preventOverflow.boundariesElement =
                boundariesElement
            }
          }

          this.popperOptions.onCreate = () => {
            this.$emit('created', this)
            this.$nextTick(this.updatePopper)
          }

          this.popperJS = new Popper(
            this.reference,
            this.popper,
            this.popperOptions
          )
        })
      },

      destroyPopper () {
        off(this.reference, 'click', this.doToggle)
        off(this.reference, 'mouseup', this.doClose)
        off(this.reference, 'mousedown', this.doShow)
        off(this.reference, 'focus', this.doShow)
        off(this.reference, 'blur', this.doClose)
        off(this.reference, 'mouseout', this.onMouseOut)
        off(this.reference, 'mouseover', this.onMouseOver)
        off(document, 'click', this.handleDocumentClick)

        this.showPopper = false
        this.doDestroy()
      },

      appendArrow (element) {
        if (this.appendedArrow) {
          return
        }

        this.appendedArrow = true

        const arrow = document.createElement('div')
        arrow.setAttribute('x-arrow', '')
        arrow.className = 'popper__arrow'
        element.appendChild(arrow)
      },

      updatePopper () {
        if (!this.popperJS) {
          this.createPopper()
        } else {
          this.popperJS.scheduleUpdate()
        }
      },

      onMouseOver () {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.showPopper = true
        }, this.delayOnMouseOver)
      },

      onMouseOut () {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.showPopper = false
        }, this.delayOnMouseOut)
      },

      handleDocumentClick (e) {
        if (!this.$el || !this.reference ||
          this.elementContains(this.$el, e.target) ||
          this.elementContains(this.reference, e.target) ||
          !this.popper || this.elementContains(this.popper, e.target)
        ) {
          return
        }

        this.$emit('documentClick', this)

        if (this.forceShow) {
          return
        }

        this.showPopper = false
      },

      elementContains (elm, otherElm) {
        if (typeof elm.contains === 'function') {
          return elm.contains(otherElm)
        }

        return false
      }
    }
  }

</script>

<style scoped>
  .popper {
    width: auto;
    background-color: #fff;
    color: #666666;
    text-align: center;
    padding: 12px 16px 16px 16px;
    display: block;
    position: absolute;
    font-size: 12px;
    border: 1px solid #ebecf0;
    z-index: 9;
    background-clip: padding-box;
    border-radius:4px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.20);
    white-space: nowrap;
  }
  .popper .popper__arrow {
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    position: absolute;
    margin: 10px;
  }
  .popper[x-placement^="top"] {
    margin-bottom: 10px;
  }
  .popper[x-placement^="top"] .popper__arrow {
    border-width: 10px 10px 0 10px;
    border-color: #dfdfdfad transparent transparent transparent;
    bottom: -10px;
    left: calc(50% - 10px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .popper[x-placement^="bottom"] {
    margin-top: 10px;
  }
  .popper[x-placement^="bottom"] .popper__arrow {
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #dfdfdfad transparent;
    top: -10px;
    left: calc(50% - 10px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .popper[x-placement^="right"] {
    margin-left: 10px;
  }
  .popper[x-placement^="right"] .popper__arrow {
    border-width: 10px 10px 10px 0;
    border-color: transparent #dfdfdfad transparent transparent;
    left: -10px;
    top: calc(50% - 10px);
    margin-left: 0;
    margin-right: 0;
  }
  .popper[x-placement^="left"] {
    margin-right: 10px;
  }
  .popper[x-placement^="left"] .popper__arrow {
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #dfdfdfad;
    right: -10px;
    top: calc(50% - 10px);
    margin-left: 0;
    margin-right: 0;
  }
  

  .popper .popper__arrow:after {
    content: ' ';
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    position: absolute;
    margin: 10px;
  }

  .popper[x-placement^="top"] .popper__arrow::after {
    border-width: 8px 8px 0 8px;
    border-color: #fff transparent transparent transparent;
    top: -10px;
    left: calc(50% - 18px);
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .popper[x-placement^="bottom"] .popper__arrow:after {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
    bottom: -10px;
    left: calc(50% - 18px);
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .popper[x-placement^="right"] .popper__arrow:after {
    border-width: 8px 8px 8px 0;
    border-color: transparent #fff transparent transparent;
    right: -10px;
    top: calc(50% - 18px);
    margin-left: 0;
    margin-right: 0;
  }
  .popper[x-placement^="left"] .popper__arrow:after {
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent #fff;
    left: -10px;
    top: calc(50% - 18px);
    margin-left: 0;
    margin-right: 0;
  }
</style>
```
`dom.js`
```js
export const on = (element, event, handler) => {
  if (!document.addEventListener) {
    element.attachEvent('on' + event, handler)
  } else {
    if (element && event && handler) {
      element.addEventListener(event, handler, false)
    }
  }
}
export const off = (element, event, handler) => {
  if (!document.removeEventListener) {
    element.detachEvent('on' + event, handler)
  } else {
    if (element && event) {
      element.removeEventListener(event, handler, false)
    }
  }
}
```