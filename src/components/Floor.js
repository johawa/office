
function Button({ v = new THREE.Vector3(), c = new THREE.Color() }) {
    const material = useRef();
    const [active, setActive] = useState(false);
    const [zoom, set] = useState(true);
    useCursor(active);
    useFrame((state) => {
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, 0.05);
      state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), 0.05);
      state.camera.lookAt(0, 0, 0);
      state.camera.updateProjectionMatrix();
    });
    return (
      <mesh
        receiveShadow
        castShadow
        onClick={() => set(!zoom)}
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
      >
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial
          ref={material}
          color="blue"
          clearcoat={1}
          clearcoatRoughness={0}
          roughness={0}
          envMapIntensity={2}
        />
      </mesh>
    );
  }
  