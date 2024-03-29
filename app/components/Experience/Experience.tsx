import { useEffect } from "react";
import { experience } from "@/app/helpers/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Company from "./Company/Company";

type Props = {};

const Experience = (props: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#expImg",
      {
        rotate: "45deg",
        width: window.innerWidth > 767 ? "200px" : "100px",
        height: "400px",
      },
      {
        rotate: "0deg",
        width: "100vw",
        height: "75vh",
        delay: 1,
        scrollTrigger: {
          trigger: ".mainExpander",
          // start: "bottom 40%",
          // end: "bottom top",
          start: "center center-=100",
          end: "bottom top+=200",
          markers: false,
          scrub: 1,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      "#titlePart1",
      {
        scale: 1,
        x: 0,
      },
      {
        scale: window.innerWidth > 767 ? 13 : 10,
        x:
          window.innerWidth > 767
            ? window.innerWidth > 2000
              ? -4500
              : -3000
            : -1000,
        scrollTrigger: {
          trigger: ".mainExpander",
          start: "center center",
          end: "bottom top+=200",
          markers: false,
          scrub: 1,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      "#titlePart1",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".mainExpander",
          start: "bottom top",
          end: "bottom top",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      "#titlePart2",
      {
        scale: 1,
        x: 0,
      },
      {
        scale: window.innerWidth > 767 ? 13 : 10,
        x:
          window.innerWidth > 767
            ? window.innerWidth > 2000
              ? 4500
              : 3000
            : 1000,
        scrollTrigger: {
          trigger: ".mainExpander",
          start: "center center",
          end: "bottom top+=200",
          markers: false,
          scrub: 1,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      "#titlePart2",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".mainExpander",
          start: "bottom top",
          end: "bottom bottom+=500",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="EXPERIENCE">
      <div className="">
        <div className="w-[100vw] mt-[60vh]">
          {/* <div className="expander sm:h-[60vh] lg:h-[80vh] xl:h-[150vh] w-full" /> */}
          <div className="mainExpander xl:h-[100vh] lg:h-[100vh] sm:h-[50vh] overflow-x-hidden mainExpand sticky top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-[7rem]">
            {/* Next Image component made the image lower quality on mobile screens */}
            <img
              id="expImg"
              className="absolute object-cover"
              src={"/experience.png"}
              alt=""
            />
            <div
              id="titlePart1"
              className="xl:text-[7rem] lg:text-[4rem] sm:text-[3rem]"
            >
              EXPER
            </div>
            <div
              id="titlePart2"
              className="xl:text-[7rem] lg:text-[4rem] sm:text-[3rem]"
            >
              IENCE
            </div>
          </div>
          <div className="w-[100vw] sm:h-[50vh] lg:h-[50vh] xl:h-[80vh]" />
        </div>
      </div>
      {experience.map((item: any, index: number) => {
        return <Company key={item.company} item={item} index={index} />;
      })}
    </section>
  );
};

export default Experience;
