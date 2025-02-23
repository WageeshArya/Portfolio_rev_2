"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { black, language, white } from "../../utils/constants";
import Computer from "../molecules/Computer";
import { textsEn, textsJp } from "@/app/utils/language";
import { useLocalStorage } from "usehooks-ts";

export const Landing = () => {
  const primaryText = useRef(null);
  const background = useRef(null);
  const completed = useRef(null);
  const primary = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
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
    gsap.to(".secondaryText", {
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      stagger: 0.5,
    });

    gsap.to(background.current, {
      backgroundColor: white,
      delay: 2,
      duration: 1,
    });
    gsap.to(primaryText.current, {
      color: black,
      delay: 2,
      duration: 1,
    });
    gsap.to([primaryText.current, ".secondaryText"], {
      opacity: 0,
      delay: 2 + 1 + 0.5,
      duration: 1,
      onComplete: () => {
        setIsAnimationComplete(true);
      },
    });
  });

  useGSAP(() => {
    gsap.to([".mainIntro", ".subIntro", ".computerCanvas"], {
      delay: 2 + 1 + 0.5 + 1 + 0.5,
      duration: 1,
      opacity: 1,
      stagger: 0.5,
    });
    gsap.to("#navbar", {
      delay: 2 + 1 + 0.5 + 1 + 0.5,
      duration: 1,
      opacity: 1,
    });
    gsap.to([".mainIntro p", ".subIntro p"], {
      opacity: 0,
      scrollTrigger: {
        trigger: ".skillsSection",
        start: "start center",
        end: "center center",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="bg-white sticky">
      {!isAnimationComplete && (
        <div className="w-svw h-svh !z-50 bg-black" ref={background}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1
              className="font-bold text-8xl lg:text-6xl sm:text-4xl xs:text-2xl text-center text-white"
              ref={primaryText}
            >
              こんにちは！
            </h1>
            <h2 className="text-5xl lg:text-3xl sm:text-xl xs:text-lg text-center mt-5 sm:mt-2 xs:mt-2 opacity-0 text-subText secondaryText">
              Hello! 👋
            </h2>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[100svw]">
            <p className="text-center lg:text-sm sm:text-[0.75rem] xs:text-[0.75rem] text-subText font-medium opacity-0 secondaryText">
              アリャー ワギーシのポートフォーリオ @2025
            </p>
            <p className="text-center lg:text-sm sm:text-[0.75rem] xs:text-[0.75rem] text-subText font-medium opacity-0 secondaryText">
              Wageesh Arya’s Portfolio
            </p>
          </div>
        </div>
      )}

      <div
        ref={completed}
        className={`relative ${isAnimationComplete ? "block" : "hidden"}`}
      >
        <div className="computerCanvas opacity-0 absolute top-0 right-0 lg:top-20 sm:!w-[100svw] sm:mx-auto sm:!h-[525px] xs:!h-[540px] xs:top-10 xs:!w-[100svw] overflow-hidden">
          <Computer />
        </div>
        <div className="w-svw h-svh">
          <div className="sticky -z-10 top-[20%] sm:top-[50%] xs:top-[50%] left-12 mainIntro opacity-0 px-10 xs:px-10">
            <h1
              ref={primary}
              className={`mainText xl:text-7xl lg:text-5xl sm:text-3xl xs:text-2xl leading-[1.35] whitespace-pre-line ${
                value === language.jp ? "font-bold !leading-[1.25]" : ""
              }`}
            >
              {textLanguage.landing.heading1}
            </h1>
            <p className="sm:text-sm xs:text-xs whitespace-pre-line">
              {textLanguage.landing.subheading1}
            </p>
          </div>
          <div className="sticky top-[65%] sm:top-[75%] right-12 subIntro opacity-0 px-10 sm:bg-white sm:mt-5 xs:bg-white xs:mt-10 xs:px-5 xs:top-[75%] xs:pt-5">
            <h1
              className={`xl:text-8xl lg:text-6xl sm:text-4xl xs:text-3xl font-normal text-right whitespace-pre-line ${
                value === language.jp ? "font-bold" : ""
              }`}
            >
              {textLanguage.landing.heading2}
            </h1>
            <p className="text-right mt-5 xs:text-xs whitespace-pre-line">
              {textLanguage.landing.subheading2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
