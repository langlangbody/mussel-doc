const temp =  /* html */`
<mu-v-box>
  <h2>Form Layout Example - Flow Layout</h2>
  <hr>
  <div>
    <h3>Form</h3>
    <mu-v-box bordered content-spacing>
      <mu-form bordered>
        <mu-form-field label="Feild1">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-form-field label="Feild2" size="50%">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-space></mu-space>
        <mu-form-field label="Feild3" size="25%">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-form-field label="Feild4" size="25%">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-space></mu-space>
        <mu-form-field label="Feild5" size="25%">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-space size="25%"></mu-space>
        <mu-form-field label="Feild6" size="50%">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-space></mu-space>
        <mu-form-field label="Feild7" size="50%">
          <textarea class="mu-input"></textarea>
        </mu-form-field>
        <mu-form-field label="Feild8">
          <mu-input></mu-input>
        </mu-form-field>
      </mu-form>
      <mu-bar>
        <mu-combo-box editable :options="['option 1','option 2','option 3']" :clearable="false" value="option 1"></mu-combo-box>
        <mu-space></mu-space>
        <mu-button button-type="submit">Submit</mu-button>
        <mu-button button-type="normal">Cancel</mu-button>
      </mu-bar>
    </mu-v-box>
  </div>
</mu-v-box>

`
export default temp