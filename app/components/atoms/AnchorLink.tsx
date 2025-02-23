"use client";
import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

const AnchorLink = ({ link, text }: Props) => {
  return (
    <Link
      className="anchorLink py-3 px-2 scroll-smooth font-medium text-black"
      href={link}
    >
      {text}
    </Link>
  );
};

export default AnchorLink;
