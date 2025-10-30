import { Box, Typography, Container } from '@mui/material';
import Profile from '../Components/Profile/Profile';
import Education from '../Components/Education/Education';
import Hobby from '../Components/Hobby/Hobby';
import CurrentProject from '../Components/CurrentProject/CurrentProject';
import CareerCard from '../Components/Career/CareerCard';
import Life from '../Components/Life/Life';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Box
          component="section"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 2,
            mt: 2,
          }}
        >
          {[
            <Profile key="profile" />,
            <Education key="education" />,
            <Hobby key="hobby" />,
            <CurrentProject key="current-project" />,
            <CareerCard key="career" />,
            <Life key="life" />,
          ].map((Component, idx) => (
            <Box key={idx}>{Component}</Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
