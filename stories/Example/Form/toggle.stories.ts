import {
  Category
} from '@/storiesHierarchy.js'

import ToggleMD from '@docs/form/toggle.md';

export default {
  title: Category.from
};

const Temp = /* html */ `
<mu-v-box>
  <h2>Toggle Example</h2>
  <hr>
  <div>
    <h3>Simple</h3>
    <mu-toggle v-model="toggleValue" label="Toggle Setting"></mu-toggle>
  </div>
  <div>
    <h3>Inactive Value & Active Value</h3>
    <mu-toggle v-model="toggleValue" label="Disable setting" active-label="Enable setting"></mu-toggle>
  </div>
  <div>
    <h3>Disabled</h3>
    <mu-toggle v-model="toggleValue" label="Toggle Setting" disabled></mu-toggle>
  </div>
</mu-v-box>
`

export const Toggle = () => ({
  template: Temp,
  data() {
    return { 
      toggleValue: false
     }
  }
})

Toggle.parameters = {
  notes: { ToggleMD },
  controls: { disable: true },
  docs: { disable: true },
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