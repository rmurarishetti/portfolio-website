import '../styles/globals.scss'
import { useState, useEffect } from "react"
import { ThemeProvider } from 'next-themes'
import { Navbar, Footer } from '../components/layout'

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
      <Navbar />
      <div className="container">
        <main className="main">
          {isMounted && <Component {...pageProps} />}
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
