 "use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "@/components/GradientText";
import { Cpu } from "lucide-react";

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
    <section id="skills" className="mb-40 pt-20 px-4 md:px-0">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
        >
          <Cpu className="w-4 h-4" /> My Ability
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <GradientText
            colors={["#3b82f6", "#8b5cf6", "#3b82f6"]}
            animationSpeed={6}
            showBorder={false}
          >
            Technical Stack
          </GradientText>
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        ></motion.div>
      </div>

      <div className="space-y-20">
        {skillCategories.map((category, catIdx) => (
          <div key={category.title}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-10 ml-2"
            >
              {category.title}
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {category.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-2xl glass p-8 flex flex-col items-center gap-5 transition-all duration-300 border border-white/5 hover:border-blue-500/30 overflow-hidden"
                >
                  {/* Subtle Background Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${skill.glow} to-transparent blur-2xl rounded-full translate-y-10`} />

                  {/* Logo Wrapper */}
                  <div className="relative z-10 w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 drop-shadow-2xl">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  <div className="mt-2 text-center">
                    <span className="relative z-10 text-sm font-bold text-gray-500 group-hover:text-white tracking-widest transition-colors uppercase">
                      {skill.name}
                    </span>
                    <div className="h-0.5 w-0 group-hover:w-full bg-blue-500/50 transition-all duration-300 mx-auto mt-1"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}