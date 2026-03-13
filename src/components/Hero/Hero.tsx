"use client";

import profilepic from "../../assets/profile_pic.jpeg";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center lg:text-left pt-20 pb-16 overflow-hidden"
    >
      {/* 1. Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-1 {
          animation-delay: 0.1s;
        }
        .delay-2 {
          animation-delay: 0.3s;
        }
        .delay-3 {
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-9 max-w-3xl order-2 lg:order-1">
          <span className="animate-fade-in-up opacity-0 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-medium bg-slate-50/50 dark:bg-slate-900/50">
            Available for new projects
          </span>

          <h1 className="animate-fade-in-up opacity-0 delay-1 text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi
            <br />
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              I AM Abdelrahman Elshiekh
            </span>
          </h1>

          <p className="animate-fade-in-up opacity-0 delay-2 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I&apos;m a Front-End Developer specializing in high-performance
            Next.js applications and beautiful user interfaces.
          </p>

          <div className="animate-fade-in-up opacity-0 delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="group flex justify-center items-center gap-2 px-9 py-4 rounded-full border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-xl active:scale-95"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download CV
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative order-1 lg:order-2 flex justify-center animate-fade-in-up opacity-0 delay-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group animate-float">
            {/* The spinning gradient ring (Uses our custom CSS spinSlow) */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-600 to-purple-600 animate-spin-slow opacity-70 blur-md group-hover:blur-xl transition-all" />

            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
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
