"use client";
import React from "react";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import { Briefcase, GraduationCap } from "lucide-react"; // أضفنا أيقونات للتوضيح

export default function Experience() {
  const experiences = [
    {
      date: "2025 - Present",
      title: "Front-End Developer",
      place: "Route Academy",
      type: "work",
      color: "from-blue-600 to-cyan-400",
      description:
        "Building and deploying real-world web applications using React, Next.js, and modern CSS frameworks. Focused on API integration and state management.",
    },
    {
      date: "2024 - 2028",
      title: "Bachelor of Information Systems",
      place: "Al Jazeera Higher Institute",
      type: "education",
      color: "from-purple-600 to-pink-500",
      description:
        "Studies in algorithms, data structures, and systems engineering. Building a solid foundation in computer engineering principles.",
    },
  ];

  return (
    <section id="studies" className="mb-40 px-4 md:px-0">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#5227FF", "#4ade80"]}
            animationSpeed={6}
            showBorder={false}
          >
            My Journey
          </GradientText>
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line with Gradient */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-20 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={clsx(
                "relative flex flex-col md:flex-row items-center justify-between gap-8",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Dot on the line (Desktop) */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-black shadow-[0_0_15px_rgba(59,130,246,0.5)]`} />
              </div>

              {/* Card Container */}
              <div className="w-full md:w-[45%]">
                <div className="group relative rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 hover:bg-white/[0.07] hover:border-blue-500/50 transition-all duration-500 shadow-xl">
                  {/* Icon Badge */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {exp.type === 'work' ? <Briefcase className="w-5 h-5 text-white" /> : <GraduationCap className="w-5 h-5 text-white" />}
                  </div>

                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2 block">
                    {exp.date}
                  </span>

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h4>

                  <p className="text-gray-400 font-medium mb-4 italic text-sm">
                    {exp.place}
                  </p>

                  <p className="text-gray-500 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// دالة مساعدة بسيطة للـ classes
function clsx(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}