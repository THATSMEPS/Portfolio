import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { FloatingCard } from './FloatingCard'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import laundryeaseImage from '@/assets/laundryease-project.jpg'
import waterQualityImage from '@/assets/water-quality-project.jpg'
import brainTumorImage from '@/assets/brain-tumor-project.jpg'

const projects = [
  {
    title: 'LaundryEase Platform',
    description: 'Full-stack laundry service platform with React Native apps, Node.js backend, and real-time tracking',
    image: laundryeaseImage,
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Expo', 'JWT'],
    details: 'Developed scalable backend APIs, role-based authentication, and mobile apps serving 50+ customers',
    position: [-4, 2, 0] as [number, number, number]
  },
  {
    title: 'AI Water Quality Monitor',
    description: 'IoT-based water quality monitoring with ML anomaly detection and real-time dashboard',
    image: waterQualityImage,
    tech: ['FastAPI', 'React.js', 'ESP32', 'MongoDB', 'LLaMA'],
    details: 'Built real-time dashboard with IoT sensors, ML anomaly detection, and intelligent recommendations',
    position: [0, 0, 0] as [number, number, number]
  },
  {
    title: 'Brain Tumor Classification',
    description: 'AI model using EfficientNet for MRI tumor classification with 0.9911 F1-score',
    image: brainTumorImage,
    tech: ['PyTorch', 'EfficientNet', 'CUDA', 'Transfer Learning'],
    details: 'Fine-tuned EfficientNet model with data augmentation, published research paper',
    position: [4, -1, 0] as [number, number, number]
  }
]

export const ProjectsSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Project Details Overlay */}
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
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "var(--shadow-glow)" }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.details}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary hover:bg-primary/10"
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}