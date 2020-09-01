const temp =  /* html */`
<mu-v-box>
  <h2>Exapnder Example</h2>
  <hr>
  <div>
    <h3>Default Header</h3>
    <mu-expander class="mu-bordered" style="width: 300px;" title="click to expand">
      <mu-list-item>Javascript</mu-list-item>
      <mu-list-item>Nginx & Lua</mu-list-item>
      <mu-list-item>Flutter & Dart</mu-list-item>
    </mu-expander>
  </div>
  <div>
    <h3>Customized Header</h3>
    <mu-expander class="mu-bordered" style="width: 300px;">
      <template #header>
        <div class="mu-expander-header">
          Click here has no effect
          <mu-icon
            trigger-type="expander"
            style="margin-left: 8px;"
            expand-trigger>
          </mu-icon>
        </div>
      </template>
      <mu-list-item>Javascript</mu-list-item>
      <mu-list-item>Nginx & Lua</mu-list-item>
      <mu-list-item>Flutter & Dart</mu-list-item>
    </mu-expander>
  </div>
</mu-v-box>
`

export default temp