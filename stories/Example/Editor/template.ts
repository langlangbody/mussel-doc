const temp =  /* html */`
<mu-flex-item>
  <h2>Editor & Combo Box</h2>
  <div>
    <h3>With Button</h3>
    <h5>Default Icon</h5>
    <mu-button-editor placeholder="input something" v-model="iconInput1Value"></mu-button-editor>
    <mu-button-editor placeholder="input something" icon-position="left" autofocus>
    </mu-button-editor>
    <h5>Hide Clear Button</h5>
    <mu-button-editor :clearable="false" icon-position="left" value="text value">
    </mu-button-editor>
    <mu-button-editor :clearable="false" value="text value">
    </mu-button-editor>
    <h5>Round Shape</h5>
    <mu-button-editor icon="expand-all" input-shape="round" icon-position="left">
    </mu-button-editor>
    <mu-button-editor icon="collapse-all" input-shape="round">
    </mu-button-editor>
    <h5>Readonly & Disabled & Invalid</h5>
    <mu-button-editor icon="search" :editable="false" placeholder="uneditable">
    </mu-button-editor>
    <mu-button-editor readonly placeholder="readonly">
    </mu-button-editor>
    <mu-button-editor disabled placeholder="disabled">
    </mu-button-editor>
    <mu-button-editor invalid placeholder="invalid">
    </mu-button-editor>
    <h3>Date Editor</h3>
    <mu-date-editor></mu-date-editor>
  </div>
  <br>
  <div>
    <h3>Popup Editor</h3>
    <h5>Custom Popup</h5>
    <mu-popup-editor :editable="false" value="xxx" popup-render-to-body>
      <div style="height: 200px; background: orange;"></div>
    </mu-popup-editor>
    <h5>Combo Box</h5>
    <mu-combo-box v-model="comboValue1" @change="onCombo1Change" placeholder="xxx">
      <mu-option value='tom' icon="calendar"></mu-option>
      <mu-option value='jack'></mu-option>
      <mu-option value='shawn'></mu-option>
      <mu-list-divider></mu-list-divider>
      <mu-option value='biff'></mu-option>
      <mu-option value='floopy'></mu-option>
    </mu-combo-box>
    <mu-combo-box v-model="comboValue2" multiple :options="comboOptions" @optionclick="onOptionClick">
    </mu-combo-box>
    <mu-combo-box v-model="comboValue3">
      <mu-option :value='true' label="true"></mu-option>
      <mu-option :value='false' label="false"></mu-option>
    </mu-combo-box>
    <h5>Search Combo Box</h5>
    <mu-search-box placeholder="input only" @search="onSearch" >
    </mu-search-box>
    <mu-search-box
      v-model="searchValue"
      value-mode="select"
      placeholder="input & select"
      :options="searchOptions"
      @search="onSearchQuery"
      @change="onSearchResult">
    </mu-search-box>
  </div>
</mu-flex-item>

`
export default temp