import React, { useRef, useEffect, useState } from 'react'
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

export default function App() {
  const gltf = useLoader(GLTFLoader, './centurion_card_free.glb');

  const [rotation, setRotation] = useState([0, 0, 0]);

  let a = 0.005;

  function calcRotate(x) {
    if(x < -.5 && a < 0)
        a *= -1; 
    if(x > .5 && a > 0)
        a *= -1;
    return x + a
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => [
        prevRotation[0],
        calcRotate(prevRotation[1]),
        prevRotation[2]
      ]);  
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "50vh", width: "100%" }}>
    {/* <Canvas camera={{ position: [0, 3, -23] }} shadows> */}
    <Canvas camera={{ position: [0, 3, 30] }} shadows>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive rotation={rotation}
        object={gltf.scene}
        // position={[0, 2.765, 29.45]}
        position={[0, 3, 29.35]}
        children-0-castShadow
      />
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
      {/* <OrbitControls target={[0, 3, 0]} /> */}
      {/* <axesHelper args={[5]} /> */}
      {/* <Stats /> */}
    </Canvas>
    </div>
  )
}