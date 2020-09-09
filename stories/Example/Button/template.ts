const temp = /* html */ `
<mu-v-box>
  <h2>Button Example</h2>
  <mu-flex-item size="100%">
    <h3>Type & Style</h3>
    <hr />
    <h5>Normal (button-type="normal")</h5>
    <mu-form-row>
      <mu-button button-type="normal">NORMAL</mu-button>
      <mu-button button-type="normal" button-style="text">TEXT</mu-button>
      <mu-button button-type="normal" button-style="outline">OUTLINE</mu-button>
      <mu-button button-type="normal" active>ACTIVE</mu-button>
      <mu-button button-type="normal" disabled>DISABLED</mu-button>
      <mu-button button-type="normal" button-style="link">LINK</mu-button>
      <mu-button button-type="normal" button-style="link" disabled>DISABLED LINK</mu-button>
    </mu-form-row>
  </mu-flex-item>
  <mu-flex-item size="100%">
    <h5>Primary (button-type="primary")</h5>
    <mu-form-row>
      <mu-button button-type="primary" gradient>PRIMARY</mu-button>
      <mu-button button-type="primary" button-style="text">TEXT</mu-button>
      <mu-button button-type="primary" button-style="outline">OUTLINE</mu-button>
      <mu-button button-type="primary" active>ACTIVE</mu-button>
      <mu-button button-type="primary" disabled>DISABLED</mu-button>
      <mu-button button-type="primary" button-style="link">LINK</mu-button>
      <mu-button button-type="primary" button-style="link" disabled>DISABLED LINK</mu-button>
    </mu-form-row>
  </mu-flex-item>
  <mu-flex-item size="100%">
    <h5>Submit (button-type="submit")</h5>
    <mu-form-row>
      <mu-button button-type="submit">SUBMIT</mu-button>
      <mu-button button-type="submit" button-style="text">TEXT</mu-button>
      <mu-button button-type="submit" button-style="outline">OUTLINE</mu-button>
      <mu-button button-type="submit" active>ACTIVE</mu-button>
      <mu-button button-type="submit" disabled>DISABLED</mu-button>
      <mu-button button-type="submit" button-style="link">LINK</mu-button>
      <mu-button button-type="submit" button-style="link" disabled>DISABLED LINK</mu-button>
    </mu-form-row>
  </mu-flex-item>
  <mu-flex-item size="100%">
    <h5>Danger (button-type="danger")</h5>
    <mu-form-row>
      <mu-button button-type="danger">DANGER</mu-button>
      <mu-button button-type="danger" button-style="text">TEXT</mu-button>
      <mu-button button-type="danger" button-style="outline">OUTLINE</mu-button>
      <mu-button button-type="danger" active>ACTIVE</mu-button>
      <mu-button button-type="danger" disabled>DISABLED</mu-button>
      <mu-button button-type="danger" button-style="link">LINK</mu-button>
      <mu-button button-type="danger" button-style="link" disabled>DISABLED LINK</mu-button>
    </mu-form-row>
  </mu-flex-item>
  <mu-flex-item>
    <h3>Round Shape</h3>
    <mu-button button-type="primary" button-shape="round">PRIMARY</mu-button>
    <mu-icon-button button-type="danger" button-shape="round" icon="close"></mu-icon-button>
  </mu-flex-item>
  <mu-flex-item>
    <h3>Icon & Content</h3>
    <mu-button button-type="primary">Text Only</mu-button>
    <mu-button button-type="submit">
      Text Left
      <mu-icon icon="key-down"></mu-icon>
    </mu-button>
    <mu-button button-type="danger">
      <mu-icon icon="key-left"></mu-icon>
      Text Right
    </mu-button>
    <h5>More Icons</h5>
    <mu-icon-button title="Icon Only" button-type="primary" icon="calendar"></mu-icon-button>
    <mu-icon-button title="Icon Only" button-type="submit" icon="search"></mu-icon-button>
    <mu-icon-button title="Icon Only" button-shape="round" icon="key-up"></mu-icon-button>
    <mu-icon-button title="Icon Only" button-shape="round" icon="key-down"></mu-icon-button>
    <h5>With Badges</h5>
    <mu-button>Normal Badge <span class="mu-badge">99+</span></mu-button>
    <mu-button>Primary Badge <span class="mu-badge" badge-type="primary">999+</span></mu-button>
    <mu-button>Success Badge <span class="mu-badge" badge-type="success">9+</span></mu-button>
    <mu-button>Warning Badge <span class="mu-badge" badge-type="warning">5</span></mu-button>
    <mu-button>Danger Badge <span class="mu-badge" badge-type="danger">1</span></mu-button>
  </mu-flex-item>
  <mu-flex-item>
    <h3>Button Group</h3>
    <hr />
    <h5>Simple</h5>
    <mu-button-group>
      <mu-button>Button 1</mu-button>
      <mu-button>Button 2</mu-button>
      <mu-button>Button 3</mu-button>
    </mu-button-group>
    <h5>Primary Type</h5>
    <mu-button-group>
      <mu-button button-type="primary">Button 1</mu-button>
      <mu-button button-type="primary">Button 2</mu-button>
      <mu-button button-type="primary">Button 3</mu-button>
    </mu-button-group>
    <h5>Round Shape</h5>
    <mu-button-group button-shape="round">
      <mu-button button-type="primary" button-style="outline">Button 1</mu-button>
      <mu-button button-type="primary" button-style="outline">Button 2</mu-button>
      <mu-button button-type="primary" button-style="outline">Button 3</mu-button>
    </mu-button-group>
    <h5>Split Button</h5>
    <mu-button-group>
      <mu-button button-type="primary">Split Button</mu-button>
      <mu-button button-type="primary" icon-only>
        <mu-icon icon="key-down"></mu-icon>
      </mu-button>
    </mu-button-group>
    <mu-split-button>Real Split Button</mu-split-button>
  </mu-flex-item>
</mu-v-box>
`


export default temp