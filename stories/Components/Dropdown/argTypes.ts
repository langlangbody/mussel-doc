export const ARGTYPES = {
  label:'按钮',
  active: {
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  disabled: {
    defaultValue: false,
    control: {
      type: 'boolean'
    }
  },
  buttonStyle: {
    name: 'button-style',
    defaultValue: 'normal',
    control: {
      type: 'select',
      default: 'normal',
      options: ['normal', 'outline', 'text', 'link']
    }
  },
  buttonShape: {
    name: 'button-shape',
    defaultValue: 'normal',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Hello' },
    },
    control: {
      type: 'select',
      default: 'normal',
      options: ['normal', 'round']
    }
  },
  buttonType: {
    name: 'button-type',
    defaultValue: 'primary',
    control: {
      type: 'select',
      default: 'normal',
      options: ['normal', 'primary', 'submit', 'danger']
    }
  }
}