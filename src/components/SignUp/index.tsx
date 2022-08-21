import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'

import { registerUser } from '../../store/sliceData'
import Button from '../Button'
import Input from '../Input'
import styles from './index.module.scss'

type Props = {}

const SignUp: FC<Props> = (props) => {
  const initState = {
    login: '',
    password: '',
  }
  const [state, setState] = useState(initState)

  const dispatch = useDispatch<AppDispatch>()

  const onRegisterUser = () => {
    dispatch(registerUser(state))
  }
  const {} = props
  return (
    <div className={styles.inputsContainer}>
      <div className={styles.text}>Welcome to Femme</div>
      <Input placeholder="Email/User name" state={state.login} setState={setState} />
      <Input placeholder="Password" type="password" state={state.password} setState={setState} />
      <Button type="primary" text={'Sign Up'} onClick={onRegisterUser} />
    </div>
  )
}

export default SignUp
