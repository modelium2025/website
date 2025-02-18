import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Sofa1(props) {
  const { nodes, materials } = useGLTF('navy.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -0.059]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box.geometry}
          material={materials.Wellington}
          position={[-2.859, 45.456, 21.784]}
          scale={0.1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_17_low.geometry}
          material={materials.DeadlineToBake_1VRayCompleteMap0000}
          position={[17.103, 6.369, 4.531]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obj_65_low.geometry}
          material={materials.DeadlineToBake_2VRayCompleteMap0000}
          position={[-25, 6.303, 4.531]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001.geometry}
          material={materials.bb}
          position={[-5.063, 21.092, 2.503]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/public/navy.glb')
