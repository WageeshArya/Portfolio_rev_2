"use client";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Outlines, Environment, useTexture } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import { silkscreen } from "@/app/helpers/fonts";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#dbd7f9",
  roughness: 0,
  envMapIntensity: 1.5,
});

const Overlay = () => {
  return (
    <div
      className={`absolute top-0 left-0 z-5! h-[100vh] w-[100vw] pt-[4rem] ${silkscreen.className}`}
    >
      <div className="absolute z-10 top-[50%] -translate-y-1/2 right-0 text-right p-10">
        <div className={`titleText1 text-left ml-2`}>Hi! I&#39;m</div>
        <div className="titleText2 text-8xl mix-blend-difference">
          WAGEESH ARYA
        </div>
        <div className="titleText3 text-4xl">I&#39;m a WEB DEVELOPER</div>
        <div className="titleText4">
          with {new Date().getFullYear() - 2020} years of experience
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[6vh] w-[100vw] bg-gradient-to-t from-[#efeff2] z-5"></div>
    </div>
  );
};

export const Main = () => (
  <div className="h-[100vh] w-[100vw]">
    <Overlay />
    <Canvas
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
    >
      <ambientLight intensity={1} />
      <color attach="background" args={["#E3DFF6"]} />
      <spotLight
        intensity={1}
        angle={0.2}
        penumbra={1}
        position={[30, 30, 30]}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Pointer />
        <Clump />
      </Physics>
      <Environment files="/adamsbridge.hdr" />
      <EffectComposer disableNormalPass multisampling={0}>
        <N8AO
          halfRes
          color="black"
          aoRadius={2}
          intensity={1}
          aoSamples={6}
          denoiseSamples={4}
        />
        <SMAA />
      </EffectComposer>
    </Canvas>
  </div>
);

const Clump = ({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) => {
  const [ref, api]: any = useSphere(() => ({
    args: [1],
    mass: 0.5,
    angularDamping: 0.05,
    linearDamping: 0.25,
    position: [rfs(10), rfs(10), rfs(10)],
  }));
  useFrame(() => {
    for (let i = 0; i < 25; i++) {
      ref.current.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-40)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[sphereGeometry, baubleMaterial, 40]}
      // material-map={texture}
    >
      <Outlines thickness={0.025} />
    </instancedMesh>
  );
};

const Pointer = () => {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [3],
    position: [0, 0, 0],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
};
