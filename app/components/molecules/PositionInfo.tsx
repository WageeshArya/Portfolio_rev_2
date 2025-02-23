// "use client";
import React from "react";
import Image from "next/image";
import Pin from "../../../public/icons/pin.svg";
import { textsEn, textsJp } from "@/app/utils/language";

type Props = {
  location: string;
  companyName: string;
  period: string;
  position: string;
  description: string;
  leaningLeft: boolean;
};

export const PositionInfo = (props: Props) => {
  const { location, companyName, period, position, description, leaningLeft } =
    props;

  return (
    <div
      className={`positionInfo flex-1 ${
        leaningLeft
          ? "text-left pl-12 lg:pl-0 sm:pl-0 xs:pl-0"
          : "text-right pr-12 lg:pr-0 sm:pr-0 xs:pr-0"
      }`}
    >
      <div
        className={`text-sm sm:text-xs xs:text-xs text-subText mb-2 xs:text-[0.65rem] flex gap-1 items-center ${
          leaningLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div>
          <Image src={Pin} width={10} height={10} alt={location} />
        </div>
        <div>{location}</div>
      </div>
      <h1 className="text-8xl lg:text-6xl sm:text-6xl xs:text-4xl mb-4">
        {companyName}
      </h1>
      <div
        className={
          leaningLeft ? "ml-4 sm:ml-0 xs:ml-0" : "mr-4 sm:mr-0 xs:mr-0"
        }
      >
        <p className="mb-4">{period}</p>
        <h3 className="font-bold text-xl sm:text-md mb-4">{position}</h3>
        <p className="sm:text-sm xs:text-xs">{description}</p>
      </div>
    </div>
  );
};
