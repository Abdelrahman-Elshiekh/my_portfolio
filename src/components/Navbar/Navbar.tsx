"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [mounted, setMounted] = useState(false);

      useEffect(() => {
        setMounted(true);
      }, []);

      if (!mounted) return null;


  const navLinks = [
    { name: "Hero", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills ", href: "#skills " },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Abdelrahman Elshiekh
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-medium hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex  items-center space-x-4 border-l pl-6 border-slate-300">
            <Link
              className="hover:text-blue-600"
              href="https://github.com/Abdelrahman-Elshiekh"
              target="_blank"
            >
              <Github size={35} />
            </Link>
            <Link
              className="hover:text-blue-600"
              href="

https://www.linkedin.com/in/abdelrahman-ibrahiem-elshiekh-aa01643b7"
              target="_blank"
            >
              <Linkedin size={35} />
            </Link>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:text-blue-600 hover font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
