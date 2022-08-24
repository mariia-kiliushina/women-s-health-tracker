import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'

import { logout } from '../../store/sliceData'
import Button from '../Button'

type Props = {}

const LogOut: FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>()
  // const initState = {
  //   login: '',
  //   password: '',
  // }
  // const [state, setState] = useState(initState)

  const onLogOut = () => {
    dispatch(logout())
  }
  return <Button type="primary" text={'Log Out'} onClick={onLogOut} />
}

export default LogOut
