import {
  Category
} from '@/storiesHierarchy.js'

import Temp from './template'

import { alert } from "mussel";

import './index.css'

export default {
  title: Category.drawer
  // Our exports that end in "Data" are not stories.
};
export const Default = () => ({
  template: Temp,
  data() {
    return { 
        draw1Visible: false,
        draw2Visible: false,
        draw3Visible: false,
        draw4Visible: false,
        draw5Visible: false,
        draw6Visible: false,
        draw7Visible: false,
        draw8Visible: false
     }
  },
  methods: {
    openDrawer1() {
      this.draw1Visible = true
    },
    openDrawer2 () {
      this.draw2Visible = true
    },
    openDrawer3 () {
      this.draw3Visible = true
    },
    openDrawer4 () {
      this.draw4Visible = true
    },
    openDrawer5 () {
      this.draw5Visible = true
    },
    openDrawer6 () {
      this.draw6Visible = true
    },
    openDrawer7 () {
      this.draw7Visible = true
    },
    openDrawer8 () {
      this.draw8Visible = true
    },
    showMessage () {
      alert('i am groot')
    }
  }
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