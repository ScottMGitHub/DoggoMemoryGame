import React from 'react';
import CustomFooter from '@doggo-memory-game/web-components/dist/collection/components/custom-footer/custom-footer'
import './CustomFooter.css';

export default {
  title: 'Custom/Footer',
  component: CustomFooter,
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
  return <div class="custom-footer-wrapper">
    <header></header>
    <main></main>
    <custom-footer show-button={args.showButton}>
      <div>{args.content}</div>
    </custom-footer>
  </div>;
};

export const Footer = Template.bind({});
Footer.args = { ...defaultArgs };