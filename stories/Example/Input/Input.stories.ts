import { Category } from '@/storiesHierarchy.js'

import InputMD from '@docs/form/input.md'

import Temp from './template'

export default {
  title: Category.from
  // Our exports that end in "Data" are not stories.
}
export const input输入框 = () => ({
  template: Temp,
  data () {
    return {
      inputValue: 'foo',
      editorValue1: 'bar'
    }
  },
  methods: {
    log (msg) {
      console.log(msg)
    },
    onBlur (editor) {
      console.log(editor.value)
    }
  }
})
input输入框.parameters = {
  notes: { InputMD },
  knobs: { disable: true },
  preview: [
    {
      tab: 'code',
      description: '',
      template: Temp,
      language: 'html',
      copy: true
    }
  ]
}
