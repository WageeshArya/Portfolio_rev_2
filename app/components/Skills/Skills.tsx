"use client";
import React, { useEffect, useRef } from "react";
import Title from "./Title";
import classes from "./Skills.module.css";
import Image from "next/image";
import gsap, { Quad } from "gsap";
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
};

const Skills = (props: Props) => {
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
    <div className="bg-[#efeff2] pt-[100px]">
      <Title />
      <div className="p-[10rem]">
        <div className="w-100 pt-[0px]">
          <div className="font-bold text-8xl pb-[2rem]">FRONT END</div>
          <ul>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.HTML)}
              onMouseMove={(event) => mouseMove(event, skillsList.HTML)}
              onMouseLeave={() => mouseLeave(skillsList.HTML)}
            >
              HTML
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.CSS)}
              onMouseMove={(event) => mouseMove(event, skillsList.CSS)}
              onMouseLeave={() => mouseLeave(skillsList.CSS)}
            >
              CSS
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.TS)}
              onMouseMove={(event) => mouseMove(event, skillsList.TS)}
              onMouseLeave={() => mouseLeave(skillsList.TS)}
            >
              Typescript
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.JS)}
              onMouseMove={(event) => mouseMove(event, skillsList.JS)}
              onMouseLeave={() => mouseLeave(skillsList.JS)}
            >
              Javascript
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.ReactNextJS)}
              onMouseMove={(event) => mouseMove(event, skillsList.ReactNextJS)}
              onMouseLeave={() => mouseLeave(skillsList.ReactNextJS)}
            >
              React/NextJS
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Vue)}
              onMouseMove={(event) => mouseMove(event, skillsList.Vue)}
              onMouseLeave={() => mouseLeave(skillsList.Vue)}
            >
              Vue
            </li>
          </ul>
          <Image
            className={`hiddenImage ${skillsList.HTML} ${classes.hiddenImage}`}
            src="/icons/html_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.CSS} ${classes.hiddenImage}`}
            src="/icons/css3_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.TS} ${classes.hiddenImage}`}
            src="/icons/typescript_logo.svg"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.JS} ${classes.hiddenImage}`}
            src="/icons/js_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.ReactNextJS} ${classes.hiddenImage}`}
            src="/icons/react_next_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.Vue} ${classes.hiddenImage}`}
            src="/icons/vue_logo.png"
            height={500}
            width={500}
            alt=""
          />
        </div>

        <div>
          <div className="font-bold text-8xl mt-5 pb-[2rem]">BACK END</div>
          <ul>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.NodeJS)}
              onMouseMove={(event) => mouseMove(event, skillsList.NodeJS)}
              onMouseLeave={() => mouseLeave(skillsList.NodeJS)}
            >
              NodeJS
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Express)}
              onMouseMove={(event) => mouseMove(event, skillsList.Express)}
              onMouseLeave={() => mouseLeave(skillsList.Express)}
            >
              Express
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Mongo)}
              onMouseMove={(event) => mouseMove(event, skillsList.Mongo)}
              onMouseLeave={() => mouseLeave(skillsList.Mongo)}
            >
              MongoDB/Mongoose
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.SQL)}
              onMouseMove={(event) => mouseMove(event, skillsList.SQL)}
              onMouseLeave={() => mouseLeave(skillsList.SQL)}
            >
              SQL
            </li>
          </ul>
          <Image
            className={`hiddenImage ${skillsList.NodeJS} ${classes.hiddenImage}`}
            src="/icons/nodejs_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.Express} ${classes.hiddenImage}`}
            src="/icons/express_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.Mongo} ${classes.hiddenImage}`}
            src="/icons/mongo_logo.jpg"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.SQL} ${classes.hiddenImage}`}
            src="/icons/sql_logo.png"
            height={500}
            width={500}
            alt=""
          />
        </div>

        <div>
          <div className="font-bold text-8xl mt-5 pb-[2rem]">OTHERS</div>
          <ul>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Git)}
              onMouseMove={(event) => mouseMove(event, skillsList.Git)}
              onMouseLeave={() => mouseLeave(skillsList.Git)}
            >
              Git/Github Actions
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.Redux)}
              onMouseMove={(event) => mouseMove(event, skillsList.Redux)}
              onMouseLeave={() => mouseLeave(skillsList.Redux)}
            >
              Redux
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.AWS)}
              onMouseMove={(event) => mouseMove(event, skillsList.AWS)}
              onMouseLeave={() => mouseLeave(skillsList.AWS)}
            >
              AWS
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.ReactNative)}
              onMouseMove={(event) => mouseMove(event, skillsList.ReactNative)}
              onMouseLeave={() => mouseLeave(skillsList.ReactNative)}
            >
              React Native
            </li>
            <li
              className={`list_item ${classes.listItem}`}
              onMouseEnter={() => mouseEnter(skillsList.GSAP)}
              onMouseMove={(event) => mouseMove(event, skillsList.GSAP)}
              onMouseLeave={() => mouseLeave(skillsList.GSAP)}
            >
              GSAP Animations
            </li>
          </ul>
          <Image
            className={`hiddenImage ${skillsList.AWS} ${classes.hiddenImage}`}
            src="/icons/aws_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.ReactNative} ${classes.hiddenImage}`}
            src="/icons/react-native_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.Git} ${classes.hiddenImage}`}
            src="/icons/git_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.Redux} ${classes.hiddenImage}`}
            src="/icons/redux_logo.png"
            height={500}
            width={500}
            alt=""
          />
          <Image
            className={`hiddenImage ${skillsList.GSAP} ${classes.hiddenImage}`}
            src="/icons/gsap_logo.jpeg"
            height={500}
            width={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
