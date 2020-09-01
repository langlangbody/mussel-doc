const temp =  /* html */`
<mu-v-box>
  <h2>Sidebar Menu Example</h2>
  <hr>
  <div>
    <h3>1 Level Menu</h3>
    <mu-sidebar-menu
      class="sidebar-menu"
      floatable
      collapsed
      collapsible
      collapse-button-position="top">
      <template #header>
        <div align-self="center" style="padding: 0 10px;">Welcome</div>
      </template>
      <mu-menu-item title="Menu Item 1" icon="calendar" active>
      </mu-menu-item>
      <mu-menu-item title="Menu Item 2" icon="ok">
      </mu-menu-item>
      <mu-menu-item title="Menu Item 2" icon="clear">
      </mu-menu-item>
    </mu-sidebar-menu>
  </div>
  <div>
    <h3>2 Levels Menu</h3>
    <mu-sidebar-menu
      class="sidebar-menu"
      accordion
      floatable
      collapsed
      collapsible>
      <mu-menu-group title="Menu Group 1" icon="search">
        <mu-menu-item title="Menu Item 1">
        </mu-menu-item>
        <mu-menu-item title="Menu Item 2" active>
        </mu-menu-item>
      </mu-menu-group>
      <mu-menu-item title="Menu Item 3">
      </mu-menu-item>
      <mu-menu-group title="Menu Group 2" icon="ok">
        <mu-menu-item title="Menu Item 4">
        </mu-menu-item>
        <mu-menu-item title="Menu Item 5">
        </mu-menu-item>
        <mu-menu-item title="Menu Item 6">
        </mu-menu-item>
      </mu-menu-group>
    </mu-sidebar-menu>
  </div>
  <div>
    <h3>3 Levels Menu</h3>
    <mu-sidebar-menu class="sidebar-menu">
      <mu-menu-group title="Menu Group 1" icon="search">
        <mu-menu-item title="Menu Item 1">
        </mu-menu-item>
        <mu-menu-group title="Menu Group 1-1">
          <mu-menu-item title="Menu Item 2">
          </mu-menu-item>
          <mu-menu-item title="Menu Item 3" active>
          </mu-menu-item>
          <mu-menu-item title="Menu Item 4">
          </mu-menu-item>
        </mu-menu-group>
        <mu-menu-item title="Menu Item 5">
        </mu-menu-item>
      </mu-menu-group>
      <mu-menu-item title="Menu Item 6">
      </mu-menu-item>
    </mu-sidebar-menu>
  </div>
</mu-v-box>

`

export default temp