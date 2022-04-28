import { useFrame } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { useSpring } from "@react-spring/three";
import CameraControls from "camera-controls";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

CameraControls.install({ THREE });
extend({ CameraControls });

function Controls({ clickPosition, moveCamera }) {
  useFrame((state, delta) => {
    if (moveCamera === true) {
      state.controls.moveTo(clickPosition.x, state.controls.getPosition().y, clickPosition.z, true);
      return;
    }
  });
  return <group></group>;
}

export default function Floor() {
  const { nodes, materials } = useGLTF("/floor.glb");
  const [isDragging, setIsDragging] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, z: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, z: 0 });
  const [moveCamera, setMoveCamera] = useState(false);

  const handlePointerUp = (e) => {
    if (isDragging === false) {
      setClickPosition({ x: e.point.x, z: e.point.z });
      setMoveCamera(true);
    }
  };

  return (
    <group>
      <Controls clickPosition={clickPosition} moveCamera={moveCamera} />
      <group>
        <mesh
          geometry={nodes.Floor_wood.geometry}
          material={materials.FloorWood}
          receiveShadow
          onPointerDown={(e) => {
            setIsDragging(false);
          }}
          onPointerMove={(e) => {
            setCursorPosition({ x: e.point.x, z: e.point.z });
            setIsDragging(true);
          }}
          onPointerUp={(e) => handlePointerUp(e)}
        ></mesh>
        <mesh visible position={[cursorPosition.x, 0, cursorPosition.z]} rotation={[-Math.PI * 0.5, 0, 0]}>
          <circleGeometry args={[0.5, 32]} />
          <meshStandardMaterial color="white" transparent opacity={0.5} />
        </mesh>
      </group>

      <group>
        <mesh geometry={nodes.Floor_carpet.geometry} material={materials.FloorCarpet} receiveShadow></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/floor.glb");
