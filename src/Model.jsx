import React, { useEffect } from 'react'
import { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Model = () => {

    const perfumeUrl = `${import.meta.env.BASE_URL}perfume.glb`

    const { nodes } = useGLTF(perfumeUrl)
    
    const bottle = useRef(null)
    const perfume = useRef()

    useFrame(() => {
        perfume.current.rotation.y += 0.03
    })
    
    useEffect(() => {
        
        perfume.current.rotation.z -= Math.PI / 180

    }, [])

  return (
    <group ref={perfume} position={[0,-0.6,0]}>
        <mesh ref={bottle} scale = {[1,2,1]} {...nodes.body}>
            <MeshTransmissionMaterial
            thickness={1.6}
            roughness={0}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.15}
            backside={true}/>
        </mesh>
        <mesh {...nodes.liquid}>
        </mesh>
        <mesh ref={bottle} {...nodes.cap}>
        </mesh>
        <mesh ref={bottle} {...nodes.label}>
        </mesh>
    </group>
  )
}

export default Model