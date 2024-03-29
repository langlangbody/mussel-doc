/*
 * @Author: your name
 * @Date: 2020-09-01 12:00:33
 * @LastEditTime: 2021-02-24 10:36:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mussel-doc/stories/Components/Bar/index.stories.ts
 */
import { ComponentsCategory } from '@/storiesHierarchy.js'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { notify } from '@mctech/mussel'
import { creatObjFun } from '../../config/index'

export default {
  title: ComponentsCategory.bar,
  decorators: [
    withKnobs,
    () => ({
      template: /* html */ `
      <mu-h-box style="height: 100vh" justify-content="center" align-items="center">
        <github-href href="bar" />
        <story/>
      </mu-h-box>
      `
    })
  ]
}

export const View = () => ({
  props: {
    disabled: {
      type: Boolean,
      default: boolean('disabled', false)
    },
    reload: {
      type: Boolean,
      default: boolean('reload', false)
    },
    alignSelf: {
      type: String,
      default: select(
        'align-self',
        creatObjFun(['center', 'stretch']),
        'center'
      )
    }
  },
  template: /* html */ `
    <mu-v-box size='100%'>
      <mu-paging-bar
        :eof="eof"
        :reload="reload"
        :page-index="pageIndex"
        :align-self="alignSelf"
        :disabled="disabled"
        @prev="goPrevPage"
        @next="goNextPage"
        @reload="reloadClick" />
    </mu-v-box>
`,
  data () {
    return {
      triggers: [
        'clickToOpen',
        'click', // Same as clickToToggle, provided for backwards compatibility.
        'clickToToggle',
        'hover',
        'focus'
      ]
    }
  },
  computed: {
    eof () {
      return this.index <= this.pageIndex
    }
  },
  methods: {
    goPrevPage () {
      this.pageIndex -= 1
    },
    goNextPage () {
      if (!this.eof) {
        this.pageIndex += 1
      }
    },
    reloadClick () {
      notify('info', 'reload事件')
    }
  }
})

View.parameters = {
  preview: { disable: true },
  notes: { disable: true }
}
