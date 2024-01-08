"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dispatch, SetStateAction, useEffect } from "react";
import Image from "next/image";
import classes from "./Contact.module.css";

type Props = {
  isEnglish: boolean;
  setIsEnglish: Dispatch<SetStateAction<boolean>>;
};

const Contact = ({ isEnglish, setIsEnglish }: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".contactTitle",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.25,
        scrollTrigger: {
          trigger: "#CONTACT",
          start: "top 20%",
          end: "center center",
          markers: false,
        },
      }
    );
    gsap.fromTo(
      [".contactLink1", ".contactLink2", ".contactLink3", ".contactLink4"],
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        delay: 0.75,
        scrollTrigger: {
          trigger: "#CONTACT",
          start: "top 20%",
          end: "center center",
          markers: false,
        },
      }
    );
    gsap.fromTo(
      [".contactIcon1", ".contactIcon2", ".contactIcon3", ".contactIcon4"],
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        delay: 0.75,
        scrollTrigger: {
          trigger: "#CONTACT",
          start: "top 20%",
          end: "center center",
          markers: false,
        },
      }
    );
    gsap.fromTo(
      ".contactLinksArea",
      {
        height: 0,
      },
      {
        height: "50vh",
        opacity: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: "#CONTACT",
          start: "top 20%",
          end: "center center",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section id="CONTACT" className="w-[100vw] h-[100vh]">
      <div className="flex w-full h-full flex-col">
        <div className="overflow-hidden h-[50vh] flex items-end justify-center">
          <div className="contactTitle text-center text-9xl sm:text-6xl mb-5">
            CONTACT
          </div>
        </div>
        <div
          className={`contactLinksArea flex items-center justify-center w-full h-0 ${classes.linksBackground}`}
        >
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-2">
            <a
              target="_blank"
              href="mailto:wageesharya114@gmail.com"
              className="cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:rounded-lg flex-1 p-10 flex items-center justify-between flex-col "
            >
              <div className="overflow-hidden">
                <Image
                  className="contactIcon1  sm:h-[25px] sm:w-[25px]"
                  src="/buttonIcons/send.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <div className="contactLink1 text-xl sm:text-[1rem] mt-4">
                  Email
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://github.com/WageeshArya"
              className="cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:rounded-lg flex-1 p-10 flex items-center justify-between flex-col"
            >
              <div className="overflow-hidden">
                <Image
                  className="contactIcon2  sm:h-[25px] sm:w-[25px]"
                  src="/buttonIcons/github.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <div className="contactLink2 text-xl sm:text-[1rem] mt-4">
                  GitHub
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="www.linkedin.com/in/wageesh-arya"
              className="cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:rounded-lg flex-1 p-10 flex items-center justify-between flex-col"
            >
              <div className="overflow-hidden">
                <Image
                  className="contactIcon3  sm:h-[25px] sm:w-[25px]"
                  src="/buttonIcons/linkedin.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <div className="contactLink3 text-xl sm:text-[1rem] mt-4">
                  LinkedIn
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1PmNAh-SwRZ9KTwDl5R-K1aLdr9Hklqxie8L7hR-iVis/edit?usp=sharing"
              className="cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:rounded-lg flex-1 p-10 flex items-center justify-between flex-col"
            >
              <div className="overflow-hidden">
                <Image
                  className="contactIcon4  sm:h-[25px] sm:w-[25px]"
                  src="/buttonIcons/paperclip.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="overflow-hidden">
                <div className="contactLink3 text-xl sm:text-[1rem] mt-4">
                  Resumé
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
