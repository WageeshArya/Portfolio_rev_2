"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./Nav.module.css";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import Switch from "react-switch";

type Props = {
  isEnglish: boolean;
  setIsEnglish: Dispatch<SetStateAction<boolean>>;
};

const Nav = ({ isEnglish, setIsEnglish }: Props) => {
  const [menu, setMenu] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [scroll, setScroll] = useState("up");

  const scrollTo = (id: string) => {
    const section = document.getElementById(id)!;
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
        height: window.innerWidth > 640 ? "50vh" : "100vh",
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
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        ".navIntroText",
        {
          y: 40,
          opacity: 0,
        },
        {
          delay: 0.65,
          y: 0,
          duration: 0.5,
          opacity: 1,
          ease: "power4.out",
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
      gsap.to([".navIcon1", ".navIcon2", ".navIcon3"], {
        opacity: 1,
        delay: 0.8,
        ease: "power4.out",
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
      gsap.to([".navIcon1", ".navIcon2", ".navIcon3"], {
        opacity: 0,
        duration: 0.15,
        ease: "power4.out",
      });
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
        ".navIntroText",
        {
          y: 0,
          duration: 0.15,
          opacity: 1,
        },
        {
          y: 40,
          opacity: 0,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        ".navInnerLogoText, .navInnerLogoContainer",
        {
          delay: 1,
          duration: 0.15,
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power4.out",
        }
      );
    }
    setMenu(!menu);
  };

  return (
    <nav className="overscroll-contain">
      <header
        id="nav"
        className={`overscroll-contain w-[100vw] h-[4rem] flex items-center justify-between px-12 fixed bg-transparent z-50 transition-all duration-300 ease-in-out delay-200 ${
          scroll === "down" ? "-translate-y-full" : ""
        }`}
      >
        <div className="flex-2 text-xl">W/A</div>

        <div
          className="flex-2 flex justify-end cursor-pointer"
          onClick={openClose}
        >
          {menu
            ? isEnglish
              ? "Close"
              : "閉じる"
            : isEnglish
            ? "Menu"
            : "メニュー"}
        </div>
      </header>
      <div
        id="extendedNav"
        className={`${classes.navBackground} overscroll-contain w-full h-0 text-white fixed top-0 left-0 !z-30 hidden px-10 flex-col`}
      >
        <div className="h-[6rem] w-full" />
        <div className="flex flex-1 sm:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div
              className={`navInnerLogoContainer cursor-pointer ${classes.navInnerLogoContainer} h-[4rem] bg-white text-6xl text-[#3b7fff] rounded-md py-10 px-6 flex items-center`}
              onClick={() => scrollTo("TOP")}
            >
              <div className={`navInnerLogoText ${classes.navInnerLogoText}`}>
                W/A
              </div>
            </div>
            <div className="overflow-hidden py-[1.5rem] text-center w-[80%]">
              <div className="navIntroText text-[#372f4d]">
                {isEnglish
                  ? "Thank you for checking out my website! Your visit means a lot. If you&#39;ve got questions, want more info, or just want to chat, feel free to reach out. Cheers!"
                  : "私のポートフォーリオをアクセスいただき、ありがとうございます！質問、相談などに関してお気軽にご連絡ください！"}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ul className={`links ${isAvailable ? "" : "pointer-events-none"}`}>
              <li
                className={`contentLink text-5xl mb-6 ${classes.navLink}`}
                onClick={() => scrollTo("SKILLS")}
              >
                {isEnglish ? "Skills" : "スキル"}
              </li>
              <li
                className={`contentLink text-5xl mb-6 ${classes.navLink}`}
                onClick={() => scrollTo("EXPERIENCE")}
              >
                {isEnglish ? "Experience" : "経歴"}
              </li>
              <li
                className={`contentLink text-5xl mb-6 ${classes.navLink}`}
                onClick={() => scrollTo("CONTACT")}
              >
                {isEnglish ? "Contact" : "問い合わせ"}
              </li>
              <li
                className={`contentLink text-5xl mb-6 ${classes.navLink}`}
                onClick={() => scrollTo("CONTACT")}
              >
                <a
                  href="https://docs.google.com/document/d/1PmNAh-SwRZ9KTwDl5R-K1aLdr9Hklqxie8L7hR-iVis/edit?usp=sharing"
                  target="_blank"
                >
                  {isEnglish ? "Resumé" : "履歴書"}
                </a>
              </li>
              <li>
                <div className="flex pb-5">
                  <div className="text-[#372f4d] mr-2">日本語</div>
                  <Switch
                    onChange={() => setIsEnglish(!isEnglish)}
                    checked={isEnglish}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#e1b5f7"
                    onColor="#e1b5f7"
                  />
                  <div className="text-[#372f4d] ml-2">English</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start h-[4rem]">
          <div className="divider h-[2px] bg-[#6C6283] w-0" />
          <div className="flex items-center justify-end h-[3.75rem] w-full">
            <a className="p-3 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#dfc0f9] rounded-full">
              <Image
                className="navIcon1"
                src="/buttonIcons/linkedin.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
            <a className="p-3 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#dfc0f9] rounded-full">
              <Image
                className="navIcon2"
                src="/buttonIcons/github.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
            <a className="p-3 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#dfc0f9] rounded-full">
              <Image
                className="navIcon3"
                src="/buttonIcons/send.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      {menu && (
        <div
          className="h-[50vh] overscroll-contain sm:!h-0 w-[100vw] bottom-0 left-0 fixed !z-30"
          onClick={openClose}
        ></div>
      )}
    </nav>
  );
};

export default Nav;
