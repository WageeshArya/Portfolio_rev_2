import Image from "next/image";
import React from "react";
import TechbaeLogo from "../../../public/companyLogos/techbae.png";
import ZeniusLogo from "../../../public/companyLogos/zenius.png";
import TeraokaLogo from "../../../public/companyLogos/teraoka.png";
import BitALogo from "../../../public/companyLogos/bita.png";
import { textsEn, textsJp } from "@/app/utils/language";

type Props = {
  name: string;
  companyName: string;
  position: string;
  cornerStyles: string;
  skillsRow1: string[];
  skillsRow2: string[];
  skillsRow3?: string[];
};

export const Card = (props: Props) => {
  const {
    name,
    companyName,
    position,
    skillsRow1,
    skillsRow2,
    skillsRow3,
    cornerStyles,
  } = props;
  let logo;

  switch (companyName) {
    case textsJp.experience.techbae.companyName:
    case textsEn.experience.techbae.companyName: {
      logo = TechbaeLogo;
      break;
    }
    case textsJp.experience.zenius.companyName:
    case textsEn.experience.zenius.companyName: {
      logo = ZeniusLogo;
      break;
    }
    case textsJp.experience.teraoka.companyName:
    case textsEn.experience.teraoka.companyName: {
      logo = TeraokaLogo;
      break;
    }
    case textsJp.experience.bitA.companyName:
    case textsEn.experience.bitA.companyName: {
      logo = BitALogo;
      break;
    }
  }

  return (
    <div
      className={`card relative max-w-[600px] min-h-[350px] w-full shadow-lg py-8 px-12 sm:min-h-[200px] xs:min-h-[200px] xs:py-8 xs:px-8  ${cornerStyles}`}
    >
      <Image
        src={logo!!}
        className="w-[120px] xs:w-[75px] absolute top-5 right-5"
        width={500}
        height={100}
        alt={companyName}
      />
      <h3 className="text-2xl mb-4 sm:text-xl sm:mb-2 xs:text-lg xs:mb-1 font-thin">
        {name}
      </h3>
      <h2
        className={`font-semibold text-subText ${
          companyName === textsEn.experience.zenius.companyName ||
          companyName === textsJp.experience.zenius.companyName
            ? "text-white"
            : "text-subText"
        } text-4xl sm:text-2xl xs:text-lg mb-5 sm:mb-2 xs:mb-1`}
      >
        {position}
      </h2>
      <p className="mb-4 font-thin sm:mb-2 xs:mb-1 xs:text-sm">Worked using</p>
      <div className="flex px-4 font-thin">
        <ul className="flex-1">
          {skillsRow1 &&
            skillsRow1.length > 0 &&
            skillsRow1.map((skillName: string) => (
              <li
                className="list-disc sm:text-[0.75rem] xs:text-[0.65rem]"
                key={skillName}
              >
                {skillName}
              </li>
            ))}
        </ul>
        <ul className="flex-1">
          {skillsRow2 &&
            skillsRow2.length > 0 &&
            skillsRow2.map((skillName: string) => (
              <li
                className="list-disc sm:text-[0.75rem] xs:text-[0.65rem]"
                key={skillName}
              >
                {skillName}
              </li>
            ))}
        </ul>
        {skillsRow3 && (
          <ul className="flex-1">
            {skillsRow3.length > 0 &&
              skillsRow3.map((skillName: string) => (
                <li
                  className="list-disc sm:text-[0.75rem] xs:text-[0.65rem]"
                  key={skillName}
                >
                  {skillName}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};
