"use client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Shipping company branded colors
const shippingTheme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Deep blue - trustworthy, professional
      light: '#5472d3',
      dark: '#002171',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6f00', // Vibrant orange - energy, action
      light: '#ffa040',
      dark: '#c43e00',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#37474f',
      secondary: '#546e7a',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '8px 16px',
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0 6px 10px rgba(13, 71, 161, 0.2)',
          },
        },
        containedSecondary: {
          '&:hover': {
            boxShadow: '0 6px 10px rgba(255, 111, 0, 0.2)',
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
        columnHeader: {
          backgroundColor: 'rgba(13, 71, 161, 0.04)',
          '&:hover': {
            backgroundColor: 'rgba(13, 71, 161, 0.08)',
          },
        },
        columnHeaderTitle: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={shippingTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
