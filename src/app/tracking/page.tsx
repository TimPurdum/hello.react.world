import styles from "../page.module.css";
import { Paper, Typography, TextField, Button, Box, Container } from '@mui/material';
import Client from '../client';

export default function TrackingPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container maxWidth="lg">
          <Paper 
            elevation={0} 
            sx={{ 
              p: 0, 
              borderRadius: '8px', 
              overflow: 'hidden',
              background: 'linear-gradient(to right, #0d47a1, #1976d2)',
              mb: 4,
              color: 'white',
              position: 'relative'
            }}
          >
            <Box sx={{ 
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '600px',
              position: 'relative',
              zIndex: 1
            }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
                Track Your Shipment
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                Enter your tracking number to get real-time updates on your shipment status and location.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <TextField
                  placeholder="Enter tracking number"
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.9)',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { border: 'none' },
                    }
                  }}
                />
                <Button 
                  variant="contained" 
                  color="secondary"
                  size="large"
                  sx={{ 
                    px: 4, 
                    fontWeight: 600, 
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px 0 rgba(255, 111, 0, 0.39)'
                  }}
                >
                  Track Now
                </Button>
              </Box>
            </Box>
            
            {/* Decorative background elements */}
            <Box sx={{ 
              position: 'absolute',
              right: { xs: -100, md: 0 },
              bottom: { xs: -50, md: 0 },
              opacity: 0.1,
              transform: 'rotate(-10deg)',
              width: '400px',
              height: '400px'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="white"/>
              </svg>
            </Box>
          </Paper>

          <Paper sx={{ height: 500, width: `100%` }}>
            <Client />
          </Paper>


          <Paper elevation={0} sx={{ p: 4, borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ mb: 3, color: 'primary.dark', fontWeight: 600 }}>
              Why Choose Our Shipping Services?
            </Typography>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
              gap: 4,
              mb: 4
            }}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="white"/>
                  </svg>
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Reliability</Typography>
                <Typography variant="body2" color="text.secondary">
                  On-time delivery with over 99% success rate, ensuring your packages arrive when expected.
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="white"/>
                  </svg>
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Security</Typography>
                <Typography variant="body2" color="text.secondary">
                  Advanced tracking and secure handling procedures keep your items safe throughout transport.
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" fill="white"/>
                  </svg>
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>Care</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicated customer service team and careful handling ensure your items arrive in perfect condition.
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ textAlign: 'center', pt: 2 }}>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                sx={{ px: 4, fontWeight: 600 }}
              >
                Learn About Our Services
              </Button>
            </Box>
          </Paper>
        </Container>
      </main>
    </div>
  );
}
