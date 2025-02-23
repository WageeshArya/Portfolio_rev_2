"use client";
import { useLocalStorage } from "usehooks-ts";
// import AnchorLink from "../atoms/AnchorLink";
const AnchorLink = dynamic(() => import("../atoms/AnchorLink"), { ssr: false });
// import { LanguageSelector } from "../atoms/LanguageSelector";
const LanguageSelector = dynamic(() => import("../atoms/LanguageSelector"), {
  ssr: false,
});
import { useEffect, useState } from "react";
import { language } from "@/app/utils/constants";
import { textsEn, textsJp } from "@/app/utils/language";
import dynamic from "next/dynamic";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value] = useLocalStorage("page-language", language.en);
  const [textLanguage, setTextLanguage] = useState(
    value === language.jp ? textsJp : textsEn
  );

  useEffect(() => {
    if (value === language.jp) {
      setTextLanguage(textsJp);
    } else {
      setTextLanguage(textsEn);
    }
  }, [value]);

  const handleNavState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        id="navbar"
        className="fixed opacity-0 top-0 left-0 py-3 px-12 xs:px-5 sm:px-5 w-full flex items-center justify-center z-[1000]"
      >
        <div className="flex justify-between w-full">
          <div className="px-4 py-3 backdrop-filter backdrop-blur-[8px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.4)] rounded-[12px] border-[1px] border-solid border-[rgba(255,255,255,0.125)]">
            <AnchorLink link="#" text={textLanguage.nav.name} />
          </div>
          <div className="sm:hidden xs:hidden flex px-4 py-3 backdrop-filter backdrop-blur-[8px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.4)] rounded-[12px] border-[1px] border-solid border-[rgba(255,255,255,0.125)]">
            <div>
              <LanguageSelector />
            </div>
            <div className="ml-5">
              <AnchorLink link="#skills" text={textLanguage.nav.skills} />
            </div>
            <div className="ml-3">
              <AnchorLink
                link="#experience"
                text={textLanguage.nav.experience}
              />
            </div>
            <div className="ml-3">
              <AnchorLink link="#contact" text={textLanguage.nav.contact} />
            </div>
          </div>
          <div className="xs:sm:block lg:hidden xl:hidden px-4 py-3 backdrop-filter backdrop-blur-[8px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.4)] rounded-[12px] border-[1px] border-solid border-[rgba(255,255,255,0.125)]">
            <button
              className="min-w-full h-full relative focus:outline-none rounded"
              onClick={handleNavState}
            >
              <div className="block w-[28px]">
                <span
                  className={`block absolute h-0.5 w-[28px] text-black bg-black transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-[20px] text-black bg-black transform transition duration-500 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-[28px] text-black bg-black transform transition duration-500 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-svw h-svh z-[999] overflow-hidden"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div
            className={`z-[1000] p-4 fixed top-[75px] right-10 transition-all duration-300 ease-in-out backdrop-filter backdrop-blur-[8px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.4)] rounded-[12px] border-[1px] border-solid border-[rgba(255,255,255,0.125)] ${
              isOpen
                ? "pointer-events-auto touch-auto opacity-1"
                : "opacity-0 pointer-events-none touch-none"
            }`}
          >
            <ul>
              <li className="leading-[2.25rem] mb-2">
                <LanguageSelector />
              </li>
              <li className="leading-[2.25rem]">
                <AnchorLink link="#skills" text={textLanguage.nav.skills} />
              </li>
              <li className="leading-[2.25rem]">
                <AnchorLink
                  link="#experience"
                  text={textLanguage.nav.experience}
                />
              </li>
              <li className="leading-[2.25rem]">
                <AnchorLink link="#contact" text={textLanguage.nav.contact} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
