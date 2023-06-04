import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import { MantineProvider } from '@mantine/core';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';

initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>  
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            loader: 'oval',
          }}
        >
          
            <Component {...pageProps} />
          
        </MantineProvider>
      </UserProvider>
  );
}
