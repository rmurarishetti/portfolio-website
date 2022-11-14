import '../styles/globals.scss'
import { useState, useEffect } from "react"
import { ThemeProvider } from 'next-themes'
import { Navbar, Footer } from '../components/layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
      <Navbar />
      <div className="container">
        {isMounted &&
          <main className="main">
            <Component {...pageProps} />
          </main>}
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
