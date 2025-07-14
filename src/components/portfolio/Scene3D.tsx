import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'

interface Scene3DProps {
  children: React.ReactNode
  enableControls?: boolean
  cameraPosition?: [number, number, number]
}

export const Scene3D = ({ 
  children, 
  enableControls = true, 
  cameraPosition = [0, 0, 5] 
}: Scene3DProps) => {
  return (
    <Canvas
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera 
        makeDefault 
        position={cameraPosition} 
        fov={75} 
      />
      
      <Suspense fallback={null}>
        <Environment preset="night" />
        
        {/* Ambient lighting for overall illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Directional light for depth */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#0ea5e9" 
        />
        
        {/* Point lights for accent */}
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.5} 
          color="#a855f7" 
        />
        
        <pointLight 
          position={[10, -10, 10]} 
          intensity={0.3} 
          color="#06b6d4" 
        />
        
        {children}
        
        {enableControls && (
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minDistance={3}
            maxDistance={20}
          />
        )}
      </Suspense>
    </Canvas>
  )
}