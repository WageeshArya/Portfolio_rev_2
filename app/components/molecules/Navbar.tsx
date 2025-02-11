import { AnchorLink } from "../atoms/AnchorLink";
import { LanguageSelector } from "../atoms/LanguageSelector";

export const Navbar = () => {
  return (
    <div
      id="navbar"
      className="fixed opacity-0 top-0 left-0 px-12 py-6 w-full flex items-center justify-center z-[1000]"
    >
      <div className="flex justify-between px-5 w-full">
        <div className="px-4 py-3 backdrop-filter backdrop-blur-[8px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.4)] rounded-[12px] border-[1px] border-solid border-[rgba(255,255,255,0.125)]">
          <AnchorLink link="#" text="WageeshArya." />
        </div>
        <div className="flex px-4 py-3 backdrop-filter backdrop-blur-[8px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.4)] rounded-[12px] border-[1px] border-solid border-[rgba(255,255,255,0.125)]">
          <div>
            <LanguageSelector />
          </div>
          <div className="ml-5">
            <AnchorLink link="#skills" text="Skills" />
          </div>
          <div className="ml-3">
            <AnchorLink link="" text="Experience" />
          </div>
          <div className="ml-3">
            <AnchorLink link="" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};
