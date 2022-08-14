import { createTheme } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Roboto Mono', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: grey[500],
      contrastText: '#fff',
    },
    secondary: {
      main: blueGrey[500],
      contrastText: '#fff',
    },
    background: {
      default: blueGrey[50],
      paper: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: ['Roboto', 'Roboto Mono', 'sans-serif'].join(','),
        },
      },
    },
  },
});
