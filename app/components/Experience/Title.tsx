"use client";
import React, { useEffect, useState } from "react";
import classes from "./Title.module.css";
import gsap from "gsap";
type Props = {};

const Title = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#experienceTitle",
      {
        display: "none",
        opacity: 0,
        duration: 2,
      },
      {
        display: "flex",
        opacity: 1,
        scrollTrigger: {
          trigger: "#experienceTitleContainer",
          start: "center center",
          end: "bottom bottom",
          toggleActions: "restart none none reverse",
        },
      }
    );
  });
  return (
    <div
      className="w-[100vw] h-[100vh] flex items-center justify-center relative"
      id="experienceTitleContainer"
    >
      <div className={classes.title} id={"experienceTitle"}>
        <div className="text-8xl font-bold">My Experience</div>
        <span
          className={`blinker ml-5 text-8xl bg-black w-[4rem] h-[5.5rem] ${classes.blink}`}
        />
      </div>
    </div>
  );
};

export default Title;
