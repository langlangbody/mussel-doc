import { Category } from '@/storiesHierarchy.js'

import Button from '../../../docs/basic/button.md'

import Temp from './template'

const Template = () => ({
  /**
   * A list of Avatars, ellipsized to at most 3. Supports passing only a subset of the total user count.
   */
  template: Temp
})
export default {
  title: Category.button,
  parameters: {
    notes: { Button }
  }
}
// 这是默认样式
export const component = Template.bind({})

component.parameters = {
  knobs: { disable: true },
  preview: [
    {
      tab: 'code',
      description: '',
      template: Template().template,
      language: 'html',
      copy: true
    }
  ]
}

component.storyName = '1.按钮案例'
