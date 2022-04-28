import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Walls() {
  const { nodes, materials } = useGLTF("/wall.glb");

  return <mesh geometry={nodes.Walls.geometry} material={materials.Wall} receiveShadow></mesh>;
}

useGLTF.preload("/wall.glb");
