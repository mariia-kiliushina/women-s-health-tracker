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
  type: 'primary',
  text: 'Click',
}

export const Secondary = Template.bind({})

Secondary.args = {
  type: 'secondary',
  text: 'Click',
}

export const Outlined = Template.bind({})

Outlined.args = {
  type: 'outlined',
  text: 'Click',
}
export const Flat = Template.bind({})

Flat.args = {
  type: 'flat',
  text: 'Click',
}
export const Danger = Template.bind({})

Danger.args = {
  type: 'danger',
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
