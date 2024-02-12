import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeDataProvider } from './context/theme-context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeDataProvider>
      <CssBaseline />
      <App />
    </ThemeDataProvider>
  </React.StrictMode>
);
