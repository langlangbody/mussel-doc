import { Category } from '@/storiesHierarchy.js'

import Bar from '@docs/navigation/tabs.md'

import { confirm } from '@mctech/mussel'

import Temp from './template'

export default {
  title: Category.tabs
  // Our exports that end in "Data" are not stories.
}
export const Default = () => ({
  template: Temp,
  data () {
    return {
      pos: 'top',
      style: 'card',
      activeTabName: 'javascript',
      activeTabHeaderName: 'tab1',
      tabItems: [
        {
          name: 'tab0',
          label: 'javascript'
        },
        {
          name: 'tab1',
          label: 'nginx & lua',
          disabled: true
        },
        {
          name: 'tab2',
          label: 'flutter & dart'
        }
      ]
    }
  },
  methods: {
    onTabChange (tabName) {
      confirm('switch tab ?', function (btn) {
        if (btn === 'ok') this.activeTabName = tabName
      })
    },
    onTabActivated (tabName) {
      console.log(tabName, 'activated')
    },
    onTabDeactivated (tabName) {
      console.log(tabName, 'Deactivated')
    }
  }
})
Default.parameters = {
  notes: { Bar },
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
