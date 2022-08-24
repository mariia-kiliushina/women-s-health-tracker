import { FC, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from 'src/store'

import HorizontalLine from '#components/HorizontalLIne'

import girlWithFlowers from '../../../public/girl-flowers.png'
import { authenticateUser } from '../../store/sliceData'
import Button from '../Button'
import Image from '../Image'
import Input from '../Input'
import styles from './index.module.scss'

type Props = {}

const LogIn: FC<Props> = (props) => {
  const dispatch = useDispatch<AppDispatch>()
  const initState = {
    login: '',
    password: '',
  }
  const [state, setState] = useState(initState)

  const {} = props

  const navigate = useNavigate()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(authenticateUser(state))
    setTimeout(() => navigate('/Main'), 500)
  }

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input placeholder="Email/User name" state={state.login} setState={setState} />
          <Input
            placeholder="Password"
            type="password"
            state={state.password}
            setState={setState}
          />
          <Button inputType="submit" type="primary" text={'Sign In'} onClick={() => {}} />
        </form>
        <HorizontalLine />
        <div className={styles.text}>or</div>
        <Link to="/sign-up">
          <Button inputType="button" type="primary" text={'Sign Up'} onClick={() => {}} />
        </Link>
      </div>
    </div>
  )
}

export default LogIn
