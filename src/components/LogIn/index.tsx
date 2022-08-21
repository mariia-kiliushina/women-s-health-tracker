import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import girlWithFlowers from '../../../public/girl-flowers.png'
import Button from '../Button'
import Image from '../Image'
import Input from '../Input'
import styles from './index.module.scss'

type Props = {}

const LogIn: FC<Props> = (props) => {
  const initState = {
    login: '',
    password: '',
  }
  const [state, setState] = useState(initState)
  const navigator = useNavigate()
  const onSignUp = () => {
    navigator('../sign-up', { replace: true })
  }
  const {} = props
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={girlWithFlowers}
          height="300px"
          width="300px"
          alt="a girl holds clocks that represents menstrual cycle"
        />
      </div>
      <div className={styles.inputsContainer}>
        <div className={styles.text}>Welcome to Femme</div>
        <Input placeholder="Email/User name" state={state.login} setState={setState} />
        <Input placeholder="Password" type="password" state={state.password} setState={setState} />
        <Button type="primary" text={'Sign In'} onClick={() => alert('Submitted')} />
        <div className={styles.text}>or</div>
        <Button type="primary" text={'Sign Up'} onClick={onSignUp} />
      </div>
    </div>
  )
}

export default LogIn
