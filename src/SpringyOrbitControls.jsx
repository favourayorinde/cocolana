import gsap from 'gsap'
import React from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useEffect, useState, useRef } from 'react';
import { Environment } from '@react-three/drei';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Model from './Model';

const SMOOTH_ARRAY_SIZE = 20
const CAMERA_FOV = 40


function SpringyOrbitControls() {

    const controls = useRef()
    const { camera } = useThree()
    const [mousePosition, setMousePosition] = useState({x: 0, y:0})
    const [smoothArrayX, setSmoothArrayX] = useState(new Array(SMOOTH_ARRAY_SIZE).fill(0))
    const [smoothArrayY, setSmoothArrayY] = useState(new Array(SMOOTH_ARRAY_SIZE).fill(0))

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({x: e.clientX , y: e.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove)

        camera.fov = CAMERA_FOV
        camera.updateProjectionMatrix()
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[])

    const object = useRef()
    const bottleRef = useRef()

    useEffect(() => {
        if(object.current){
            object.current.traverse((child) => {
                if(child.isMesh && child.name === "Bottle"){
                    bottleRef.current = child
                    
                    child.material = MeshTransmissionMaterial
                }

            })
        }
    },[])
    
    function smoothBox(smoothArray, recent){
        smoothArray.push(recent)
        smoothArray.shift()
        let sum = smoothArray.reduce((a,b) => a + b, 0)
        let average = sum / smoothArray.length
        return average
    }

    useFrame(() => {
        // controls.current.rotation.y += 0.05
        // controls.current.rotation.x += 0.01
        controls.current.scale.x = 2
        controls.current.scale.y = 2
        

        const torusLocation = controls.current.position

        let xPosition = mousePosition.x - window.innerWidth/2
        let yPosition = mousePosition.y - window.innerHeight/2
        camera.lookAt(torusLocation)

        camera.position.set(-smoothBox(smoothArrayX,xPosition)/500,smoothBox(smoothArrayY,yPosition)/50, 16)
    })

    return (
         <group>
              <mesh ref={controls}>
                <Model />
                <Environment files = 'interior.exr' />
              </mesh>
         </group>

    );
  }
  
  export default SpringyOrbitControls