import {
  Category
} from './storiesHierarchy.js'
export default {
  title: Category.button,
  argTypes: {
    label:'按钮',
    buttonShape: {
      name: 'button-shape',
      defaultValue: 'normal',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'select',
        default: 'normal',
        options: ['normal', 'round']
      }
    }
  },
};

const Template = () => ({
  template: /* html */`
    
`,
})

const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  template: /* html */`
    
`,
});

export const primary = Template.bind({});
primary.args = {
  'button-type': 'primary',
  label: 'normal',
};