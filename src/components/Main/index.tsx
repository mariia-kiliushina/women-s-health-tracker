import { FC, useEffect } from 'react'

import Calendar from '#components/Calendar'
import RoundButton from '#components/RoundButton'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { IState, Track, getData } from '../../store/sliceData'
import { IUsersState } from '../../store/sliceUser'

const Main: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  const { ...tracks }: Record<number, Track> = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.tracks,
  )
  let periodDates = [{}]
  if (tracks) {
    let arr = Object.values(tracks)
    periodDates = arr.filter((period) => period.type == 'Had flows').map((period) => period.date)
  }

  const dateCellRenderForPeriods = (value: any) => {
    let dateValue = value.format('YYYY-MM-DD')
    if (periodDates.includes(dateValue)) {
      return <div className="periods">{value.format('DD')}</div>
    }
    return
  }

  if (!tracks) {
    return <div>Server error</div>
  }

  return (
    <>
      <Calendar dateCellRender={dateCellRenderForPeriods} />
      <RoundButton />
    </>
  )
}

export default Main
