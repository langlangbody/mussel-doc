import Vue from 'vue'
import { install } from '@mctech/mussel'

import GithubHref from './hearder.vue'
import Popper from '../src/components/poptip/index.vue';

install(Vue)

Vue.component('github-href', GithubHref)
Vue.component('popper', Popper)
export const parameters = {
  // controls: { expanded: true },
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  options: {
    storySort: {
      method: '', //alphabetical 字母排序 order自定义
      order: [
        '开发指南',
        '使用案例',
        ['Buttons 按钮', 'Icon 图标', 'Layout 布局'],
        '组件',
        ['Buttons 按钮', 'Icon 图标', 'Layout 布局']
      ], // ['Intro', 'Components']
      locales: ''
    }
  }
}

import 'loki/configure-vue'
