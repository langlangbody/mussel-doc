const temp =  /* html */`
<mu-flex-item>
  <h2>Input Box</h2>
  <hr>
  <div>
    <h3>Simple Style</h3>
    <h5>Normal</h5>
    <mu-input placeholder="input something" v-model="inputValue" @esckey="log('esc')" @enterkey="log(inputValue)"></mu-input>
    <h5>Readonly</h5>
    <mu-input value="i am readonly" readonly @esckey="log('esc')" @enterkey="log('enter')"></mu-input>
    <h5>Invalid</h5>
    <mu-input value="i am invalid" invalid @esckey="log('esc')" @enterkey="log('enter')" ></mu-input>
    <h5>Disabled</h5>
    <mu-input value="i am disabled" disabled @esckey="log('esc')" @enterkey="log('enter')"></mu-input>
  </div>
  <br>
  <div>
    <h3>With Icon & Clear Button</h3>
    <h5>Normal</h5>
    <mu-editor placeholder="input something" v-model="editorValue1" @blur="onBlur"></mu-editor>
    <h5>Hide clear button</h5>
    <mu-editor value="text value" :clearable="false"></mu-editor>
    <h5>Readonly</h5>
    <mu-editor value="i am readonly" readonly></mu-editor>
    <h5>Invalid</h5>
    <mu-editor value="i am invalid" invalid></mu-editor>
    <h5>Disabled</h5>
    <mu-editor value="i am disabled" disabled></mu-editor>
    <h5>Search Box Style</h5>
    <mu-editor input-shape="round" icon-position="left" icon="search" @enterkey="log('enter')"></mu-editor>
  </div>
</mu-flex-item>

`
export default temp