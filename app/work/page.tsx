import type { Metadata } from 'next'
import WorkPageContent from '@/components/work/WorkPageContent'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Agentic AI governance platforms, GenAI security systems, and published research on ICS attack detection. Lead Software Engineer at CloudsineAI.',
}

export default function WorkPage() {
  return <WorkPageContent />
}
