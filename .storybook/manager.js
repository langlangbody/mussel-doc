import { addons } from '@storybook/addons';
import theme from './Theme'

addons.setConfig({
  theme: theme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  isToolshown: true,
  showRoots: false,
  // previewTabs: {
  //   'docs': { title: 'Annotations'},
  // }
});