const temp =  /* html */`
<mu-v-box>
  <h2>Drawer</h2>
  <hr>
  <div>
    <h3>Drawer with Mask</h3>
    <div>
      <mu-button @click="openDrawer1">At Top</mu-button>
      <mu-button @click="openDrawer2">At Bottom</mu-button>
      <mu-button @click="openDrawer3">At Left</mu-button>
      <mu-button @click="openDrawer4">At Right</mu-button>
    </div>
    <mu-drawer v-model="draw1Visible" drawer-class="drawer1-5" position="top" width="50%">
      <mu-form label-width="60px">
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
    </mu-drawer>
    <mu-drawer v-model="draw2Visible" drawer-class="drawer2-6" position="bottom" margin="0 50px">
    </mu-drawer>
    <mu-drawer v-model="draw3Visible" drawer-class="drawer3-7" position="left">
    </mu-drawer>
    <mu-drawer v-model="draw4Visible" drawer-class="drawer4-8" position="right">
    </mu-drawer>
  </div>
  <div>
    <h3>Drawer without Mask</h3>
    <div>
      <mu-button @click="openDrawer5">At Top</mu-button>
      <mu-button @click="openDrawer6">At Bottom</mu-button>
      <mu-button @click="openDrawer7">At Left</mu-button>
      <mu-button @click="openDrawer8">At Right</mu-button>
    </div>
    <mu-drawer mask="none" v-model="draw5Visible" position="top" slot-wrapper="none">
      <div class="mu-drawer drawer1-5" content-spacing>
        <mu-button @click="showMessage">Show Message</mu-button>
      </div>
    </mu-drawer>
    <mu-drawer mask="none" v-model="draw6Visible" position="bottom" slot-wrapper="none">
      <div class="mu-drawer drawer2-6"></div>
    </mu-drawer>
    <mu-drawer mask="none" v-model="draw7Visible" position="left" slot-wrapper="none">
      <div class="mu-drawer drawer3-7"></div>
    </mu-drawer>
    <mu-drawer mask="none" v-model="draw8Visible" position="right" slot-wrapper="none">
      <div class="mu-drawer drawer4-8"></div>
    </mu-drawer>
  </div>
</mu-v-box>
`

export default temp