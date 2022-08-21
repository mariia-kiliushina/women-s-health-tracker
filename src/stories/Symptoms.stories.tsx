import { ComponentMeta, ComponentStory } from '@storybook/react'

import Symptoms from '../components/Symptoms'

export default {
  title: 'Symptoms',
  component: Symptoms,
} as ComponentMeta<typeof Symptoms>

const Template: ComponentStory<typeof Symptoms> = (args) => <Symptoms {...args} />

export const Standard = Template.bind({})

Standard.args = {}
