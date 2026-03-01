import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Cpu, Home } from "lucide-react";
import GradientText from "@/components/GradientText";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
    { name: "TypeScript", icon: Cpu, color: "text-blue-400" },
    { name: "React", icon: Code2, color: "text-cyan-400" },
    { name: "Next.js", icon: Home, color: "text-white" },
    { name: "Tailwind CSS", icon: Briefcase, color: "text-teal-400" },
    { name: "Redux", icon: Code2, color: "text-purple-400" },
    { name: "HTML5", icon: Code2, color: "text-orange-500" },
    { name: "CSS3", icon: Code2, color: "text-blue-500" },
  ];

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center gap-4 transition-all hover:border-blue-500/40"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon className={`w-7 h-7 ${skill.color}`} />
              </div>

              {/* Name */}
              <span className="relative z-10 font-semibold text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}