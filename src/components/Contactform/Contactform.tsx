"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, AlertCircle } from "lucide-react";
import { useSession } from "next-auth/react";

// 1. Validation Schema
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
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xojkddjk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
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
          {errors.name && (
            <p className="text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
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
          {errors.email && (
            <p className="text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
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
          {errors.subject && (
            <p className="text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
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
          {errors.message && (
            <p className="text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
