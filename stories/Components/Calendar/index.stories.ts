import { ComponentsCategory } from '@/storiesHierarchy.js'
import { withKnobs, select } from '@storybook/addon-knobs'
import { creatObjFun } from '../../config/index'

export default {
  title: ComponentsCategory.calendar,
  decorators: [
    withKnobs,
    () => ({
      template: /* html */ `
      <mu-h-box justify-content="center" align-items="center">
        <github-href href="calendar" />
        <story/>
      </mu-h-box>
      `
    })
  ]
}

export const View = () => ({
  props: {
    language: {
      type: String,
      default: select('language', creatObjFun(['zh', 'en']), 'zh')
    }
  },
  template: /* html */ `
  <mu-flex-item size="100%">
  <mu-flex-item justify-content="center" style="width:100%">
    <mu-calendar
        :language="language"
        v-model="date"
        select-mode='date'
        :range-start="rangeStart"
        :range-end="rangeEnd"
        :marked-dates = "markedDates"
        style="height: 400px; width: 600px;"
      >
      </mu-calendar>
  </mu-flex-item>
    <mu-flex-item size="1" style="padding-top:3rem width:100%">
      <a href="/?path=/story/使用案例-calendar-日历--default">日历示例>>>></a>
    </mu-flex-item>
  </mu-flex-item>
    
`,
  data () {
    return {
      date: new Date(),
      rangeStart: new Date(2020, 8, 1),
      rangeEnd: new Date(2020, 11, 15),
      markedDates: [
        new Date(2019, 2, 3),
        new Date(2019, 3, 20),
        new Date(2019, 4, 10)
      ]
    }
  }
})

View.parameters = {
  preview: { disable: true },
  notes: { disable: true }
}
