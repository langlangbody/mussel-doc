import { Category } from '@/storiesHierarchy.js'

import ToggleMD from '@docs/form/toggle.md'

export default {
  title: Category.from
}

const Temp = /* html */ `
<mu-v-box>
  <h2>Toggle, Radio Box & Checkbox</h2>
  <hr>
  <h3>Toggle</h3>
  <div>
    <h5>Simple</h3>
    <mu-toggle v-model="toggleValue" label="Toggle Setting"></mu-toggle>
  </div>
  <div>
    <h5>Inactive Value & Active Value</h3>
    <mu-toggle v-model="toggleValue" label="Disable setting" active-label="Enable setting"></mu-toggle>
  </div>
  <div>
    <h5>Disabled</h3>
    <mu-toggle v-model="toggleValue" label="Toggle Setting" disabled></mu-toggle>
  </div>
  <div>
    <h3>Radio Box</h3>
    <mu-radio v-model="radioValue" option="option-1"></mu-radio>
    <mu-radio v-model="radioValue" option="option-2"></mu-radio>
    <br>
    <mu-radio name="x" option="A">option A</mu-radio>
    <mu-radio name="x" option="B">option B</mu-radio>
    <mu-radio name="x" option="C">option C</mu-radio>
    <br>
    <mu-radio name="y" option="option-1" v-model="radioValue" disabled>option 1</mu-radio>
    <mu-radio name="y" option="option-2" v-model="radioValue" disabled>option 2</mu-radio>
  </div>
  <div>
    <h3>Radio Group</h3>
    <h5>Horizontal</h5>
    <mu-radio-group v-model="radioValue" item-width="100px">
      <mu-radio option="option-1">option 1</mu-radio>
      <mu-radio option="option-2">option 2</mu-radio>
    </mu-radio-group>
    <h5>Vertical</h5>
    <mu-radio-group v-model="radioValue" vertical>
      <mu-radio option="option-1">option 1</mu-radio>
      <mu-radio option="option-2">option 2</mu-radio>
    </mu-radio-group>
  </div>
  <div>
    <h3>Checkbox</h3>
    <h5>Horizontal</h5>
    <mu-checkbox v-model="check1">option 1</mu-checkbox>
    <mu-checkbox v-model="check2">option 2</mu-checkbox>
  </div>
  <div>
    <h3>Checkbox Group</h3>
    <h5>Horizontal</h5>
    <mu-checkbox-group v-model="checkedItems">
      <mu-checkbox option="check1">option 1</mu-checkbox>
      <mu-checkbox option="check2">option 2</mu-checkbox>
    </mu-checkbox-group>
    <h5>Vertical</h5>
    <mu-checkbox-group v-model="checkedItems" vertical>
      <mu-checkbox option="check1">option 1</mu-checkbox>
      <mu-checkbox option="check2">option 2</mu-checkbox>
    </mu-checkbox-group>
</mu-v-box>
`

export const Toggle = () => ({
  template: Temp,
  data () {
    return {
      toggleValue: false,
      radioValue: "option-1",
      check1: undefined,
      check2: true,
      checkedItems: []
    }
  }
})

Toggle.parameters = {
  notes: { ToggleMD },
  knobs: { disable: true },
  docs: { disable: true },
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
