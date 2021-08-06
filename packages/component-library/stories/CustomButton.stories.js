import React from 'react';
import CustomButton from '@doggo-memory-game/web-components/dist/collection/components/custom-button/custom-button'


export default {
  title: 'Custom/Button',
  component: CustomButton,
 
  argTypes: {
    text: { type: 'text', 
      description: 'The text which is shown as label',
      defaultValue: 'Click me',
    },
    type: {
      control: { type: 'select', options: ['primary', 'round']},
    },
    disabled: {
      type: 'boolean',
      description: 'If true, the button is displayed as disabled',
      defaultValue: { summary: false },
    },
    displayLoadingSpinner: {
      type: 'boolean',
      description: 'If true, the button displays a spinner when clicked',
      defaultValue: { summary: false },
    },
  },
};

const defaultArgs = {
  disabled: false,
  text: 'Click',
  type: 'round',
  displayLoadingSpinner: false
};

const Template = args => {
  return <custom-button 
  disabled={args.disabled} 
  button-type={args.type} 
  display-loading-spinner={args.displayLoadingSpinner}
  dangerouslySetInnerHTML={{ __html:args.text}}/>;
};

export const Button = Template.bind({});
Button.args = { ...defaultArgs };