"use client";
import React, { useEffect } from "react";
import classes from "./Card.module.css";
import gsap, { Quad } from "gsap";
import Image from "next/image";
type Props = {};

const Card = ({ item, index }: any) => {
  console.log("item:::", item);

  useEffect(() => {
    gsap.to(`#exp-${item.company}`, {
      y: 50 * index,
      // scale: (index + 0.1) / 5,
      duration: 0.25,
      ease: Quad.easeOut,
      scrollTrigger: {
        trigger: `#container-${item.company}`,
        start: "center center",
        end: "bottom bottom",
        markers: true,
        scrub: false,
        toggleActions: "restart none none reverse",
      },
    });
  }, []);

  return (
    <div id={`container-${item.company}`} className={classes.cardContainer}>
      <div
        id={`exp-${item.company}`}
        className={`bg-[${item.color}] h-10 w-30 shadow-lg ${
          index === 0 ? classes.zero : ""
        } ${index === 1 ? classes.one : ""} ${index === 2 ? classes.two : ""} ${
          index === 3 ? classes.three : ""
        }`}
      >
        <div className="flex justify-between items-start">
          <div className="">
            <div className="text-4xl">{item.company}</div>
            <div>{item.period}</div>
          </div>
          <div>
            {item.img && (
              <Image
                src={item.img}
                width={150}
                height={150}
                alt={item.company}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
