import { Select } from 'antd'
import 'antd/dist/antd.css'
import cx from 'classnames'
import { FC } from 'react'

import './index.scss'

type Props = {
  standard?: boolean
  error: boolean
  success: boolean
  disabled: boolean
}

const { Option } = Select

const MySelect: FC<Props> = (props) => {
  const { standard = true, error, success, disabled } = props
  const className = cx({
    standard: standard,
    error: error,
    success: success,
    disabled: disabled,
  })
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Select
        disabled={disabled}
        className={className}
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  )
}

export default MySelect
