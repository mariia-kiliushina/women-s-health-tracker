//@ts-nocheck
import { FC, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import './index.css'

const PeriodsCalendar: FC = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <h1>Track your peroids</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} selectRange={false} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span> {date.toDateString()}
        </p>
      )}
    </div>
  )
}

export default PeriodsCalendar
