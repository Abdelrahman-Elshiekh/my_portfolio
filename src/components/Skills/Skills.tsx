'use client'
import {
  Code2,
  Layout,
  Database,
  Layers,
  Zap,
  ShieldCheck,
  Smartphone,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-500" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      description:
        "Building responsive, high-performance user interfaces with a focus on UX.",
    },
   
    {
      title: "Mobile & Cross-Platform",
      icon: <Smartphone className="text-green-500" />,
      skills: ["React Native", "Expo", "PWA"],
      description:
        "Creating seamless mobile experiences for iOS and Android devices.",
    },
    {
      title: "DevOps & Deployment",
      icon: <Cloud className="text-orange-500" />,
      skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD"],
      description:
        "Automating workflows and ensuring reliable application hosting.",
    },
  ];

  return (
    <section id="skills" className="pt-24 pb-32 scroll-mt-20">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Technical <span className="text-blue-600">Expertise</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
          A comprehensive look at the technologies I use to bring ideas to life.
          I focus on modern tools that prioritize speed and developer
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Zap className="text-yellow-400" /> Currently Learning
          </h4>
          <p className="text-slate-300">
            Cybersecurity Fundamentals,Web Security, Secure Development
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-slate-400 uppercase">Years Exp</div>
          </div>
          <div className="h-10 w-px bg-slate-700 mx-2" />
          <div className="text-center">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-xs text-slate-400 uppercase">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
