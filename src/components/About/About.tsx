"use client";
import { Terminal, Code2, Globe } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion";

const About = () => {
  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    { name: "Tools", items: ["Git", "Figma", "Vercel"] },
  ];

 const fadeInRight: Variants = {
   hidden: { opacity: 0, x: -50 },
   visible: {
     opacity: 1,
     x: 0,
     transition: { duration: 0.8, ease: easeOut }, // ✅ use function, not string
   },
 };

 const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.6, ease: easeOut }, // optional, you can add ease here
   },
 };

 const staggerContainer: Variants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: { staggerChildren: 0.1 },
   },
 };

  return (
    <section id="about" className="pt-24 pb-32 scroll-mt-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
        
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInRight}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Terminal size={16} />
            <span>My Story</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Software Engineer with a passion for
            <span className="text-blue-600 relative inline-block ml-1">
              cyber security
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                // Reset this line too
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-1 left-0 h-[2px] bg-blue-600/30"
              />
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a student at the Faculty of Artificial Intelligence, Menoufia
            University. I build responsive front-end websites using React and
            modern JavaScript.
          </p>
        </motion.div>

        {/* Right Column: Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4"
        >
          {skills.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeInUp}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                {category.name === "Frontend" && (
                  <Globe size={20} className="text-blue-500" />
                )}
                {category.name === "Tools" && (
                  <Code2 size={18} className="text-purple-500" />
                )}
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3b82f6",
                      color: "#fff",
                    }}
                    className="px-3 cursor-pointer py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md font-medium transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
