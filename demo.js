module.exports = {
  addons: [{
    name: '@storybook/addon-essentials',
    //  https://github.com/storybookjs/storybook/blob/next/addons/essentials/src/index.ts
    // ['actions', 'docs', 'controls', 'backgrounds', 'viewport', 'toolbars']
    options: {
      // <addon-key>: false,
      // actions:false
    }
  }]
};


// () => ({
//   components: {
//     MyButton
//   },
//   template: '<my-button @click="log">with awesomeness: {{ $store.state.count }}</my-button>',
//   store: new Vuex.Store({
//     state: {
//       count: 0
//     },
//     mutations: {
//       increment(state) {
//         state.count += 1;
//         action('vuex state')(state);
//       },
//     },
//   }),
//   methods: {
//     log() {
//       this.$store.commit('increment');
//     },
//   },
// })