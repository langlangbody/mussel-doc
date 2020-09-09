import { Category } from '@/storiesHierarchy.js'

import DropdownMD from '@docs/others/dropdown.md'

import Temp from './template'

export default {
  title: Category.dropdown
}
export const Default = () => ({
  template: Temp
})
Default.parameters = {
  docs: { disable: true },
  notes: { DropdownMD },
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
