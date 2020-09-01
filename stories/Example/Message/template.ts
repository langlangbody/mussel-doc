const temp =  /* html */`
<mu-v-box size="1">
  <h2>Message</h2>
  <hr>
  <div>
    <h3>Message Box</h3>
    <mu-button button-type="normal" @click="showAlert">Alert</mu-button>
    <mu-button button-type="primary" @click="showConfirm">Confirm</mu-button>
    <mu-button button-type="danger" button-style="outline" @click="showWarn">Warn</mu-button>
    <mu-button button-type="danger" @click="showError">Error</mu-button>
    <mu-button button-type="primary" button-style="outline" @click="showCustomMessage">Custom Message</mu-button>
  </div>
  <div>
    <h3>Notification</h3>
    <mu-button button-type="normal" @click="notify('info', 'A monster is coming !')">Info</mu-button>
    <mu-button button-type="submit" @click="notify('success', 'A monster is coming !')">Success</mu-button>
    <mu-button button-type="danger" button-style="outline" @click="notify('warning', 'A monster is coming !')">Warning</mu-button>
    <mu-button button-type="danger" @click="notify('error', 'A monster is coming !')">Error</mu-button>
  </div>
</mu-v-box>
`

export default temp