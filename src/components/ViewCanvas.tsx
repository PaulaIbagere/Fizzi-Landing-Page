"use client"
import { Canvas } from '@react-three/fiber'
import {View} from '@react-three/drei'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Loader = dynamic(
    () => import('@react-three/drei').then((mod) => mod.Loader), {ssr: false}
)

type Props = {}

export default function ViewCanvas({}: Props) {
  return (
    <>
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: "50%",
                transform: "translate(-50%)",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 30
            }}
            shadows
            dpr={[1, 1.5]} //device pixle ratio
            gl ={{antialias: true}}
            camera={{
                fov: 30, //field of vision - to enlarge it
            }}
        >
            {/* rotation = Math PI *2 or 2PI*/}
            {/* <mesh rotation={[0.5,0.5,0]} position={[1,0,0]}> //this is a 3D object
                <boxGeometry/>
                <meshStandardMaterial color={"hotpink"}/>
                </mesh> */}
            <Suspense fallback={null}>
                <View.Port/>
            </Suspense>
        
            {/* <ambientLight intensity={2}/>
            <spotLight intensity={3} position={[1,1,1]}/> */}
        </Canvas>
        <Loader/>
    </>
  )
}