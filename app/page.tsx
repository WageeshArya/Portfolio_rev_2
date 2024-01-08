"use client";
import Nav from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Loader from "./components/Loader/Loader";
import gsap from "gsap";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    gsap.fromTo(
      "#main",
      {
        opacity: 0,
        delay: 1.5,
        duration: 1,
      },
      {
        opacity: 1,
      }
    );
  });

  return (
    <main>
      <Loader />
      <div id="main" className={`${loading ? "!overflow-y-hidden" : ""}`}>
        <Nav />
        <Main />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
