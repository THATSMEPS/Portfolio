import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { RotatingGeometry } from './RotatingGeometry'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D>
          <RotatingGeometry position={[-3, 2, -2]} type="torus" color="#06b6d4" scale={0.7} />
          <RotatingGeometry position={[3, -1, -1]} type="sphere" color="#8b5cf6" scale={0.8} />
          <RotatingGeometry position={[0, -3, -3]} type="box" color="#0ea5e9" scale={0.6} />
        </Scene3D>
      </div>

      {/* Contact Content */}
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
            Let's Connect
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  and ways to contribute to cutting-edge technology solutions.
                </p>

                <div className="space-y-4">
                  <ContactItem
                    icon={Mail}
                    title="Email"
                    value="pspratham1234@gmail.com"
                    href="mailto:pspratham1234@gmail.com"
                  />
                  <ContactItem
                    icon={Phone}
                    title="Phone"
                    value="+91 7485994559"
                    href="tel:+917485994559"
                  />
                  <ContactItem
                    icon={MapPin}
                    title="Location"
                    value="Ahmedabad, Gujarat, India"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Follow Me</h3>
                <div className="flex gap-4">
                  <SocialButton
                    href="https://github.com/THATSMEPS"
                    icon={Github}
                    label="GitHub"
                  />
                  <SocialButton
                    href="https://linkedin.com/in/pratham-shah-392107268"
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hi!"
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  size="lg"
                >
                  Send Message
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

interface ContactItemProps {
  icon: React.ComponentType<any>
  title: string
  value: string
  href?: string
}

const ContactItem = ({ icon: Icon, title, value, href }: ContactItemProps) => (
  <div className="flex items-center gap-3">
    <div className="p-2 rounded-full bg-primary/20 border border-primary/30">
      <Icon size={16} className="text-primary" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      {href ? (
        <a 
          href={href} 
          className="text-foreground hover:text-primary transition-colors"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {value}
        </a>
      ) : (
        <p className="text-foreground">{value}</p>
      )}
    </div>
  </div>
)

interface SocialButtonProps {
  href: string
  icon: React.ComponentType<any>
  label: string
}

const SocialButton = ({ href, icon: Icon, label }: SocialButtonProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-primary/20 border border-primary/30 hover:border-primary hover:bg-primary/30 transition-all duration-300"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon size={20} className="text-primary" />
  </motion.a>
)