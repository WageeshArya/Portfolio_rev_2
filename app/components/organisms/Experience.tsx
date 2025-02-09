"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Experience = () => {
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
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="expSection w-full">
      <div className="h-40 w-full z-20 relative bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(255,255,255,1))]"></div>
      <div className="min-h-[100svh] bg-white z-20 relative flex items-center justify-center">
        <div className="experienceContainer overflow-hidden relative w-full h-[8rem]">
          <span className="expTitle text-9xl -rotate-[16deg] top-[180%] absolute left-1/2 -translate-x-1/2">
            EXPERIENCE
          </span>
        </div>
      </div>
      {/* Techbae */}
      <div className="min-h-[100svh] bg-white z-20 relative flex items-center justify-center">
        test
      </div>
    </div>
  );
};
