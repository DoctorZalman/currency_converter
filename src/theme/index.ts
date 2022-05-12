import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0F131A',
    },
    primary: {
      main: '#19283B',
      dark: '#292e35',
      light: '#7FB7FF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#97C0FC',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
