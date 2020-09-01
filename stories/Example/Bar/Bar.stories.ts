import {
  Category
} from '@/storiesHierarchy.js'

import Bar from '@docs/navigation/bar.md';

import Temp from './template'

export default {
  title: Category.bar
  // Our exports that end in "Data" are not stories.
};
export const Default = () => ({
  template: Temp
})
Default.parameters = {
  notes: { Bar },
  docs: { disable: true },
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