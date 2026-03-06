"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientText from "@/components/GradientText";

const skills = [
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    glow: "from-yellow-400/40",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    glow: "from-blue-500/40",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    glow: "from-cyan-400/40",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    glow: "from-white/20",
  },
  {
    name: "Tailwind CSS",
img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",    glow: "from-sky-400/40",
  },
  {
    name: "Redux",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    glow: "from-purple-500/40",
  },
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    glow: "from-orange-500/40",
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    glow: "from-blue-500/40",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-40">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF", "#e11414"]}
            animationSpeed={8}
            showBorder={false}
          >
            Technical Skills
          </GradientText>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center gap-4 overflow-hidden"
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${skill.glow} to-transparent blur-2xl`}
            />

            {/* Logo */}
            <div className="relative z-10 w-16 h-16 rounded-xl bg-black/40 flex items-center justify-center">
              <Image
                src={skill.img}
                alt={skill.name}
                width={42}
                height={42}
                className="object-contain"
              />
            </div>

            {/* Name */}
            <span className="relative z-10 font-semibold text-gray-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}