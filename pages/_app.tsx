import { ThemeProvider } from '@mui/material';
import 'styles/global.css';
import { badgerHubTheme } from 'styles/muiTheme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={badgerHubTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
