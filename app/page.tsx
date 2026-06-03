"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { Mail, Github, Send, MessageSquare, Sparkles } from "lucide-react";
import Project from "./project/page";
import Skills from "./skill/page";
import Footer from "@/components/Footer";
import About from './about/page';
import Navbar from '@/components/Navbar';
import HOME from "./home/page";
import Experience from "./Experience/page";
import Loading from "@/components/Loading";
import { useAppStore } from "@/lib/store";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });
const SplashCursor = dynamic(() => import("@/components/SplashCursor"), { ssr: false });

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🎉");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Your Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all backdrop-blur-md"
          placeholder="name@example.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all backdrop-blur-md resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="group relative w-full py-4 rounded-2xl font-bold text-white overflow-hidden shadow-2xl shadow-blue-500/20 disabled:opacity-50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-105" />
        <span className="relative flex items-center justify-center gap-2">
          {loading ? "Sending..." : (
            <>
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </span>
      </motion.button>
    </motion.form>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const { lightweightMode } = useAppStore();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loading key="loader" />}
      </AnimatePresence>

      <div className={clsx(
        "transition-opacity duration-1000 bg-[#030303] selection:bg-blue-500/30", 
        loading ? "opacity-0" : "opacity-100"
      )}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Navbar />
        
        {/* Persistent Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(3,3,3,1)_100%)]" />
          
          {/* Glowing tech grid background pattern */}
          <div 
            className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" 
            style={{ 
              maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)', 
              WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 75%)' 
            }} 
          />

          <div className="opacity-30">
            <Particles
              particleCount={lightweightMode ? 15 : 80}
              speed={lightweightMode ? 0.002 : 0.01}
              particleColors={lightweightMode ? ["#3b82f6"] : ["#3b82f6", "#8b5cf6"]}
              alphaParticles={true}
              particleBaseSize={lightweightMode ? 15 : 40}
            />
          </div>
          {!lightweightMode && <SplashCursor />}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          <main className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 space-y-24 md:space-y-36 pb-20 mt-16 md:mt-24">
            <HOME />
            <About />
            <Skills />
            <Project />
            <Experience />
            
            {/* Final Contact Section */}
            <section id="contact" className="relative py-12 md:py-20 px-4 sm:px-6 md:px-8 bg-white/[0.02] border border-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10" />
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest"
                  >
                    <MessageSquare className="w-4 h-4" /> Available for Hire
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
                    Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Legendary.</span>
                  </h2>
                  
                  <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                    I thrive on turning complex ideas into digital reality. Reach out for collaborations or just a tech chat!
                  </p>

                  <div className="grid gap-4 pt-4">
                    <a href="mailto:minaromanyqwe@gmail.com" className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all min-w-0 w-full">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Email Me</p>
                        <p className="text-white font-medium text-sm sm:text-base truncate break-all">minaromanyqwe@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="https://github.com/minaromanyqwe-max" target="_blank" className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all min-w-0 w-full">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                        <Github className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Follow on GitHub</p>
                        <p className="text-white font-medium text-sm sm:text-base truncate break-all">minaromanyqwe-max</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Form Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-zinc-900/50 backdrop-blur-2xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-8 text-blue-400">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold tracking-tight">Drop a message</span>
                  </div>
                  <ContactForm />
                </motion.div>
              </div>
            </section>
            
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}