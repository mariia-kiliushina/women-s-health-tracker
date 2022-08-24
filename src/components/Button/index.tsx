import cx from 'classnames'
import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  type: 'primary' | 'secondary' | 'disabled' | 'danger' | 'outlined' | 'flat'
  size?: 'small' | 'medium' | 'large'
  text: string
  onClick: () => void
  inputType?: 'submit' | 'button'
}

const Button: FC<Props> = (props) => {
  const { type = 'primary', size = 'medium', inputType = 'button', text, onClick } = props
  const className = cx({
    [styles.defaultButton]: true,
    [styles[type]]: type,
    [styles[size]]: size,
  })
  return (
    <>
      <input
        type={inputType}
        onClick={onClick}
        className={className}
        disabled={type === 'disabled'}
        value={text}
      />
    </>
  )
}

export default Button
