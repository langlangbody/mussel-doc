const temp =  /* html */`
<mu-v-box>
  <h2>Dropdown Example</h2>
  <hr>
  <mu-flex-item size="100%">
    <h3>Trigger action</h3>
    <mu-bar style="height: 40px; background: rgba(155, 147, 147, 0.05)">
      <mu-dropdown popup-width="auto" popup-class="x-pop">
        <mu-button>
          Hover Me
          <mu-icon trigger-type="dropdown"></mu-icon>
        </mu-button>
        <template #dropdown>
          <mu-list-item label='Item 1' disabled></mu-list-item>
          <mu-list-item label='Item 2'></mu-list-item>
          <mu-list-item label='Item 3'></mu-list-item>
        </template>
      </mu-dropdown>
      <mu-dropdown popup-style="dropdown-menu" trigger-action="click" >
        <mu-button-group>
          <mu-button button-type="primary">Click Arrow</mu-button>
          <mu-button button-type="primary" trigger-type="dropdown" dropdown-trigger></mu-button>
        </mu-button-group>
        <template #dropdown>
          <mu-dropdown-item>Item 1</mu-dropdown-item>
          <mu-dropdown-item>Item 2</mu-dropdown-item>
          <mu-list-divider></mu-list-divider>
          <mu-dropdown-item>Item 3</mu-dropdown-item>
        </template>
      </mu-dropdown>
    </mu-bar>
    <h3>Dropdown Button</h3>
    <mu-dropdown-button caption="Dropdown Button" button-shape="round">
      <template #dropdown>
        <mu-dropdown-item>Item 1</mu-dropdown-item>
        <mu-dropdown-item selected>Item 2</mu-dropdown-item>
        <mu-list-divider></mu-list-divider>
        <mu-dropdown-item>Item 3</mu-dropdown-item>
      </template>
    </mu-dropdown-button>
    <mu-dropdown-button caption="Split Button" split-button button-type="danger">
      <template #dropdown>
        <mu-dropdown-item>Item 1 <span class="mu-badge" badge-type="danger">10+</span></mu-dropdown-item>
        <mu-dropdown-item selected>Item 2 <span class="mu-badge" badge-type="danger">10+</span></mu-dropdown-item>
        <mu-list-divider></mu-list-divider>
        <mu-dropdown-item>Item 3</mu-dropdown-item>
      </template>
    </mu-dropdown-button>
    <mu-dropdown-button caption="I am disabled" disabled>
      <template #dropdown>
        <mu-dropdown-item>Item 1</mu-dropdown-item>
        <mu-dropdown-item selected>Item 2</mu-dropdown-item>
        <mu-list-divider></mu-list-divider>
        <mu-dropdown-item>Item 3</mu-dropdown-item>
      </template>
    </mu-dropdown-button>
  </mu-flex-item>
</mu-v-box>
`

export default temp