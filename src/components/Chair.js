import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";

export default function Chair(props) {
  const ref = useRef();
  const group = useRef();
  const { nodes, materials, ...rest } = useGLTF("/chairGLTF.gltf");
  const [hovered, hover] = useState(null);

  return (
    <group ref={group} {...props} dispose={null}>
      <Select enabled={hovered}>
        <mesh
          ref={ref}
          {...props}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          castShadow
          receiveShadow
          geometry={nodes.Chair001.geometry}
          material={materials.Chair01}
          position={[1.28, 0.03, 0.7]}
          rotation={[0, -1.15, 0]}
        />
      </Select>
    </group>
  );
}

useGLTF.preload("/chairGLTF.gltf");
