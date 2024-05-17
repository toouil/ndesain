"use client"

import { useEffect } from "react";
import Lenis from "lenis";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Speakers from "@/components/Speakers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main id="HOME">
      <Hero />
      <Events />
      <Venue />
      <Speakers />
      <Contact />
      <Footer />
    </main>
  );
}
