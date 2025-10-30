import { Card, CardContent, Typography } from '@mui/material';

export default function CurrentProject() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Current Project</Typography>
        <Typography variant="body2" color="text.secondary">
          Building a personal portfolio and experimenting with RSBuild + React.
        </Typography>
      </CardContent>
    </Card>
  );
}
