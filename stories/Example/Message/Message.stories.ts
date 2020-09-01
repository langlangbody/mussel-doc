import {
  Category
} from '@/storiesHierarchy.js'

import MessageMD from '@docs/message/message-box.md';

import Temp from './template'

import { alert,confirm,warn,error,notify, showMessage } from 'mussel'

export default {
  title: Category.message,
  parameters: {
    docs: {
      description: { component: `模态对话框集，用于警告消息或需要确认。` }
    }
  }
};
export const Default = () => ({
  template: Temp,
  methods: {
    showAlert: function () {
      alert('I am iron man !')
    },
    showConfirm: function () {
      confirm('Are you spider man ?')
    },
    showWarn: function () {
      warn('Destroy thanos ?', function (btn) {
        console.log(btn)
      })
    },
    showError: function () {
      error('Mission Failed !')
    },
    showCustomMessage: function () {
      showMessage({
        title: 'My Message',
        message: 'Yes or no ?',
        buttons: ['yes', 'no'],
        danger: true,
        callback: function (btn) {
          if (btn === 'yes') console.log('"yes" button been pressed !')
        }
      })
    },
    notify: function (type, message) {
      notify(type, message, 5000, () => { console.log('hello') })
    }
  }
})
Default.parameters = {
  notes: { MessageMD },
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