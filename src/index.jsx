import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import themeLight from './theme/theme-light';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
