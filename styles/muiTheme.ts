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
};

export const badgerHubTheme = createTheme(badgerHubThemeOptions);
