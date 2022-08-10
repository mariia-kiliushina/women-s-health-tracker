import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Store } from '../../store'
import { addTrack } from '../../store/sliceData'

const Input: FC = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({ date: '', type: '' })
  const { ...tracks } = useSelector((state: Store) => state.dataSliceReducer)

  const onAdd = () => {
    dispatch(addTrack(state))
    console.log(state)
    console.log(tracks)
  }
  const onChange = (event: any) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  return (
    <>
      <label>Input date</label>
      <input name="date" type="date" onChange={onChange} />
      <select name="type" onChange={onChange}>
        <option value="Had flows">Had flows</option>
        <option value="No flows">No flows</option>
        <option value="Breast pain">Breast pain</option>
        <option value="Meds">Meds</option>
      </select>
      <button onClick={onAdd}>Add data</button>
    </>
  )
}

export default Input
