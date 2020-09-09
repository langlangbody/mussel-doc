import {
  ComponentsCategory
} from '@/storiesHierarchy.js'

import { ARGTYPES } from "./argTypes";


export default {
  title: ComponentsCategory.tabs
};


export const View = (args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  template: /* html */`
    <mu-button :active="active" :buttonStyle = "buttonStyle" :buttonShape="buttonShape" :buttonType="buttonType" >
        {{label}}
    </mu-button>
`
});

View.parameters = {
  preview: { disable: true },
  notes: { disable: true}
}

View.argTypes = ARGTYPES

View.args = {
  buttonType: 'primary',
  label: '按钮'
};