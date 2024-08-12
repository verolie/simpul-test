'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#333333', // Set the default background color
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    // ! update app bar to white
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#fff',
        },
      },
    },
    // ! remove ripple effect when pressing button
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true,
      },
    },
  },
});

export default theme;
