import cx from 'classnames'
import { FC } from 'react'

import symptoms from '../../../public/symptoms.png'
import styles from './index.module.scss'

type Props = {
  standard?: boolean
  marked: boolean
}

const SymptomIcon: FC<Props> = (props) => {
  const { marked } = props
  const className = cx({
    standard: true,
    [styles.marked]: marked,
  })
  return (
    <div className={styles.container}>
      <div className={className}>
        <img className={styles.symptomImage} src={symptoms} />
      </div>
      <div className={styles.symptomText}>Cramps</div>
    </div>
  )
}

export default SymptomIcon
