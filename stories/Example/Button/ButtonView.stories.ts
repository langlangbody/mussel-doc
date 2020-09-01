import {
  Category
} from '@/storiesHierarchy.js'

import { ARGTYPES } from "./argTypes";


export default {
  title: Category.button,
  parameters: {
    docs: {
      title:'shu',
      description: { component: '按钮' }
    }
  }
};


const Template = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  template: /* html */`
    <mu-button :active="active" :buttonStyle = "buttonStyle" :buttonShape="buttonShape" :buttonType="buttonType" >
        {{label}}
    </mu-button>
`,
});

// 默认样式
export const primary = Template.bind({});

primary.parameters = {
  preview: { disable: true },
  docs: { disable: true }
}

primary.argTypes = ARGTYPES

primary.args = {
  buttonType: 'primary',
  label: '按钮',
};

primary.storyName = '2.按钮预览'