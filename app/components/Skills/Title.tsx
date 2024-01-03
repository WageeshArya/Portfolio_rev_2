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
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
    requestAnimationFrame(animation);
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
    <div className={classes.sliderContainer}>
      <div ref={slider} className={classes.slider}>
        <p ref={firstText}>
          Here&#39;s a short list of{" "}
          <span className="text-[#55fff2] font-bold">MY SKILLS.</span>
        </p>
        <p ref={secondText}>
          Here&#39;s a short list of{" "}
          <span className="text-[#55fff2] font-bold">MY SKILLS.</span>
        </p>
      </div>
    </div>
  );
};

export default Title;
