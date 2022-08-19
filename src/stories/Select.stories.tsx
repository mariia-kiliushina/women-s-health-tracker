import { ComponentMeta, ComponentStory } from '@storybook/react'

import Select from '../components/Select'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Standard = Template.bind({})

Standard.args = {}

export const Error = Template.bind({})

Error.args = {
  error: true,
}

export const Success = Template.bind({})

Success.args = {
  success: true,
}

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
}
