"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { black, white } from "../../utils/constants";
import Computer from "../molecules/Computer";

export const Landing = () => {
  const primaryText = useRef(null);
  const background = useRef(null);
  const completed = useRef(null);
  const primary = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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
    gsap.to([".mainIntro", ".subIntro"], {
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
        // markers: true,
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
              className="font-bold text-8xl text-center text-white"
              ref={primaryText}
            >
              こんにちは！
            </h1>
            <h2 className="text-5xl text-center mt-5 opacity-0 text-subText secondaryText">
              Hello! 👋
            </h2>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <p className="text-center text-subText font-medium opacity-0 secondaryText">
              アリャー ワギーシのポートフォーリオ @2025
            </p>
            <p className="text-center text-subText font-medium opacity-0 secondaryText">
              Wageesh Arya’s Portfolio
            </p>
          </div>
        </div>
      )}

      <div
        ref={completed}
        className={`relative ${isAnimationComplete ? "block" : "hidden"}`}
      >
        <div className="absolute top-0 right-0 lg:top-20 sm:!w-[480px] sm:!h-[480px] xs:top-10">
          <Computer />
        </div>
        <div className="w-svw h-svh">
          <div className="sticky -z-10 top-[20%] sm:top-[12.5%] left-12 mainIntro opacity-0 pl-10">
            <h1
              ref={primary}
              className="mainText xl:text-7xl lg:text-5xl sm:text-3xl leading-[1.35]"
            >
              FULL STACK
              <br />
              WEB
              <br />
              DEVELOPER
            </h1>
            <p className="sm:text-sm">
              w/ experience developing production AI applications
            </p>
          </div>
          <div className="sticky top-[65%] sm:top-[75%] right-12 subIntro opacity-0 pr-10 sm:bg-white sm:pt-5">
            <h1 className="xl:text-8xl lg:text-6xl sm:text-4xl font-normal text-right">
              WAGEESH ARYA
            </h1>
            <p className="text-right mt-5">
              I’m a full stack developer with 4.5 years of experience developing
              robust, <br />
              scalable, and efficient web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
