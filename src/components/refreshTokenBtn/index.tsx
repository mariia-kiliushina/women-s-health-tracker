import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'

import { refreshToken } from '../../store/sliceData'

const RefreshTokenButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const onClick = () => {
    dispatch(refreshToken())
  }
  return (
    <>
      <button onClick={onClick}> RefreshTokenButton</button>
    </>
  )
}

export default RefreshTokenButton
