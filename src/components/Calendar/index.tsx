//@ts-nocheck
import { Badge, Calendar } from 'antd'
import 'antd/dist/antd.css'
import { FC } from 'react'

import './index.scss'

export const dateCellRenderForBadges = (value) => {
  const getBadgesInfo = (value) => {
    let listData
    let dateValue = value.format('yyyy/MM/DD')
    switch (dateValue) {
      case '2021/08/26':
        listData = [{ type: 'success', content: 'This is usual event.' }]
        break
      case '2022/08/12':
        listData = [{ type: 'error', content: 'This is error event 3.' }]
        break
      case '2022/08/08':
        listData = [
          { type: 'warning', content: 'This is usual event1.' },
          { type: 'success', content: 'This is usual event2.' },
        ]
        break
      default:
    }
    return listData || []
  }

  const listData = getBadgesInfo(value)
  if (listData) {
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} />
          </li>
        ))}
      </ul>
    )
  }
}

export const dateCellRenderForPeriods = (value) => {
  let dateValue = value.format('yyyy/MM/DD')
  if (dateValue === '2022/08/26') {
    return <div className="periods">{value.format('DD')}</div>
  }
}

export const dateCellRenderForPeriodsBadges = (value) => {
  let dateValue = value.format('yyyy/MM/DD')
  if (dateValue === '2022/08/26') {
    return <div className="periods">{value.format('DD')}</div>
  } else {
    const getBadgesInfo = (value) => {
      let listData
      let dateValue = value.format('yyyy/MM/DD')
      switch (dateValue) {
        case '2021/08/26':
          listData = [{ type: 'success', content: 'This is usual event.' }]
          break
        case '2022/08/12':
          listData = [{ type: 'error', content: 'This is error event 3.' }]
          break
        case '2022/08/08':
          listData = [
            { type: 'warning', content: 'This is usual event1.' },
            { type: 'success', content: 'This is usual event2.' },
          ]
          break
        default:
      }
      return listData || []
    }
    const listData = getBadgesInfo(value)
    if (listData) {
      return (
        <ul className="events">
          {listData.map((item) => (
            <li key={item.content}>
              <Badge status={item.type} />
            </li>
          ))}
        </ul>
      )
    }
  }
}

type Props = {
  fullscreen?: boolean
  dateCellRender?: (value: any) => JSX.Element | undefined
}
const PeriodsCalendar: FC<Props> = ({ fullscreen = false, dateCellRender }) => {
  return <Calendar fullscreen={fullscreen} dateCellRender={dateCellRender} />
}

export default PeriodsCalendar
