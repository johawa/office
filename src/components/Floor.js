import { useFrame } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { useSpring } from "@react-spring/three";
import CameraControls from "camera-controls";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, z: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, z: 0 });
  const [moveCamera, setMoveCamera] = useState(false);

  console.log(clickPosition);
  return (
    <group>
      <Controls clickPosition={clickPosition} moveCamera={moveCamera} />
      <mesh
        receiveShadow
        position={[0, -0.5, 0]}
        onPointerMove={(e) => {
          setCursorPosition({ x: e.point.x, z: e.point.z });
        }}
        onClick={(e) => {
          setClickPosition({ x: e.point.x, z: e.point.z });
          setMoveCamera(true);
          console.log("click", e);
        }}
      >
        <boxBufferGeometry args={[200, 1, 200]} />
        <meshPhysicalMaterial color={"white"} opacity={1} />
      </mesh>

      <mesh
        visible
        userData={{ hello: "world" }}
        position={[cursorPosition.x, 0, cursorPosition.z]}
        rotation={[0, 0, 0]}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="hotpink" transparent />
      </mesh>
    </group>
  );
}
