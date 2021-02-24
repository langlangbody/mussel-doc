import { Category } from '@/storiesHierarchy.js'

import Popper from '@docs/popper/popper.md'

import Temp from './template'

export default {
  title: Category.popper
  // Our exports that end in "Data" are not stories.
}
export const View = () => ({
  template: Temp,
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
})
View.parameters = {
  knobs: { disable: true },
  notes: { Popper },
  docs: { disable: true },
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
