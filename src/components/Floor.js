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
  const ref = useRef();
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  useFrame((state, delta) => {
    // console.log("click", clickPosition, moveCamera);
    if (moveCamera === true) {
      ref.current.moveTo(clickPosition.x, 0, clickPosition.z, true);
      ref.current.update(delta);
      return;
    }
  });
  return <cameraControls ref={ref} args={[camera, gl.domElement]} />;
}

export default function Floor() {
  const { nodes, materials } = useGLTF("/floor.glb");

  console.log(nodes, materials);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, z: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, z: 0 });
  const [moveCamera, setMoveCamera] = useState(false);

  return (
    <group>
      {/* <Controls clickPosition={clickPosition} moveCamera={moveCamera} /> */}
      <group>
        <mesh
          geometry={nodes.Floor_wood.geometry}
          material={materials.FloorWood}
          receiveShadow
          onPointerMove={(e) => {
            setCursorPosition({ x: e.point.x, z: e.point.z });
          }}
          onClick={(e) => {
            setClickPosition({ x: e.point.x, z: e.point.z });
            setMoveCamera(true);
            console.log("click", e);
          }}
        ></mesh>
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[cursorPosition.x, 0, cursorPosition.z]}
          rotation={[(-Math.PI * 0.5), 0, 0]}
        >
          <circleGeometry args={[0.5, 32]} />
          <meshStandardMaterial color="white" transparent opacity={0.5}/>
        </mesh>
      </group>

      <group>
        <mesh
          geometry={nodes.Floor_carpet.geometry}
          material={materials.FloorCarpet}
          receiveShadow
          onPointerMove={(e) => {
            setCursorPosition({ x: e.point.x, z: e.point.z });
          }}
          onClick={(e) => {
            setClickPosition({ x: e.point.x, z: e.point.z });
            setMoveCamera(true);
            console.log("click", e);
          }}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/floor.glb");
