import type { Metadata } from 'next'
import AboutContent from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Engineer from Hyderabad, graduated from SUTD with Highest Distinction. Building agentic AI systems at CloudsineAI.',
}

export default function AboutPage() {
  return <AboutContent />
}
