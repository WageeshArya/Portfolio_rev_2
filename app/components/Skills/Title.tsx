"use client";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import classes from "./Title.module.css";
type Props = {};
const Title = (props: Props) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.set(".marquee__inner_1", {
      xPercent: window.innerWidth > 2800 ? -20 : -75,
    });
    gsap.set(".marquee__inner_3", {
      xPercent: window.innerWidth > 2800 ? -20 : -75,
    });
    // gsap.set(".marquee__inner_2", { xPercent: 75 });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };

  return (
    <>
      <div
        className={`${classes.marquee} xl:py-[2rem] lg:py-[2rem] sm:py-[1rem]`}
      >
        <div
          id="marquee__inner_1"
          className={`marquee__inner_1 ${classes.marquee__inner}`}
          aria-hidden="true"
        >
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            HERE&#39;S A SHORT LIST OF MY SKILLS.
          </div>
        </div>
      </div>
      <div
        className={`!bg-white !bg-none  xl:py-[2rem] lg:py-[2rem] sm:py-[1rem] ${classes.marquee}`}
      >
        <div
          id="marquee__inner_2"
          className={`marquee__inner_2 !text-black ${classes.marquee__inner}`}
          aria-hidden="true"
        >
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            A BRIEF RUNDOWN OF MY ABILITIES.
          </div>
        </div>
      </div>
      <div
        className={`${classes.marquee}  xl:py-[2rem] lg:py-[2rem] sm:py-[1rem]`}
      >
        <div
          id="marquee__inner_3"
          className={`marquee__inner_3 ${classes.marquee__inner}`}
          aria-hidden="true"
        >
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
          <div
            className={`marquee__part xl:text-2xl lg:text-xl sm:text-xl ${classes.marquee__part}`}
          >
            ALWAYS DOWN TO LEARN MORE.
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
