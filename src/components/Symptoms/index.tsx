import { FC, useState } from 'react'

import crumps from '../../../public/crumps.png'
import headache from '../../../public/headache.png'
import spotting from '../../../public/spotting.png'
import SymptomIcon from '../../components/SymptomIcon'
import styles from './index.module.scss'

type initStateValueType = {
  symptomText: string
  src: string
  marked: boolean
}
const Symptoms: FC = () => {
  const initState: Record<string | number | symbol, initStateValueType> = {
    1: { symptomText: 'Cramps', src: crumps, marked: false },
    2: { symptomText: 'Spotting', src: spotting, marked: true },
    3: { symptomText: 'Headache', src: headache, marked: false },
  }
  const [state, setState] = useState(initState)
  const handleClick: (key: string | number | symbol) => void = (key) =>
    setState({
      ...state,
      [key]: { ...state[key], marked: !state[key].marked },
    })
  return (
    <>
      <div className={styles.container}>
        {Object.entries(state).map(([key, value]) => {
          return (
            <SymptomIcon
              key={key}
              onClick={() => handleClick(key)}
              marked={value.marked}
              symptomText={value.symptomText}
              src={value.src}
            />
          )
        })}
      </div>
    </>
  )
}

export default Symptoms
