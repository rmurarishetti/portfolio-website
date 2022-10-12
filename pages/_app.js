import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '../components/layout/navs';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
