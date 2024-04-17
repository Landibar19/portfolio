import React, { useState } from 'react';
import { Button, Grid, TextField, Box, Typography, Switch, useTheme,useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import backgroundImage from '../../assets/contactus/bacgroundimage.png';
import { GitHub } from '@mui/icons-material';
import { useThemeContext } from '../../components/Theme/theme';
import LightModeIcon from '@mui/icons-material/LightMode';

const BackgroundImage = styled('div')(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
   
 
}));

export const ContactPage = () => {
  const theme = useTheme();
  const {isDark, toggleTheme} = useThemeContext();  
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div style={{backgroundColor: isDark ? "rgba(14, 1, 82, 0.97)"  :  'rgba(255, 254, 228, 1)'}}>
       <Button sx={{ position: 'absolute', right : 5, top: 60}}>
        <LightModeIcon sx={{color: 'white'}} />
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' ,
          }}
        />
        </Button>
      <BackgroundImage>
        <Typography variant="h3" component="div" color="rgba(243, 133, 0, 1)">
         CONTACT US
        </Typography>
      </BackgroundImage>
      <Grid container spacing={2} p={5} style={{color: isDark ? 'white' : 'black'}}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
           <Grid container direction="column" spacing={2}  >
            <Grid item>
              <TextField 
                name="name" 
                label="Name" 
                value={form.name} 
                onChange={handleChange} 
                fullWidth
                required
                sx={{backgroundColor: isDark ? "white"  :  'rgba(255, 254, 228, 1)'}}
              />
            </Grid>
            <Grid item>
              <TextField 
                name="email" 
                label="Email" 
                value={form.email} 
                onChange={handleChange}
                fullWidth
                required 
                sx={{backgroundColor: isDark ? "white"  :  'rgba(255, 254, 228, 1)'}}
              />
            </Grid>
            <Grid item>
              <TextField 
                name="message" 
                label="message" 
                value={form.message} 
                onChange={handleChange}
                fullWidth
                multiline
                rows={5}
                required
                sx={{backgroundColor: isDark ? "white"  :  'rgba(255, 254, 228, 1)'}}
              />
            </Grid>
          </Grid>
            <Button type="submit" 
            sx={{
              backgroundColor: isDark ? "white"  :  'rgba(255, 254, 228, 1)'
            }} 
            >Send
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={4} ml={isMobile? '0%' : '15%'}>
          <Box display="flex" alignItems="center" mb={5}>
            <PhoneIcon />
            <Typography variant="body1" ml={2}><strong>Phone number:</strong> +355692688737</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={5}>
            <HomeIcon />
            <Typography variant="body1" ml={2}><strong>Address:</strong> Vlore, ALbania 9401</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={5}>
            <EmailIcon />
            <Typography variant="body1" ml={2}><strong>E-mail:</strong> landibar19@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={5}>
            <GitHub />
            <Typography variant="body1" ml={2}><strong>GitHub:</strong> https://github.com/Landibar19</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};