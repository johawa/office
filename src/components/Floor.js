import React, { useState } from "react";

export default function Floor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, z: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, z: 0 });
  const [zoom, set] = useState(false);

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
