'use client';
import GradientText from '@/components/GradientText';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import React from 'react';

export default function About() {
  const coreSkills = ["React / Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"];

  return (
    <section id="about" className="relative mb-40 pt-24 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
        >
          <User className="w-4 h-4" /> Who I Am
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
        >
          <GradientText
            colors={["#60a5fa", "#a78bfa", "#60a5fa"]}
            animationSpeed={8}
            showBorder={false}
          >
            About Me
          </GradientText>
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-[90rem] mx-auto">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Sparkles className="text-blue-500 dark:text-blue-400 w-6 h-6" />
              Crafting Digital Excellence
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              As a passionate <span className="text-slate-900 dark:text-white font-medium">Front-End Developer</span>, I specialize in building high-performance web applications that bridge the gap between complex logic and <span className="text-blue-600 dark:text-blue-400">intuitive user experiences</span>.
            </p>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-light">
              My approach focuses on writing clean, scalable code while maintaining a keen eye for modern UI/UX principles. Every project is an opportunity to push the boundaries of what's possible on the web.
            </p>
          </div>

          {/* Quick Stats Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl p-6 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-blue-500/30 relative overflow-hidden group transition-all duration-300 shadow-md dark:shadow-none"
            >
              <div className="absolute -top-4 -right-4 bg-blue-500/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
              <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
              <h4 className="text-slate-900 dark:text-white font-black text-4xl mb-1">15+</h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-black tracking-widest">Completed Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl p-6 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-purple-500/30 relative overflow-hidden group transition-all duration-300 shadow-md dark:shadow-none"
            >
              <div className="absolute -top-4 -right-4 bg-purple-500/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
              <GraduationCap className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
              <h4 className="text-slate-900 dark:text-white font-black text-2xl mb-1 truncate">CS Student</h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-black tracking-widest">Al Jazeera Institute</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="col-span-1 sm:col-span-2 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl p-6 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-emerald-500/30 relative overflow-hidden group transition-all duration-300 shadow-md dark:shadow-none"
            >
              <div className="absolute -top-4 -right-4 bg-emerald-500/10 w-24 h-24 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
              <Sparkles className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mb-4 animate-pulse" />
              <h4 className="text-slate-900 dark:text-white font-black text-xl mb-1">Speed & Lightweight Focus</h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 uppercase font-black tracking-widest">Optimized structures, clean code, and micro-animations</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Skill Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent">
            <div className="bg-white dark:bg-zinc-950 rounded-[2.4rem] p-8 md:p-10 border border-black/5 dark:border-white/5 space-y-8 shadow-lg dark:shadow-none">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Laptop className="text-blue-500 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-xl">Core Tech Stack</h4>
                  <p className="text-slate-500 dark:text-gray-500 text-sm">Tools I use daily</p>
                </div>
              </div>

              <div className="grid gap-4">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-black/5 dark:border-white/5">
                <p className="text-slate-500 dark:text-gray-500 text-sm italic">
                  "Turning complex problems into elegant, user-friendly solutions."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}