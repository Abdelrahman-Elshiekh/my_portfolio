"use client";

import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import ContactForm from "../Contactform/Contactform";
import { useSession } from "next-auth/react";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-32 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let&apos;s <span className="text-blue-600">Connect.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm">
            Have a question or just want to say hi? Send me a message and
            I&apos;ll get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                  Email Me
                </p>
                <a
                  href="mailto:aabbnddoo@gmail.com"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  aabbnddoo@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">
                  Socials
                </p>
                <div className="flex gap-4 mt-1">
                  <a
                    href="https://github.com/Abdelrahman-Elshiekh"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                  target="_blank"
                    href="
https://www.linkedin.com/in/abdo-abdo-546450331"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
