import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import HengruiJiaProfile from "./../../Assets/images/HengruiJia.png";

export default function Profile() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ width: 72, height: 72 }} src={HengruiJiaProfile} />
          <Box>
            <Typography variant="h6">Hengrui Jia</Typography>
            <Typography variant="body2" color="text.secondary">
              Software Engineer at Wells Fargo
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
