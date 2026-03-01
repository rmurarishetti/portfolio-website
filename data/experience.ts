import type { Experience } from '@/types'

export const xpData: Experience[] = [
  {
    id: 'cloudsineai',
    company: 'CloudsineAI',
    logo: '/images/icons/logos/cloudsineai_logo.png',
    location: 'Singapore',
    link: 'https://cloudsine.ai',
    roles: [
      {
        position: 'Lead Software Engineer',
        startDate: '2025-03',
        endDate: null,
        description: [
          'Spearheading development of an agentic AI governance platform that provides observability over system topology and visualizes threat attack graphs across agentic systems, agnostic of framework or platform',
          'Led product engineering and DevOps for Weborion Monitor (flagship SaaS product), supporting $150K+ in closed enterprise contracts through high availability and technical client engagement',
          'Led DevOps initiatives for Weborion SaaS platform, achieving 99.95% uptime through CI/CD pipelines and infrastructure-as-code practices',
          'Optimized AWS cloud infrastructure, delivering $60K+ annual cost savings (25% reduction) while maintaining high-performance standards for production workloads',
          'Architected GenAI-powered security firewall for IoT/RTSP protocols using Go and ModSecurity; built agentic AI vulnerability triage system that automates threat assessment workflows',
        ],
        skills: ['Go', 'TypeScript', 'AWS', 'Docker', 'CI/CD', 'GenAI', 'ModSecurity', 'Agentic AI', 'React', 'Next.js'],
      },
    ],
  },
  {
    id: 'itrust-swe',
    company: 'iTrust — Centre for Research in Cyber Security, SUTD',
    logo: '/images/icons/logos/sutd_logo.jpeg',
    location: 'Singapore',
    link: 'https://itrust.sutd.edu.sg/',
    roles: [
      {
        position: 'Software Engineer (Full Stack)',
        startDate: '2024-08',
        endDate: '2025-02',
        description: [
          'Collaborated with cross-functional research teams to develop Operational Technology data visualization platform using React, Next.js, and ZeroMQ, enhancing real-time threat detection for critical infrastructure',
          'Co-authored research paper on real-time detection of data manipulation attacks in industrial control systems, published in the International Journal of Critical Infrastructure Protection',
          'Delivered software solutions for CISS 2024 and Lockedshields CCDCOE — the world\'s largest live-fire cyber exercise — supporting critical infrastructure defense across 41 nations',
        ],
        skills: ['React', 'Next.js', 'ZeroMQ', 'Python', 'Cybersecurity', 'ICS/SCADA', 'TypeScript'],
      },
    ],
  },
  {
    id: 'br',
    company: 'Broadridge Financial Solutions',
    logo: '/images/icons/logos/br_logo.png',
    location: 'Hyderabad, India',
    link: 'https://www.broadridge.com/',
    roles: [
      {
        position: 'Software Engineering Intern',
        startDate: '2023-06',
        endDate: '2023-09',
        description: [
          'Built a crypto asset disclosure platform using Next.js for Global Innovation Team, designing the data model and API layer to streamline regulatory reporting for clients with crypto holdings',
          'Coordinated technical logistics for a global hackathon with 2000+ participants, managing submission platforms and API support for 1200+ teams',
        ],
        skills: ['Next.js', 'TypeScript', 'Web3', 'Alchemy', 'Product Design'],
      },
    ],
  },
  {
    id: 'ncs',
    company: 'NCS Group',
    logo: '/images/icons/logos/ncs_logo.jpeg',
    location: 'Singapore',
    link: 'https://www.ncs.co/en-sg/',
    roles: [
      {
        position: 'Software Engineering Intern',
        startDate: '2022-08',
        endDate: '2022-12',
        description: [
          'Developed enterprise-grade employee management application for DSTA using Angular, TypeScript, Java, Spring Boot, and MySQL; awarded Intern Ambassador of the Month (November 2022)',
        ],
        skills: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'REST APIs'],
      },
    ],
  },
  {
    id: 'itrust-intern',
    company: 'iTrust — Centre for Research in Cyber Security, SUTD',
    logo: '/images/icons/logos/sutd_logo.jpeg',
    location: 'Singapore',
    link: 'https://itrust.sutd.edu.sg/',
    roles: [
      {
        position: 'Software Engineering Intern (Part Time)',
        startDate: '2021-10',
        endDate: '2022-03',
        description: 'Worked on a cyber fusion platform with unified security functions to protect critical infrastructure.',
        skills: ['Python', 'React.js', 'Cybersecurity', 'Machine Learning'],
      },
    ],
  },
  {
    id: 'ihpc',
    company: 'A*Star — Institute of High Performance Computing',
    logo: '/images/icons/logos/astar_logo.jpeg',
    location: 'Singapore',
    link: 'https://www.a-star.edu.sg/ihpc',
    roles: [
      {
        position: 'GUI Intern',
        startDate: '2021-05',
        endDate: '2021-08',
        description: 'Built interactive graphical user interfaces and dashboards for scientific weather insights.',
        skills: ['GUI', 'QtQML', 'Python'],
      },
    ],
  },
]
