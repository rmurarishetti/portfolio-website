import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from "react";
import { SessionProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar';
import { Navbar, Footer } from '../components/layout'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        themes={['light', 'dark']}
        defaultTheme={'system'}
        enableSystem >
        <NextNProgress
          color="#6F3BFF"
          startPosition={0.3}
          stopDelayMs={200}
          height={6}
          showOnShallow />
        <Navbar />
        <div className="container">
          {isMounted &&
            <main className="main">
              <Component {...pageProps} />
            </main>}
        </div>
        <Footer />
      </ThemeProvider>
      <Analytics />
    </SessionProvider>
  )
}

export default MyApp
