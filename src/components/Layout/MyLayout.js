import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MyLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<FileOutlined />} title="Options">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0, textAlign: 'right' }}>
          {/* Your header content goes here */}
        </Header>
        <Content style={{ margin: '0 16px', marginTop: 24 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Your page content goes here */}
          </div>
        </Content>
       
      </Layout>
      <Footer style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%',backgroundColor:'wheat' }}>
          {/* Your footer content goes here */}
        </Footer>
    </Layout>
  );
}

export default MyLayout;
