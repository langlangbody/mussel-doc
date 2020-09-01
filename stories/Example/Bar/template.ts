const temp =  /* html */`
<mu-flex-item>
  <h2>Bar Example</h2>
  <hr>
  <div>
    <h3>Simple</h3>
    <mu-v-box style="height: 500px;" content-spacing bordered>
      <mu-bar cellspacing>
        <mu-button button-type="primary">create</mu-button>
        <mu-button button-type="normal">modify</mu-button>
        <mu-toggle v-model="toggleValue" label="Enable This"></mu-toggle>
        <mu-space></mu-space>
        <mu-combo-box editable :options="[1,2,3]"></mu-combo-box>
      </mu-bar>
      <mu-v-box size="1">
        <div size="1" class="client-area" bordered></div>
        <mu-paging-bar :page-index="8000"></mu-paging-bar>
      </mu-v-box>
    </mu-v-box>
  </div>
</mu-flex-item>

`

export default temp