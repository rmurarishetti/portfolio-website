import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
