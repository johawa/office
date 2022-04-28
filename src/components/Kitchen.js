import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Kitchen() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/kitchen.glb");
  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_.geometry}
        material={nodes.Cabinet_Handle_.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_001.geometry}
        material={nodes.Cabinet_Handle_001.material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_002.geometry}
        material={nodes.Cabinet_Handle_002.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_003.geometry}
        material={nodes.Cabinet_Handle_003.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_004.geometry}
        material={nodes.Cabinet_Handle_004.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_005.geometry}
        material={nodes.Cabinet_Handle_005.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_006.geometry}
        material={nodes.Cabinet_Handle_006.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_007.geometry}
        material={nodes.Cabinet_Handle_007.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_008.geometry}
        material={nodes.Cabinet_Handle_008.material}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_009.geometry}
        material={nodes.Cabinet_Handle_009.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_010.geometry}
        material={nodes.Cabinet_Handle_010.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_011.geometry}
        material={nodes.Cabinet_Handle_011.material}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_012.geometry}
        material={nodes.Cabinet_Handle_012.material}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_013.geometry}
        material={nodes.Cabinet_Handle_013.material}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_015.geometry}
        material={nodes.Cabinet_Handle_015.material}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_016.geometry}
        material={nodes.Cabinet_Handle_016.material}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Faucet.geometry}
        material={materials.Faucet}
        rotation={[0, -1.25, 0]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cooler.geometry} material={materials.Cooler} />
      <mesh castShadow receiveShadow geometry={nodes.IceMachine.geometry} material={materials.IceMachine} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_014.geometry}
        material={materials.WindowFrame}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Sink}
        scale={[1.04, 1, 1.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Cabinets.geometry}
        material={nodes.Kitchen_Cabinets.material}
        scale={[1, 1, 0.71]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Island.geometry}
        material={nodes.Kitchen_Island.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island_Cabinets_.geometry}
        material={nodes.Island_Cabinets_.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fridge.geometry}
        material={materials.Fridge}
        scale={[1, 1.07, 1]}
      />
      <mesh castShadow receiveShadow geometry={nodes.Counter_top.geometry} material={materials.GranitCounterTop} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CoffeMachine.geometry}
        material={materials.coffeMachine02}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/kitchen.glb");
