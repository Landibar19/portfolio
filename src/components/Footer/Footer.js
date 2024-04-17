import React from 'react';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  const column1 = ['Portfolio', 'Who we are', 'Contact us'];
  const column2 = ['My CV', 'My skills', 'My experience'];
  const column3 = ['Get in touch', 'See our products', 'Blog'];

  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 20px', alignItems: 'center' }}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          {column1.map((text, index) => (
            <Typography variant="body1" key={index} align="left">
              {text}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {column2.map((text, index) => (
            <Typography variant="body1" key={index} align="left">
              {text}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {column3.map((text, index) => (
            <Typography variant="body1" key={index} align="left">
              {text}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;