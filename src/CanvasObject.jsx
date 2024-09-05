import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useEffect, useState, useCallback, useRef } from 'react';
import { OrbitControls, Environment} from '@react-three/drei';
import SpringyOrbitControls from './SpringyOrbitControls'



const CanvasObject = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      const handleResize = useCallback(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, []);
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
      }, [handleResize])
    
      const aspectRatio = windowSize.height / windowSize.width
      const fontSizeWide = 4 / aspectRatio
      const fontSizeNarrow = 4 /aspectRatio
      
      const orbitRef = useRef()
      
      return (
          <div className='canvas'>
        <Canvas
        >
            <Text
            font='public/Kings-Regular.ttf'
            fontSize={windowSize.width > 850 ?fontSizeWide : fontSizeNarrow}
            position={[0,0,-1]}
            //klkl
            >
                {windowSize.width > 850 ? `COCOLANA` : `COCO\nLANA`}
            </Text>

            {/* <SpringyOrbitControls /> */}
        </Canvas>
  </div>
  )
}

export default CanvasObject