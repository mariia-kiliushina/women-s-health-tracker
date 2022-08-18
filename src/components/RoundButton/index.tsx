//@ts-nocheck
import { FC, useState } from 'react'
import Modal from 'react-modal'

import Input from '../Input'
import styles from './index.module.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
Modal.setAppElement('#root')

const RoundButton: FC = () => {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <div className={styles.roundPatch}>
        <div>Period:</div>
        <div>{`Day 2`}</div>
        <button onClick={openModal}>Edit period dates</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <Input />
        </Modal>
      </div>
    </>
  )
}

export default RoundButton
