import { motion } from 'framer-motion'
import { Scene3D } from './Scene3D'
import { RotatingGeometry } from './RotatingGeometry'
import { Trophy, Award, Calendar, Users } from 'lucide-react'
import hackathonImage from '@/assets/hackathon-ssip.jpg'
import laundryeaseImage from '@/assets/laundryease-project.jpg'
import waterqualityImage from '@/assets/water-quality-project.jpg'
import jio1 from '@/assets/jio1.png'
import jio2 from '@/assets/jio2.png'
import jio3 from '@/assets/jio3.png'
import jio4 from '@/assets/jio4.png'
const placeholderImage = '/placeholder.svg'



const hackathonPosts = [
  {
    title: 'SSIP Hackathon',
    details: 'Developed Wi-Fi based attendance app with geo-fencing prototype (Nov 2023, 5 members)',
    photos: [hackathonImage]
  },
  {
    title: 'Kharagpur Data Science Hackathon',
    details: 'Built ML model for research paper classification (Jan 2025, Solo project)',
    photos: [laundryeaseImage, waterqualityImage]
  }
]

const certificatePosts = [
  {
    title: 'TATA Data Visualization',
    details: 'Business Insights certification (Aug 2024, Professional)',
    photos: [placeholderImage]
  },
  {
    title: 'IBM AI/ML with Python',
    details: 'Deep Learning, Neural Networks, Computer Vision (May-Jul 2023, Advanced)',
    photos: [placeholderImage]
  }
]

const ActivitesPosts = [
  {
    title: 'Jio Institute AI Trek',
    details: 'AI and Data Science Tech Trek (July 2024, Industry)',
    photos: [jio1, jio2, jio3, jio4]
  },
  {
    title: 'Python 101 Workshop',
    details: 'Conducted 2-day comprehensive workshop with team ENCODE (2023, Team Lead)',
    photos: [placeholderImage]
  }
  
]



const PostCard = ({ title, details, photos, icon: Icon }: { title: string, details: string, photos: string[], icon: any }) => (
  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 mb-8 w-full">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
    </div>
    <div className="mb-3 text-foreground text-base">{details}</div>
    <div className="flex gap-4 overflow-x-auto pb-2">
      {photos.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={title + ' photo ' + (idx + 1)}
          className="rounded-lg shadow-glow w-48 h-32 object-cover flex-shrink-0 border border-border bg-background"
        />
      ))}
    </div>
  </div>
)


export const AchievementsSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D>
          <RotatingGeometry position={[-4, 2, -2]} type="sphere" color="#f59e0b" scale={0.6} />
          <RotatingGeometry position={[4, -2, -1]} type="torus" color="#10b981" scale={0.8} />
          <RotatingGeometry position={[0, 3, -3]} type="box" color="#8b5cf6" scale={0.5} />
        </Scene3D>
      </div>

      {/* Scrollable LinkedIn Post Style Content */}
      <div className="relative z-10 p-4 sm:p-8 max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto h-[90vh] overflow-y-auto scrollbar-hide">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Activities and Achievements
          </motion.h2>

          {/* Hackathons Section */}
          <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Hackathons</h3>
          {hackathonPosts.map((post, idx) => (
            <PostCard key={idx} title={post.title} details={post.details} photos={post.photos} icon={Trophy} />
          ))}

          {/* Certificates Section */}
          <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Certificates</h3>
          {certificatePosts.map((post, idx) => (
            <PostCard key={idx} title={post.title} details={post.details} photos={post.photos} icon={Award} />
          ))}

          {/* Activites Section */}
          <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Activites</h3>
          {ActivitesPosts.map((post, idx) => (
            <PostCard key={idx} title={post.title} details={post.details} photos={post.photos} icon={Users} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}