import cx from 'classnames'
import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  type: 'standard' | 'error' | 'creditCard' | 'success' | 'password'
  disabled?: boolean
  placeholder?: string
  state?: any
  size: 'small' | 'medium' | 'large'
  setState?: (value: string) => {}
  validation?: (value: string) => {}
}
const MyInput: FC<Props> = (props) => {
  const {
    placeholder = 'placeholder',
    state = 'hello',
    size = 'medium',
    disabled = false,
    setState = () => {},
    type,
    validation = () => {},
  } = props

  const className = cx({
    [styles.default]: true,
    [styles[type]]: type,
    [styles[size]]: size,
  })

  const onChange = (event: any) => {
    const value = event.currentTarget.value
    validation(value)
    setState(value)
  }

  if (type === 'password') {
    return (
      <input
        type="password"
        className={className}
        placeholder="input password"
        onChange={onChange}
        disabled={disabled}
      />
    )
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      onChange={onChange}
      value={state}
    />
  )
}

export default MyInput
