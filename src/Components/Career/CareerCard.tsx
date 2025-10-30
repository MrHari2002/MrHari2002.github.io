import { Card, CardContent, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function CareerCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Career</Typography>
        <Card
          component={RouterLink}
          to="/career"
          sx={{ textDecoration: 'none', color: 'inherit', mt: 2, cursor: 'pointer', '&:hover': { boxShadow: 6 } }}
          aria-label="Career details"
        >
          <CardContent >
            <Typography variant="body2" color="text.secondary">
              View my professional experience and roles.
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
