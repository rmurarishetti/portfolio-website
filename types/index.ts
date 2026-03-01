export type ProjectType = 'AI' | 'Software' | 'Engineering' | 'Medtech' | 'Research'

export interface ProjectLink {
  name: string
  href: string
}

export interface ProjectMedia {
  video?: {
    href: string
    alt: string
    aspectRatio: number
  }
  image?: {
    href: string
    alt: string
  }
}

export interface ProjectDocument {
  name: string
  href: string
}

export interface ProjectContributor {
  name: string
  linkedin: string
  gender: 'male' | 'female'
}

export interface Project {
  id: string
  name: string
  subtitle: string
  startDate: string       // ISO string "YYYY-MM"
  endDate: string | null  // ISO string "YYYY-MM" or null
  featured: boolean
  type: ProjectType
  tags: string[]
  link: ProjectLink
  thumbnail: {
    alt: string
    href: string
  }
  media: ProjectMedia[]
  documents: ProjectDocument[]
  people: ProjectContributor[]
  description: string[]
}

export interface ExperienceRole {
  position: string
  startDate: string       // ISO "YYYY-MM"
  endDate: string | null  // ISO "YYYY-MM" or null (null = current)
  description: string | string[]
  skills: string[]
}

export interface Experience {
  id: string
  company: string
  logo: string
  location: string
  link: string
  roles: ExperienceRole[]
}

export interface Education {
  id: string
  institution: string
  logo: string
  location: string
  link: string
  degree: string
  startDate: string
  endDate: string | null
  highlights: string[]
  skills: string[]
}

export interface TravelCity {
  city: string
  country: string
  countryEmoji: string
  coordinates: [number, number]
  startDate: string
  endDate?: string
  type: 'home' | 'visited'
  description?: string
  travelledFrom?: string
  images?: string[]
}

export interface NavItem {
  title: string
  link: string
  external?: boolean
}

export interface SkillsData {
  languages: string[]
  frameworks: string[]
  infrastructure: string[]
  ai: string[]
  certifications: string[]
}
