import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(255,255,255,0.6)',
      light: '#f06292',
      dark: '#98345d',
    },
    background: {
      default: '#880e4f',
    },
    text: {
      primary: 'rgba(255,255,255,0.7)',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    divider: 'rgba(225,225,225, 0.25)',
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#880e4f',
      light: '#f8bbd0',
      dark: '#f8bbd0',
    },
    background: {
      default: '#ea83a3',
    },
    text: {
      primary: '#880e4f',
      secondary: '#880e4f',
      disabled: 'rgba(0,0,0,0.38)',
    },
    divider: 'rgba(0,0,0,0.25)',
  },
});
