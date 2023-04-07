import React,{useState} from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons'
import { Col, Row, Button } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function MyLayout() {
  const [selectedButton, setSelectedButton] = useState('Main');

const handleButtonClick = (button) => {
  setSelectedButton(button);
};

const renderMenuItems = () => {
  switch (selectedButton) {
    case 'Main':
      return (
        <>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
        </>
      );
    case 'Configure':
      return (
        <>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </>
      );
    default:
      return null;
  }
};
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsedWidth={0}>
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <Row justify="space-between" align="middle" gutter={[8]} >
        <Col>
          <Button
            onClick={() => handleButtonClick('Main')}
            type={selectedButton === 'Main' ? 'primary' : 'default'}
            className="text-3xl "
          >
            Main
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => handleButtonClick('Configure')}
            type={selectedButton === 'Configure' ? 'primary' : 'default'}
          >
            Configure
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => handleButtonClick('Tools')}
            type={selectedButton === 'Tools' ? 'primary' : 'default'}
          >
            Tools
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => handleButtonClick('Action')}
            type={selectedButton === 'Action' ? 'primary' : 'default'}
          >
            Action
          </Button>
        </Col>
      </Row>

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {renderMenuItems()}
      </Menu>
    </Sider>

      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, textAlign: 'right' ,backgroundColor:'red'}}
        >
          {/* Your header content goes here */}
        </Header>
        <Content style={{ margin: '0 16px', marginTop: 24 }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* Your page content goes here */}
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
