import React, { useState, useEffect } from 'react'
import './AppHeader.css'
import { Button, Typography, Layout, Input, Dropdown, Avatar } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import {
  Logo,
  IconSearchNormal,
  IconGlobe,
  IconLogout,
  IconProfile,
  IconCross,
} from '../../../assets/assets'
import avatar from '../../../assets/header/avatar.svg'

const { Search } = Input

const AppHeader = ({ collapsed, sidebarToggler, imageUrl }) => {
  const [searchWidthToggle, setSearchWidthToggle] = useState(false)

  const handleSearchExpand = () => setSearchWidthToggle(!searchWidthToggle)
  const onSearch = (value) => console.log(value)

  return (
    <>
      <div className="ikd-header-content">
        <div className={`ikd-search-box`}>
          <Search
            placeholder="Search anything..."
            prefix={<IconSearchNormal onClick={() => handleSearchExpand()} className='mr-2'/>}
            bordered={false}
            onSearch={onSearch}
          />
        </div>
      </div>
    </>
  )
}

export default AppHeader
