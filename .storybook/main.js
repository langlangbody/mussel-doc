const path = require('path')
module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|ts)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-links',
    'storybook-addon-preview',
    '@storybook/addon-options',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: true,
        actions: false,
        controls: false,
        docs: true,
        viewport: true,
        toolbars: false
      }
    }
  ],
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@docs': path.join(__dirname, '../docs'),
        '@src': path.join(__dirname, '../src'),
        '@': path.join(__dirname, '../stories')
      }
    }
    return config
  }
}
