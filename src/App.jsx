import { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import burger from "./burger.glb";

function Burger() {
  const gltf = useLoader(GLTFLoader, "/burger.glb");
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <primitive ref={ref} object={gltf.scene} position={[0, -1, 0]} scale={2} />
  );
}

function App() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Burger />
      </Suspense>
    </Canvas>
  );
}

export default App;
