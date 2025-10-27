import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Stack,
  SvgIcon,
} from '@mui/material';

// Inline SVG icons to avoid adding @mui/icons-material as a dependency
const GitHubIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </SvgIcon>
);

const LinkedInIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </SvgIcon>
);

const EmailIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </SvgIcon>
);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} MrHari2002. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton
              component={Link}
              href="https://github.com/MrHari2002"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/hengrui-jia/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:hari20020511@gmail.com"
              color="inherit"
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
