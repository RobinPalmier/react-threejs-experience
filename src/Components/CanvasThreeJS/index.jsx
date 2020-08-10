import React from 'react';
import { Canvas } from 'react-three-fiber';
import { useSelector } from 'react-redux';
import { softShadows, OrbitControls, Sky, Stars } from 'drei';
import Box from '../Box';
import '../../assets/style/App.css';

softShadows();

const CanvasThreeJS = () => {
    const theme = useSelector(state => state.theme);
    
    var currentTime = new Date();
    var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
  
  return (
    <>
      <Canvas 
        colorManagement 
        shadowMap 
        camera={{ position:[-5, 2, 10], fov: 60 }} 
      >
        <ambientLight intensity={0.3} />
        <directionalLight 
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh 
            receiveShadow 
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
            <meshStandardMaterial attach='material' color={ theme.isDark ? theme.colors.grayNight : theme.colors.grayDay } />
          </mesh>
          <Box 
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color={ theme.isDark ? theme.colors.blueNight : theme.colors.blueDay }
          />
          <Box 
            position={[-2, 1, -5]}
            args={[1, 1, 1]}
            color={ theme.isDark ? theme.colors.greenNight : theme.colors.greenDay }
          />
          <Box 
            position={[5, 1, -2]}
            args={[1, 1, 1]}
            color={ theme.isDark ? theme.colors.redNight : theme.colors.redDay }
          />
          { theme.isDark ?  <Stars /> : <Sky /> }
        </group>

        <OrbitControls minDistance={5} maxDistance={30} />
      </Canvas>
    </>
  );
}

export default CanvasThreeJS;
