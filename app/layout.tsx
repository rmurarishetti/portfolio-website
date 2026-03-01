import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBubble from '@/components/ai/ChatBubble'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rohit Murarishetti — Lead Software Engineer',
    template: '%s | Rohit Murarishetti',
  },
  description:
    'Lead Software Engineer building agentic AI governance platforms, security systems, and cloud infrastructure. Based in Singapore.',
  keywords: ['Rohit Murarishetti', 'Software Engineer', 'Agentic AI', 'CloudsineAI', 'Singapore', 'SUTD'],
  authors: [{ name: 'Rohit Murarishetti', url: 'https://rohitmurarishetti.com' }],
  creator: 'Rohit Murarishetti',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitmurarishetti.com',
    siteName: 'Rohit Murarishetti',
    title: 'Rohit Murarishetti — Lead Software Engineer',
    description:
      'Lead Software Engineer building agentic AI governance platforms, security systems, and cloud infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Murarishetti — Lead Software Engineer',
    description:
      'Lead Software Engineer building agentic AI governance platforms, security systems, and cloud infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBubble />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
