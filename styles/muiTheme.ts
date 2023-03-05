import { createTheme, ThemeOptions } from '@mui/material/styles';

const badgerHubThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#363636',
    },
    secondary: {
      main: '#fbc02d',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
};

export const badgerHubTheme = createTheme(badgerHubThemeOptions);
