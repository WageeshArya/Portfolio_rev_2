"use client";

import { language } from "@/app/utils/constants";
import { textsEn, textsJp } from "@/app/utils/language";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const Contact = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const [textLanguage, setTextLanguage] = useState(textsEn);
  const [value] = useLocalStorage("page-language", language.en);

  useEffect(() => {
    if (value === language.jp) {
      setTextLanguage(textsJp);
    } else {
      setTextLanguage(textsEn);
    }
  }, [value]);

  let xPercent = 0;

  useEffect(() => {
    requestAnimationFrame(animation);
  });

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent -= 0.1;
    requestAnimationFrame(animation);
  };

  return (
    <div
      id="contact"
      className="relative bg-black h-[100svh] w-[100svw] text-white overflow-hidden mt-20"
    >
      <div className="h-[50svh] overflow-hidden flex items-center">
        <div className="mx-auto w-[80%]">
          <div>
            <h1 className="font-bold mb-6">{textLanguage.contact.links}</h1>
            <Link
              target="_blank"
              className="block"
              href="https://www.linkedin.com/in/wageesh-arya"
            >
              {textLanguage.contact.linkedIn}
            </Link>
            <Link
              target="_blank"
              className="block"
              href="https://github.com/WageeshArya"
            >
              {textLanguage.contact.github}
            </Link>
            <Link target="_blank" className="block" href="">
              {textLanguage.contact.resume}
            </Link>
          </div>
          <div className="mt-4 font-bold whitespace-pre-line">
            {textLanguage.contact.cta}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[50svh]">
        <div className="relative flex whitespace-nowrap">
          <p
            ref={firstText}
            className="text-[18rem] sm:text-[10rem] xs:text-[10rem] font-bold"
          >
            {textLanguage.contact.title}
          </p>
          <p
            ref={secondText}
            className="absolute text-[18rem] sm:text-[10rem] xs:text-[10rem] font-bold left-[100%] text-white"
          >
            {textLanguage.contact.title}
          </p>
        </div>
        <div className="relative w-[100svw]">
          <p className="text-right text-xs px-4">Wageesh Arya@2025</p>
        </div>
      </div>
    </div>
  );
};
