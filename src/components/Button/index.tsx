import cx from 'classnames'
import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  type: 'primary' | 'secondary' | 'disabled' | 'danger' | 'outlined' | 'flat'
  size?: 'small' | 'medium' | 'large'
  text: string
  onClick: () => void
}

const Button: FC<Props> = (props) => {
  const { type = 'primary', size = 'medium', text, onClick } = props
  const className = cx({
    [styles.defaultButton]: true,
    [styles[type]]: type,
    [styles[size]]: size,
  })
  return (
    <>
      <button onClick={onClick} className={className} disabled={type === 'disabled'}>
        {text}
      </button>
    </>
  )
}

export default Button
