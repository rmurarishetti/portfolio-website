import '../styles/globals.scss'
import { useState, useEffect } from "react"
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics, event } from "nextjs-google-analytics";
import NextNProgress from 'nextjs-progressbar';
import { Navbar, Footer } from '../components/layout'
import { useRouter } from 'next/router'

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
        <NextNProgress color="#6F3BFF" startPosition={0.3} stopDelayMs={200} height={6} showOnShallow={true} />
        <Navbar />
        <div className="container">
          {isMounted &&
            <main className="main">
              <Component {...pageProps} />
            </main>}
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
