"use client";
import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

export default function Experience() {
  const experiences = [
    {
      date: "2025 - Present",
      title: "Front-End Developer",
      place: "Route Academy",
      type: "work",
      color: "from-blue-500 to-cyan-400",
      description:
        "Building and deploying real-world web applications using React, Next.js, and modern CSS frameworks. Focused on API integration and state management.",
    },
    {
      date: "2024 - 2028",
      title: "Bachelor of Information Systems",
      place: "Al Jazeera Higher Institute",
      type: "education",
      color: "from-purple-500 to-pink-500",
      description:
        "Studies in algorithms, data structures, and systems engineering. Building a solid foundation in computer engineering principles.",
    },
  ];

  return (
    <section id="studies" className="relative py-32 px-4 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xl"
        >
          <MapPin className="w-4 h-4" /> My Roadmap
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white"
        >
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-4 md:px-0">
        {/* The Center Vertical Line (Desktop) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={clsx(
                "group relative flex flex-col md:flex-row items-center gap-10",
                index % 2 === 0 ? "md:flex-row-reverse md:text-right text-left" : "text-left"
              )}
            >
              {/* Central Circle Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                 <div className="w-12 h-12 rounded-2xl glass bg-white dark:bg-transparent border border-black/10 dark:border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} -rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.5)]`} />
                 </div>
              </div>

              {/* Card */}
              <div className="w-full md:w-[46%] ml-8 md:ml-0">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-black/5 dark:border-white/5 p-8 md:p-10 hover:border-blue-500/30 transition-all duration-500 shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  {/* Decorative Glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] rounded-full`} />
                  
                  {/* Header Row */}
                  <div className={clsx(
                    "flex flex-row items-center gap-4 mb-8",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-2xl group-hover:rotate-[15deg] transition-transform duration-500 shrink-0`}>
                      {exp.type === 'work' ? <Briefcase className="w-7 h-7 text-white" /> : <GraduationCap className="w-7 h-7 text-white" />}
                    </div>
                    <div className={clsx(
                        "flex flex-col items-start",
                        index % 2 === 0 ? "md:items-end" : "md:items-start"
                    )}>
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-none mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            <MapPin className="w-4 h-4" />
                            {exp.place}
                        </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-base md:text-lg font-light mb-8">
                    {exp.description}
                  </p>

                  {/* Footer (Date) */}
                  <div className={clsx(
                    "flex items-center",
                    index % 2 === 0 ? "md:justify-end justify-start" : "justify-start"
                  )}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm font-medium">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {exp.date}
                    </div>
                  </div>

                  {/* Tiny Icon Link Decoration */}
                  <div className="absolute top-6 right-6 text-slate-900/10 dark:text-white/10 group-hover:text-blue-600/40 dark:group-hover:text-blue-500/40 transition-colors">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </motion.div>
              </div>

              {/* Empty Space for Desktop */}
              <div className="hidden md:block md:w-[46%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}