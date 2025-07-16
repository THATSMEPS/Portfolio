import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Scene3D } from './Scene3D'
import { RotatingGeometry } from './RotatingGeometry'
import { Trophy, Award, Calendar, Users } from 'lucide-react'
import hackathonImage from '@/assets/hackathon-ssip.png'
import laundryeaseImage from '@/assets/laundryease-project.jpg'
import waterqualityImage from '@/assets/water-quality-project.jpg'
import jio1 from '@/assets/jio1.png'
import jio2 from '@/assets/jio2.png'
import jio3 from '@/assets/jio3.png'
import jio4 from '@/assets/jio4.png'
import encode1 from '@/assets/encode1.png'
import encode2 from '@/assets/encode2.png'
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
    photos: [encode1, encode2]
  }
  
]



const PostCard = ({ title, details, photos, icon: Icon }: { title: string, details: string, photos: string[], icon: any }) => {
  const [current, setCurrent] = useState(0);
  const hasMultiple = photos.length > 1;
  // Touch swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const goPrev = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };
  const goNext = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-0 mb-10 w-full flex flex-col items-center overflow-hidden">
      {/* Image carousel */}
      {photos.length > 0 && (
        <div
          className="w-full relative select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={photos[current]}
            alt={title + ' photo ' + (current + 1)}
            className="w-full h-72 object-contain border-b border-border bg-background"
            style={{ maxHeight: '340px' }}
          />
          {hasMultiple && (
            <>
              {/* Left arrow */}
              <button
                onClick={goPrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
                aria-label="Previous image"
              >
                &#8592;
              </button>
              {/* Right arrow */}
              <button
                onClick={goNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
                aria-label="Next image"
              >
                &#8594;
              </button>
              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {photos.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
      {/* Icon, Title, Details below image */}
      <div className="flex flex-col items-start w-full px-6 py-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
            <Icon size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <div className="text-foreground text-base">{details}</div>
      </div>
    </div>
  );
}


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

      {/* 3 Vertical Scrollable Sections */}
      <div className="relative z-10 p-2 sm:p-6 max-w-full md:max-w-7xl xl:max-w-[1600px] mx-auto h-[92vh] flex flex-col md:flex-row gap-8">
        {/* Hackathons */}
        <motion.div
          className="flex-1 min-w-[340px] max-w-[520px] bg-card/70 rounded-2xl shadow-lg flex flex-col h-full max-h-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary py-6 border-b border-border sticky top-0 bg-card/80 z-10">Hackathons</h2>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-10 scrollbar-hide">
            {hackathonPosts.map((post, idx) => (
              <PostCard key={idx} title={post.title} details={post.details} photos={post.photos} icon={Trophy} />
            ))}
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div
          className="flex-1 min-w-[340px] max-w-[520px] bg-card/70 rounded-2xl shadow-lg flex flex-col h-full max-h-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary py-6 border-b border-border sticky top-0 bg-card/80 z-10">Activities</h2>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-10 scrollbar-hide">
            {ActivitesPosts.map((post, idx) => (
              <PostCard key={idx} title={post.title} details={post.details} photos={post.photos} icon={Users} />
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          className="flex-1 min-w-[340px] max-w-[520px] bg-card/70 rounded-2xl shadow-lg flex flex-col h-full max-h-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center text-primary py-6 border-b border-border sticky top-0 bg-card/80 z-10">Certificates</h2>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-10 scrollbar-hide">
            {certificatePosts.map((post, idx) => (
              <PostCard key={idx} title={post.title} details={post.details} photos={post.photos} icon={Award} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}