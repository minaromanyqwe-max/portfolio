"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import {
  Mail,
  Github,
} from "lucide-react";
import Project from "./project/page";
import Skills from "./skill/page";
import Footer from "@/components/Footer";
import About from './about/page';
import Navbar from '@/components/Navbar';
import HOME from "./home/page";
import Particles from "@/components/Particles";
import SplashCursor from "@/components/SplashCursor";
import GradientText from "@/components/GradientText";
import { useEffect } from "react";
import Experience from "./Experience/page";
import Loading from "@/components/Loading";
import { AnimatePresence } from "framer-motion";


function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // Send email via API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🎉");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Your Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={clsx(
            "w-full px-4 py-3 rounded-xl bg-[#1f1e24] border transition-all",
            "focus:outline-none focus:border-blue-500",
            "border-[#ffffff0d] text-white placeholder-gray-500",
            "hover:border-blue-500/50"
          )}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={clsx(
            "w-full px-4 py-3 rounded-xl bg-[#1f1e24] border transition-all",
            "focus:outline-none focus:border-blue-500",
            "border-[#ffffff0d] text-white placeholder-gray-500",
            "hover:border-blue-500/50 resize-none"
          )}
          placeholder="Your message here..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className={clsx(
          "w-full py-3 px-4 rounded-xl font-bold transition-all",
          "bg-gradient-to-r from-blue-500 to-purple-600",
          "hover:shadow-lg hover:shadow-blue-500/50",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading delay (you can adjust or use real data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loading key="loader" />}
      </AnimatePresence>

      <div className={clsx("transition-opacity duration-1000", loading ? "opacity-0" : "opacity-100")}>
        <Toaster position="top-center" />
        <Navbar />
        
        <div className="relative bg-[#0f0e13] text-white font-['Poppins']">
          {/* Background Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Particles
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleColors={["#ffffff"]}
              moveParticlesOnHover
              particleHoverFactor={1}
              alphaParticles={false}
              particleBaseSize={100}
              sizeRandomness={1}
              cameraDistance={20}
              disableRotation={false}
            />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <SplashCursor
              SIM_RESOLUTION={128}
              DYE_RESOLUTION={1440}
              DENSITY_DISSIPATION={3.5}
              VELOCITY_DISSIPATION={2}
              PRESSURE={0.1}
              CURL={3}
              SPLAT_RADIUS={0.2}
              SPLAT_FORCE={6000}
              COLOR_UPDATE_SPEED={10}
            />
          </div>
          {/* Content */}
          <div className="relative z-10 flex justify-center items-center">
            <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto overflow-hidden">
              {/* Hero Section */}
              <HOME />
              {/* About Section */}
              <About />
              {/* Skills Section */}
              <Skills />
              {/* Projects Section */}
              <Project />
              {/* Experience / Education */}
              <Experience/>
              {/* Contact Section */}
              <section id="contact" className="mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-3xl font-bold">Get In Touch</h2>
                  <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-xl text-gray-400 mb-8">
                      Have a project in mind? Let&apos;s collaborate and create something amazing together!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <a href="mailto:minaromanyqwe@gmail.com" className="text-white hover:text-blue-400 transition-colors">minaromanyqwe@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                          <Github className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">GitHub</p>
                          <a href="https://github.com/minaromanyqwe-max" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">https://github.com/minaromanyqwe-max</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </section>
              {/* Footer */}
              <Footer />

            </main>
          </div>
        </div>
      </div>
    </>
  );
}

