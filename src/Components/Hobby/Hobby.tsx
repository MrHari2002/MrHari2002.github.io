import { Card, CardContent, Typography } from '@mui/material';

export default function Hobby() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Hobby</Typography>
        <Typography variant="body2" color="text.secondary">
          Photography, hiking, chess, and open-source tinkering.
        </Typography>
      </CardContent>
    </Card>
  );
}
