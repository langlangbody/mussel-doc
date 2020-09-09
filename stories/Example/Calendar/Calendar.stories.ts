import { Category } from '@/storiesHierarchy.js'

import CalendarMD from '@docs/others/calendar.md'

import Temp from './template'

export default {
  title: Category.calendar,
  parameters: {
    docs: {
      title: 'Category',
      description: { component: '日期面板，用于选择日期或显示事件' }
    }
  }
}
export const Default = () => ({
  template: Temp,
  data () {
    return {
      date1: '2019-7-2',
      date2: '2029-1-1',
      rangeStart: new Date(2019, 3, 5),
      rangeEnd: new Date(2019, 11, 15),
      startDate: new Date(2020, 2, 24),
      endDate: new Date(2020, 2, 28),
      markedDates: [
        new Date(2019, 2, 3),
        new Date(2019, 3, 20),
        new Date(2019, 4, 10)
      ]
    }
  }
})
Default.parameters = {
  notes: { CalendarMD },
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
