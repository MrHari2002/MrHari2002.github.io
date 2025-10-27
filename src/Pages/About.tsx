import { Box, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Welcome to my portfolio! I'm Hengrui Jia, a passionate developer...
        </Typography>
      </Box>
    </Container>
  );
}
