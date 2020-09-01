const temp =  /* html */`
<mu-v-box>
  <h2>Form Layout Example - Column Layout</h2>
  <hr>
  <div>
    <h3>Form</h3>
    <mu-form direction="column" bordered>
      <mu-form-field label="Field1" invalid>
        <mu-input></mu-input>
      </mu-form-field>
      <mu-flex-item size="100%">
        <mu-form-field label="Field2" required>
          <mu-input></mu-input>
        </mu-form-field>
        <mu-form-field label="Field3">
          <mu-input></mu-input>
        </mu-form-field>
      </mu-flex-item>
      <mu-flex-item size="100%">
        <mu-form-field label="Field4">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-form-field label="Field5">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-form-field label="Field6">
          <mu-button-editor></mu-button-editor>
        </mu-form-field>
      </mu-flex-item>
      <mu-flex-item size="100%">
        <mu-form-field label="Field7" size="50%">
          <mu-date-editor></mu-date-editor>
        </mu-form-field>
        <mu-form-field label="Field8" size="25%">
          <mu-input></mu-input>
        </mu-form-field>
        <mu-form-field label="Field9" size="25%">
          <mu-button-editor></mu-button-editor>
        </mu-form-field>
      </mu-flex-item>
      <mu-form-field label="Field10">
        <textarea class="mu-input"></textarea>
      </mu-form-field>
      <mu-flex-item size="100%">
        <mu-form-field label="Field11">
          <textarea class="mu-input"></textarea>
        </mu-form-field>
        <mu-form-field label="Field12">
          <mu-input></mu-input>
        </mu-form-field>
      </mu-flex-item>
    </mu-form>
  </div>
</mu-v-box>

`
export default temp