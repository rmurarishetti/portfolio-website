import HeroSection from '@/components/sections/HeroSection'
import PortfolioAgentSection from '@/components/sections/PortfolioAgentSection'
import ExperienceSectionHome from '@/components/sections/ExperienceSectionHome'
import EducationSectionHome from '@/components/sections/EducationSectionHome'
import AgentShowcaseTeaser from '@/components/sections/AgentShowcaseTeaser'
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioAgentSection />
      <ExperienceSectionHome />
      <EducationSectionHome />
      <AgentShowcaseTeaser />
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  )
}
