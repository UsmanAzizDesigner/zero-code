import React, { useState } from 'react'
import { Divider, Layout, Menu } from 'antd'
import { items } from './NavItems/navItems'
import { Col, Row, Button } from 'antd'
import './MyLayout.css'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout
// const { SubMenu } = Menu

function MyLayout() {
  const [selectedButton, setSelectedButton] = useState('Main')
  const navigate = useNavigate()

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  const renderMenuItems = () => {
    // const list = [];
    // items.forEach(item =>
    //   {
    //   if( item?.childern && item?.childern?.length){
    //     item.childern.forEach(ch => {
    //       if(ch.defaultOpenKeys) list.push(ch.key)
    //     })
    //   }
    //   else {
    //     if(item.defaultOpenKeys) list.push(item.key)
    //   }
    //   })
    //   console.log('list',list)
    switch (selectedButton) {
      case 'Main':
        return (
          <>
            <Menu
              theme="dark"
              defaultSelectedKeys={['1']}
              className='h-[86vh] overflow-auto no-scroll'
              // style={{height:'86vh',overflow:'auto'}}
              mode="inline"
              items={items}
              activeClassName="active-menu"
              onSelect={({item})=>{
                console.log('item',item)
                navigate(item.props.link)
              }}
              defaultOpenKeys={[
                'userandroles',
                'userstores',
                'claims',
                'servicesproviders',
                'identityproviders',
                'emailtemplates',
                'keystores',
                'consantpurposes',
                'oidcscopes',
                'streaminganalytics',
                'event',
                'functionlibraries',
                'servicebus',
                'carbonapplication',
                'shutdownrestart',
                'list',
                'add'

              ]}
            />
          </>
        )
      case 'Configure':
        return (
          <>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </>
        )
      default:
        return null
    }
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={300} collapsible collapsedWidth={0}>
        <div className="logo">
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <Row justify="space-between" className="py-2" align="middle" xs={12}>
          <Col xs={'auto'}>
            <Button
              onClick={() => handleButtonClick('Main')}
              block
              {...(selectedButton === 'Main'
                ? { primary: true }
                : { text: true })}
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${
                selectedButton === 'Main' ? 'bg-white text-black' : ''
              }`}
            >
              Main
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button
              onClick={() => handleButtonClick('Configure')}
              block
              {...(selectedButton === 'Configure'
                ? { primary: true }
                : { text: true })}
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${
                selectedButton === 'Configure' ? 'bg-white text-black' : ''
              }`}
            >
              Configure
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button
              onClick={() => handleButtonClick('Tools')}
              block
              {...(selectedButton === 'Tools'
                ? { primary: true }
                : { text: true })}
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${
                selectedButton === 'Tools' ? 'bg-white text-black' : ''
              }`}
            >
              Tools
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button
              onClick={() => handleButtonClick('Action')}
              block
              {...(selectedButton === 'Action'
                ? { primary: true }
                : { text: true })}
              // text
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${
                selectedButton === 'Action' ? 'bg-white text-black' : ''
              }`}
            >
              Action
            </Button>
          </Col>
          <Divider
            orientation="center"
            className="bg-slate-600 p-0 my-2 shadow-inner shadow-2xl"
          />
        </Row>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {renderMenuItems()}
        </Menu>
      </Sider>

      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, textAlign: 'right', backgroundColor: 'red' }}
        >
          {/* Your header content goes here */}
        </Header>
        <Content style={{ margin: '0 16px', marginTop: 24 }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
      <Footer
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: 'wheat',
        }}
      >
        {/* Your footer content goes here */}
      </Footer>
    </Layout>
  )
}

export default MyLayout
