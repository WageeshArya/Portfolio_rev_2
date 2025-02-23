"use client";
import { language } from "@/app/utils/constants";
import { textsEn, textsJp } from "@/app/utils/language";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const Skills = () => {
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
    gsap.to([".skillsTitle", ".skillsList"], {
      opacity: 1,
      display: "block",
      duration: 0.75,
      ease: "power3.inOut",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".skillsSection",
        start: "start bottom-=15%",
        scrub: false,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="skillsSection w-svw relative my-8">
      <div id="skills" className="mx-10 sm:mx-4 xs:mx-4 py-4">
        <div className="font-normal bg-black py-8 rounded-2xl text-6xl text-white relative min-h-[100vh] sm:min-h-[60vh] xs:min-h-[60vh]">
          <div className="skillsTitle hidden opacity-0 sticky ml-8 top-1/2 left-20 text-8xl lg:text-6xl sm:text-4xl xs:text-3xl ">
            {textLanguage.skills.title}
          </div>
          <div className="skillsList hidden opacity-0 w-1/2 h-full ml-[50%]">
            <ul className="relative pb-10">
              <ul>
                <h3 className="my-4 text-5xl lg:text-3xl sm:text-xl xs:text-xl">
                  {textLanguage.skills.FE}
                </h3>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  HTML
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  CSS/SCSS
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  TypeScript
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  JavaScript
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Next.js/React/Redux
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Vue.js
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  GSAP Animations
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Three.js/React Three Fiber
                </li>
              </ul>
              <hr className="w-1/12 mt-4" />
              <ul>
                <h3 className="my-4 text-5xl lg:text-3xl sm:text-xl xs:text-xl">
                  {textLanguage.skills.BE}
                </h3>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Node.js
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Express
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  LangChain/LangSmith
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  PostgreSQL
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  SQL
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  MongoDB/Mongoose
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Prisma ORM
                </li>
              </ul>
              <hr className="w-1/12 mt-4" />
              <ul>
                <h3 className="my-4 text-5xl lg:text-3xl sm:text-xl xs:text-xl">
                  {textLanguage.skills.others}
                </h3>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Amazon Web Services (AWS)
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Git/GitHub Actions
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  k6 Stress Testing
                </li>
                <li className="text-sm sm:text-[0.75rem] xs:text-[0.5rem] leading-[2rem] sm:leading-[1.5rem] xs:leading-[1.25rem] ml-4">
                  Fastlane
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
