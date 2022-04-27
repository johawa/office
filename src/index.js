import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Selection, EffectComposer, Outline } from "@react-three/postprocessing";
import Chair from "./components/Chair";
import { useCursor } from "@react-three/drei";
import CameraControls from "camera-controls";

CameraControls.install({ THREE });
extend({ CameraControls });

function Controls(clickPosition) {
  const ref = useRef();
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  useFrame((state, delta) => {
    ref.current.moveTo(20, 7, 7);
    ref.current.update(delta);
  });
  return <cameraControls ref={ref} args={[camera, gl.domElement]} />;
}

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} enableZoom={false} enablePan={false} />;
};

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, z: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, z: 0 });
  const [zoom, set] = useState(false);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [7, 7, 7] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight intensity={0.5} position={[6, 3, 0]} />
          <Orbit />
          {zoom ? <Controls clickPosition={clickPosition} /> : null}
          <axesHelper />

          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline blur visibleEdgeColor="white" edgeStrength={100} width={3000} />
            </EffectComposer>
            <Chair />
          </Selection>

          <Physics>
            <group>
              <mesh
                receiveShadow
                position={[0, -0.5, 0]}
                onPointerMove={(e) => {
                  setCursorPosition({ x: e.point.x, z: e.point.z });
                }}
                onClick={(e) => {
                  setClickPosition({ x: e.point.x, z: e.point.z });
                  set(!zoom);
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
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
