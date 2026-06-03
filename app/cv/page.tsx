"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Printer, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  ExternalLink, 
  Code2, 
  Sparkles,
  Phone,
  Layers
} from "lucide-react";
import Link from "next/link";
import GradientText from "@/components/GradientText";

export default function CVPage() {
  const personalInfo = {
    name: "Mina Romany Abdel-shaheed",
    title: "Frontend Engineer / React & Next.js Specialist",
    email: "minaromanyqwe@gmail.com",
    phone: "+20 120 457 4166", // Example placeholder or direct Egyptian number if known, let's use standard email and linkedin, or customizable Egyptian code
    location: "Cairo, Egypt",
    github: "https://github.com/minaromanyqwe-max",
    linkedin: "https://www.linkedin.com/in/mina-romani-a1a242367/",
    summary: "Dedicated Frontend Developer with a strong focus on crafting high-performance, pixel-perfect user interfaces. Specialized in React, Next.js, and TypeScript, with extensive experience building responsive bento grids, custom UI modules, API integrations, and state management. Passionate about clean code standards, micro-animations, and fast page load optimizations."
  };

  const experience = [
    {
      date: "2025 - Present",
      title: "Frontend Developer",
      company: "Route Academy",
      location: "Cairo, Egypt",
      highlights: [
        "Architected and deployed dynamic real-world web applications using React, Next.js, and Tailwind CSS.",
        "Integrated secure REST APIs, optimized state management flows via Redux Toolkit / Zustand.",
        "Improved website page load performance and accessibility scores by 35% through image optimization and component lazy-loading."
      ]
    }
  ];

  const education = [
    {
      date: "2024 - 2028",
      title: "Bachelor of Information Systems",
      institution: "Al Jazeera Higher Institute",
      location: "Cairo, Egypt",
      details: "Studying algorithms, object-oriented programming, systems engineering, databases, and general Computer Science fundamentals."
    }
  ];

  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
    frameworks: ["React.js", "Next.js", "Redux Toolkit", "Zustand", "Tailwind CSS", "Bootstrap"],
    tools: ["Git & GitHub", "Firebase Integration", "RESTful APIs", "Framer Motion", "GSAP", "Vercel"]
  };

  const selectedProjects = [
    {
      name: "E-ecommerce Pro",
      tech: "Next.js, Firebase, Tailwind",
      description: "A premium shopping interface with real-time database updates and custom product grids.",
      url: "https://ecommice-pgoy.vercel.app"
    },
    {
      name: "Justlena Tours",
      tech: "Next.js, Tailwind, Framer Motion",
      description: "Localized travel booking platform emphasizing heavy transitions and micro-interactions.",
      url: "https://justlena-tours.vercel.app"
    },
    {
      name: "Games Platform",
      tech: "Next.js, Firebase, Tailwind",
      description: "Gaming catalog platform utilizing dynamic loading, category filtering, and game preview sliders.",
      url: "https://games-kappa-eight.vercel.app"
    }
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative selection:bg-blue-500/30">
      
      {/* CSS Print Styles Override */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .print-full-width {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-card {
            border: 1px solid #e5e7eb !important;
            background: transparent !important;
            color: black !important;
            box-shadow: none !important;
            page-break-inside: avoid;
          }
          h1, h2, h3, h4, p, span, li, a {
            color: black !important;
            text-shadow: none !important;
          }
          a {
            text-decoration: underline !important;
          }
        }
      `}</style>

      {/* Decorative glows (no-print) */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none no-print" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none no-print" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 print-full-width">
        
        {/* Navigation Toolbar (no-print) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass no-print">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print CV / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Main Resume Container */}
        <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-12 print-card">
          
          {/* Resume Header Section */}
          <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 print:border-gray-200">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                <GradientText colors={["#3b82f6", "#8b5cf6", "#3b82f6"]} animationSpeed={8} showBorder={false}>
                  {personalInfo.name}
                </GradientText>
              </h1>
              <p className="text-blue-400 font-bold uppercase tracking-widest text-sm print:text-blue-600">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-2 print:text-gray-700">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {personalInfo.phone}
                </span>
              </div>
            </div>

            {/* Social handles links */}
            <div className="flex gap-2.5 no-print">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-gray-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-blue-400 hover:text-blue-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Printable link text for physical CV views */}
            <div className="hidden print:block text-xs text-gray-500 text-right">
              <p>GitHub: github.com/minaromanyqwe-max</p>
              <p>LinkedIn: linkedin.com/in/mina-romani-a1a242367</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-4">
            <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light print:text-gray-700">
              {personalInfo.summary}
            </p>
          </div>

          {/* Core Skills Bento Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-500" />
              <span>Skills & Expertise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 print-card">
                <h3 className="font-bold text-sm uppercase text-blue-400 tracking-wider">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/5 print:bg-gray-100 print:text-black">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 print-card">
                <h3 className="font-bold text-sm uppercase text-purple-400 tracking-wider">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((fw, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/5 print:bg-gray-100 print:text-black">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 print-card">
                <h3 className="font-bold text-sm uppercase text-emerald-400 tracking-wider">Tools & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tl, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/5 print:bg-gray-100 print:text-black">
                      {tl}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span>Work Experience</span>
            </h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-3 print-card">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                    <div>
                      <h3 className="font-bold text-lg text-white">{exp.title}</h3>
                      <p className="text-blue-400 text-sm font-semibold">{exp.company} — <span className="text-gray-500 font-light">{exp.location}</span></p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.date}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 print:text-gray-700">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Showcase */}
          <div className="space-y-4">
            <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <span>Core Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedProjects.map((proj, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-blue-500/20 transition-all print-card">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-white text-base">{proj.name}</h3>
                      <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 no-print">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[10px] text-blue-400 uppercase tracking-wider font-bold mb-3">{proj.tech}</p>
                    <p className="text-xs text-gray-400 leading-relaxed print:text-gray-700">{proj.description}</p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:underline flex items-center gap-1 select-none">
                      <span>Live Link:</span>
                      <span className="text-gray-500 text-[10px] font-normal truncate max-w-[120px]">{proj.url.replace("https://", "")}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-widest text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>Education</span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-start gap-3 print-card">
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-white">{edu.title}</h3>
                    <p className="text-purple-400 text-sm font-semibold">{edu.institution} — <span className="text-gray-500 font-light">{edu.location}</span></p>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xl print:text-gray-700">{edu.details}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-xs font-semibold shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
