import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '../components/layout/navs';
import Footer from '../components/layout/Footer';
import { useState, useEffect } from "react"


function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
      <Navbar />
      {isMounted && <Component {...pageProps} />}
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
