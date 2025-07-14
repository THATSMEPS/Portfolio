import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { RotatingGeometry } from './RotatingGeometry'
import { Trophy, Award, Calendar, Users, Code, BookOpen } from 'lucide-react'
import hackathonImage from '@/assets/hackathon-ssip.jpg'

const achievements = [
  {
    category: 'Hackathons',
    icon: Trophy,
    items: [
      {
        title: 'SSIP Hackathon',
        description: 'Developed Wi-Fi based attendance app with geo-fencing prototype',
        date: 'November 2023',
        team: '5 members'
      },
      {
        title: 'Kharagpur Data Science Hackathon', 
        description: 'Built ML model for research paper classification',
        date: 'January 2025',
        team: 'Solo project'
      }
    ]
  },
  {
    category: 'Education',
    icon: BookOpen,
    items: [
      {
        title: 'BTech ICT - CGPA 8.33',
        description: 'Pandit Deendayal Energy University, Gandhinagar',
        date: 'Expected May 2026',
        team: 'Top 15% of class'
      }
    ]
  },
  {
    category: 'Certifications',
    icon: Award,
    items: [
      {
        title: 'TATA Data Visualization',
        description: 'Business Insights certification',
        date: 'August 2024',
        team: 'Professional'
      },
      {
        title: 'IBM AI/ML with Python',
        description: 'Deep Learning, Neural Networks, Computer Vision',
        date: 'May - July 2023',
        team: 'Advanced'
      },
      {
        title: 'Jio Institute AI Trek',
        description: 'AI and Data Science Tech Trek',
        date: 'July 2024',
        team: 'Industry'
      }
    ]
  },
  {
    category: 'Leadership',
    icon: Users,
    items: [
      {
        title: 'Python 101 Workshop',
        description: 'Conducted 2-day comprehensive workshop with team ENCODE',
        date: '2023',
        team: 'Team Lead'
      }
    ]
  }
]

export const AchievementsSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D>
          <RotatingGeometry position={[-4, 2, -2]} type="sphere" color="#f59e0b" scale={0.6} />
          <RotatingGeometry position={[4, -2, -1]} type="torus" color="#10b981" scale={0.8} />
          <RotatingGeometry position={[0, 3, -3]} type="box" color="#8b5cf6" scale={0.5} />
        </Scene3D>
      </div>

      {/* Achievements Content */}
      <div className="relative z-10 p-8 h-full overflow-y-auto">
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
            Achievements & Recognition
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "var(--shadow-glow)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                      >
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={12} />
                            <span>{item.team}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Featured Image */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative inline-block">
              <img
                src={hackathonImage}
                alt="Hackathon Experience"
                className="rounded-xl shadow-glow max-w-md w-full mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-glow rounded-xl opacity-30"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}