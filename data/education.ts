import type { Education } from '@/types'

export const eduData: Education[] = [
  {
    id: 'sutd',
    institution: 'Singapore University of Technology and Design (SUTD)',
    logo: '/images/icons/logos/sutd_logo.jpeg',
    location: 'Singapore',
    link: 'https://www.sutd.edu.sg/',
    degree: 'Bachelor of Engineering in Computer Science and Design',
    startDate: '2020-09',
    endDate: '2024-05',
    highlights: [
      'Honours with Highest Distinction — GPA 4.57/5.0',
      'Specialization in Software Engineering and System Design',
      'Minor in Design, Technology and Society',
      'Honors List: Top 10% (Freshman and Sophomore years)',
      'Exchange semester at University of Maryland, College Park (Spring 2023)',
      'Courses: Distributed Systems, Networks, NLP, Machine Learning, Software Engineering, Product Design',
    ],
    skills: [
      'Python', 'Java', 'TypeScript', 'Software Engineering', 'System Design',
      'Machine Learning', 'Full Stack', 'Distributed Systems', 'NLP',
    ],
  },
  {
    id: 'umd',
    institution: 'University of Maryland, College Park',
    logo: '/images/icons/logos/umd_logo.png',
    location: 'Maryland, USA',
    link: 'https://umd.edu/',
    degree: 'Exchange Student',
    startDate: '2023-01',
    endDate: '2023-05',
    highlights: [
      'Courses: Parallel Computing, Computer Networks, Natural Language Processing, Energy Crisis',
      'Focus on LLMs, HPC, and distributed networking',
    ],
    skills: ['LLMs', 'ChatGPT', 'HPC', 'Networks', 'NLP'],
  },
  {
    id: 'fiitjee',
    institution: 'FIITJEE Miyapur',
    logo: '',
    location: 'Hyderabad, India',
    link: 'https://www.fiitjee.com/',
    degree: 'JEE Mains & Advanced Preparation',
    startDate: '2018-06',
    endDate: '2020-05',
    highlights: [
      'Two years that felt like a detention camp — but taught me how to re-evaluate life',
      'Met some of the most talented and driven people I\'ve ever known',
      'JEE Mains: 98.5 percentile overall · 99.6 percentile in Chemistry',
      'Telangana State Board Intermediate: 98%',
      'SAT: 1470 · Math: 800 · Chemistry Subject: 800 · Math Subject: 800 · TOEFL: 98',
    ],
    skills: ['Physics', 'Mathematics', 'Chemistry', 'Resilience'],
  },
  {
    id: 'dps',
    institution: 'Delhi Public School, Hyderabad — Khajaguda Campus',
    logo: '',
    location: 'Hyderabad, India',
    link: 'https://dpshyderabad.in/',
    degree: 'Schooling (K–12)',
    startDate: '2007-06',
    endDate: '2018-05',
    highlights: [
      'Home for over a decade — made lifelong friends here',
      'House Captain of Topaz House (2017–18)',
      '10th Class: 94.4%',
      'Where curiosity turned into ambition',
    ],
    skills: [],
  },
]

export const certifications = [
  {
    name: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    logo: '/images/icons/logos/aws_logo.png',
    year: '2024',
    link: 'https://aws.amazon.com/certification/certified-developer-associate/',
  },
]
