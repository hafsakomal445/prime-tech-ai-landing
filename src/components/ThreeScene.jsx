import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";

function EnergyCore() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.2, 128, 128]}>
        <MeshDistortMaterial
          color="#4f46e5"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={2} />

      <pointLight
        position={[5, 5, 5]}
        intensity={50}
        color="#3b82f6"
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={30}
        color="#9333ea"
      />

      <Stars
        radius={50}
        depth={20}
        count={3000}
        factor={4}
        fade
      />

      <EnergyCore />
    </Canvas>
  );
}