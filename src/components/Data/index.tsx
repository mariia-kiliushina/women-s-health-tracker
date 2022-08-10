import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Store } from '../../store'
import { fillState } from '../../store/sliceData'
import styles from './index.module.scss'

const Data: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData: () => {} = async () => {
      const response = await fetch('http://localhost:8080/api/periods')
      const json = await response.json()
      const data = await json.periodsData
      dispatch(fillState(data))
    }
    try {
      fetchData()
    } catch {
      console.error
    }
  })

  const { ...tracks } = useSelector((state: Store) => state.dataSliceReducer)

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
