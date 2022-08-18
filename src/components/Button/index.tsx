import { FC } from 'react'

import './index.css'

type Props = {
  primary: boolean
  size: 'small' | 'medium' | 'large'
  text: string
  onClick: () => void
}

const Button: FC<Props> = (props) => {
  const { primary = true, size = 'medium', text, onClick } = props
  const type = primary ? 'primary' : 'secondary'
  return (
    <>
      <button onClick={onClick} className={['defaultButton', size, type].join(' ')}>
        {text}
      </button>
    </>
  )
}

export default Button
