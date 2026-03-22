import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import React from 'react';

const socialLinks = [
  { name: 'Github', icon: Github, href: 'https://github.com/minaromanyqwe-max' },
  { name: 'Linkedin', icon: Linkedin, href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/YOUR_USERNAME' },
  { name: 'Email', icon: Mail, href: 'minaromanyqwe@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative mt-40">
      {/* خط فاصل بتدرج لوني شيك */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="pt-12 pb-16 text-center container mx-auto px-4">
        {/* اللوجو في الفوتر بيدي لمسة براندينج */}
        <div className="mb-6 font-bold text-xl text-white">
          Mina<span className="text-blue-500">.</span>
        </div>

        {/* روابط السوشيال ميديا */}
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 transition-all duration-300 hover:-translate-y-1"
                aria-label={link.name}
              >
                {/* تأثير خلفية خفيف عند الهوفر */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            );
          })}
        </div>

        {/* نصوص الحقوق */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm tracking-wide">
            © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Mina Romany</span>. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}