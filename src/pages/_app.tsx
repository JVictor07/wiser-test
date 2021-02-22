import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import 'react-toastify/dist/ReactToastify.css';
import store from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        autoClose={5000}
        pauseOnFocusLoss
        newestOnTop={false}
        position="top-right"
        hideProgressBar={false}
      />
    </ThemeProvider>
  </Provider>
);

export default MyApp;
