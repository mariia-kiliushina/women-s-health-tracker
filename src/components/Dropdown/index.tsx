import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space, Typography } from 'antd'
import 'antd/dist/antd.css'
// import cx from 'classnames'
import { FC } from 'react'

import './index.scss'

type Props = {
  overlay: any
  placement: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topLeft'
}

export const menu = (
  <Menu
    selectable
    defaultSelectedKeys={['1']}
    items={[
      {
        key: '1',
        label: 'Item 1',
      },
      {
        key: '2',
        label: 'Item 2',
      },
      {
        key: '3',
        label: 'Item 3',
      },
    ]}
  />
)

const MyDropdown: FC<Props> = ({ overlay, placement }) => {
  return (
    <Dropdown overlay={overlay} placement={placement}>
      <Typography.Link>
        <Space>
          Selectable
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  )
}

export default MyDropdown
