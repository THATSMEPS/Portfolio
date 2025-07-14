import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { ParticleField } from './ParticleField'
import { RotatingGeometry } from './RotatingGeometry'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
import heroImage from '@/assets/hero-bg.jpg'

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D cameraPosition={[0, 0, 8]}>
          <ParticleField />
          <RotatingGeometry position={[-3, 2, -2]} type="torus" color="#0ea5e9" scale={0.8} />
          <RotatingGeometry position={[3, -1, -1]} type="sphere" color="#a855f7" scale={0.6} />
          <RotatingGeometry position={[0, -3, -3]} type="box" color="#06b6d4" scale={0.5} />
        </Scene3D>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Profile Image */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary shadow-glow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img 
                src={heroImage} 
                alt="Pratham Shah" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Pratham Shah
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Aspiring Software Engineer | Full-Stack Developer | AI/ML Enthusiast
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                onClick={() => onNavigate('projects')}
              >
                View My Work
                <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
                onClick={() => onNavigate('contact')}
              >
                Get In Touch
                <Mail size={16} className="ml-2" />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <SocialLink 
                href="https://github.com/THATSMEPS"
                icon={Github}
                label="GitHub"
              />
              <SocialLink 
                href="https://linkedin.com/in/pratham-shah-392107268"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink 
                href="mailto:pspratham1234@gmail.com"
                icon={Mail}
                label="Email"
              />
              <SocialLink 
                href="tel:+917485994559"
                icon={Phone}
                label="Phone"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ComponentType<any>
  label: string
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-card/70 border border-border hover:border-primary hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 group"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
  </motion.a>
)