import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation3D } from './Navigation3D'
import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ProjectsSection } from './ProjectsSection'
import { ExperienceSection } from './ExperienceSection'
import { AchievementsSection } from './AchievementsSection'
import { ContactSection } from './ContactSection'

type Section = 'hero' | 'about' | 'experience' | 'projects' | 'achievements' | 'contact'

export const Portfolio3D = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    setActiveSection(section as Section)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.h2>
        </motion.div>
      </div>
    )
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection onNavigate={handleSectionChange} />
      case 'about':
        return <AboutSection />
      case 'projects':
        return <ProjectsSection />
      case 'experience':
        return <ExperienceSection />
      case 'achievements':
        return <AchievementsSection />
      case 'contact':
        return <ContactSection />
      default:
        return <HeroSection onNavigate={handleSectionChange} />
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Navigation */}
      <Navigation3D 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Floating Action Button for Resume Download */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-gradient-primary rounded-full shadow-glow hover:shadow-neon transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={() => {
          // Trigger resume download
          const link = document.createElement('a')
          link.href = '/pratham-shah-resume.pdf' // You would need to add this file to public folder
          link.download = 'Pratham_Shah_Resume.pdf'
          link.click()
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-primary-foreground group-hover:scale-110 transition-transform"
        >
          <path 
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="currentColor" 
            fillOpacity="0.1"
          />
          <polyline 
            points="14,2 14,8 20,8" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="16" 
            y1="13" 
            x2="8" 
            y2="13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <line 
            x1="16" 
            y1="17" 
            x2="8" 
            y2="17" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <polyline 
            points="10,9 9,9 8,9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </motion.button>
    </div>
  )
}