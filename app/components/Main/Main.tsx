"use client";
import React, { useState, useTransition } from "react";
import { silkscreen } from "@/app/helpers/fonts";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
type Props = {};

const Main = (props: Props) => {
  return (
    <div className="h-[100vh] w-[100vw] top-0 left-0">
      <Overlay />
      <Canvas
        className="z-1 "
        shadows
        camera={{ position: [0, 2, 4.5], fov: 50 }}
      >
        <group position={[0, -0.65, 0]}>
          <Sphere />
          <AccumulativeShadows
            temporal={false}
            frames={200}
            color="none"
            colorBlend={0.5}
            opacity={1}
            scale={10}
            alphaTest={0.65}
          >
            <RandomizedLight
              amount={8}
              radius={5}
              ambient={0.5}
              position={[5, 3, 2]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>
        <Env />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enablePan={true}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
};

const Overlay = () => {
  return (
    <div
      className={`absolute top-0 left-0 z-5! h-[100vh] w-[100vw] pt-[4rem] ${silkscreen.className}`}
    >
      <div className="absolute z-10 top-[50%] -translate-y-1/2 right-0 text-right p-10">
        <div className={`text-left ml-2`}>Hi! I&#39;m</div>
        <div className="text-8xl">WAGEESH ARYA</div>
        <div className="text-4xl">I&#39;m a WEB DEVELOPER</div>
        <div>with {new Date().getFullYear() - 2020} years of experience</div>
      </div>
      <div className="absolute bottom-0 left-0 h-[6vh] w-[100vw] bg-gradient-to-t from-[#efeff2] z-5"></div>
    </div>
  );
};

const Sphere = () => {
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial metalness={0} roughness={0} />
      </mesh>
    </Center>
  );
};

const Env = () => {
  return <Environment preset={"apartment"} background blur={0.65} />;
};

export default Main;
