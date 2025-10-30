import { Card, CardContent, Typography } from '@mui/material';

export default function Education() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Education</Typography>
        <Typography variant="body2" color="text.secondary">
          B.A. in Computer Science — Macalester College -  Sep 2020 - May 2023
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Completed Tech Elevator Java React Boot camp - Apr 2024 - Apr 2025
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Completed Revature Java Full Stack Boot camp - 2024 - 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          M.S.C in computer science - University of Illinois Urbana-Champaign - 2025 - Present
        </Typography>
      </CardContent>
    </Card>
  );
}
