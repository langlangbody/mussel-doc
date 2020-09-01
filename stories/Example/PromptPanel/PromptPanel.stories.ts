import {
  Category
} from '@/storiesHierarchy.js'

import Temp from './template'

export default {
  title: Category.promptPanel,
  parameters: {
    docs: {
      description: { component: `缺省提示` }
    }
  }
};
export const Default = () => ({
  template: Temp
})
Default.parameters = {
  notes: { disable: true },
  controls: { disable: true },
  preview: [
    {
        tab: "code",
        description: "",
        template: Temp,
        language: "html",
        copy: true
    },
  ]
}