import { Category } from '@/storiesHierarchy.js'

import Temp from './template'

import './style.css'

export default {
  title: Category.menu
}
export const Default = () => ({
  template: Temp
})
Default.parameters = {
  notes: { disable: true },
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
