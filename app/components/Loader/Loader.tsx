import { lazy, useEffect, useRef } from "react";
import classes from "./Loader.module.css";
import gsap from "gsap";
type Props = {};

const Loader = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.set("#loadingInner1", { xPercent: -75 });
    gsap.set("#loadingInner2", { xPercent: -50 });
    gsap.set("#loadingInner3", { xPercent: -75 });

    // slide horizontally
    gsap.to("#loadingInner1", {
      x: 600,
      ease: "power4.out",
      duration: 3.5,
    });
    gsap.to("#loadingInner2", {
      x: -1500,
      ease: "power4.out",
      duration: 3.5,
    });
    gsap.to("#loadingInner3", {
      x: 600,
      ease: "power4.out",
      duration: 3.5,
    });

    // slide vertically
    gsap.to(".loadingContainer1", {
      y: -600,
      delay: 3,
      ease: "power4.in",
    });
    gsap.to(".loadingContainer3", {
      y: 600,
      delay: 3,
      ease: "power4.in",
    });
    gsap.to(".loadingContainer2", {
      x: -10000,
      ease: "power4.in",
      delay: 3.5,
    });
    gsap.to(".loadingContainer", {
      display: "none",
      delay: 4,
    });
    let timeout = setTimeout(() => {}, 3600);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // const animation = () => {
  //   if (xPercent <= -100) {
  //     xPercent = 0;
  //   }
  //   if (xPercent > 0) {
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, { xPercent: xPercent });
  //   gsap.set(secondText.current, { xPercent: xPercent });
  //   requestAnimationFrame(animation);
  //   xPercent += 0.1 * direction;
  // };
  return (
    <div className="loadingContainer absolute top-0 left-0 !z-50 overflow-hidden w-[100vw] h-[100vh]">
      <div
        className={`loadingContainer1 !bg-black !text-white !z-50 h-[33.333334vh] flex items-center ${classes.marquee}`}
      >
        <div
          id="loadingInner1"
          className={`loadingInner1 !text-black ${classes.marquee__inner}`}
          aria-hidden="true"
        >
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
        </div>
      </div>
      <div
        className={`${classes.marquee} loadingContainer2 !text-black !bg-white !z-50 h-[33.333334vh] flex items-center`}
      >
        <div
          id="loadingInner2"
          className={`loadingInner1 ${classes.marquee__inner}`}
          aria-hidden="true"
        >
          <div
            className={`marquee__part xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
        </div>
      </div>
      <div
        className={`${classes.marquee} loadingContainer3 !bg-black  !z-50 h-[33.333334vh] flex items-center`}
      >
        <div
          id="loadingInner3"
          className={`loadingInner3 ${classes.marquee__inner}`}
          aria-hidden="true"
        >
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
          <div
            className={`marquee__part !text-white xl:text-8xl lg:text-7xl sm:text-6xl ${classes.marquee__part}`}
          >
            PORTFOLIO　PORTFOLIO　PORTFOLIO　
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
