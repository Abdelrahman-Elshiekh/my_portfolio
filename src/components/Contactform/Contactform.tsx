"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for smooth error messages

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

 const onSubmit = async (data: ContactFormData) => {
   try {
     
     const response = await fetch("/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(data),
     });

     if (response.ok) {
       reset();
      
     } else {
       alert("Something went wrong. Please try again.");
     }
   } catch (err) {
     console.error(err);
     alert("Something went wrong. Please try again.");
   }
 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input
            {...register("name")}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name
                ? "border-red-500"
                : "border-slate-200 dark:border-slate-800"
            } bg-slate-50 dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Input */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            {...register("email")}
            placeholder="youremail@example.com"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email
                ? "border-red-500"
                : "border-slate-200 dark:border-slate-800"
            } bg-slate-50 dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subject Input */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <input
            {...register("subject")}
            placeholder="Project Inquiry"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.subject
                ? "border-red-500"
                : "border-slate-200 dark:border-slate-800"
            } bg-slate-50 dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.subject.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Input */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell me about your project..."
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message
                ? "border-red-500"
                : "border-slate-200 dark:border-slate-800"
            } bg-slate-50 dark:bg-slate-950 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs flex items-center gap-1"
              >
                <AlertCircle size={12} /> {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg ${
            isSubmitSuccessful
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white disabled:bg-slate-400"
          }`}
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Send size={18} />
            </motion.div>
          ) : isSubmitSuccessful ? (
            <>
              Message Sent <CheckCircle2 size={18} />
            </>
          ) : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
