import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";

export default function Experience() {
  const experiences = [
    {
      date: "2025 - Present",
      title: "Front-End Developer",
      place: "Route Academy",
      color: "from-blue-500 to-cyan-500",
      description:
        "Building and deploying real-world web applications using React, Next.js, and modern CSS frameworks. Focused on API integration and state management.",
    },
    {
      date: "2024 - 2028",
      title: "Bachelor of Science in Information Systems",
      place: "Al Jazeera Higher Institute",
      color: "from-purple-500 to-pink-500",
      description:
"Studies in algorithms, data structures, and systems engineering. Building a solid foundation in computer engineering principles."    },
  ];


  return (
    <section id="experience" className="mb-40">
      {/* Header */}
      <div className="flex items-center gap-4 mb-14">
        <h2 className="text-3xl font-bold">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF", "#e11414"]}
            animationSpeed={8}
            showBorder={false}
          >
            Experience
          </GradientText>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative pl-6 space-y-14 border-l border-white/10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <span
              className={`absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-[#0f0e13]`}
            />

            {/* Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-blue-500/40 transition">
              <span className="text-sm font-semibold text-blue-400 block mb-1">
                {exp.date}
              </span>

              <h4 className="text-xl font-bold mb-1">
                {exp.title}
              </h4>

              <p className="text-gray-500 font-medium mb-4">
                {exp.place}
              </p>

              <p className="text-gray-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}