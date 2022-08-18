import cx from 'classnames'
import { FC } from 'react'

import './index.scss'

type Props = {
  primary: boolean
  size: 'small' | 'medium' | 'large'
  text: string
  onClick: () => void
  disabled: boolean
  danger: boolean
  outlined: boolean
  flat: boolean
}

const Button: FC<Props> = (props) => {
  const { primary = true, size = 'medium', text, onClick, disabled, danger, outlined, flat } = props
  const className = cx({
    defaultButton: true,
    primary: primary,
    secondary: !primary,
    danger: danger,
    outlined: outlined,
    flat: flat,
    small: size === 'small',
    medium: size === 'medium',
    large: size === 'large',
  })
  return (
    <>
      <button onClick={onClick} className={className} disabled={disabled}>
        {text}
      </button>
    </>
  )
}

export default Button
