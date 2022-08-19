import { ComponentMeta, ComponentStory } from '@storybook/react'

import SymptomIcon from '../components/SymptomIcon'

export default {
  title: 'SymptomIcon',
  component: SymptomIcon,
} as ComponentMeta<typeof SymptomIcon>

const Template: ComponentStory<typeof SymptomIcon> = (args) => <SymptomIcon {...args} />

export const Standard = Template.bind({})

Standard.args = {}

export const Marked = Template.bind({})

Marked.args = {
  marked: true,
}
