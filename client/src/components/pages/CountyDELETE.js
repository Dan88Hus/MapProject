import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const CountyDropdown = () => {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div>
    <Dropdown overlay={menu} trigger={['click']}>
    <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    Please Select County <DownOutlined />
    </a>
  </Dropdown>
    </div>
  )
}

export default CountyDropdown
