import React from 'react';
import './CustomCard.css';
import CustomCard from '@doggo-memory-game/web-components/dist/collection/components/custom-card/custom-card'

export default {
  title: 'Custom/Card',
  component: CustomCard,
  argTypes: {
    text: { type: 'text', description: 'The text which is shown as label', defaultValue: 'Boston Terrier' },
    image: { type: 'text', description: 'The card image', defaultValue: 'https://dogtime.com/assets/uploads/gallery/boston-terrier-dog-breed-pictures/3-puppy.jpg' },
    open: {
      type: 'boolean',
      description: 'If true, card image is shown',
      defaultValue: false ,
    },
    disabled: {
      type: 'boolean',
      description: 'If true, card image is disabled',
      defaultValue: false,
    },
  },
};

const defaultArgs = {
  text: 'Boston Terrier',
  image: 'https://dogtime.com/assets/uploads/gallery/boston-terrier-dog-breed-pictures/3-puppy.jpg',
  open: false,
  disabled: false
};

const Template = args => {
  return <div class="custom-card-wrapper">
      <custom-card {...args}/>
    </div>;
};

export const Card = Template.bind({});
Card.args = { ...defaultArgs };
