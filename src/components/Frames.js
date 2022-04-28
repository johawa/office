import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Frames() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/frames.glb");

  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoorHandle.geometry}
        material={nodes.ClosetDoorHandle.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoorHandle001.geometry}
        material={nodes.ClosetDoorHandle001.material}
        scale={[-0.03, 1, 0.7]}
      />
      <mesh castShadow receiveShadow geometry={nodes.windowFrame.geometry} material={nodes.windowFrame.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame001.geometry}
        material={nodes.windowFrame001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame002.geometry}
        material={nodes.windowFrame002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame003.geometry}
        material={nodes.windowFrame003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame004.geometry}
        material={nodes.windowFrame004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame005.geometry}
        material={nodes.windowFrame005.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame006.geometry}
        material={nodes.windowFrame006.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame008.geometry}
        material={nodes.windowFrame008.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame009.geometry}
        material={nodes.windowFrame009.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame010.geometry}
        material={nodes.windowFrame010.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame011.geometry}
        material={nodes.windowFrame011.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame012.geometry}
        material={nodes.windowFrame012.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame013.geometry}
        material={nodes.windowFrame013.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame014.geometry}
        material={nodes.windowFrame014.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame015.geometry}
        material={nodes.windowFrame015.material}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Walls017.geometry} material={nodes.Walls017.material} />
      <mesh castShadow receiveShadow geometry={nodes.ClosetDoor.geometry} material={nodes.ClosetDoor.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoor001.geometry}
        material={nodes.ClosetDoor001.material}
        scale={[-0.03, 1, 0.7]}
      />
      <mesh castShadow receiveShadow geometry={nodes.ClosetDoor002.geometry} material={nodes.ClosetDoor002.material} />
      <mesh castShadow receiveShadow geometry={nodes.ClosetDoor003.geometry} material={nodes.ClosetDoor003.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame016.geometry}
        material={nodes.windowFrame016.material}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Walls001.geometry} material={nodes.Walls001.material} />
      <mesh castShadow receiveShadow geometry={nodes.Walls002.geometry} material={nodes.Walls002.material} />
      <mesh castShadow receiveShadow geometry={nodes.Walls003.geometry} material={nodes.Walls003.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls004.geometry}
        material={nodes.Walls004.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls005.geometry}
        material={nodes.Walls005.material}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls006.geometry}
        material={nodes.Walls006.material}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls007.geometry}
        material={nodes.Walls007.material}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls008.geometry}
        material={nodes.Walls008.material}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls009.geometry}
        material={nodes.Walls009.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls010.geometry}
        material={nodes.Walls010.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls011.geometry}
        material={nodes.Walls011.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls012.geometry}
        material={nodes.Walls012.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls013.geometry}
        material={nodes.Walls013.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls014.geometry}
        material={nodes.Walls014.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Walls015.geometry} material={nodes.Walls015.material} />
      <mesh castShadow receiveShadow geometry={nodes.Walls016.geometry} material={nodes.Walls016.material} />
      <mesh castShadow receiveShadow geometry={nodes.Door_main.geometry} material={nodes.Door_main.material} />
      <mesh castShadow receiveShadow geometry={nodes.Door_main001.geometry} material={nodes.Door_main001.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main002.geometry}
        material={nodes.Door_main002.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main003.geometry}
        material={nodes.Door_main003.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main004.geometry}
        material={nodes.Door_main004.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main005.geometry}
        material={nodes.Door_main005.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main006.geometry}
        material={nodes.Door_main006.material}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main007.geometry}
        material={nodes.Door_main007.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Door_main008.geometry} material={nodes.Door_main008.material} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main009.geometry}
        material={nodes.Door_main009.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main010.geometry}
        material={nodes.Door_main010.material}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main011.geometry}
        material={nodes.Door_main011.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main012.geometry}
        material={nodes.Door_main012.material}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main013.geometry}
        material={nodes.Door_main013.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main014.geometry}
        material={nodes.Door_main014.material}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main015.geometry}
        material={nodes.Door_main015.material}
        rotation={[0, -1.57, 0]}
      />
    </group>
  );
}

useGLTF.preload("/frames.glb");
