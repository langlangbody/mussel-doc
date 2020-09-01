const temp =  /* html */`
<mu-v-box>
  <h2>Modal & Window</h2>
  <hr>
  <div>
    <h3>Modal Mask</h3>
    <div>
      <mu-button button-type="primary" @click="openModal1">Open Modal Mask 1</mu-button>
    </div>
    <mu-modal
      mask-action="close"
      class="mu-flex-box"
      flex-center
      v-model="model1Visible">
      Click mask or press 'ESC' to hide mask
    </mu-modal>
    <br>
    <div>
      <mu-button button-type="primary" @click="openModal2">Open Modal Mask 2</mu-button>
    </div>
    <mu-modal mask-action="none" class="mu-flex-box" flex-center v-model="model2Visible">
      刷新吧！关不了
    </mu-modal>
  </div>
  <div>
    <h3>Window</h3>
    <div>
      <mu-button button-type="primary" @click="openDialog1">Open Window 1</mu-button>
    </div>
    <br>
    <div>
      <mu-button button-type="primary" @click="openDialog2">Open Window 2</mu-button>
    </div>
    <mu-dialog
      :visible="dialog1Visible"
      model-control="external"
      keep-alive
      width="400px"
      height="300px"
      :draggable="true"
      title="I am a superhero"
      primary-button="Confirm"
      :buttons="['Confirm', 'Cancel']"
      @change="onDialog1VisibleChange"
      @buttonclick="onButtonClick">
      <h1>hey, dude</h1>
      <template #header>
        <mu-editor style="width: 150px;"></mu-editor>
      </template>
      <template #footer>
        <input type="checkbox">
        check me if you can
      </template>
    </mu-dialog>
  </div>
</mu-v-box>
`

export default temp