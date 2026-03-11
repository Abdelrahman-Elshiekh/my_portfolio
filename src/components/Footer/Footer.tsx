"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="space-y-2 text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Abdelrahman.dev
            </Link>
            <p className="text-sm text-slate-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link
              href="#about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex gap-4 border-r border-slate-200 dark:border-slate-800 pr-4">
              <Link
                href="https://github.com/Abdelrahman-Elshiekh"
                target="_blank"
                className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="
https://www.linkedin.com/in/abdo-abdo-546450331"
                target="_blank"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Tech Stack Attribution */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900/50 flex flex-col items-center gap-2">
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" />{" "}
            using Next.js, Tailwind, & Resend
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;