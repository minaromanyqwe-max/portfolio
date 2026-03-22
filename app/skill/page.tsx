"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "@/components/GradientText";

const skillCategories = [
  {
    title: "Core Technologies",
    items: [
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", glow: "from-yellow-400/20" },
      { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", glow: "from-blue-500/20" },
      { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", glow: "from-orange-500/20" },
      { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", glow: "from-blue-500/20" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", glow: "from-cyan-400/20" },
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", glow: "from-white/10" },
      { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", glow: "from-sky-400/20" },
      { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", glow: "from-purple-500/20" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="mb-40 px-4 md:px-0">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold italic tracking-tight">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#3b82f6", "#2dd4bf"]}
            animationSpeed={6}
            showBorder={false}
          >
            Technical Stack
          </GradientText>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/30 to-transparent" />
      </div>

      {/* Categories Content */}
      <div className="space-y-16">
        {skillCategories.map((category, catIdx) => (
          <div key={category.title}>
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-8 ml-2">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {category.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-3xl border border-white/5 bg-[#0f0e13] p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
                >
                  {/* Subtle Background Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${skill.glow} to-transparent blur-3xl rounded-full`} />

                  {/* Logo Wrapper */}
                  <div className="relative z-10 w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  <span className="relative z-10 text-xs font-bold text-gray-500 group-hover:text-white tracking-wider transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}