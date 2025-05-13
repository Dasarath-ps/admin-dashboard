import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetUserQuery } from '../../state/api.js'
const Layout = () => {
  const isNonMobile = useMediaQuery("(width>1px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const UserId = useSelector((state) => state.global.UserId);
  const { data } = useGetUserQuery(UserId);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width={'100%'} height={'100%'}>
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        user={data || {}}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          user={data || {}}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout