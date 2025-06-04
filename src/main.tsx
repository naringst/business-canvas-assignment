import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { ConfigProvider } from 'antd';
import { antdTheme } from './styles/antdTheme';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ConfigProvider theme={antdTheme}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
