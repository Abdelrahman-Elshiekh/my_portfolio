'use client'
import { Terminal, Code2, Cpu, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    { name: "Tools", items: ["Git", "Figma", "Vercel"] },
  ];

  return (
    <section id="about" className="pt-24 pb-32  scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Terminal size={16} />
            <span>My Story</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Software Engineer with a passion for
            <span className="text-blue-600"> cyber security</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a student at the Faculty of Artificial Intelligence, Menoufia
            University. I build responsive front-end websites using React and
            modern JavaScript. I aspire to become a cybersecurity engineer while
            creating secure and high-quality web applications.
          </p>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="grid grid-cols-1 gap-4">
          {skills.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                {category.name === "Frontend" && <Globe size={20} />}
                {category.name === "Tools" && <Code2 size={18} />}
                {category.name}
              </h3>
              <div className="flex  flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 cursor-pointer py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md font-medium border border-transparent hover:border-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
