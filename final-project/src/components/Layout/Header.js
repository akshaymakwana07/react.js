

import React, { useState } from 'react';
import Logo from '../../images/logo.svg'
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link , NavLink } from 'react-router-dom';
import '../../Styles/Headerstyle.css';


const Header = () => {
  const [mobile, setMobile] = useState(false);

  const handleDrawerToggle = () => {
    setMobile(!mobile);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <img src={Logo} alt='logo' height={"70"} width={"200px"}/>
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contect">Contect</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1, my:2 }}>
            <img src={Logo} alt='logo' height={"50"} width={"250px"}/>
            </Typography>
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contect">Contect</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary"
            open={mobile}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' },
            "&.MiiDrawer-paper":{
               boxSizing:"border-box",
               width:"240px" 
            }
          }}
          >
            {drawer}
          </Drawer>
        </Box>
       <Box >
       <Toolbar/>
       </Box>
      </Box>
    </>
  );
};

export default Header;
