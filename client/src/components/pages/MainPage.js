import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


const MainPage = () => {
  return (

    <div>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>

      <div className="site-layout-content">Map Project by Candidate Huseyin Ozdogan</div>
    </Content>
  </Layout>
    </div>
  )
}

export default MainPage
