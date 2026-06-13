"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase, Code2 } from "lucide-react";
import GradientText from "@/components/GradientText";

export default function Project() {
  const projects = [
    // ... نفس البيانات اللي عندك بدون تغيير
    {
      name: "E-ecommerce Pro",
      url: "https://ecommice-pgoy.vercel.app",
      description: "Real-time updates and interactive elements in a sleek interface.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      imageUrl: "/ee.png",
    },
    {
      name: "Justlena Tours",
      url: "https://justlena-tours.vercel.app",
      description: "Premium travel and tour booking platform with localized content.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      imageUrl: "/nn.png",
    },
      {
        name: "Games Platform",
        url: "https://games-kappa-eight.vercel.app",
        description: "A comprehensive gaming platform with dynamic content loading.",
        tech: ["Next.js", "Firebase", "Tailwind"],
        imageUrl: "/Screenshot 2026-03-23 011221.png",
      },
      {
        name: "CRUD System JS",
        url: "https://minaromanyqwe-max.github.io/js/",
        description: "A robust Create, Read, Update, and Delete system for efficient data management.",
        tech: ["React", "Redux", "Bootstrap"],
        imageUrl: "/ecomec.png",
      },
      {
        name: "CRUD System Lite",
        url: "https://minaromanyqwe-max.github.io/curd/",
        description: "Fast and lightweight CRUD application for daily tasks.",
        tech: ["JS", "CSS3", "HTML5"],
        imageUrl: "/Screenshot 2026-03-01 234355.png",
      },
      {
        name: "Weather Insight",
        url: "https://minaromanyqwe-max.github.io/weather/",
        description: "Live weather updates with detailed forecasts and dynamic atmospheric visuals.",
        tech: ["React", "OpenWeather", "Tailwind"],
        imageUrl: "/Screenshot 2026-03-01 234849.png",
      },
      {
        name: "Weather Classic",
        url: "https://minaromanyqwe-max.github.io/new/",
        description: "Simple and effective weather tracking with classic styling.",
        tech: ["HTML", "CSS", "JS"],
        imageUrl: "/Screenshot 2026-03-01 234523.png",
      },
      {
        name: "Object Discovery",
        url: "https://minaromanyqwe-max.github.io/opject/",
        description: "Advanced object detection and discovery interface with clean interaction design.",
        tech: ["HTML", "CSS", "JS"],
        imageUrl: "/Screenshot 2026-03-01 234616.png",
      },
  ];

  return (
    <section id="projects" className="relative py-8 md:py-16 px-4 sm:px-8 lg:px-12 max-w-[90rem] mx-auto overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <Code2 className="w-4 h-4" /> My Portfolio
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight"
        >
          <GradientText
            colors={["#60a5fa", "#a78bfa", "#60a5fa"]}
            animationSpeed={8}
            showBorder={false}
          >
            Featured Projects
          </GradientText>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-600 dark:text-gray-400 max-w-2xl text-base sm:text-lg mb-8 leading-relaxed px-4"
        >
          A selection of my recent works where design meets functional excellence.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col h-full rounded-[2rem] bg-white/60 dark:bg-zinc-900/50 border border-black/10 dark:border-white/10 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 shadow-lg dark:shadow-none"
          >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden shrink-0">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
              
              {/* External Link Floating Button */}
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-3 rounded-full bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-white opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-2 md:group-hover:translate-y-0 hover:bg-blue-600 sm:opacity-100 sm:translate-y-0"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {project.name}
              </h3>
              
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2.5 mb-8 mt-auto shrink-0">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[11px] sm:text-xs font-bold tracking-wider uppercase rounded-lg bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-black/5 dark:border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-800 dark:text-white font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0"
              >
                <span>View Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}