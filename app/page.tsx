"use client";

import { Navbar } from "./components/molecules/Navbar";
import { Experience } from "./components/organisms/Experience";
import { Landing } from "./components/organisms/Landing";
import { Skills } from "./components/organisms/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Skills />
      <Experience />
    </main>
  );
}
