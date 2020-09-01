const temp =  /* html */`
<mu-v-box>
  <h2>Form Layout Example - Custom Flex</h2>
  <hr>
  <div>
    <h3>Form</h3>
    <mu-v-box bordered>
      <mu-flex-item cellpadding size="100%">
        <mu-close-button class="window-close-button"></mu-close-button>
        <mu-v-box size="100%">
          <mu-input cellspacing placeholder="Formula Name"></mu-input>
          <textarea class="mu-input" cellspacing placeholder="Description"></textarea>
        </mu-v-box>
        <mu-flex-item size="auto">
          <textarea class="mu-input" size="auto" cellspacing placeholder="Content"></textarea>
        </mu-flex-item>
        <mu-v-box>
          <mu-combo-box cellspacing placeholder="Decimals"></mu-combo-box>
        </mu-v-box>
      </mu-flex-item>
      <mu-list-divider></mu-list-divider>
      <mu-flex-item cellpadding size="100%">
        <mu-v-box>
          <mu-input cellspacing placeholder="Formula Name"></mu-input>
          <textarea class="mu-input" cellspacing placeholder="Description"></textarea>
        </mu-v-box>
        <mu-flex-item size="auto">
          <textarea class="mu-input" size="auto" cellspacing placeholder="Content"></textarea>
        </mu-flex-item>
        <mu-v-box>
          <mu-v-box size="auto" flex-center>
            <h1>Result</h1>
            100
          </mu-v-box>
          <mu-combo-box cellspacing placeholder="Decimals"></mu-combo-box>
        </mu-v-box>
      </mu-flex-item>
    </mu-v-box>
  </div>
</mu-v-box>

`
export default temp