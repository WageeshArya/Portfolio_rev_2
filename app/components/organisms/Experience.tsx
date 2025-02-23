"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "../molecules/Card";
import { language } from "@/app/utils/constants";
import { PositionInfo } from "../molecules/PositionInfo";
import { useEffect, useState } from "react";
import { textsEn, textsJp } from "@/app/utils/language";
import { useLocalStorage } from "usehooks-ts";

export const Experience = () => {
  const [textLanguage, setTextLanguage] = useState(textsEn);
  const [value] = useLocalStorage("page-language", language.en);

  useEffect(() => {
    if (value === language.jp) {
      setTextLanguage(textsJp);
    } else {
      setTextLanguage(textsEn);
    }
  }, [value]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".expTitle", {
      top: 0,
      rotate: 0,
      duration: 1.25,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".experienceContainer",
        start: "center-=50% bottom",
        end: "bottom bottom",
        markers: false,
        toggleActions: "play none none none",
      },
    });

    gsap.from(".techbaeCard", {
      y: 200,
      rotation: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".techbae",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".techbae .positionInfo", {
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".techbae",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".zeniusCard", {
      y: 200,
      rotation: -20,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".zenius",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".zenius .positionInfo", {
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".zenius",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".teraokaCard", {
      y: 200,
      rotation: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".teraoka",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".teraoka .positionInfo", {
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".teraoka",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".bitACard", {
      y: 200,
      rotation: -20,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".bitA",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    gsap.from(".bitA .positionInfo", {
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".bitA",
        start: "start center",
        toggleActions: "play none none none",
        markers: false,
      },
    });
  });

  return (
    <div className="expSection w-full snap-y snap-mandatory">
      <div className="h-40 w-full z-20 relative bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(255,255,255,1))]"></div>
      <div
        id="experience"
        className="min-h-[100svh] snap-start bg-white z-20 relative flex items-center justify-center"
      >
        <div className="experienceContainer overflow-hidden relative w-full h-[8rem]">
          <span className="expTitle text-center w-svw text-9xl lg:text-7xl sm:text-5xl xs:text-5xl -rotate-[16deg] top-[180%] absolute left-1/2 -translate-x-1/2">
            {textLanguage.experience.title}
          </span>
        </div>
      </div>
      {/* Techbae */}
      <div className="min-h-[100svh] bg-white snap-y snap-mandatory z-20 relative flex flex-col items-center justify-center">
        <div className="relative w-[100svw] min-h-[75svh] snap-start">
          <div className="top-1/2 left-1/2">
            <div className="techbae flex gap-4 lg:gap-12 sm:gap-12 xs:gap-12 items-center justify-center w-[80%] mx-auto lg:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
              <Card
                cornerStyles="bg-[linear-gradient(135deg,#1180A6_35px,#fff_0)] techbaeCard"
                name={textLanguage.name}
                position={textLanguage.experience.techbae.position}
                skillsRow1={textLanguage.experience.techbae.skillsRow1}
                skillsRow2={textLanguage.experience.techbae.skillsRow2}
                companyName={textLanguage.experience.techbae.companyName}
              />
              <PositionInfo
                companyName={textLanguage.experience.techbae.companyName}
                period={textLanguage.experience.techbae.period}
                location={textLanguage.experience.techbae.location}
                position={textLanguage.experience.techbae.position}
                description={textLanguage.experience.techbae.description}
                leaningLeft={true}
              />
            </div>
          </div>
        </div>

        {/* Zenius */}
        <div className="relative w-[100svw] min-h-[75svh] lg:mt-8 sm:mt-8 xs:mt-8 snap-start">
          <div className=" top-1/2 left-1/2">
            <div className="zenius flex gap-4 lg:gap-12 sm:gap-12 xs:gap-12 items-center justify-center w-[80%] mx-auto lg:flex-col sm:flex-col xs:flex-col">
              <PositionInfo
                companyName={textLanguage.experience.zenius.companyName}
                period={textLanguage.experience.zenius.period}
                location={textLanguage.experience.zenius.location}
                position={textLanguage.experience.zenius.position}
                description={textLanguage.experience.zenius.description}
                leaningLeft={false}
              />
              <Card
                cornerStyles="bg-[linear-gradient(135deg,#FFBD07_35px,#7A1FA2_0)] text-white zeniusCard"
                name={textLanguage.name}
                position={textLanguage.experience.zenius.position}
                skillsRow1={textLanguage.experience.zenius.skillsRow1}
                skillsRow2={textLanguage.experience.zenius.skillsRow2}
                companyName={textLanguage.experience.zenius.companyName}
              />
            </div>
          </div>
        </div>

        {/* Teraoka Seiko */}
        <div className="relative w-[100svw] min-h-[75svh] lg:mt-8 sm:mt-8 xs:mt-8 snap-start">
          <div className=" top-1/2 left-1/2">
            <div className="teraoka flex gap-4 lg:gap-12 sm:gap-12 xs:gap-12 items-center justify-center w-[80%] mx-auto lg:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
              <Card
                cornerStyles="bg-[linear-gradient(135deg,#009C84_35px,#fff_0)] teraokaCard"
                name={textLanguage.name}
                position={textLanguage.experience.teraoka.position}
                skillsRow1={textLanguage.experience.teraoka.skillsRow1}
                skillsRow2={textLanguage.experience.teraoka.skillsRow2}
                companyName={textLanguage.experience.teraoka.companyName}
              />
              <PositionInfo
                companyName={textLanguage.experience.teraoka.companyName}
                period={textLanguage.experience.teraoka.period}
                location={textLanguage.experience.teraoka.location}
                position={textLanguage.experience.teraoka.position}
                description={textLanguage.experience.teraoka.description}
                leaningLeft={true}
              />
            </div>
          </div>
        </div>

        {/* BitA */}
        <div className="relative w-[100svw] min-h-[75svh] lg:mt-8 sm:mt-8 xs:mt-8 snap-start">
          <div className=" top-1/2 left-1/2">
            <div className="bitA flex gap-4 lg:gap-12 sm:gap-12 xs:gap-12 items-center justify-center w-[80%] mx-auto lg:flex-col sm:flex-col xs:flex-col">
              <PositionInfo
                companyName={textLanguage.experience.bitA.companyName}
                period={textLanguage.experience.bitA.period}
                location={textLanguage.experience.bitA.location}
                position={textLanguage.experience.bitA.position}
                description={textLanguage.experience.bitA.description}
                leaningLeft={false}
              />
              <Card
                cornerStyles="bg-[linear-gradient(135deg,#DC0014_35px,#fff_0)] bitACard"
                name={textLanguage.name}
                position={textLanguage.experience.bitA.position}
                skillsRow1={textLanguage.experience.bitA.skillsRow1}
                skillsRow2={textLanguage.experience.bitA.skillsRow2}
                skillsRow3={textLanguage.experience.bitA.skillsRow3}
                companyName={textLanguage.experience.bitA.companyName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
