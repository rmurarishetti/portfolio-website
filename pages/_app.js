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

  const customProgressBarCss = `
    #nprogress .bar {
      border-radius: 0px 100px 100px 0px;
      box-shadow: var(--shadow-glow);
    }
    #nprogress .peg {
      box-shadow: none;
    }
  `;

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        themes={['light', 'dark']}
        defaultTheme={'system'}
        enableSystem >
        <NextNProgress
          color="var(--color-accent-primary)"
          startPosition={0.3}
          stopDelayMs={200}
          options={{ showSpinner: false }}
          height={4}
          showOnShallow
          transformCSS={(css) => {
            css += customProgressBarCss
            console.log(css)
            return <style>{css}</style>;
          }}
        />
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
