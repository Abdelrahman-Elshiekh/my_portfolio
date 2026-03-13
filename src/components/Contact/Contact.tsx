"use client";

import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import ContactForm from "../Contactform/Contactform";
import { motion, Variants, easeOut } from "framer-motion";

const Contact = () => {
  
  const fadeInLeft: Variants = {
   hidden: { opacity: 0, x: -40 },
   visible: {
     opacity: 1,
     x: 0,
     transition: { duration: 0.8, ease: easeOut }, // ✅ use imported easing
   },
 };

  const fadeInRight: Variants = {
   hidden: { opacity: 0, x: 40 },
   visible: {
     opacity: 1,
     x: 0,
     transition: { duration: 0.8, ease: easeOut, delay: 0.2 }, // ✅ also works with delay
   },
 };

  return (
    <section id="contact" className="pt-24 pb-32 scroll-mt-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInLeft}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let&apos;s <span className="text-blue-600">Connect.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm">
            Have a question or just want to say hi? Send me a message and
            I&apos;ll get back to you!
          </p>

          <div className="space-y-6">
            {/* Email Row */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                  Email Me
                </p>
                <a
                  href="mailto:abdelrahman.ibrahiem.elshiekh@gmail.com"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  abdelrahman.ibrahiem.elshiekh@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Socials Row */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                  Socials
                </p>
                <div className="flex gap-4 mt-1">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Abdelrahman-Elshiekh"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    href="
https://www.linkedin.com/in/abdelrahman-ibrahiem-elshiekh-aa01643b7"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInRight}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
