import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { RotatingGeometry } from './RotatingGeometry'
import { Code, Database, Brain, Cloud, Smartphone, Globe } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
    color: '#0ea5e9'
  },
  {
    category: 'Backend',
    icon: Database,
    technologies: ['Node.js', 'Express.js', 'FastAPI', 'Prisma ORM', 'JWT', 'Socket.io'],
    color: '#10b981'
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
    color: '#f59e0b'
  },
  {
    category: 'AI/ML',
    icon: Brain,
    technologies: ['PyTorch', 'TensorFlow', 'Computer Vision', 'NLP', 'CUDA', 'Transfer Learning'],
    color: '#8b5cf6'
  },
  {
    category: 'DevOps',
    icon: Cloud,
    technologies: ['Docker', 'GCP', 'AWS', 'Git', 'Vercel', 'Render'],
    color: '#ef4444'
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'Expo', 'Google Play Store', 'Firebase Auth', 'Push Notifications'],
    color: '#06b6d4'
  }
]

export const AboutSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D>
          <RotatingGeometry position={[-4, 2, -2]} type="torus" color="#0ea5e9" scale={0.7} />
          <RotatingGeometry position={[4, -2, -1]} type="sphere" color="#10b981" scale={0.8} />
          <RotatingGeometry position={[0, 3, -3]} type="box" color="#8b5cf6" scale={0.6} />
          <RotatingGeometry position={[-2, -2, -2]} type="sphere" color="#f59e0b" scale={0.5} />
        </Scene3D>
      </div>

      {/* About Content */}
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
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* About Description */}
            <motion.div
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an aspiring software engineer with a passion for creating innovative solutions 
                  that bridge technology and real-world problems. Currently pursuing my BTech in ICT 
                  at Pandit Deendayal Energy University with a CGPA of 8.33.
                </p>
                <p>
                  My journey in technology has taken me through full-stack development, AI/ML research, 
                  and mobile app development. I've gained practical experience through internships at 
                  Rebel Minds and Jarurat Care Foundation, where I contributed to impactful projects 
                  serving real users.
                </p>
                <p>
                  I believe in continuous learning and staying updated with emerging technologies. 
                  My goal is to leverage my skills in software development and artificial intelligence 
                  to create solutions that make a positive impact on society.
                </p>
              </div>
            </motion.div>

            {/* Education & Quick Stats */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">BTech Information & Communication Technology</p>
                  <p className="text-muted-foreground">Pandit Deendayal Energy University</p>
                  <p className="text-sm text-muted-foreground">CGPA: 8.33 | Expected: May 2026</p>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Hackathons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "var(--shadow-glow)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="p-2 rounded-full" 
                        style={{ backgroundColor: `${skill.color}20`, border: `1px solid ${skill.color}30` }}
                      >
                        <Icon size={20} style={{ color: skill.color }} />
                      </div>
                      <h4 className="font-bold text-foreground">{skill.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded-full border transition-colors duration-300"
                          style={{ 
                            backgroundColor: `${skill.color}10`, 
                            borderColor: `${skill.color}30`,
                            color: skill.color 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}