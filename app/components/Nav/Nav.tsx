"use client";
import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
type Props = {};

const Nav = (props: Props) => {
  useEffect(() => {
    const body = document.getElementById("nav")!;
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        body.classList.remove("border-b-2");
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("-translate-y-full")
      ) {
        setScroll("down");
      }

      if (
        currentScroll < lastScroll &&
        body.classList.contains("-translate-y-full")
      ) {
        setScroll("up");
      }

      lastScroll = currentScroll;
    });
  }, []);

  const [scroll, setScroll] = useState("up");

  return (
    <header
      id="nav"
      className={`w-[100vw] h-[4rem] flex items-center justify-center px-12 fixed bg-white z-50 transition-all duration-300 ease-in-out delay-200 ${
        scroll === "down" ? "-translate-y-full" : "border-b-2"
      }`}
    >
      <div className="flex-2 text-xl">W/A</div>
      <div className="flex-1 w-100 flex justify-center">
        <div className={`mr-12 cursor-pointer`}>
          <a className={classes.navLink}>SKILLS</a>
        </div>
        <div className={`mr-12 cursor-pointer ${classes.navLink}`}>
          EXPERIENCE
        </div>
        <div className={`mr-12 cursor-pointer ${classes.navLink}`}>CONTACT</div>
        <div className={`mr-12 cursor-pointer ${classes.navLink}`}>RESUMÉ</div>
      </div>
      <div className="flex-2 flex justify-end">LANGUAGE</div>
    </header>
  );
};

export default Nav;
