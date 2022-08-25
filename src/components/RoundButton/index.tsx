import { FC, useRef, useState } from 'react'
import Modal from 'react-modal'

import Button from '#components/Button'

import { useAppDispatch } from '../../hooks/hooks'
import { postData } from '../../store/sliceData'
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
  let subtitle: any
  const [modalIsOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)
  const severityRef = useRef<HTMLSelectElement>(null)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleAddRecord = () => {
    const obj = {
      //@ts-ignore
      date: inputRef.current.value,
      //@ts-ignore
      type: selectRef.current.value,
      //@ts-ignore
      severity: severityRef.current.value,
    }
    dispatch(postData(obj))
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
          <input ref={inputRef} type="date" />
          <select ref={selectRef} defaultValue="No flows">
            <option value="Had flows">Had flows</option>
            <option value="No flows">No flows</option>
          </select>
          <select ref={severityRef} defaultValue="Medium">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Heavy">Heavy</option>
          </select>
          <Button type="secondary" text="Add record" onClick={handleAddRecord} />
          {/* <Input /> */}
        </Modal>
      </div>
    </>
  )
}

export default RoundButton
