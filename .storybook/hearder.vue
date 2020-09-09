<template>
  <a
    :href="link"
    class="github-corner"
    target="_blank"
    aria-label="View source on Github"
  >
    </> Source
  </a>
</template>

<script>

const baseUrl = 'https://github.com/cheap-pets/mussel/tree/master/'

const paths = {
  button: 'src/components/button/button.jsx',
  bar: 'src/components/bar/paging-bar.vue',
  calendar: 'src/components/calendar/calendar.vue',
  drawer: 'src/components/drawer/drawer.vue',
  dropdown: 'src/components/dropdown/dropdown.vue',
  expander: 'src/components/expander/expander.vue',
  checkbox: 'src/components/form/checkbox.vue',
  combo: 'src/components/form/combo-box.vue',
  input: 'src/components/form/input.vue',
  radio: 'src/components/form/radio-box.vue',
  search: 'src/components/form/search-box.vue',
  toggle: 'src/components/form/toggle.vue',
  icon: 'src/components/icon/index.vue',
  dialog: 'src/components/layer/base-dialog.vue',
  modal: 'src/components/layer/base-modal.vue',
  menu: 'src/components/menu/menu-group.vue',
  message: 'src/components/message/message-box.vue',
  notifier: 'src/components/message/notifier.vue',
  prompt: 'src/components/message/prompt-panel.vue',
  sidebar: 'src/components/sidebar/sidebar.vue',
  tabs: 'src/components/tabs/tabs.vue'
}

const links = (name) => `${baseUrl}${paths[name]}`

export default {
  props: ['href'],
  computed:{
    link(){
      return links(this.href)
    }
  }
}
</script>

<style>
.github-corner {
  height:32px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  padding: 0 8px;
  background-color: #008cd6;
  border-bottom: 0;
  position: fixed;
  right: 0;
  text-decoration: none;
  top: 0;
  z-index: 1;
}
</style>
