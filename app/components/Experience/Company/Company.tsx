"use client";
import React, { useEffect } from "react";
import classes from "./Card.module.css";
import gsap, { Quad } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
type Props = {};

const Company = ({ item, index }: any) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      `.${item.company}-companyName`,
      {
        display: "none",
        opacity: 0,
        y: 50,
        skewY: 2,
      },
      {
        display: "block",
        opacity: 1,
        y: 0,
        skewY: 0,
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      `.${item.company}-period`,
      {
        opacity: 0,
        y: 50,
        skewY: 2,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        delay: 0.1,
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      `.${item.company}-position`,
      {
        opacity: 0,
        y: 50,
        skewY: 2,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      `.${item.company}-about`,
      {
        opacity: 0,
        y: 50,
        skewY: 2,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      `.${item.company}-skillsTitle`,
      {
        opacity: 0,
        y: 50,
        skewY: 2,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        delay: 0.4,
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      `.${item.company}-skills`,
      {
        opacity: 0,
        y: 50,
        skewY: 2,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
    gsap.fromTo(
      `#${item.company}-logo`,
      {
        y: 120,
        opacity: 0,
      },
      {
        y: 0,
        delay: 0.4,
        duration: 1,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `#${item.company}`,
          start: "top center",
          end: "bottom center",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <div key={item.company} id={item.company}>
      <div
        className={`flex sm:flex-col-reverse w-[60%] sm:w-[80%] mx-auto ${
          index % 2 === 0 ? "flex-row-reverse text-right" : "flex-row"
        }`}
      >
        <div className="p-5 my-[5rem] sm:mt-[1rem] flex-1">
          <div className={`text-5xl overflow-y-hidden mb-1`}>
            <div className={`${item.company}-companyName`}>
              {item.companyName}
            </div>
          </div>
          <div className={`text-md overflow-y-hidden mb-1`}>
            <div className={`${item.company}-period`}>{item.period}</div>
          </div>
          <div className={`text-l overflow-y-hidden mb-1 font-bold`}>
            <div className={`${item.company}-position`}>{item.position}</div>
          </div>
          <div className={`mt-5 overflow-y-hidden`}>
            <div className={`${item.company}-about`}>{item.about}</div>
          </div>
          <div className="mt-4">
            <div className="overflow-y-hidden font-bold">
              <div className={`${item.company}-skillsTitle`}>
                What I mostly worked with
              </div>
            </div>
            <div className="overflow-y-hidden">
              <div className={`${item.company}-skills`}>
                {item.skills.join(", ")}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-5 my-[5rem] sm:mb-[1rem] flex items-center sm:items-end overflow-hidden justify-center ${
            item.img ? "flex-1" : ""
          }`}
        >
          {item.img && (
            <div className="overflow-y-hidden">
              <Image
                id={`${item.company}-logo`}
                className="object-cover"
                src={item.img}
                width={200}
                height={200}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Company;
