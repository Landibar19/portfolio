import { Grid, Typography, Button, Container, Box, Switch } from '@mui/material';
import AboutUsContent, { skills, ImageContent } from '../../components/AboutUsContent/AboutUsContent';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '../../components/Theme/theme';



const AboutUs = () => {
const {isDark, toggleTheme} = useThemeContext();
const initialShowMoreState = AboutUsContent.map(() => false);
const [showMore, setShowMore] = useState(initialShowMoreState);

const toggleShowMore = index => {
  const newShowMoreState = [...showMore];
  newShowMoreState[index] = !newShowMoreState[index];
  setShowMore(newShowMoreState);
};
  return (
    <Container 
    maxWidth='xxl' 
    disableGutters 
    sx={{
      backgroundColor: isDark ? "rgba(14, 1, 82, 0.97)"  :  'rgba(255, 254, 228, 1)',
      pt:'8%'
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
      <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%',
        color: isDark ? "white"  :  'black'
         }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: '5%' }}>I'm Developer</Typography>
        <Typography variant="body1" sx={{ width: '70%', textAlign: 'justify', mb:"5%" }}>
      
          I have become interested in this field since always and coding is the perfect job for me. 
          My knowledges are focused in developing applications with React Js. Helping tech-constrained 
          creative teams pitch & deliver more ambitious brand activations and experiential software 
          development apps to their clients. I’ve always been someone who has both a creative and a 
          logical side. I could use my creative side to design and my logical side to code. As a bonus, 
          being both designer and developer allows me to make sure no detail is lost in translation.
        </Typography>
      </Box>
      <Grid container item xs={12} direction="row" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Container 
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            color: isDark ? "white"  :  'black'
            }}>
            <Typography variant="h4">Skills</Typography>
            <Typography variant="body1">
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          {ImageContent.map((image, id) => (
            <img key={id} src={image.image} alt={image} 
            style={{ 
              width: '20%',
              height:'50%', 
              borderRadius: '100%', 
              border: '2px solid rgba(243, 133, 0, 1)',
              margin:3
            }} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
      <Grid container spacing={2} sx={{ textAlign: 'center', justifyContent: 'center', p:4 }}>
        {AboutUsContent.map((item, index) => (
          <Grid item xs={10} sm={5} md={3} key={item.title}>
            <Card 
              sx={{
                border: '2px solid rgba(243, 133, 0, 1)', 
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',  
                margin: '1%',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: isDark ? "rgba(14, 1, 82, 0.97)"  :  "rgba(255, 254, 228, 1)",
                color: isDark ? "white"  :  'black'
              }}
            >
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" sx={{ textAlign: 'justify', margin: '5%' }}>
                  {showMore[index] ? item.text : `${item.text.substring(0, 90)}...`}
                </Typography>
                <Button onClick={() => toggleShowMore(index)} sx={{ textTransform: 'capitalize' }}>
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;