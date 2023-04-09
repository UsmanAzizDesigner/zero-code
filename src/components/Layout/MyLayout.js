import React, { useMemo, useState } from 'react'
import { Divider, Layout, Menu, Typography } from 'antd'
import { items } from './NavItems/navItems'
import { Col, Row, Button, Breadcrumb } from 'antd'
import './MyLayout.css'
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import AppHeader from './Header/AppHeader'

const { Header, Content, Footer, Sider } = Layout
// const { SubMenu } = Menu

function MyLayout() {
  const [selectedButton, setSelectedButton] = useState('Main')
  const navigate = useNavigate()

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }
  const location = useLocation()

  const getActiveItem = (navItems) => {
    for (var i = 0; i < navItems.length; i++) {
      if (navItems[i]?.children && navItems[i]?.children?.length) {
        return getActiveItem(navItems[i].children)
      }
      else if (navItems[i].link === location.pathname) {
        return navItems[i];
      }
      return {};
    }
  }
  const activeItem = useMemo(() => {
    const item = getActiveItem(items)
    if (item) return item;
    return {};
  }, [location.pathname, getActiveItem])

  const list = [];

  function funcList(navItem) {
    navItem.forEach(item => {
      if (item.defaultopen) {
        list.push(item.key)
      }
      if (item?.children && item?.children?.length) {
        funcList(item.children)
      }
    })
  }

  const renderMenuItems = () => {
    funcList(items)
    switch (selectedButton) {
      case 'Main':
        return (
          <>
            <Menu
              theme="dark"
              defaultSelectedKeys={[activeItem.key]}
              className="h-[86vh] overflow-auto no-scroll"
              mode="inline"
              items={items}
              // activeClassName="active-menu"
              onSelect={({ item }) => {
                navigate(item.props.link)
              }}
              is
              defaultOpenKeys={list}
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
                ? { primary: "true" }
                : { text: "true" })}
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${selectedButton === 'Main' ? 'bg-white text-black' : ''
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
                ? { primary: "true" }
                : { text: "true" })}
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${selectedButton === 'Configure' ? 'bg-white text-black' : ''
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
                ? { primary: "true" }
                : { text: "true" })}
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${selectedButton === 'Tools' ? 'bg-white text-black' : ''
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
                ? { primary: "true" }
                : { text: "true" })}
              // text
              type={'primary'}
              // type={selectedButton === 'Main' ? 'primary' : 'ghost'}
              className={`text-1xl ${selectedButton === 'Action' ? 'bg-white text-black' : ''
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
          style={{ padding: 0, textAlign: 'right' }}
        >
          <AppHeader />
        </Header>
        <Content style={{ margin: '0 16px', marginTop: 24 }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              {activeItem?.breadcrumb?.map((bread) => {
                return <Breadcrumb.Item key={bread}>{bread}</Breadcrumb.Item>
              })}
            </Breadcrumb>
            <Typography className='page-title'>{activeItem?.title}</Typography>
            <Outlet />
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
