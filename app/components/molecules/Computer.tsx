"use client";
import { language } from "@/app/utils/constants";
import { textsEn, textsJp } from "@/app/utils/language";
import {
  Environment,
  useGLTF,
  ContactShadows,
  Float,
  PresentationControls,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { useLocalStorage } from "usehooks-ts";

const MacbookModel = () => {
  const [textLanguage, setTextLanguage] = useState(textsEn);
  const [value] = useLocalStorage("page-language", language.en);

  useEffect(() => {
    if (value === language.jp) {
      setTextLanguage(textsJp);
    } else {
      setTextLanguage(textsEn);
    }
  }, [value]);
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <Suspense fallback={<Loader />}>
      <Float rotationIntensity={0.6}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ffffff"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />
        <primitive object={macbook.scene} position-y={-1.2} position-x={0.5}>
          <Html
            transform
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe
              className="w-[1024px] h-[670px] border-none rounded-lg bg-black"
              srcDoc={`
              <html lang="en">
              <head>
                <style>
                  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&display=swap');
                  body {
                    font-family: "Inter", serif;
                    font-optical-sizing: auto;
                    font-style: normal;
                    background-color: white;
                  }
                  .title {
                    text-align: center;
                    font-size: 4rem;
                    font-weight: 400;
                    margin-top: 50px;
                  }
                  .subTitle {
                    font-size: 2.5rem;
                    font-weight: 300;
                    text-align: center;
                    margin-top: -20px;
                  }
                  .arrow {
                    text-align: center;
                    font-size: 4rem;
                    margin-top: -20px;
                  }
                  .socials {
                    width: 75%;
                    margin: 0 auto;
                    margin-top: -50px;
                    margin-bottom: 50px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    background-color: white;
                    height: 60vh;
                  }
                  .socialContainer {
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                  }
                  .socialLinkButton {
                    font-size: 3rem;
                  }
                  button {
                    width: 300px;
                    height: 100px;
                    border: none;
                    background: none;
                  }

                  .socialLinkButton {
                    display: block;
                    text-align: center;
                    text-decoration: none;
                    color: #333;
                    border-radius: 100px;
                    transition: .3s;
                  }
                  .linkText {
                    font-size: 2.5rem;
                    line-height: 100px;
                    color: #A4A4A4;
                  }
                  .bgExtendLeft {
                    padding: 20px;
                    border: 4px solid #A4A4A4;
                    color: #A4A4A4;
                    overflow: hidden;
                    position: relative;
                    z-index: 1;
                  }
                  .bgExtendLeft::before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    position: absolute;
                    left: -100%;
                    top: 0;
                    transition: .4s;
                    z-index: -1;
                  }
                  .bgExtendLeft:hover::before {
                    left: 0;
                  }
                </style>
              </head>
              <body>
                <h1 class="title">${textLanguage.html.thanks}\n</h1>
                <h2 class="subTitle">${textLanguage.html.intro}</h2>
                <p class="arrow">↓</p>
                <div
                  class="socials"
                >
                  <div class="socialContainer">
                    <button>
                      <a target="_blank" href="https://www.linkedin.com/in/wageesh-arya" class="socialLinkButton bgExtendLeft">
                        <span class="linkText">${textLanguage.contact.linkedIn}</span>
                      </a>
                    </button>
                  </div>
                  <div class="socialContainer">
                    <button>
                      <a target="_blank" href="#" class="socialLinkButton bgExtendLeft">
                        <span class="linkText">${textLanguage.contact.resume}</span>
                      </a>
                    </button>
                  </div>
                  <div class="socialContainer">
                    <button>
                      <a target="_blank" href="mailto:wageesharya114@gmail.com" class="socialLinkButton bgExtendLeft">
                        <span class="linkText">Email</span>
                      </a>
                    </button>
                  </div>
                  <div class="socialContainer">
                    <button>
                      <a target="_blank" href="https://github.com/WageeshArya" class="socialLinkButton bgExtendLeft">
                        <span class="linkText">${textLanguage.contact.github}</span>
                      </a>
                    </button>
                  </div>
                  
                </div>
              </body>
            </html>

              `}
            />
          </Html>
        </primitive>
      </Float>
    </Suspense>
  );
};

const Loader = () => {
  return <div>Loading!</div>;
};

const Computer = () => {
  return (
    <Suspense>
      <Canvas
        className="r3f relative mx-auto xl:!w-[800px] xl:!h-[800px] lg:!w-[500px] lg:!h-[500px] sm:!w-[480px] xs:sm:!h-[480px] xs:!h-[360px] touch-none !z-100"
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-2, 2.5, 6],
        }}
      >
        <Environment preset="city" />

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 100 }}
          snap={{ mass: 2, tension: 100 }}
        >
          <MacbookModel />
        </PresentationControls>
        <ContactShadows position-y={-1.4} opacity={0.5} scale={5} blur={2.4} />
      </Canvas>
    </Suspense>
  );
};

export default Computer;
