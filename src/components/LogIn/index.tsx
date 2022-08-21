import cx from 'classnames'
import { FC } from 'react'

import girlWithFlowers from '../../../public/girl-flowers.jpeg'
import Button from '../Button'
import Input from '../Input'
import styles from './index.module.scss'

type Props = {
  type: 'primary' | 'secondary' | 'disabled' | 'danger' | 'outlined' | 'flat'
  size: 'small' | 'medium' | 'large'
  text: string
  onClick: () => void
}

const LogIn: FC<Props> = (props) => {
  const { type = 'primary', size = 'medium', text, onClick } = props
  const className = cx({
    defaultButton: true,
    [styles[type]]: type,
    [styles[size]]: size,
  })
  return (
    <>
      <div>
        <img src={girlWithFlowers} />
      </div>
    </>
  )
}

export default LogIn
