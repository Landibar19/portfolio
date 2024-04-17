import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import DrawerMenu from '../NavBar/DrawerMenu';

import { Link } from 'react-router-dom';


const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

 
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: "rgba(243, 133, 0, 1)"}}  >
        <Toolbar>
          {isMobile ? (
            <DrawerMenu items={[
              { text: 'Home Page', path: '/' },
              { text: 'About Us', path: '/about' },
              { text: 'Portfolio', path: '/portfolio' },
              { text: 'Contact Us', path: '/contact' },
            ]} />
          ) : (
            <>
              <Box>
                <Typography variant="h6" component='div'>
                  Lizander's Portfolio
                </Typography>
              </Box>
              <Box sx={{ ml: 'auto', mr:5 }}>
                <Link to='/' style={{ textDecoration: 'none', color: 'white'}}>
                <Typography variant="h6" component="div">
                  HomePage
                </Typography>
                </Link>
              </Box>
              <Box sx={{ mr: 5 }}>
                <Link to='/about' style={{ textDecoration: 'none', color: 'white'}}>
                <Typography variant="h6" component="div">
                  About Us
                </Typography>
                </Link>
              </Box>
              <Box sx={{ mr: 5 }}>
                <Link to='/portfolio' style={{ textDecoration: 'none', color: 'white'}}>
                <Typography variant="h6" component="div">
                  Portfolio
                </Typography>
                </Link>
              </Box>
              <Box sx={{mr: 5}}>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'white'}}>
                <Typography color="inherit" >Contact Us</Typography>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;