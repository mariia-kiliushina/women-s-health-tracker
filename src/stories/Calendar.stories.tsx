import { ComponentMeta, ComponentStory } from '@storybook/react'

import PeriodsCalendar, {
  dateCellRenderForBadges,
  dateCellRenderForPeriods,
  dateCellRenderForPeriodsBadges,
} from '../components/Calendar'

export default {
  title: 'Calendar',
  component: PeriodsCalendar,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof PeriodsCalendar>

const Template: ComponentStory<typeof PeriodsCalendar> = (args) => <PeriodsCalendar {...args} />

export const WithPeriodsBadges = Template.bind({})

WithPeriodsBadges.args = {
  dateCellRender: dateCellRenderForPeriodsBadges,
}

export const WithPeriods = Template.bind({})

WithPeriods.args = {
  dateCellRender: dateCellRenderForPeriods,
}

export const WithBadges = Template.bind({})

WithBadges.args = {
  dateCellRender: dateCellRenderForBadges,
}
