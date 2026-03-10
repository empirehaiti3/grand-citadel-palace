'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text, Float, Image, Stars } from '@react-three/drei';

export default function SovereignGate() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#000', position: 'relative' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        
        {/* ATMOSPHERIC LIGHTING */}
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={5} color="#FFD700" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* THE MANIFESTED GRAND CITADEL PALACE BACKGROUND */}
        {/* THIS USES THE EXACT ASSET NAME YOU UPLOADED */}
        <Image 
          url="/grand-citadel-palace.jpg" 
          position={[0, 0, -2]} 
          scale={[22, 12]} 
          transparent 
          opacity={1} 
        />

        {/* THE GOLDEN SOVEREIGN ENTRANCE */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[0, 0, 2]}>
            <boxGeometry args={[3, 4.5, 0.1]} />
            <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
          </mesh>
          <Text position={[0, 0, 2.1]} fontSize={0.25} color="#000" maxWidth={2} textAlign="center">
            SOVEREIGN GATEWAY
          </Text>
        </Float>
        
        <Text position={[0, 4.2, 0]} fontSize={0.6} color="#D4AF37">GRAND CITADEL PALACE</Text>
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* THE $2,500 REGISTRY PORTAL */}
      <div style={{ position: 'absolute', bottom: '10%', width: '100%', textAlign: 'center', zIndex: 10 }}>
        <button 
          onClick={() => window.open('https://buy.stripe.com/6oEg196i9bHogmI6oo', '_blank')}
          style={{
            backgroundColor: '#D4AF37',
            color: '#000',
            padding: '20px 50px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            border: '2px solid #FFF',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 0 50px rgba(212, 175, 55, 0.8)',
            textTransform: 'uppercase'
          }}
        >
          Register for Access ($2,500)
        </button>
      </div>
    </div>
  );
}