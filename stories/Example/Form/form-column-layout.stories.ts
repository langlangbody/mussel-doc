import {
  Category
} from '@/storiesHierarchy.js'

import comboBoxMD from '@docs/form/combo-box.md';

import Temp from './column.template'

export default {
  title: Category.from
  // Our exports that end in "Data" are not stories.
};
export const ComboBox = () => ({
  template: Temp
})
ComboBox.parameters = {
  docs: { disable: true },
  notes: { comboBoxMD },
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