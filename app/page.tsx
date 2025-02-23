"use client";
import { useEffect } from "react";
import { Navbar } from "./components/molecules/Navbar";
import { Contact } from "./components/organisms/Contact";
import { Experience } from "./components/organisms/Experience";
import { Landing } from "./components/organisms/Landing";
import { Skills } from "./components/organisms/Skills";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 4000);
  }, []);

  return (
    <main>
      <Navbar />
      <Landing />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
