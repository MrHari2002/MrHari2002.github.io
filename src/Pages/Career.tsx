import { Box, Typography, Container } from '@mui/material';

export default function Career() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Career
        </Typography>
        <Typography variant="body1">
          My professional journey and experience...
        </Typography>
      </Box>
    </Container>
  );
}
