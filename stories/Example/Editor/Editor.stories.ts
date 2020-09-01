import {
  Category
} from '@/storiesHierarchy.js'

import DateEditorMD from '@docs/form/date-editor.md';
import PopupEditorMD from '@docs/form/popup-editor.md';

import Temp from './template'

export default {
  title: Category.from
  // Our exports that end in "Data" are not stories.
};
export const Editor = () => ({
  template: Temp,
  data () {
    return {
      inputValue: '',
      iconInput1Value: 'text value',
      comboOptions: [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11, label: '11' },
        { value: 12, label: '12' },
        { value: 13, label: '13' },
        { value: 14, label: '14' },
        { value: 15, label: '15' },
        { value: 16, label: '16' },
        { value: 17, label: '17' },
        { value: 18, label: '18' },
        { value: 19, label: '19' }
      ],
      comboValue1: '',
      comboValue2: [1,2],
      comboValue3: true,
      searchOptions: [],
      searchValue: { label: 'x', value: 'x'}
    }
  },
  methods: {
    onDropdownItemClick: function () {
      window.mussel.hideDropdown()
    },
    onCombo1Change: function (value) {
      console.log(value)
      this.comboValue2 = null
      this.comboOptions = value
        ?  [
          { value: 1, label: '1_' + value },
          { value: 2, label: '2_' + value },
          { value: 3, label: '3_' + value },
          { value: 4, label: '4_' + value },
          { value: 5, label: '5_' + value }
        ]
        : null
    },
    onOptionClick: function (value, option) {
      console.log(value);
    },
    onSearch: function (value) {
      console.log(new Date(), value)
    },
    onSearchQuery: function (value) {
      const arr = []
      for (let i = 0; i < 10; i++) {
        arr[i] = value + '_option_' + i // { value: i, label: value + '_option_' + i }
      }
      this.searchOptions = arr
    },
    onSearchResult: function (value) {
      console.log(value)
    }
  }
})
Editor.parameters = {
  notes: { DateEditorMD,PopupEditorMD },
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