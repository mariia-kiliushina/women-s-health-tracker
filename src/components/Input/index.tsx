import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { postData } from '../../store/sliceData'

const Input: FC = () => {
  const dispatch = useDispatch()
  const getTodatDateString = () => {
    const currentDate = new Date().toJSON().slice(0, 10)
    return currentDate
  }
  const [error, setError] = useState()
  const [state, setState] = useState({ id: 1, type: '', date: getTodatDateString() })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!state.type) {
      //@ts-ignore
      setError('Choose type')
      return
    }
    //@ts-ignore
    setError('')
    //@ts-ignore
    dispatch(postData(state))
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
      <form onSubmit={handleSubmit}>
        <label>Input date</label>
        <input name="date" type="date" onChange={onChange} value={state.date} />
        <select name="type" defaultValue="choose" onChange={onChange}>
          <option value="choose" hidden>
            Choose event type
          </option>
          <option value="Had flows">Had flows</option>
          <option value="No flows">No flows</option>
          <option value="Breast pain">Breast pain</option>
          <option value="Meds">Meds</option>
        </select>
        <button type="submit">Add data</button>
        {error && <div>Choose type</div>}
      </form>
    </>
  )
}

export default Input
