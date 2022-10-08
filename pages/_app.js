import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={true} defaultTheme={'system'} >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
