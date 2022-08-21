import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '../components/Input'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Standard = Template.bind({})

Standard.args = {
  type: 'standard',
}

export const Error = Template.bind({})

Error.args = {
  type: 'error',
}

export const Success = Template.bind({})

Success.args = {
  type: 'success',
}

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
}

export const CreditCard = Template.bind({})

CreditCard.args = {
  type: 'creditCard',
}
export const Password = Template.bind({})

Password.args = {
  type: 'password',
}
