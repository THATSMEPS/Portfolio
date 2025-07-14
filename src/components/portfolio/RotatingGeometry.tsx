import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, Sphere, Box } from '@react-three/drei'
import * as THREE from 'three'

interface RotatingGeometryProps {
  position: [number, number, number]
  type: 'torus' | 'sphere' | 'box'
  color: string
  scale?: number
}

export const RotatingGeometry = ({ 
  position, 
  type, 
  color, 
  scale = 1 
}: RotatingGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  const renderGeometry = () => {
    switch (type) {
      case 'torus':
        return <Torus args={[1 * scale, 0.4 * scale, 16, 100]} />
      case 'sphere':
        return <Sphere args={[0.8 * scale, 32, 32]} />
      case 'box':
        return <Box args={[1.5 * scale, 1.5 * scale, 1.5 * scale]} />
      default:
        return <Sphere args={[0.8 * scale, 32, 32]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color}
        metalness={0.7}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}