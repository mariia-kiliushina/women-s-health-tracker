import { ComponentMeta, ComponentStory } from '@storybook/react'

import Dropdown, { menu } from '../components/Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Button = Template.bind({})

Button.args = {
  overlay: menu,
  placement: 'bottom',
}

// export const WithPeriods = Template.bind({})

// WithPeriods.args = {}

// export const WithBadges = Template.bind({})

// WithBadges.args = {}
