"use client";
import profilepic from '../../assets/profile_pic.jpeg' 
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center lg:text-left pt-20 pb-16 overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-9 max-w-3xl order-2 lg:order-1">
          <span className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-medium bg-slate-50/50 dark:bg-slate-900/50">
            Available for new projects
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              I AM Abdelrahman Elshiekh
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I&apos;m a Front-End Developer specializing in high-performance
            Next.js applications and beautiful user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex justify-center items-center gap-2 px-9 py-4 rounded-full border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-xl"
            >
              <Download size={20} />
              Download CV
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 animate-spin-slow opacity-70 blur-md group-hover:blur-xl transition-all" />

            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-2xl">
              <Image
                src={profilepic}
                alt="Abdelrahman Elshiekh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
