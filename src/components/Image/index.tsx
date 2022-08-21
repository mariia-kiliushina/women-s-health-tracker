import { FC } from 'react'

import styles from './index.module.scss'

type Props = {
  src: string
  alt: string
  height: string
  width: string
}
const Image: FC<Props> = (props) => {
  const { src, alt, height, width } = props

  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
  )
}

export default Image
