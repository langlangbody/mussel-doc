import {
  Category
} from '@/storiesHierarchy.js'

import ExpanderMD from '@docs/others/expander.md';

import Temp from './template'

export default {
  title: Category.expander
};
export const Default = () => ({
  template: Temp
})
Default.parameters = {
  docs: { disable: true },
  notes: { ExpanderMD },
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