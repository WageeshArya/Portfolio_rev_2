"use client";
import gsap from "gsap";

type Props = {
  link: string;
  text: string;
};

export const AnchorLink = ({ link, text }: Props) => {
  return (
    <a
      className="anchorLink py-3 px-2 scroll-smooth font-medium text-black"
      href={link}
    >
      {text}
    </a>
  );
};
