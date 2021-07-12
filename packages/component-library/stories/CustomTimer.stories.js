import React from 'react';
import CustomTimer from '@doggo-memory-game/web-components/dist/collection/components/custom-timer/custom-timer'

export default {
  title: 'Custom/Timer',
  component: CustomTimer,
  argTypes: {
    content: { type: 'text', description: 'The logo or text', defaultValue: 'Memory Game' },
  },
  showButton: {
    type: 'boolean',
    description: 'If true, back to top button is displayed',
    defaultValue: true,
  },
};

const defaultArgs = {
  content: 'Memory Game',
  showButton: true
};

const Template = args => {
  return <div class="custom-timer-wrapper">
    <custom-timer/>
  </div>;
};

export const Timer = Template.bind({});
Timer.args = { ...defaultArgs };