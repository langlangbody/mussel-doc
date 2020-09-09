import { ComponentsCategory } from '@/storiesHierarchy.js'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import { notify } from '@mctech/mussel'

import { creatObjFun } from '../../config/index'

export default {
  title: ComponentsCategory.button,
  decorators: [
    withKnobs,
    () => ({
      template: /* html */ `
      <mu-h-box style="height: 100vh" justify-content="center" align-items="center">
        <github-href href="button" />
        <story/>
      </mu-h-box>
      `
    })
  ]
}

const buttonStyle: string[] = ['normal', 'outline', 'text', 'link'],
  buttonShape: string[] = ['normal', 'round'],
  buttonType: string[] = ['normal', 'primary', 'submit', 'danger']

export const View = () => ({
  props: {
    label: {
      type: String,
      default: text('label', '按钮')
    },
    iconleft: {
      default: boolean('iconLeft', false)
    },
    iconright: {
      default: boolean('iconRight', false)
    },
    badge: {
      default: boolean('showBadge', false)
    },
    badgeType: {
      type: String,
      default: select('badge-type', creatObjFun(buttonType), 'normal')
    },
    active: {
      type: Boolean,
      default: boolean('active', false)
    },
    disabled: {
      type: Boolean,
      default: boolean('disabled', false)
    },
    buttonStyle: {
      type: String,
      default: select('button-style', creatObjFun(buttonStyle), 'normal')
    },
    buttonShape: {
      type: String,
      default: select('button-shape', creatObjFun(buttonShape), 'normal')
    },
    buttonType: {
      type: String,
      default: select('button-type', creatObjFun(buttonType), 'primary')
    }
  },
  template: /* html */ `
    <mu-button @click="onClick" :active="active" :buttonStyle = "buttonStyle" :disabled="disabled" :buttonShape="buttonShape" :buttonType="buttonType" >
      <mu-icon v-if="iconleft" icon="key-down"></mu-icon>
        {{label}}
      <mu-icon v-if="iconright" icon="key-down"></mu-icon>
      <span v-if="badge" class="mu-badge" :badge-type="badgeType">99+</span>
    </mu-button>
`,
  methods: {
    onClick () {
      notify('info', 'onClick')
    }
  }
})

View.parameters = {
  preview: { disable: true },
  notes: { disable: true }
}
