import React from 'react';
import './CustomModal.css';
import CustomModal from '@doggo-memory-game/web-components/dist/collection/components/custom-modal/custom-modal'

export default {
  title: 'Custom/Modal',
  component: CustomModal,
  argTypes: {
    content: { type: 'text', description: 'The modal content', defaultValue: 'Modal Content' },
    open: {
      type: 'boolean',
      description: 'If true, modal image is shown',
      defaultValue: true ,
    },
  },
};

const defaultArgs = {
  text: 'Modal Content',
  open: true,
};

const Template = args => {
  return <div class="custom-modal-wrapper">
      <custom-modal open={args.open}>{args.text}</custom-modal>
    </div>;
};

export const Modal = Template.bind({});
Modal.args = { ...defaultArgs };
