"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Monitor, Smartphone, Code2, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce UI Kit",
      description:
        "A high-performance storefront built with Next.js 14. Focuses on Core Web Vitals, image optimization, and smooth cart transitions.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://e-commerce-eight-pi-28.vercel.app/",

      github: "https://github.com/Abdelrahman-Elshiekh/app1",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "video Games",
      description:
        "A high-performance storefront built with javascript . Focuses on Core Web Vitals, image optimization, and smooth  transitions.",
      tech: ["javascript", "bootstrap"],
      link: "https://abdelrahman-elshiekh.github.io/Game-Over/",
      github: "https://github.com/Abdelrahman-Elshiekh/Game-Over",
      image:
        "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    },
    {
      title: "weather app",
      description:
        "A weather app built with javascript . Focuses on Core Web Vitals, image optimization, and smooth  transitions.",
      tech: ["javascript", "bootstrap"],
      link: "https://abdelrahman-elshiekh.github.io/Weather/",
      github: "https://github.com/Abdelrahman-Elshiekh/Weather",
      image: "https://images.pexels.com/photos/355810/pexels-photo-355810.jpeg",
    },
  ];

  return (
    <section id="projects" className="pb-24 scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
            A selection of my favorite works, focusing on clean UI, interactive
            animations, and responsive layouts.
          </p>
        </div>
        <Link
          href="https://github.com/Abdelrahman-Elshiekh"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
        >
          View all on GitHub <ExternalLink size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <Link
                  target="blank"
                  href={project.link}
                  className="flex items-center gap-1 text-sm font-bold hover:text-blue-600 transition-colors"
                >
                  <Monitor size={16} /> Live Demo
                </Link>
                <Link
                  target="blank"
                  href={project.github}
                  className="flex items-center gap-1 text-sm font-bold hover:text-blue-600 transition-colors"
                >
                  <Github size={16} /> Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
