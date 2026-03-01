import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GradientText from "@/components/GradientText";

export default function Project() {
const projects = [
  {
    name: "E-ecommerce",
    url: "https://ecommice-pgoy.vercel.app",
    description: "Real-time updates and interactive elements in a sleek interface.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    color: "from-orange-500/20 to-rose-500/20",
    imageUrl: "./ee.png",
  },
  {
    name: "CRUD System JS",
    url: "https://minaromanyqwe-max.github.io/js/",
    description: "A robust Create, Read, Update, and Delete system for data management.",
    tech: ["React", "Redux", "Bootstrap"],
    color: "from-indigo-500/20 to-blue-500/20",
    imageUrl: "./ecomec.png",
  },
  {
    name: "CRUD System ",
    url: "https://minaromanyqwe-max.github.io/curd/",
    description: "Secure and efficient password generation and management toolkit.",
    tech: ["JavaScript", "Crypto API", "CSS3"],
    color: "from-purple-500/20 to-pink-500/20",
    imageUrl: "/Screenshot 2026-03-01 234355.png",
  },
  {
    name: "Weather App React",
    url: "https://minaromanyqwe-max.github.io/weather/",
    description: "Live weather updates with detailed forecasts and dynamic visuals.",
    tech: ["React", "OpenWeather API", "Tailwind"],
    color: "from-blue-400/20 to-cyan-400/20",
    imageUrl: "Screenshot 2026-03-01 234849.png",
  },
  {
    name: "Weather App HTML",
    url: "https://minaromanyqwe-max.github.io/new/",
    description: "Live weather updates with detailed forecasts and dynamic visuals.",
    tech: ["HTML", "CSS"],
    color: "from-blue-400/20 to-cyan-400/20",
    imageUrl: "Screenshot 2026-03-01 234523.png",
  },
  {
    name: "Object Discovery App",
    url: "https://minaromanyqwe-max.github.io/opject/",
    description: "Live weather updates with detailed forecasts and dynamic visuals.",
    tech: ["HTML", "CSS"],
    color: "from-blue-400/20 to-cyan-400/20",
    imageUrl: "Screenshot 2026-03-01 234616.png",
  },
];
return (
    <section id="projects" className="mb-40">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
          >
            Featured Projects
          </GradientText>
        </h2>
        <p className="text-gray-400 max-w-xl">
          Selected projects showcasing my frontend skills and real-world
          experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-[260px]">
              <h3 className="text-xl font-bold mb-2">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}