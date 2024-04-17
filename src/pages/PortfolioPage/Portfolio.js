import React, { useState } from 'react';
import {
   Card, 
   CardContent, 
   CardMedia, 
   Typography, 
   Link, 
   Box, 
   CardActionArea, 
   Button, 
   Grid, 
   Container,
   useTheme, 
   Switch} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkIcon from '@mui/icons-material/Link';
import { projects } from '../../components/PortfolioProject/PortfolioProject';
import { useThemeContext } from '../../components/Theme/theme';



const Portfolio = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const [showMore, setShowMore] = useState(Array(projects.length).fill(false));

  const toggleShowMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
  <Container
    maxWidth='xxl' 
    disableGutters
    sx={{
      backgroundColor: isDark ? "rgba(14, 1, 82, 0.97)"  :  'rgba(255, 254, 228, 1)'
    }}>
      <Button sx={{ position: 'absolute', right : 5, top: 60}}>
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
       <Typography variant="h4" align="center" gutterBottom pt={4}sx={{ color: isDark ? "white"  :  'black'}}>
        My Portfolio
      </Typography>
    <Grid 
      container 
      spacing={2} 
      justifyContent="center"
      p={5}
    >
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ m: 2, maxWidth: '100%', position: 'relative' }}>
            <CardActionArea 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.5s',
                  },
                  '&:hover:before': {
                    opacity: 1,
                  },
                }}>
              <CardMedia
                component="img"
                height="220"
                image={project.photo}
                alt={project.title}
              />
              <Box 
                sx={{
                  width: '80%',
                  position: 'absolute',
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  p:1,
                  backgroundColor: 'rgba(243, 133, 0, 1)' ,
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                }}
              >
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="div" 
                  sx={{ color: theme.palette.common.white, m:1 }}
                >
                  {project.title}
                </Typography>
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ color: theme.palette.common.white }}
                >
                  <LinkIcon />
                </Link>
              </Box>
            </CardActionArea>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {showMore[index] ? project.text : `${project.text.substring(0, 100)}...`}
              </Typography>
              <Button onClick={() => toggleShowMore(index)} sx={{textTransform: 'capitalize'}}>
                {showMore[index] ? 'Show Less' : 'Show More'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>
   
  );
};

export default Portfolio;