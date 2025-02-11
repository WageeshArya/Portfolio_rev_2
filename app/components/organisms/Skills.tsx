"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Skills = () => {
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
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="skillsSection w-svw relative my-8">
      <div id="skills" className="mx-10 py-4">
        <div className="font-normal bg-black py-8 rounded-2xl text-6xl text-white relative min-h-[100vh]">
          <div className="skillsTitle hidden opacity-0 sticky ml-8 top-1/2 left-20 text-8xl">
            SKILLS
          </div>
          <div className="skillsList hidden opacity-0 w-1/2 h-full ml-[50%]">
            <ul className="relative pb-10">
              <ul>
                <h3 className="my-4 text-5xl">Front End</h3>
                <li className="text-sm leading-[2rem] ml-4">HTML</li>
                <li className="text-sm leading-[2rem] ml-4">CSS/SCSS</li>
                <li className="text-sm leading-[2rem] ml-4">TypeScript</li>
                <li className="text-sm leading-[2rem] ml-4">JavaScript</li>
                <li className="text-sm leading-[2rem] ml-4">
                  Next.js/React/Redux
                </li>
                <li className="text-sm leading-[2rem] ml-4">Vue.js</li>
                <li className="text-sm leading-[2rem] ml-4">GSAP Animations</li>
                <li className="text-sm leading-[2rem] ml-4">
                  Three.js/React Three Fiber
                </li>
              </ul>
              <hr className="w-1/12 mt-4" />
              <ul>
                <h3 className="my-4 text-5xl">Back End</h3>
                <li className="text-sm leading-[2rem] ml-4">Node.js</li>
                <li className="text-sm leading-[2rem] ml-4">Express</li>
                <li className="text-sm leading-[2rem] ml-4">
                  LangChain/LangSmith
                </li>
                <li className="text-sm leading-[2rem] ml-4">PostgreSQL</li>
                <li className="text-sm leading-[2rem] ml-4">SQL</li>
                <li className="text-sm leading-[2rem] ml-4">
                  MongoDB/Mongoose
                </li>
                <li className="text-sm leading-[2rem] ml-4">Prisma ORM</li>
              </ul>
              <hr className="w-1/12 mt-4" />
              <ul>
                <h3 className="my-4 text-5xl">Others</h3>
                <li className="text-sm leading-[2rem] ml-4">
                  Amazon Web Services (AWS)
                </li>
                <li className="text-sm leading-[2rem] ml-4">
                  Git/GitHub Actions
                </li>
                <li className="text-sm leading-[2rem] ml-4">
                  k6 Stress Testing
                </li>
                <li className="text-sm leading-[2rem] ml-4">Fastlane</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
