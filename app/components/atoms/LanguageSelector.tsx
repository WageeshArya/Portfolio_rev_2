"use client";

import { language } from "../../utils/constants";
export const LanguageSelector = () => {
  return (
    <div className="flex items-center justify-center">
      <button
      // className={`${
      //   store?.language === language.jp ? "border-b-[1px] border-black" : ""
      // }`}
      // onClick={() => store?.setLanguage(language.jp)}
      >
        ＪＰ
      </button>
      <p>／</p>
      <button
      // className={`${
      //   store?.language === language.en ? "border-b-[1px] border-black" : ""
      // }`}
      // onClick={() => store?.setLanguage(language.en)}
      >
        ＥＮ
      </button>
    </div>
  );
};
