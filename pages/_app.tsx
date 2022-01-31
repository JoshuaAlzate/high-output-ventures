import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/nav-bar';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';
import allReducers from '../redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function MyApp({ Component, pageProps }: AppProps) {
  let store = createStore(allReducers, composeWithDevTools());
  return (
    <Provider store={store}>
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
