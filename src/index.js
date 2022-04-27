import React, { Suspense } from "react";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Selection, EffectComposer, Outline } from "@react-three/postprocessing";
import CameraControls from "camera-controls";

import Chair from "./components/Chair";
import Floor from "./components/Floor";

CameraControls.install({ THREE });
extend({ CameraControls });

// function Controls(clickPosition) {
//   const ref = useRef();
//   const camera = useThree((state) => state.camera);
//   const gl = useThree((state) => state.gl);
//   useFrame((state, delta) => {
//     ref.current.moveTo(20, 7, 7);
//     ref.current.update(delta);
//   });
//   return <cameraControls ref={ref} args={[camera, gl.domElement]} />;
// }

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} enableZoom={false} enablePan={false} />;
};

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [7, 7, 7] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight intensity={0.5} position={[6, 3, 0]} />
          <Orbit />
          <axesHelper />

          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline blur visibleEdgeColor="white" edgeStrength={100} width={3000} />
            </EffectComposer>
            <Chair />
          </Selection>

          <Physics>
            <Floor></Floor>
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
