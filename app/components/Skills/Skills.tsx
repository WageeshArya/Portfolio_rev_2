"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Title from "./Title";
import classes from "./Skills.module.css";
import Image from "next/image";
import gsap, { Quad } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
type Props = {};

const skillsList = {
  HTML: "HTML_icon",
  CSS: "CSS_icon",
  JS: "JS_icon",
  TS: "TS_icon",
  ReactNextJS: "React_Next_icon",
  Vue: "Vue_icon",
  NodeJS: "Node_icon",
  Express: "Express_icon",
  Mongo: "Mongo_icon",
  SQL: "SQL_icon",
  AWS: "AWS_icon",
  Git: "Git_icon",
  Redux: "Redux_icon",
  ReactNative: "ReactNative_icon",
  GSAP: "GSAP_icon",
  ReactThree: "ReactThree_icon",
};

const Skills = (props: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1);
    numbers.forEach((number: number) => {
      gsap.set(`.list_item_${number}`, { opacity: 0 });
      gsap.to(`.list_item_${number}`, {
        display: "block",
        opacity: 1,
        duration: 0.15,
        scrollTrigger: {
          trigger: `.list_item_${number}`,
          start: "top 90%",
          markers: false,
          toggleActions: "restart none none reverse",
        },
      });
    });

    gsap.to("#marquee__inner_1", {
      x: 300,
      duration: 5.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#SKILLS",
        start: "top center",
        end: "center center",
        toggleActions: "restart none none reverse",
      },
    });
    gsap.to("#marquee__inner_2", {
      x: -300,
      duration: 5.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#SKILLS",
        start: "top center",
        end: "center center",
        toggleActions: "restart none none reverse",
      },
    });
    gsap.to("#marquee__inner_3", {
      x: 300,
      duration: 5.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#SKILLS",
        start: "top center",
        end: "center center",
        toggleActions: "restart none none reverse",
      },
    });
  });

  const mouseMove = (event: any, element: string) => {
    const img = document.querySelectorAll(`.${element}`)[0];
    gsap.to(img, {
      top: event.pageY,
      left: event.pageX + 20,
      duration: 0.5,
      ease: Quad.easeOut,
    });
  };
  const mouseEnter = (element: string) => {
    const img = document.querySelectorAll(`.${element}`)[0];
    gsap.fromTo(
      img,
      {
        height: 0,
        delay: 0.25,
      },
      {
        height: "250px",
      }
    );
  };
  const mouseLeave = (element: string) => {
    const img = document.querySelectorAll(`.${element}`)[0];
    gsap.to(img, {
      height: 0,
      duration: 0.5,
      delay: 0.15,
    });
  };

  return (
    //#f8f8ff
    <section id="SKILLS" className="bg-[#fff] overflow-x-hidden">
      <Title />
      <div className="p-[5rem]">
        <div className="w-100 pt-[0px]">
          <div className="font-bold text-8xl pb-[2rem]">FRONT END</div>
          <ul>
            <li
              className={`list_item_1 border-0 opacity-0 hover:text-white hover:bg-[#e4aaf4] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.HTML)}
              onMouseMove={(event) => mouseMove(event, skillsList.HTML)}
              onMouseLeave={() => mouseLeave(skillsList.HTML)}
            >
              HTML
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.HTML} ${classes.hiddenImage}`}
                  src="/icons/html_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_2 opacity-0 hover:text-white hover:bg-[#e1b5f7] transition-all duration-300 ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.CSS)}
              onMouseMove={(event) => mouseMove(event, skillsList.CSS)}
              onMouseLeave={() => mouseLeave(skillsList.CSS)}
            >
              CSS
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.CSS} ${classes.hiddenImage}`}
                  src="/icons/css3_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_3 opacity-0 hover:text-white hover:bg-[#dfc0f9] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.TS)}
              onMouseMove={(event) => mouseMove(event, skillsList.TS)}
              onMouseLeave={() => mouseLeave(skillsList.TS)}
            >
              Typescript
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.TS} ${classes.hiddenImage}`}
                  src="/icons/typescript_logo.svg"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_4 opacity-0 hover:text-white hover:bg-[#decafa] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.JS)}
              onMouseMove={(event) => mouseMove(event, skillsList.JS)}
              onMouseLeave={() => mouseLeave(skillsList.JS)}
            >
              Javascript
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.JS} ${classes.hiddenImage}`}
                  src="/icons/js_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_5 opacity-0 hover:text-white hover:bg-[#dfd3f9] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.ReactNextJS)}
              onMouseMove={(event) => mouseMove(event, skillsList.ReactNextJS)}
              onMouseLeave={() => mouseLeave(skillsList.ReactNextJS)}
            >
              React/NextJS
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.ReactNextJS} ${classes.hiddenImage}`}
                  src="/icons/react_next_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_6 opacity-0 hover:text-white hover:bg-[#dbd7f9] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Vue)}
              onMouseMove={(event) => mouseMove(event, skillsList.Vue)}
              onMouseLeave={() => mouseLeave(skillsList.Vue)}
            >
              Vue
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.Vue} ${classes.hiddenImage}`}
                  src="/icons/vue_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-8xl mt-5 pb-[2rem]">BACK END</div>
          <ul>
            <li
              className={`list_item_7 opacity-0 hover:text-white hover:bg-[#d9dbf8] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.NodeJS)}
              onMouseMove={(event) => mouseMove(event, skillsList.NodeJS)}
              onMouseLeave={() => mouseLeave(skillsList.NodeJS)}
            >
              NodeJS
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.NodeJS} ${classes.hiddenImage}`}
                  src="/icons/nodejs_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_8 opacity-0 hover:text-white hover:bg-[#d8def7] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Express)}
              onMouseMove={(event) => mouseMove(event, skillsList.Express)}
              onMouseLeave={() => mouseLeave(skillsList.Express)}
            >
              Express
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.Express} ${classes.hiddenImage}`}
                  src="/icons/express_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_9 opacity-0 hover:text-white hover:bg-[#cfddf7] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Mongo)}
              onMouseMove={(event) => mouseMove(event, skillsList.Mongo)}
              onMouseLeave={() => mouseLeave(skillsList.Mongo)}
            >
              MongoDB/Mongoose
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.Mongo} ${classes.hiddenImage}`}
                  src="/icons/mongo_logo.jpg"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_10 opacity-0 hover:text-white hover:bg-[#c6ddf7] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.SQL)}
              onMouseMove={(event) => mouseMove(event, skillsList.SQL)}
              onMouseLeave={() => mouseLeave(skillsList.SQL)}
            >
              SQL
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.SQL} ${classes.hiddenImage}`}
                  src="/icons/sql_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-8xl mt-5 pb-[2rem]">OTHERS</div>
          <ul>
            <li
              className={`list_item_11 opacity-0 hover:text-white hover:bg-[#bcdcf5] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Git)}
              onMouseMove={(event) => mouseMove(event, skillsList.Git)}
              onMouseLeave={() => mouseLeave(skillsList.Git)}
            >
              Git/Github Actions
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.Git} ${classes.hiddenImage}`}
                  src="/icons/git_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_12 opacity-0 hover:text-white hover:bg-[#b3dcf2] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Redux)}
              onMouseMove={(event) => mouseMove(event, skillsList.Redux)}
              onMouseLeave={() => mouseLeave(skillsList.Redux)}
            >
              Redux
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.Redux} ${classes.hiddenImage}`}
                  src="/icons/redux_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_13 opacity-0 hover:text-white hover:bg-[#e4aaf4] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.AWS)}
              onMouseMove={(event) => mouseMove(event, skillsList.AWS)}
              onMouseLeave={() => mouseLeave(skillsList.AWS)}
            >
              AWS
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.AWS} ${classes.hiddenImage}`}
                  src="/icons/aws_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_14 opacity-0 hover:text-white hover:bg-[#e1b5f7] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.ReactNative)}
              onMouseMove={(event) => mouseMove(event, skillsList.ReactNative)}
              onMouseLeave={() => mouseLeave(skillsList.ReactNative)}
            >
              React Native
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.ReactNative} ${classes.hiddenImage}`}
                  src="/icons/react-native_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_15 opacity-0 hover:text-white hover:bg-[#dfc0f9] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.GSAP)}
              onMouseMove={(event) => mouseMove(event, skillsList.GSAP)}
              onMouseLeave={() => mouseLeave(skillsList.GSAP)}
            >
              GSAP Animations
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.GSAP} ${classes.hiddenImage}`}
                  src="/icons/gsap_logo.jpeg"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
            <li
              className={`list_item_15 opacity-0 hover:text-white hover:bg-[#decafa] transition-all duration-300  ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.ReactThree)}
              onMouseMove={(event) => mouseMove(event, skillsList.ReactThree)}
              onMouseLeave={() => mouseLeave(skillsList.ReactThree)}
            >
              React Three Fiber
              <div className="flex justify-center">
                <Image
                  className={`hiddenImage ${skillsList.ReactThree} ${classes.hiddenImage}`}
                  src="/icons/react_three_logo.png"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
