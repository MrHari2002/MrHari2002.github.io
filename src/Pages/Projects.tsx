import { Box, Typography, Container } from '@mui/material';

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1">
          Showcase of my work and projects...
        </Typography>
      </Box>
    </Container>
  );
}
