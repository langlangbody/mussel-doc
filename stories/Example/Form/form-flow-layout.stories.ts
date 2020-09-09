import { Category } from '@/storiesHierarchy.js'

import Temp from './flow.template'

export default {
  title: Category.from
  // Our exports that end in "Data" are not stories.
}
export const FlowBox = () => ({
  template: Temp
})
FlowBox.parameters = {
  docs: { disable: true },
  notes: { disable: true },
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
