import { DesktopOutlined } from '@ant-design/icons'
import { BsCircleFill } from 'react-icons/bs';

function getItem(label, key, icon, children,link,defaultOpenKeys) {
  return {
    key,
    icon,
    children,
    label,
    link: link ? link : '/',
    defaultopen: defaultOpenKeys? defaultOpenKeys: false
  }
}
export const items = [
  getItem('Identity', 'identity', <DesktopOutlined />, [
    getItem('User & Roles', 'userandroles', <DesktopOutlined/>, [
      getItem('Add', 'u-r-add',<BsCircleFill  className='mr-1'/>,null,"/add-user"),
      getItem('List', 'u-r-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('User Stores', 'userstores', <DesktopOutlined />, [
      getItem('Add', 'u-s-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'u-s-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Claims', 'claims', <DesktopOutlined />, [
      getItem('Add', 'c-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'c-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Services Providers', 'servicesproviders', <DesktopOutlined />, [
      getItem('Add', 's-p-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 's-p-list',<BsCircleFill  className='mr-1'/>),
      getItem('Residents', 's-p-residents',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Identity Providers', 'identityproviders', <DesktopOutlined />, [
      getItem('Add', 'i-p-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'i-p-list',<BsCircleFill  className='mr-1'/>),
      getItem('Residents', 'i-p-residents',<BsCircleFill  className='mr-1'/>),
    ],"",true),
  ]),
  getItem('Manage', 'manage', <DesktopOutlined />, [
    getItem('Email Templates', 'emailtemplates', <DesktopOutlined />, [
      getItem('Add', 'e-t-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'e-t-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Keystores', 'keystores', <DesktopOutlined />, [
      getItem('Add', 'ks-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'ks-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Consent Purposes', 'consantpurposes', <DesktopOutlined />, [
      getItem('Add', 'c-p-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'c-p-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('OIDC Scopes', 'oidcscopes', <DesktopOutlined />, [
      getItem('Add', 'o-s-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'o-s-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Streaming Analytics', 'streaminganalytics', <DesktopOutlined />, [
      getItem('Execution Plans', 's-a-plans'),
    ],"",true),
    getItem('Event', 'event', <DesktopOutlined />, [
      getItem('Flow', 'e-flow',<BsCircleFill  className='mr-1'/>),
      getItem('Streams', 'e-streams',<BsCircleFill  className='mr-1'/>),
      getItem('Recievers', 'e-recievers',<BsCircleFill  className='mr-1'/>),
      getItem('Publishers', 'e-publishers',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Function Libraries', 'functionlibraries', <DesktopOutlined />, [
      getItem('Add', 'f-l-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'f-l-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Service Bus', 'servicebus', <DesktopOutlined />, [
      getItem('Source View', 's-b-source',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Carbon Applications', 'carbonapplication', <DesktopOutlined />, [
      getItem('Add', 'c-a-add',<BsCircleFill  className='mr-1'/>),
      getItem('List', 'c-a-list',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Shutdown Restart', 'shutdownrestart', <DesktopOutlined />),
  ]),
  getItem('MetaData', 'metadata', <DesktopOutlined />, [
    getItem('List', 'list', <DesktopOutlined />, [
      getItem('APIs', 'l-api',<BsCircleFill  className='mr-1'/>),
      getItem('Documnents', 'l-documnents',<BsCircleFill  className='mr-1'/>),
      getItem('Products', 'l-products',<BsCircleFill  className='mr-1'/>),
      getItem('product Documents', 'l-prdouctdocuments',<BsCircleFill  className='mr-1'/>),
      getItem('Providers', 'l-providers',<BsCircleFill  className='mr-1'/>),
      getItem('Replies', 'l-replies',<BsCircleFill  className='mr-1'/>),
      getItem('Topics', 'l-topics',<BsCircleFill  className='mr-1'/>),
    ],"",true),
    getItem('Add', 'add', <DesktopOutlined />, [
        getItem('API', 'a-api',<BsCircleFill  className='mr-1'/>),
        getItem('Documnent', 'a-documnent',<BsCircleFill  className='mr-1'/>),
        getItem('Product', 'a-product',<BsCircleFill  className='mr-1'/>),
        getItem('product Document', 'a-prdouctdocument',<BsCircleFill  className='mr-1'/>),
        getItem('Provider', 'a-provider',<BsCircleFill  className='mr-1'/>),
        getItem('Replie', 'a-replie',<BsCircleFill  className='mr-1'/>),
        getItem('Topic', 'a-topic',<BsCircleFill  className='mr-1'/>),
    ],"",true),
  ]),
]
