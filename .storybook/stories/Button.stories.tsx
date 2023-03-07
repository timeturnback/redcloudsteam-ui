import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../src';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true
};

export const Fetching = Template.bind({});
Fetching.args = {
  text: 'Fetching',
  fetching: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'With Icon',
  leftComp: <span>👀</span>,
  rightComp: <span>🚀</span>
};
