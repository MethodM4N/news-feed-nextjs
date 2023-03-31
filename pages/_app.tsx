import Head from 'next/head';
import 'macro-css';
import { AppProps } from 'next/app';

import { Header } from '../components/Header/Header';
import { theme } from '../theme';

import '../styles/globals.scss';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true));
  return (
    //@ts-ignore
    <div style={{ visibility: !mounted ? 'hidden' : '' }}>
      <Head>
        {/* @ts-ignore */}
        <meta keywords="новости, next.js, news"></meta>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
