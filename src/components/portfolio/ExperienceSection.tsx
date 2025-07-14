import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { FloatingCard } from './FloatingCard'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import internshipImage from '@/assets/internship-rebel.jpg'

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'Rebel Minds, Gandhinagar',
    period: 'May 2025 - July 2025',
    image: internshipImage,
    achievements: [
      'Built Wink Platform - automated coding contest system with microservices',
      'Developed Gormish food delivery platform serving 50+ customers',
      'Integrated LLM (Gemini 2.5 Flash) for intelligent code analysis',
      'Created React Native apps deployed to Google Play Store'
    ],
    position: [-3, 1, 0] as [number, number, number]
  },
  {
    title: 'Web Development Intern',
    company: 'Jarurat Care Foundation, Mumbai', 
    period: 'January 2025 - May 2025',
    image: internshipImage,
    achievements: [
      'Contributed to chatbot backend for cancer patient accessibility',
      'Redesigned UI components using Figma-based designs',
      'Fixed UI/UX bugs and optimized site performance',
      'Collaborated with tech team using structured workflows'
    ],
    position: [3, -1, 0] as [number, number, number]
  }
]

export const ExperienceSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D>
          {experiences.map((exp, index) => (
            <FloatingCard
              key={index}
              position={exp.position}
              title={exp.title}
              description={exp.company}
              image={exp.image}
              scale={1.3}
            />
          ))}
        </Scene3D>
      </div>

      {/* Experience Content */}
      <div className="relative z-10 p-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "var(--shadow-glow)" }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">{exp.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="w-full bg-gradient-primary text-primary-foreground py-2 px-4 rounded-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                  <ExternalLink size={14} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}