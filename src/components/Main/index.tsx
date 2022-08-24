import { FC, useEffect } from 'react'

import Calendar from '#components/Calendar'
import RoundButton from '#components/RoundButton'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { IState, Track, getData } from '../../store/sliceData'
import { IUsersState } from '../../store/sliceUser'

let periods = ['2022/08/26', '2022/08/27', '2022/08/28']

//@ts-ignore
export const dateCellRenderForPeriods = (value: any) => {
  let dateValue = value.format('yyyy/MM/DD')
  if (periods.includes(dateValue)) {
    return <div className="periods">{value.format('DD')}</div>
  }
}

const Main: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  const { ...tracks }: Record<number, Track> = useAppSelector(
    (state: { dataSliceReducer: IState; userSliceReducer: IUsersState }) =>
      state.dataSliceReducer.tracks,
  )
  if (!tracks) {
    return <div>Server error</div>
  }
  console.log(tracks)

  return (
    <>
      <Calendar dateCellRender={dateCellRenderForPeriods} />
      <RoundButton />
    </>
  )
}

export default Main
