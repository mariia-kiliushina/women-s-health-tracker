import { FC } from 'react'

import styles from './index.module.scss'

const Symptoms: FC = () => {
  return (
    <>
      <h2>Logged sympthoms</h2>
      <div className={styles.container}>
        <div>Cramps</div>
        <div>Headache</div>
        <div>Cramps</div>
      </div>
    </>
  )
}

export default Symptoms
