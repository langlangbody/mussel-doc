import Vue from 'vue';
import { BaseDialog } from 'mussel'

import {
  Category
} from '@/storiesHierarchy.js'

import ModalMD from '@docs/modal/modal.md';

import Temp from './template'


const dialog2 = new Vue({
  extends: BaseDialog,
  title: 'Hello',
  width: '50%',
  height: '35%',
  danger: true,
  keepAlive: true,
  maskAction: 'none',
  primaryButton: 'Confirm',
  buttons: [
    'Confirm',
    {
      caption: 'Cancel',
      action: 'close'
    }
  ],
  template: '<mu-dialog-wrapper>Winer winer，chicken dinner</mu-dialog-wrapper>'
})


export default {
  title: Category.modals,
  parameters: {
    docs: {
      description: { component: `模态对话框集，用于警告消息或需要确认。` }
    }
  }
};
export const Default = () => ({
  template: Temp,
  data () {
    return {
      model1Visible: false,
      model2Visible: false,
      dialog1Visible: false,
      options: [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' }
      ]
    }
  },
  methods: {
    openModal1: function () {
      this.model1Visible = true
    },
    openModal2: function () {
      this.model2Visible = true
    },
    openDialog1: function () {
      this.dialog1Visible = true
    },
    openDialog2: function () {
      dialog2.show()
    },
    onButtonClick: function (btn, win) {
      win.hide()
    },
    onDialog1VisibleChange: function (v, btn) {
      this.dialog1Visible = v
      console.log(btn)
    }
  }
})
Default.parameters = {
  notes: { ModalMD },
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