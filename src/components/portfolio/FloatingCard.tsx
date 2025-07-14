import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Plane } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface FloatingCardProps {
  position: [number, number, number]
  title: string
  description: string
  image?: string
  onClick?: () => void
  scale?: number
}

export const FloatingCard = ({ 
  position, 
  title, 
  description, 
  image, 
  onClick,
  scale = 1
}: FloatingCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <group position={position}>
      <Plane 
        ref={meshRef}
        args={[2 * scale, 1.5 * scale]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial 
          color={hovered ? "#0ea5e9" : "#1e293b"}
          transparent
          opacity={0.9}
          emissive={hovered ? "#0ea5e9" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </Plane>
      
      <Html 
        transform 
        distanceFactor={10}
        position={[0, 0, 0.01]}
        style={{ 
          width: '200px', 
          height: '150px',
          pointerEvents: 'none'
        }}
      >
        <motion.div 
          className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {image && (
            <img 
              src={image} 
              alt={title}
              className="w-full h-16 object-cover rounded mb-2"
            />
          )}
          <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </motion.div>
      </Html>
    </group>
  )
}