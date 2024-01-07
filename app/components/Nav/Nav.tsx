"use client";
import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import Link from "next/link";
import gsap from "gsap";
type Props = {};

const Nav = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const [scroll, setScroll] = useState("up");
  const scrollTo = (id: string) => {
    const section = document.getElementById(id)!;
    console.log("section:::", section);
    if (section) {
      openClose();
    }
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openClose = () => {
    if (!isAvailable) {
      return;
    }
    setIsAvailable(false);
    setTimeout(() => {
      setIsAvailable(true);
    }, 1000);
    const extendedNav = document.getElementById("extendedNav")!;
    if (!menu) {
      gsap.to("#extendedNav", {
        display: "flex",
      });
      gsap.to("#extendedNav", {
        height: "50vh",
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.fromTo(
        ".navInnerLogoText, .navInnerLogoContainer",
        {
          delay: 0.5,
          y: 40,
          duration: 0.15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".contentLink",
        {
          y: 10,
          opacity: 0,
          delay: 0.5,
          duration: 0.25,
          stagger: 2,
          ease: "power4.out",
        },
        {
          y: 0,
          opacity: 1,
        }
      );
      gsap.to(".divider", {
        width: "100%",
        delay: 0.35,
      });
      extendedNav.style.display = "block";
    } else {
      gsap.to(".divider", {
        width: "0%",
        duration: 0.1,
      });
      gsap.fromTo(
        ".contentLink",
        {
          opacity: 1,
          duration: 0.05,
          ease: "power4.out",
        },
        {
          opacity: 0,
        }
      );
      gsap.to("#extendedNav", {
        height: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.to("#extendedNav", {
        delay: 1,
        display: "none",
      });
      gsap.fromTo(
        ".navInnerLogoText, .navInnerLogoContainer",
        {
          delay: 1,
          duration: 0.15,
          opacity: 1,
        },
        {
          opacity: 0,
        }
      );
    }
    setMenu(!menu);
  };

  return (
    <nav>
      <header
        id="nav"
        className={`w-[100vw] h-[4rem] flex items-center justify-between px-12 fixed bg-transparent z-50 transition-all duration-300 ease-in-out delay-200 ${
          scroll === "down" ? "-translate-y-full" : ""
        }`}
      >
        <div className="flex-2 text-xl">W/A</div>

        <div
          className="flex-2 flex justify-end cursor-pointer"
          onClick={openClose}
        >
          {menu ? "Close" : "Menu"}
        </div>
      </header>
      <div
        id="extendedNav"
        className={`${classes.navBackground} w-full h-0 text-white fixed top-0 left-0 !z-30 hidden px-10 flex-col`}
      >
        <div className="h-[6rem] w-full" />
        <div className="flex flex-1">
          <div className="flex-1 flex items-center justify-center">
            <div
              className={`navInnerLogoContainer ${classes.navInnerLogoContainer} h-[4rem] bg-white text-6xl text-[#3b7fff] rounded-md py-10 px-6 flex items-center`}
            >
              <div className={`navInnerLogoText ${classes.navInnerLogoText}`}>
                W/A
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ul className="links">
              <li
                className={`contentLink text-4xl mb-4 ${classes.navLink}`}
                onClick={() => scrollTo("SKILLS")}
              >
                Skills
              </li>
              <li
                className={`contentLink text-4xl mb-4 ${classes.navLink}`}
                onClick={() => scrollTo("EXPERIENCE")}
              >
                Experience
              </li>
              <li
                className={`contentLink text-4xl mb-4 ${classes.navLink}`}
                onClick={() => scrollTo("CONTACT")}
              >
                Contact
              </li>
              <li className={`contentLink text-4xl mb-4 ${classes.navLink}`}>
                Resumé
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start justify-start h-[4rem]">
          <div className="divider h-[2px] bg-[#6C6283] w-0" />
        </div>
      </div>
      {menu && (
        <div
          className="h-[50vh] w-[100vw] bottom-0 left-0 fixed !z-30"
          onClick={openClose}
        ></div>
      )}
    </nav>
  );
};

export default Nav;
