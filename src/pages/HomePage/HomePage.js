import { Box, Stack, useMediaQuery, useTheme, Button, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useTypeWriter from 'react-typewriter-hook';

import backgroundSvg from '../../assets/homepage/backgroundphoto.svg';
import { Link } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '../../components/Theme/theme';


function useTypewriterWithSpeed(text, speed) {
  const [output, setOutput] = useState('');
  const typewriter = useTypeWriter(text);

  useEffect(() => {
    if (typewriter && typeof typewriter === 'string' && output.length < typewriter.length) {
      setTimeout(() => {
        setOutput(typewriter);
      }, speed);
    }
  }, [typewriter, output, speed]);

  return output;
}

const HomePage = () => {
const {isDark, toggleTheme} = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const text = 'My name is Lizander!';
  const message = `I'm passionate about creating innovative solutions 
  that solve real-world problems. I'm a Full Stack Developer with a focus on 
  Frontend Development. I'm proficient in React, Redux, JavaScript, HTML, CSS, and more. 
  I'm always eager to learn new technologies and improve my skills. I'm currently looking 
  for new opportunities to work on exciting projects. 
  Feel free to reach out to me!`;

  const typewriter1 = useTypewriterWithSpeed(text, 100);
  const typewriter2 = useTypewriterWithSpeed(message, 100);

  
  return (
    <Box sx={{
      backgroundColor: isDark ? "rgba(14, 1, 82, 0.97)"  :  'rgba(255, 254, 228, 1)',
      height: 'auto',
      padding: '5%',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
        boxShadow: '0 0 50px 100px white, 0 0 30px 60px white, 0 0 20px 40px white',
        animation: 'twinkle 10s infinite ease-in-out',
        '@keyframes twinkle': {
          '0%': {
            transform: 'scale(0)',
            opacity: 0,
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(0)',
            opacity: 0,
          },
        },
      },
    }}>
   
      <Button sx={{ position: 'absolute', right : 5, top: -5}}>
        <LightModeIcon sx={{color: isDark ? 'white' : 'black'}} />
        <Switch
          checked={isDark}
          onChange={toggleTheme}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' ,
         
          
        }}
        />
      </Button>
      <h1 style={{color: isDark ? 'white' : 'black'}}>Welcome to my portfolio</h1>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', mt: '10vw' }}>
        <Stack sx={{
          mr: isMobile ? '0' : '5%',
          width: isMobile ? '90vw' : '50vw',
          marginLeft: isMobile ? '0%' : '4%',
          color: isDark ? 'white' : 'black'
        }}>

          <h2>{typewriter1}</h2>
          <h3>{typewriter2}</h3>
          <Link to="https://github.com/Landibar19" style={{ cursor: 'pointer', color: 'ActiveBorder', textDecoration: 'none' }}>
            <h3 style={{ color: "rgba(243, 133, 0, 1)" }}>Check my work to know more about me!</h3>
          </Link>
        </Stack>
        <img src={backgroundSvg} alt="background" style={{ height: '50vh' }} />
      </Box>
    </Box>
  );
}

export default HomePage;