'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '@/components/GradientText';
import ProfileCard from '@/components/ProfileCard';

export default function HOME() {
  const fullText = 'Front-End Developer';
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32"
    >
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
<ProfileCard
  name=""
  title=""
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/imge.png"
  showUserInfo={false}
  enableTilt
  onContactClick={() => console.log("Contact clicked")}
  behindGlowEnabled
  behindGlowColor="rgba(125, 190, 255, 0.25)"
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
/>   
   </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <GradientText
            colors={['#5227FF', '#FF9FFC', '#B19EEF', '#e11414']}
            animationSpeed={8}
            showBorder={false}
          >
            I&apos;m Mina Romany
          </GradientText>
        </h1>

        {/* Typing */}
        <div className="flex items-center h-12">
          <span className="text-2xl md:text-3xl text-gray-400 font-medium">
            a {text}
          </span>
          <span className="ml-2 w-[2px] h-8 bg-blue-500 animate-pulse" />
        </div>

        <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
          I build interactive, responsive web applications with a focus on modern
          aesthetics and exceptional user experience.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-5">
          <a
            href="/Mina Romany Abdel-shaheed.CV.pdf"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/mina-romani-a1a242367/"
            target="_blank"
            className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
          >
            LinkedIn <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}