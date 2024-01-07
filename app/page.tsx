"use client";
import Image from "next/image";
import Nav from "./components/Nav/Nav";
import { Main } from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import { Suspense, useEffect } from "react";
import Contact from "./components/Contact/Contact";
export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  });

  return (
    <main>
      <Suspense
        fallback={
          <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            Loading!
          </div>
        }
      >
        <Nav />
        <Main />
        <Skills />
        <Experience />
        <Contact />
      </Suspense>
    </main>
  );
}
