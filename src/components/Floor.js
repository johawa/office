import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { useSpring } from "@react-spring/three";

export default function Floor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, z: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, z: 0 });
  const [zoom, set] = useState(false);

  const { z } = useSpring({
    from: { z: 7 },
    to: { z: 8 },
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  useFrame((state) => {
    console.log("state", z.get());
    // z.to(20).start().then((v) => console.log(v.value));
    state.camera.position.z = z.get();
  });

  return (
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
  );
}
