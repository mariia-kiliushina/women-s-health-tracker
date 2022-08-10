import { FC } from 'react'
import { useSelector } from 'react-redux'

import { Store } from '../../store'
import styles from './index.module.scss'

const Data: FC = () => {
  const { ...tracks } = useSelector((state: Store) => state.dataSliceReducer)
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
