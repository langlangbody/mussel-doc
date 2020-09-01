
import Vue from '@mctech/mussel'
import {
  install
} from '@mctech/mussel'

install(Vue)

export const parameters = {
  // controls: { expanded: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: '', //alphabetical 字母排序 order自定义
      order: ['开发指南','使用案例',['Buttons 按钮','Icon 图标','Layout 布局'],'组件'], // ['Intro', 'Components']
      locales: '',
    },
  }
}