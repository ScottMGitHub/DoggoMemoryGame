import React from 'react';
import CustomHeader from '@doggo-memory-game/web-components/dist/collection/components/custom-header/custom-header'
import CustomNavigation from '@doggo-memory-game/web-components/dist/collection/components/custom-navigation/custom-navigation'

export default {
  title: 'Custom/Header',
  component: CustomHeader,
  argTypes: {
    logo: { type: 'text', description: 'The logo or text', defaultValue: 'Memory Game' },
    navigation: {
      type: 'text',
      description:
        'Anchor tags for navigation',
      defaultValue: `<a>Play</a>
        <a>Github</a>
        <a>Buy me a coffee</a>`
    }
  },
};

const defaultArgs = {
  logo: 'Memory Game',
  navigation: `<a>Play</a>
  <a>Github</a>
  <a>Buy me a coffee</a>`
};

const Template = args => {
  return <custom-header>
    <div slot="logo" dangerouslySetInnerHTML={{ __html:args.logo}} />
    <custom-navigation slot="navigation" dangerouslySetInnerHTML={{ __html: args.navigation}}/>
  </custom-header>;
};

export const Header = Template.bind({});
Header.args = { ...defaultArgs };