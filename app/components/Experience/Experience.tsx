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
        width: "200px",
        height: "400px",
      },
      {
        rotate: "0deg",
        width: "100vw",
        height: "75vh",
        scrollTrigger: {
          trigger: ".expander",
          start: "top center",
          end: "30% center",
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
        scale: 10,
        x: -3500,
        scrollTrigger: {
          trigger: ".expander",
          start: "top center",
          end: "bottom 10%",
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
          trigger: ".expander",
          start: "center center",
          end: "bottom center",
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
        scale: 10,
        x: 3500,
        scrollTrigger: {
          trigger: ".expander",
          start: "top center",
          end: "bottom 10%",
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
          trigger: ".expander",
          start: "center center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="mb-[30vh]">
        <div className="w-[100vw] h-[100vh]">
          <div className="h-[50vh] w-full" />
          <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-[7rem] overflow-x-hidden">
            <Image
              id="expImg"
              className="absolute object-cover"
              src={"/experience.svg"}
              height={400}
              width={200}
              alt=""
            />
            <div id="titlePart1">MY EXPE</div>
            <div id="titlePart2">RIENCE</div>
          </div>
          <div className="expander w-[100vw] h-[100vh]">
            <div className="w-full h-[60vh]"></div>
          </div>
        </div>
      </div>
      {experience.map((item: any, index: number) => {
        return <Company key={item.company} item={item} index={index} />;
      })}
    </section>
  );
};

export default Experience;
