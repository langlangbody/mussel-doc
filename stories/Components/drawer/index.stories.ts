import { ComponentsCategory } from '@/storiesHierarchy.js'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { creatObjFun } from '../../config/index'
import './index.css'

export default {
  title: ComponentsCategory.drawer,
  decorators: [
    withKnobs,
    () => ({
      template: /* html */ `
      <mu-h-box style="height: 100vh" justify-content="center" align-items="center">
        <github-href href="drawer" />
        <story/>
      </mu-h-box>
      `
    })
  ]
}

export const View = () => ({
  props: {
    drawVisible: {
      type: Boolean,
      default: boolean('drawVisible', false)
    },
    mask: {
      type: String,
      default: select(
        'mask',
        creatObjFun(['none', 'mu-modal-mask']),
        'mu-modal-mask'
      )
    },
    position: {
      type: String,
      default: select(
        'position',
        creatObjFun(['top', 'right', 'bottom', 'left']),
        'right'
      )
    }
  },
  template: /* html */ `
    <mu-v-box size='100%'>
      <mu-drawer :mask="mask" v-model="drawVisible" :position="position" slot-wrapper="none">
        <div class="mu-drawer" :class="className(position)">
          插槽内容
        </div>
      </mu-drawer>
    </mu-v-box>
`,
  methods: {
    className (position) {
      const pos = {
        top: 'drawer1-5',
        right: 'drawer2-6',
        bottom: 'drawer3-7',
        left: 'drawer4-8'
      }
      return pos[position]
    }
  }
})

View.parameters = {
  preview: { disable: true },
  notes: { disable: true }
}
