'use client';

import { useEffect, useState, useMemo } from 'react';
import { ChevronRight, Download, Linkedin, Sparkles, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '@/components/GradientText';
import ProfileCard from '@/components/ProfileCard';

export default function HOME() {
  const titles = useMemo(() => ['Front-End Developer', 'React Specialist', 'Next.js Expert'], []);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[index % titles.length];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      setText(prev => 
        isDeleting ? currentFullText.substring(0, prev.length - 1) : currentFullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, titles]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center lg:grid lg:grid-cols-12 gap-12 pt-24 pb-20 px-6 max-w-7xl mx-auto overflow-visible"
    >
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Content (Col 1-7) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left z-20"
      >
        <div className="flex justify-center lg:justify-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-blue-100/60 uppercase tracking-[0.2em]">
              Available for new projects
            </span>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h2 className="text-gray-500 text-xl md:text-2xl font-medium tracking-tight">
            Hi there, I&apos;m
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white">
            <GradientText
              colors={['#3b82f6', '#8b5cf6', '#3b82f6']}
              animationSpeed={10}
              showBorder={false}
            >
              Mina Romany
            </GradientText>
          </h1>
        </div>

        {/* Improved Typing Area */}
        <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start">
          <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-tight">
            A Creative <span className="text-white font-bold bg-clip-text">{text}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block ml-1 w-1.5 h-8 bg-blue-500 rounded-full align-middle"
            />
          </p>
        </div>

        <p className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          Turning complex problems into <span className="text-white font-medium italic">elegant digital experiences</span>. 
          Specialized in high-performance <span className="text-blue-400 font-medium">React & Next.js</span> applications.
        </p>

        {/* Modern CTAs */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-8">
          <motion.a
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/Mina Romany Abdel-shaheed.CV.pdf"
            className="group relative px-10 py-4 bg-white text-black font-black rounded-[1.2rem] flex items-center gap-3 transition-all shadow-xl shadow-white/10"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" /> 
            Get Resume
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/mina-romani-a1a242367/"
            target="_blank"
            className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-[1.2rem] font-bold flex items-center gap-3 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-[#0077B5] group-hover:scale-110 transition-transform" /> 
            <span>LinkedIn</span>
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Profile Card (Col 8-12) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:col-span-5 flex items-center justify-center z-10 relative"
      >
        {/* Decorative Ring */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
        
        <div className="relative group perspective-1000">
          <ProfileCard
            name=""
            title=""
            handle="minaromany"
            status="Available for Work"
            contactText="Hire Me"
            avatarUrl="/imge.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            behindGlowEnabled={true}
            innerGradient="rgba(10, 10, 12, 0.9)"
          />
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 md:-right-10 glass p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <MousePointer2 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-tighter">Current Status</p>
              <p className="text-xs text-white font-bold">Freelancing</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}