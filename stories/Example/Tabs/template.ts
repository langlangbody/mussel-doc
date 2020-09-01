const temp =  /* html */`
<mu-flex-item>
  <h2>Tabs Example</h2>
  <hr>
  <div>
    <h3>Tabs</h3>
    <mu-button-group>
      <mu-button :active="pos === 'top'" @click="pos = 'top'">top</mu-button>
      <mu-button :active="pos === 'bottom'" @click="pos = 'bottom'">bottom</mu-button>
      <mu-button :active="pos === 'left'" @click="pos = 'left'">left</mu-button>
      <mu-button :active="pos === 'right'" @click="pos = 'right'">right</mu-button>
    </mu-button-group>
    <mu-button-group style="margin-left: 16px;">
      <mu-button :active="style === 'simple'" @click="style = 'simple'">simple style</mu-button>
      <mu-button :active="style === 'card'" @click="style = 'card'">card style</mu-button>
    </mu-button-group>
    <p>
    <div style="height: 300px; position: relative;">
      <mu-tabs
        class="mu-absolute-fit"
        model-control="external"
        :active-tab="activeTabName"
        :tab-position="pos"
        :tab-style="style"
        @change="onTabChange">
        <mu-tab-panel name="javascript" size="auto" @activated="onTabActivated" @deactivated="onTabDeactivated">
          javascript
        </mu-tab-panel>
        <mu-tab-panel name="nginx & lua" size="auto" @activated="onTabActivated" @deactivated="onTabDeactivated">
          nginx & lua
        </mu-tab-panel>
        <mu-tab-panel name="flutter & dart" size="auto" @activated="onTabActivated" @deactivated="onTabDeactivated">
          flutter & dart
        </mu-tab-panel>
      </mu-tabs>
    </div>
  </div>
  <br>
  <div>
    <h3>Tabs Header</h3>
    <h5>Card Style</h5>
    <mu-tabs-header :tab-items="tabItems" tab-style="card">
    </mu-tabs-header>
    <h5>Simple Style</h5>
    <mu-tabs-header :tab-items="tabItems" model-control="external" v-model="activeTabHeaderName">
    </mu-tabs-header>
    <h5>With Extra Buttons</h5>
    <mu-tabs-header :tab-items="tabItems">
      <template #header-prefix>
        <mu-button button-type="primary" button-style="text"  button-shape="round" style="margin-right: 16px;">
          prefix button
        </mu-button>
      </template>
      <template #header-suffix>
        <mu-space></mu-space>
        <mu-button button-type="primary" button-style="text" button-shape="round">
          suffix button
        </mu-button>
      </template>
    </mu-tabs-header>
  </div>
</mu-flex-item>

`
export default temp