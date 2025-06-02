"use client";
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <AppBar position="static" color="primary" sx={{ marginBottom: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: '12px' }}
            >
              <path
                d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                fill="white"
              />
            </svg>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 4,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
              }}
            >
              GLOBAL SHIPPING
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button
              color="inherit"
              component={Link}
              href="/"
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                fontWeight: pathname === '/' ? 700 : 500,
                borderBottom: pathname === '/' ? '3px solid white' : 'none',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              component={Link}
              href="/tracking"
              sx={{
                my: 2,
                mx: 1,
                color: 'white',
                display: 'block',
                fontWeight: pathname === '/tracking' ? 700 : 500,
                borderBottom: pathname === '/tracking' ? '3px solid white' : 'none',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Tracking
            </Button>
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ 
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(255, 111, 0, 0.2)',
                }
              }}
            >
              Contact Sales
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
