import { createTheme, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router';

import router from './routes';

const theme = createTheme({
  cssVariables: {
    cssVarPrefix: 'js',
  },
  typography: {
    fontFamily: `'HarmonyOS_Sans_Regular', 'PingFangSC-Regular', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  palette: {
    primary: {
      main: '#39c5bb',
      dark: '#2a9d8f',
    },
    secondary: {
      main: '#c06f98',
      dark: '#a44f7b',
    },
    warning: {
      main: '#ebb10d',
      dark: '#d89c0e',
    },
    error: {
      main: '#f03752',
      dark: '#d9304f',
    },
    success: {
      main: '#2ecc71',
      dark: '#27ae60',
    },
  },
});

function App() {
  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
