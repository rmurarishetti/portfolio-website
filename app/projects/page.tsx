import type { Metadata } from 'next'
import ProjectsClient from '@/components/projects/ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of software engineering, AI, and systems projects by Rohit Murarishetti.',
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
