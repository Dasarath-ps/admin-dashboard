import { ArrowDropDownOutlined, DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, Settings } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import profile from '../assets/beckam.webp';
import { setMode } from '../state';
import FlexBetween from './Flexbetween';
const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handelClose = () => setAnchorEl(null)
  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none'
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between"
        }}
      >
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>

          <FlexBetween
            sx={{
              backgroundColor: theme.palette.background.alt,
              borderRadius: "9px",
              gap: "3rem",
              padding: "0.1rem 1.5rem"
            }}
          >

            <InputBase placeholder='Search ...' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* RIGHT SECTION */}
        <FlexBetween sx={{ gap: "1rem" }}>
          <IconButton onClick={() => { dispatch(setMode()) }}>
            {theme.palette.mode === "dark" ?
              (<DarkModeOutlined sx={{ fontSize: "20px" }} />) :
              (<LightModeOutlined sx={{ fontSize: "20px" }} />)
            }
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
          <FlexBetween>
            <Button onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem"
              }}>
              <Box
                component={"img"}
                alt='Profile-image'
                src={profile}
                height="32px"
                width='32px'
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign={'left'}>
                <Typography
                  fontWeight="bold"
                  fontSize={'0.7rem'}
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography

                  fontSize={'0.6rem'}
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300] }}
                fontSize='25px'
              >

              </ArrowDropDownOutlined>

            </Button>
            <Menu
              open={isOpen}
              onClose={handelClose}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: 'center' }}
            >

              <MenuItem onClick={handelClose}>Logout</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar