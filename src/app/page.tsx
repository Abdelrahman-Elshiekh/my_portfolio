"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />

        
        <div className="w-full    px-6 md:px-10">
          <div className=" md:w-3/4 md:m-auto">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
