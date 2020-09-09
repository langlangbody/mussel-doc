import { Category } from '@/storiesHierarchy.js'

import Temp from './customFlex.template'

export default {
  title: Category.from
  // Our exports that end in "Data" are not stories.
}
export const CustomFlex = () => ({
  template: Temp
})
CustomFlex.parameters = {
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
