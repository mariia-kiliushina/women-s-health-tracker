//@ts-nocheck
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Store } from '../../store'
import { getData } from '../../store/sliceData'
import styles from './index.module.scss'

const Data: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])
  const { ...tracks } = useSelector((state: Store) => state.dataSliceReducer.tracks)
  if (!tracks) {
    return <div>Server error</div>
  }

  return (
    <>
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
