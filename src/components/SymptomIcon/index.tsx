import cx from 'classnames'
import { FC, MouseEventHandler } from 'react'

import styles from './index.module.scss'

type Props = {
  marked: boolean
  src: string
  symptomText: string
  onClick: MouseEventHandler<HTMLDivElement>
}

const SymptomIcon: FC<Props> = (props) => {
  const { marked, src, symptomText, onClick } = props
  const className = cx({
    [styles.standard]: true,
    [styles.marked]: marked,
  })
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.middlware}>
        <div className={className}>
          <img className={styles.symptomImage} src={src} />
        </div>
        <div className={styles.symptomText}>{symptomText}</div>
      </div>
    </div>
  )
}

export default SymptomIcon
