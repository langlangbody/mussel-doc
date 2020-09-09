import { Category } from '@/storiesHierarchy.js'

import Layout from '@docs/layout/flex.md'

import Temp from './template'

export default {
  title: Category.layout
  // Our exports that end in "Data" are not stories.
}
export const Default = () => ({
  template: Temp
})
Default.parameters = {
  notes: { Layout },
  docs: { disable: true },
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
