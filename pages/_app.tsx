import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

const theme = extendTheme({
  fonts: {
    body: '\'Playfair Display\', sans-serif',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp
