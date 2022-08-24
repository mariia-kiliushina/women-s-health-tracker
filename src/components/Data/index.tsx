import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { IState, Track, getData } from '../../store/sliceData'
import { IUsersState } from '../../store/sliceUser'
import styles from './index.module.scss'

const Data: FC = () => {
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

  return (
    <>
      <Link to="/">Go to main</Link>
      <button
        onClick={() => {
          dispatch(getData())
        }}
      >
        getData
      </button>
      {Object.entries(tracks).map(([id, track]) => {
        return (
          <div key={id} className={styles.container}>
            <div>{track.date}</div>
            <div>{track.type}</div>
          </div>
        )
      })}
    </>
  )
}

export default Data
