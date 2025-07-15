import { motion } from 'framer-motion'
import { Home, User, Briefcase, FolderOpen, Award, Mail } from 'lucide-react'

interface Navigation3DProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navigationItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'activities', label: 'Activities and Achievements', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export const Navigation3D = ({ activeSection, onSectionChange }: Navigation3DProps) => {
  return (
    <motion.nav 
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex flex-col space-y-4">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                group relative p-3 rounded-full border-2 backdrop-blur-sm transition-all duration-300
                ${isActive 
                  ? 'bg-primary border-primary shadow-glow' 
                  : 'bg-card/70 border-border hover:border-primary hover:bg-primary/20'
                }
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon 
                size={20} 
                className={`
                  transition-colors duration-300
                  ${isActive ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary'}
                `}
              />
              
              {/* Tooltip */}
              <motion.span
                className="absolute left-full ml-4 px-3 py-1 bg-card border border-border rounded-md text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}