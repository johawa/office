import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.47, 2.6, 4.33]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[5.02, 2.6, 4.33]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-3.29, 2.6, 4.33]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-3.29, 2.6, 8.55]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-3.29, 2.6, 13.06]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[1.8, 2.6, 13.06]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[6.94, 2.6, 13.06]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[12.89, 2.6, 13.06]}>
        <spotLight
          intensity={0.0450}
          angle={1}
          penumbra={0.73}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.65, 2.69, 2.38]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-3.19, 2.69, 2.38]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-3.19, 2.69, 0.25]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.65, 2.69, 0.25]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[1.89, 2.69, 0.25]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[1.89, 2.69, -1.88]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[1.89, 2.69, 2.38]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.65, 2.69, -1.88]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-3.18, 2.69, -1.88]}>
        <spotLight
          intensity={0.0443}
          angle={0.92}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[7.57, 2.46, 0.57]}>
        <spotLight
          intensity={0.0400}
          angle={0.87}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[7.57, 2.46, -0.85]}>
        <spotLight
          intensity={0.0400}
          angle={0.87}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[7.57, 2.46, -2.14]}>
        <spotLight
          intensity={0.0400}
          angle={0.87}
          penumbra={0.67}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[4.86, 1.62, 1.47]}>
        <spotLight
          intensity={0.0200}
          angle={1.03}
          penumbra={0.85}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[4.86, 1.62, 0.01]}>
        <spotLight
          intensity={0.0200}
          angle={1.03}
          penumbra={0.85}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[4.86, 1.62, -1.7]}>
        <spotLight
          intensity={0.0200}
          angle={1.03}
          penumbra={0.85}
          decay={2}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[9.22, 1.22, 5.41]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[7.81, 2.42, 5.41]}
        scale={[1, 1, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[7.81, 0.04, 5.41]}
        scale={[1, 1, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[5.29, 2.37, 5.41]}
        scale={[0.27, 1.83, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[5.29, 0.07, 5.41]}
        scale={[0.27, 1.83, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle01.geometry}
        material={nodes.Handle01.material}
        position={[5.66, 1.18, 5.34]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.48, 0.73, 0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle02.geometry}
        material={nodes.Handle02.material}
        position={[5.66, 1.18, 5.48]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.48, 0.73, -0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[15.25, 1.22, 14.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[13.84, 2.42, 14.24]}
        scale={[1, 1, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[13.84, 0.04, 14.24]}
        scale={[1, 1, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[11.02, 2.37, 14.24]}
        scale={[0.27, 1.83, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[10.94, 0.07, 14.24]}
        scale={[0.27, 1.83, -0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle01001.geometry}
        material={nodes.Handle01001.material}
        position={[11.41, 1.18, 14.17]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.48, 0.73, 0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle02001.geometry}
        material={nodes.Handle02001.material}
        position={[11.41, 1.18, 14.31]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.48, 0.73, -0.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-4.28, 1.09, -3.49]}
        scale={[0.75, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[-4.3, 1.09, 1.39]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[-4.33, 1.09, 6.54]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[-4.33, 1.09, 12.21]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[-1.21, 1.23, 14.19]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[2.98, 1.23, 14.2]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[7.32, 1.23, 14.23]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[2.75, 1.23, 12.28]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[0.68, 1.23, 12.28]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[0.68, 1.23, 5.41]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[2.76, 1.23, 5.41]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={nodes.Cube026.material}
        position={[4.38, 1.23, -4.54]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[-1.04, 1.23, -4.54]}
        rotation={[0, -1.57, 0]}
        scale={[0.48, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[-4.33, 1.25, -4.65]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
        position={[-4.35, 1.25, 0.24]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={nodes.Cube030.material}
        position={[-4.37, 1.25, 9.49]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={nodes.Cube031.material}
        position={[-4.36, 1.25, 11.09]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[-0.96, 1.25, 12.24]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[0.72, 1.25, 14.26]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[3.83, 1.25, 12.26]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[3.83, 1.25, 5.45]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={nodes.Cube036.material}
        position={[-0.96, 1.25, 5.44]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[0.03, 1.25, -4.58]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[1.65, 1.25, -4.57]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[5.84, 1.25, -4.57]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={nodes.Cube040.material}
        position={[-3.46, 1.25, -5.45]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.15, 0.76, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={nodes.Cube041.material}
        position={[-6.83, 1.82, -5.42]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={nodes.Cube042.material}
        position={[-6.83, 1.82, -0.49]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={nodes.Cube043.material}
        position={[-6.83, 1.82, 3.46]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={nodes.Cube044.material}
        position={[-6.83, 1.82, 5.44]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={nodes.Cube045.material}
        position={[-6.83, 1.82, 10.27]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={nodes.Cube046.material}
        position={[-6.83, 1.82, 14.16]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={nodes.Cube050.material}
        position={[4.29, 1.82, 8.89]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={nodes.Cube051.material}
        position={[1.21, 1.82, 8.89]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={nodes.Cube052.material}
        position={[0.82, 1.83, -8.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={nodes.Cube053.material}
        position={[5.14, 1.83, -8.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={nodes.Cube047.material}
        position={[-2.69, 1.83, -8.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={nodes.Cube048.material}
        position={[1.5, 1.83, 7.3]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={nodes.Cube049.material}
        position={[1.5, 1.83, 10.7]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.29, 1, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoorHandle.geometry}
        material={nodes.ClosetDoorHandle.material}
        position={[7.09, 1, -3.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoorHandle001.geometry}
        material={nodes.ClosetDoorHandle001.material}
        position={[-2.47, 1, 11.31]}
        scale={[-0.03, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_.geometry}
        material={nodes.Cabinet_Handle_.material}
        position={[5.72, 0.96, 1.85]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_001.geometry}
        material={nodes.Cabinet_Handle_001.material}
        position={[5.72, 0.96, 1.33]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_002.geometry}
        material={nodes.Cabinet_Handle_002.material}
        position={[5.72, 0.87, 0.62]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_003.geometry}
        material={nodes.Cabinet_Handle_003.material}
        position={[5.72, 0.87, 0.5]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_004.geometry}
        material={nodes.Cabinet_Handle_004.material}
        position={[5.72, 0.87, -0.42]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_005.geometry}
        material={nodes.Cabinet_Handle_005.material}
        position={[5.72, 0.87, -0.53]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_006.geometry}
        material={nodes.Cabinet_Handle_006.material}
        position={[5.72, 0.87, -1.46]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_007.geometry}
        material={nodes.Cabinet_Handle_007.material}
        position={[5.72, 0.87, -1.58]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_008.geometry}
        material={nodes.Cabinet_Handle_008.material}
        position={[5.72, 0.87, -2.09]}
        rotation={[Math.PI / 2, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_009.geometry}
        material={nodes.Cabinet_Handle_009.material}
        position={[7.3, 1.01, -1.28]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_010.geometry}
        material={nodes.Cabinet_Handle_010.material}
        position={[7.3, 1.01, -0.77]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_011.geometry}
        material={nodes.Cabinet_Handle_011.material}
        position={[7.3, 1.01, 0.69]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_012.geometry}
        material={nodes.Cabinet_Handle_012.material}
        position={[7.3, 0.65, -1.06]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_013.geometry}
        material={nodes.Cabinet_Handle_013.material}
        position={[7.3, 0.65, -0.96]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_015.geometry}
        material={nodes.Cabinet_Handle_015.material}
        position={[7.3, 0.65, 0.03]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_016.geometry}
        material={nodes.Cabinet_Handle_016.material}
        position={[7.3, 0.65, 0.53]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoor.geometry}
        material={nodes.ClosetDoor.material}
        position={[7.09, 1, -3.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoor001.geometry}
        material={nodes.ClosetDoor001.material}
        position={[-2.47, 1, 11.31]}
        scale={[-0.03, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoor002.geometry}
        material={nodes.ClosetDoor002.material}
        position={[-2.47, 1, 11.31]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClosetDoor003.geometry}
        material={nodes.ClosetDoor003.material}
        position={[7.09, 1, -3.59]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame.geometry}
        material={nodes.windowFrame.material}
        position={[-6.83, 1.82, 3.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame001.geometry}
        material={nodes.windowFrame001.material}
        position={[-6.83, 1.82, -0.49]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame002.geometry}
        material={nodes.windowFrame002.material}
        position={[-6.83, 1.82, -5.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame003.geometry}
        material={nodes.windowFrame003.material}
        position={[-6.83, 1.82, 5.43]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame004.geometry}
        material={nodes.windowFrame004.material}
        position={[-6.83, 1.82, 10.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame005.geometry}
        material={nodes.windowFrame005.material}
        position={[-6.83, 1.82, 14.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame006.geometry}
        material={nodes.windowFrame006.material}
        position={[-2.53, 1.82, 16.36]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame008.geometry}
        material={nodes.windowFrame008.material}
        position={[1.45, 1.82, 16.36]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame009.geometry}
        material={nodes.windowFrame009.material}
        position={[5.86, 1.82, 16.36]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame010.geometry}
        material={nodes.windowFrame010.material}
        position={[-2.69, 1.82, -7.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame011.geometry}
        material={nodes.windowFrame011.material}
        position={[0.82, 1.82, -7.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame012.geometry}
        material={nodes.windowFrame012.material}
        position={[5.14, 1.82, -7.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame013.geometry}
        material={nodes.windowFrame013.material}
        position={[1.5, 1.82, 8.25]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame014.geometry}
        material={nodes.windowFrame014.material}
        position={[1.5, 1.82, 10.56]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame015.geometry}
        material={nodes.windowFrame015.material}
        position={[-0.01, 1.82, 8.89]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls017.geometry}
        material={nodes.Walls017.material}
        position={[5.83, 0, -4.53]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet_Handle_014.geometry}
        material={nodes.Cabinet_Handle_014.material}
        position={[7.3, 0.65, -0.07]}
        rotation={[Math.PI / 2, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KanisterCutter003.geometry}
        material={nodes.KanisterCutter003.material}
        position={[5.4, 2.47, 0.58]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main.geometry}
        material={nodes.Door_main.material}
        position={[-4.36, 1.25, -0.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main001.geometry}
        material={nodes.Door_main001.material}
        position={[-4.34, 1.25, -5.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main002.geometry}
        material={nodes.Door_main002.material}
        position={[0.54, 1.25, -4.59]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main003.geometry}
        material={nodes.Door_main003.material}
        position={[1.13, 1.25, -4.56]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main004.geometry}
        material={nodes.Door_main004.material}
        position={[5.33, 1.25, -4.56]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main005.geometry}
        material={nodes.Door_main005.material}
        position={[-2.95, 1.25, -5.46]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main006.geometry}
        material={nodes.Door_main006.material}
        position={[-4.38, 1.25, 10.01]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main007.geometry}
        material={nodes.Door_main007.material}
        position={[4.35, 1.25, 5.44]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main008.geometry}
        material={nodes.Door_main008.material}
        position={[-4.37, 1.25, 10.58]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main009.geometry}
        material={nodes.Door_main009.material}
        position={[4.35, 1.25, 5.44]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main010.geometry}
        material={nodes.Door_main010.material}
        position={[-1.47, 1.25, 5.44]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main011.geometry}
        material={nodes.Door_main011.material}
        position={[4.35, 1.25, 5.44]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main012.geometry}
        material={nodes.Door_main012.material}
        position={[-1.47, 1.25, 5.44]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main013.geometry}
        material={nodes.Door_main013.material}
        position={[4.35, 1.25, 12.25]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main014.geometry}
        material={nodes.Door_main014.material}
        position={[-1.47, 1.25, 12.25]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_main015.geometry}
        material={nodes.Door_main015.material}
        position={[1.24, 1.25, 14.26]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windowFrame016.geometry}
        material={nodes.windowFrame016.material}
        position={[3.09, 1.82, 8.89]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls001.geometry}
        material={nodes.Walls001.material}
        position={[-4.33, 1.09, 12.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls002.geometry}
        material={nodes.Walls002.material}
        position={[-4.3, 1.09, 1.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls003.geometry}
        material={nodes.Walls003.material}
        position={[-4.28, 1.09, -3.51]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls004.geometry}
        material={nodes.Walls004.material}
        position={[0.18, 1.09, 5.41]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls005.geometry}
        material={nodes.Walls005.material}
        position={[2.69, 1.09, 5.41]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls006.geometry}
        material={nodes.Walls006.material}
        position={[2.91, 1.09, 12.29]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls007.geometry}
        material={nodes.Walls007.material}
        position={[-0.03, 1.09, 12.29]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls008.geometry}
        material={nodes.Walls008.material}
        position={[-4.33, 1.09, 8.35]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls009.geometry}
        material={nodes.Walls009.material}
        position={[-0.42, 1.09, 14.19]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls010.geometry}
        material={nodes.Walls010.material}
        position={[8.11, 1.09, 14.22]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls011.geometry}
        material={nodes.Walls011.material}
        position={[3.76, 1.09, 14.22]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls012.geometry}
        material={nodes.Walls012.material}
        position={[-1.12, 1.09, -4.55]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls013.geometry}
        material={nodes.Walls013.material}
        position={[2.75, 1.09, -4.54]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls014.geometry}
        material={nodes.Walls014.material}
        position={[0.18, 1.09, 5.41]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls015.geometry}
        material={nodes.Walls015.material}
        position={[-3.48, 0, -5.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls016.geometry}
        material={nodes.Walls016.material}
        position={[-3.36, 0, 14.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IceMachine.geometry}
        material={materials.IceMachine}
        position={[7.79, 0.57, 1.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cooler.geometry}
        material={materials.Cooler}
        position={[7.85, 0.54, 1.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Sink}
        position={[7.62, 0.87, -0.03]}
        scale={[1.04, 1, 1.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa.geometry}
        material={materials.Couch}
        position={[-0.33, 0.16, 2.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={nodes.Table.material}
        position={[-0.42, 0.02, -1.43]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table002.geometry}
        material={nodes.Table002.material}
        position={[13.12, 0.02, 16.93]}
        scale={[0.27, -0.01, 0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table003.geometry}
        material={nodes.Table003.material}
        position={[14.58, 0.02, 10.22]}
        rotation={[-1.56, -1.52, -1.55]}
        scale={[0.27, -0.01, 0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table001.geometry}
        material={nodes.Table001.material}
        position={[7.42, 0.02, 8.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stool001.geometry}
        material={nodes.Stool001.material}
        position={[3.86, 0, 1.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stool002.geometry}
        material={nodes.Stool002.material}
        position={[3.99, 0, 0.7]}
        rotation={[0, -0.52, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stool003.geometry}
        material={nodes.Stool003.material}
        position={[4.04, 0, -0.47]}
        rotation={[0, -0.1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stool004.geometry}
        material={nodes.Stool004.material}
        position={[4.02, 0, -1.29]}
        rotation={[0, -0.35, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stool005.geometry}
        material={nodes.Stool005.material}
        position={[4.14, 0, -2.17]}
        rotation={[0, -0.35, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk.geometry}
        material={nodes.Office_Desk.material}
        position={[-6.46, 0, -1.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk001.geometry}
        material={nodes.Office_Desk001.material}
        position={[-7.22, 0, -4.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk002.geometry}
        material={nodes.Office_Desk002.material}
        position={[-8.24, 0, -1.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk003.geometry}
        material={nodes.Office_Desk003.material}
        position={[-7.17, 0, 2.58]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk004.geometry}
        material={nodes.Office_Desk004.material}
        position={[0.59, 0, 7.41]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk005.geometry}
        material={nodes.Office_Desk005.material}
        position={[2.51, 0.01, 7.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk006.geometry}
        material={nodes.Office_Desk006.material}
        position={[0.88, 0, 9.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk007.geometry}
        material={nodes.Office_Desk007.material}
        position={[4, 0, 9.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk008.geometry}
        material={nodes.Office_Desk008.material}
        position={[-6.14, 0, 6.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk009.geometry}
        material={nodes.Office_Desk009.material}
        position={[-8.25, 0, 9.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk010.geometry}
        material={nodes.Office_Desk010.material}
        position={[-9, 0, 13.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk011.geometry}
        material={nodes.Office_Desk011.material}
        position={[-6.76, 0, 10.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk012.geometry}
        material={nodes.Office_Desk012.material}
        position={[-5.96, 0, 13.41]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk013.geometry}
        material={nodes.Office_Desk013.material}
        position={[-9, 0, 17.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk014.geometry}
        material={nodes.Office_Desk014.material}
        position={[-8.96, 0, 15.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk015.geometry}
        material={nodes.Office_Desk015.material}
        position={[-3.21, 0, 17.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk016.geometry}
        material={nodes.Office_Desk016.material}
        position={[-5.73, 0, 18.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk017.geometry}
        material={nodes.Office_Desk017.material}
        position={[-0.75, 0, 17.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk018.geometry}
        material={nodes.Office_Desk018.material}
        position={[3.52, 0, 17.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk019.geometry}
        material={nodes.Office_Desk019.material}
        position={[9.45, 0, 17.54]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk020.geometry}
        material={nodes.Office_Desk020.material}
        position={[6.53, 0, 17.53]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk021.geometry}
        material={nodes.Office_Desk021.material}
        position={[-2.04, 0, -8.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk022.geometry}
        material={nodes.Office_Desk022.material}
        position={[-1.67, 0, -6.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk023.geometry}
        material={nodes.Office_Desk023.material}
        position={[2.89, 0, -9.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk024.geometry}
        material={nodes.Office_Desk024.material}
        position={[6.18, 0, -9.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk025.geometry}
        material={nodes.Office_Desk025.material}
        position={[9.02, 0, -7.41]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk026.geometry}
        material={nodes.Office_Desk026.material}
        position={[4.49, 0, -6.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk027.geometry}
        material={nodes.Office_Desk027.material}
        position={[-8.58, 0, -9.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk028.geometry}
        material={nodes.Office_Desk028.material}
        position={[-6.66, 0, -9.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk029.geometry}
        material={nodes.Office_Desk029.material}
        position={[-4.77, 0, -9.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk030.geometry}
        material={nodes.Office_Desk030.material}
        position={[-8.66, 0, -6.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Desk031.geometry}
        material={nodes.Office_Desk031.material}
        position={[-6.73, 0, -6.15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Faucet.geometry}
        material={materials.Faucet}
        position={[7.92, 1.15, -0.02]}
        rotation={[0, -1.25, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Cabinets.geometry}
        material={nodes.Kitchen_Cabinets.material}
        position={[7.49, 0.64, -1.22]}
        scale={[1, 1, 0.71]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Island.geometry}
        material={nodes.Kitchen_Island.material}
        position={[4.68, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island_Cabinets_.geometry}
        material={nodes.Island_Cabinets_.material}
        position={[5.44, 0, 1.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights.geometry}
        material={nodes.LargeHangingLights.material}
        position={[0.47, 3.06, 4.33]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights001.geometry}
        material={nodes.LargeHangingLights001.material}
        position={[5.02, 3.06, 4.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights002.geometry}
        material={nodes.LargeHangingLights002.material}
        position={[-3.3, 3.06, 4.33]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights004.geometry}
        material={nodes.LargeHangingLights004.material}
        position={[-3.3, 3.06, 8.54]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights005.geometry}
        material={nodes.LargeHangingLights005.material}
        position={[-3.3, 3.06, 13.06]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights007.geometry}
        material={nodes.LargeHangingLights007.material}
        position={[1.8, 3.06, 13.06]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights008.geometry}
        material={nodes.LargeHangingLights008.material}
        position={[6.94, 3.06, 13.06]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LargeHangingLights009.geometry}
        material={nodes.LargeHangingLights009.material}
        position={[12.89, 3.06, 13.06]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KanisterCutter.geometry}
        material={materials.Canisterlights}
        position={[-3.18, 2.68, 2.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent01.geometry}
        material={nodes.AirVent01.material}
        position={[-2.3, 2.66, 1.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent01001.geometry}
        material={nodes.AirVent01001.material}
        position={[-2.3, 2.66, -1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent01002.geometry}
        material={nodes.AirVent01002.material}
        position={[1.05, 2.66, 1.66]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent01003.geometry}
        material={nodes.AirVent01003.material}
        position={[1.05, 2.66, -1.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent01004.geometry}
        material={nodes.AirVent01004.material}
        position={[3.99, 2.66, 1.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent01005.geometry}
        material={nodes.AirVent01005.material}
        position={[3.99, 2.66, -1.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Counter_top.geometry}
        material={materials.GranitCounterTop}
        position={[6.98, 1.11, -0.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02001.geometry}
        material={nodes.Chair02001.material}
        position={[-1.28, 0.01, -0.78]}
        rotation={[Math.PI, -1.56, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02002.geometry}
        material={nodes.Chair02002.material}
        position={[-0.41, 0.01, -0.62]}
        rotation={[Math.PI, -1.29, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02003.geometry}
        material={nodes.Chair02003.material}
        position={[0.49, 0.01, -0.71]}
        rotation={[0, -1.44, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02004.geometry}
        material={nodes.Chair02004.material}
        position={[-1.94, 0.01, -1.43]}
        rotation={[-Math.PI, 0.12, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02005.geometry}
        material={nodes.Chair02005.material}
        position={[0.98, 0.01, -1.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02006.geometry}
        material={nodes.Chair02006.material}
        position={[0.32, 0.01, -2.14]}
        rotation={[0, 1.51, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02.geometry}
        material={nodes.Chair02.material}
        position={[-0.96, 0.01, -2.13]}
        rotation={[0, 1.5, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02007.geometry}
        material={nodes.Chair02007.material}
        position={[6.51, 0.01, 8.79]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02008.geometry}
        material={nodes.Chair02008.material}
        position={[7.44, 0.01, 8.89]}
        rotation={[0, -1.42, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02009.geometry}
        material={nodes.Chair02009.material}
        position={[8.37, 0.01, 8.86]}
        rotation={[-Math.PI, -1.34, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02010.geometry}
        material={nodes.Chair02010.material}
        position={[5.57, 0.01, 8.14]}
        rotation={[-Math.PI, 0.01, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02011.geometry}
        material={nodes.Chair02011.material}
        position={[9.08, 0.01, 8.18]}
        rotation={[0, 0.06, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02012.geometry}
        material={nodes.Chair02012.material}
        position={[8.39, 0.01, 7.37]}
        rotation={[0, 1.42, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02013.geometry}
        material={nodes.Chair02013.material}
        position={[7.5, 0.01, 7.33]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02014.geometry}
        material={nodes.Chair02014.material}
        position={[6.55, 0.01, 7.38]}
        rotation={[0, 1.39, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02015.geometry}
        material={nodes.Chair02015.material}
        position={[12.21, 0.01, 17.59]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02016.geometry}
        material={nodes.Chair02016.material}
        position={[13.14, 0.01, 17.68]}
        rotation={[0, -1.42, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02017.geometry}
        material={nodes.Chair02017.material}
        position={[14.07, 0.01, 17.66]}
        rotation={[-Math.PI, -1.34, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02018.geometry}
        material={nodes.Chair02018.material}
        position={[11.28, 0.01, 16.93]}
        rotation={[-Math.PI, 0.01, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02019.geometry}
        material={nodes.Chair02019.material}
        position={[14.78, 0.01, 16.97]}
        rotation={[0, 0.06, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02020.geometry}
        material={nodes.Chair02020.material}
        position={[14.1, 0.01, 16.16]}
        rotation={[0, 1.42, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02021.geometry}
        material={nodes.Chair02021.material}
        position={[13.2, 0.01, 16.13]}
        rotation={[-Math.PI, 1.53, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02022.geometry}
        material={nodes.Chair02022.material}
        position={[12.25, 0.01, 16.17]}
        rotation={[-Math.PI, 1.23, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02023.geometry}
        material={nodes.Chair02023.material}
        position={[13.92, 0.04, 9.31]}
        rotation={[-3.13, 0, 3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02024.geometry}
        material={nodes.Chair02024.material}
        position={[13.83, 0.05, 10.24]}
        rotation={[3.14, -0.15, 3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02025.geometry}
        material={nodes.Chair02025.material}
        position={[13.86, 0.06, 11.17]}
        rotation={[-3.12, 0.23, 3.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02026.geometry}
        material={nodes.Chair02026.material}
        position={[14.58, 0, 8.37]}
        rotation={[-1.31, 1.52, 1.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02027.geometry}
        material={nodes.Chair02027.material}
        position={[14.54, 0.03, 11.88]}
        rotation={[0.7, -1.49, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02028.geometry}
        material={nodes.Chair02028.material}
        position={[15.35, -0.02, 11.19]}
        rotation={[0.02, -0.15, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02029.geometry}
        material={nodes.Chair02029.material}
        position={[15.38, -0.03, 10.3]}
        rotation={[0.01, 0.04, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair02030.geometry}
        material={nodes.Chair02030.material}
        position={[15.34, -0.03, 9.35]}
        rotation={[-0.01, 0.35, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fridge.geometry}
        material={materials.Fridge}
        position={[7.63, 0, -2.05]}
        scale={[1, 1.07, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.End_Table_01004.geometry}
        material={nodes.End_Table_01004.material}
        position={[-0.65, 0.01, 0.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.End_Table_01003.geometry}
        material={nodes.End_Table_01003.material}
        position={[5.26, 0.01, 11.16]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.End_Table_01005.geometry}
        material={nodes.End_Table_01005.material}
        position={[0.02, 0.01, 0.9]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.End_Table_01001.geometry}
        material={nodes.End_Table_01001.material}
        position={[9.38, 0.01, 10.88]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CoffeMachine.geometry}
        material={materials.coffeMachine02}
        position={[7.67, 1.14, -1.19]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Hanging_Lights001.geometry}
        material={nodes.Kitchen_Hanging_Lights001.material}
        position={[4.86, 2.69, 1.47]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Hanging_Lights003.geometry}
        material={nodes.Kitchen_Hanging_Lights003.material}
        position={[4.86, 2.69, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Hanging_Lights002.geometry}
        material={nodes.Kitchen_Hanging_Lights002.material}
        position={[4.86, 2.69, -1.69]}
      />
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={nodes.Chair.material}
        position={[-2.11, 0.03, 0.81]}
        rotation={[0, 1.56, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair001.geometry}
        material={nodes.Chair001.material}
        position={[1.28, 0.03, 0.7]}
        rotation={[0, -1.15, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair002.geometry}
        material={nodes.Chair002.material}
        position={[6.47, 0.03, 11.04]}
        rotation={[0, -1.15, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair003.geometry}
        material={nodes.Chair003.material}
        position={[8.32, 0.03, 11.13]}
        rotation={[0, 0.86, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carpet.geometry}
        material={materials.Carpet}
        position={[-0.59, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03.geometry}
        material={nodes.Chair03.material}
        position={[-5.93, 0, -1.53]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03001.geometry}
        material={nodes.Chair03001.material}
        position={[-7.75, 0, -4.51]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03002.geometry}
        material={nodes.Chair03002.material}
        position={[-8.23, 0, -1.47]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03003.geometry}
        material={nodes.Chair03003.material}
        position={[-7.97, 0, 2.62]}
        rotation={[0, -0.73, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03004.geometry}
        material={nodes.Chair03004.material}
        position={[-6.59, 0, 2.56]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03005.geometry}
        material={nodes.Chair03005.material}
        position={[0.51, 0, 7.94]}
        rotation={[0, -0.01, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03006.geometry}
        material={nodes.Chair03006.material}
        position={[1.97, -0.01, 8.39]}
        rotation={[0, -1.56, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03007.geometry}
        material={nodes.Chair03007.material}
        position={[0.08, 0, 9.96]}
        rotation={[0, -0.73, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03008.geometry}
        material={nodes.Chair03008.material}
        position={[3.44, 0, 9.87]}
        rotation={[Math.PI, -1.48, Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03009.geometry}
        material={nodes.Chair03009.material}
        position={[2.44, 0, 6.82]}
        rotation={[-Math.PI, -0.41, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03010.geometry}
        material={nodes.Chair03010.material}
        position={[-6.67, 0, 6.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03011.geometry}
        material={nodes.Chair03011.material}
        position={[-8.77, 0, 9.31]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03012.geometry}
        material={nodes.Chair03012.material}
        position={[-8.47, 0, 13.09]}
        rotation={[-Math.PI, 1.57, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03013.geometry}
        material={nodes.Chair03013.material}
        position={[-6.83, 0, 11.41]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03014.geometry}
        material={nodes.Chair03014.material}
        position={[-5.88, 0, 12.89]}
        rotation={[-Math.PI, 0.01, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03015.geometry}
        material={nodes.Chair03015.material}
        position={[-8.37, 0, 17.6]}
        rotation={[0, 1.1, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03016.geometry}
        material={nodes.Chair03016.material}
        position={[-8.49, 0, 15.4]}
        rotation={[-Math.PI, 1.06, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03017.geometry}
        material={nodes.Chair03017.material}
        position={[-3.7, 0, 17.23]}
        rotation={[0, -1.57, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03018.geometry}
        material={nodes.Chair03018.material}
        position={[-5.56, 0, 17.86]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03019.geometry}
        material={nodes.Chair03019.material}
        position={[-0.87, 0, 17.32]}
        rotation={[-Math.PI, -0.43, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03020.geometry}
        material={nodes.Chair03020.material}
        position={[3.76, 0, 17.3]}
        rotation={[-Math.PI, 0.62, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03021.geometry}
        material={nodes.Chair03021.material}
        position={[8.92, 0, 17.48]}
        rotation={[0, -1.56, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03022.geometry}
        material={nodes.Chair03022.material}
        position={[7.05, 0, 17.93]}
        rotation={[0, 1.01, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03023.geometry}
        material={nodes.Chair03023.material}
        position={[-1.39, 0, -8.55]}
        rotation={[0, 1.36, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03024.geometry}
        material={nodes.Chair03024.material}
        position={[-1.74, 0, -5.72]}
        rotation={[0, 0.28, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03025.geometry}
        material={nodes.Chair03025.material}
        position={[2.97, 0, -8.43]}
        rotation={[0, 0.26, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03026.geometry}
        material={nodes.Chair03026.material}
        position={[6.32, 0, -8.55]}
        rotation={[0, -0.25, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03027.geometry}
        material={nodes.Chair03027.material}
        position={[8.49, 0, -7.59]}
        rotation={[Math.PI, -1.09, Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03028.geometry}
        material={nodes.Chair03028.material}
        position={[3.97, 0, -6.72]}
        rotation={[0, -1.57, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03029.geometry}
        material={nodes.Chair03029.material}
        position={[-8.65, 0, -8.57]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03030.geometry}
        material={nodes.Chair03030.material}
        position={[-6.75, 0, -8.43]}
        rotation={[0, 0.08, 0]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03031.geometry}
        material={nodes.Chair03031.material}
        position={[-4.84, 0, -8.62]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03032.geometry}
        material={nodes.Chair03032.material}
        position={[-8.74, 0, -6.82]}
        rotation={[-Math.PI, -0.3, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03033.geometry}
        material={nodes.Chair03033.material}
        position={[-6.66, 0, -6.68]}
        rotation={[-Math.PI, -0.64, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair03034.geometry}
        material={nodes.Chair03034.material}
        position={[4.61, 0, -5.24]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={0.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.Wall}
      />
     
    </group>
  );
}

useGLTF.preload("/scene.glb");