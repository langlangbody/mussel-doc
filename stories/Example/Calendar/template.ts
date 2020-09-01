const temp =  /* html */`
<mu-v-box>
  <h2>Calendar Example</h2>
  <hr>
  <h3>Calendar Panel</h3>
  <mu-calendar
    language="en"
    v-model="date1"
    select-mode='date'
    :range-start="rangeStart"
    :range-end="rangeEnd"
    :marked-dates = "markedDates"
    style="height: 400px; width: 600px;"
  >
  </mu-calendar>
  <h3>Date Editor</h3>
  <mu-date-editor v-model="date2"></mu-date-editor>
  <mu-date-editor v-model="date2" select-mode="month"></mu-date-editor>
  <h3>Date Range Editor</h3>
  <mu-date-range-editor
    style="width: 280px;"
    format="yyyy年MM月dd"
    placeholder="choose date range"
    :start-date.sync="startDate"
    :end-date.sync="endDate"
  >
  </mu-date-range-editor>
  </div>
</mu-v-box>
`

export default temp