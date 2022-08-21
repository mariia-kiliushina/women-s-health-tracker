import cx from 'classnames'
import { Dispatch, FC, SetStateAction } from 'react'

import styles from './index.module.scss'

type Props = {
  type?: 'standard' | 'error' | 'creditCard' | 'success' | 'password'
  disabled?: boolean
  placeholder?: string
  state?: any
  size?: 'small' | 'medium' | 'large'
  setState?: Dispatch<SetStateAction<{ login: string; password: string }>>
  validation?: (value: string) => {}
}
const MyInput: FC<Props> = (props) => {
  const {
    placeholder = 'placeholder',
    state = '',
    size = 'medium',
    disabled = false,
    setState = () => {},
    type = 'standard',
    validation = () => {},
  } = props

  const className = cx({
    [styles.default]: true,
    [styles[type]]: type,
    [styles[size]]: size,
  })

  const onChange = (event: any) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    validation(value)
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  if (type === 'password') {
    return (
      <input
        name="password"
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
      name="login"
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
