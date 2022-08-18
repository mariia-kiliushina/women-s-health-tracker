import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  text: 'Click',
}

export const Secondary = Template.bind({})

Secondary.args = {
  primary: false,
  text: 'Click',
}

export const Small = Template.bind({})

Small.args = {
  size: 'small',
  text: 'Click',
}

export const Medium = Template.bind({})

Medium.args = {
  size: 'medium',
  text: 'Click',
}

export const Large = Template.bind({})

Large.args = {
  size: 'large',
  text: 'Click',
}
