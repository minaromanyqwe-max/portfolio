'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Zap, ZapOff, FileText, ChevronRight } from 'lucide-react';
import { useAppStore } from '@/lib/store';

const navigation = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Journey', href: '/#studies' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Interactive CV', href: '/cv', isPage: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lightweightMode, toggleLightweightMode } = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={clsx(
        "fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[90rem] transition-all duration-500",
        scrolled ? "top-4 sm:top-6" : "top-6 sm:top-8"
      )}
    >
      {({ open }) => (
        <>
          <div className={clsx(
            "glass transition-all duration-500 rounded-2xl px-4 sm:px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]",
            scrolled ? "py-2.5 md:py-3 bg-black/60 border-white/10" : "bg-white/5 border-white/5"
          )}>
            
            {/* Logo */}
            <a
              href="/#home"
              className="font-black text-2xl tracking-tighter text-white group flex items-center gap-1"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white text-base">M</span>
              </div>
              <span>R<span className="text-blue-500 group-hover:animate-pulse">.</span></span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/' && typeof window !== 'undefined' && window.location.hash === item.href.substring(1));
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'text-xs font-black uppercase tracking-widest transition-all relative group',
                      isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                    )}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Performance Mode Switcher */}
              <button
                onClick={toggleLightweightMode}
                title={lightweightMode ? "Enable cinematic graphics" : "Enable lightweight mode"}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 rounded-xl border transition-all text-[10px] font-black uppercase tracking-widest",
                  lightweightMode 
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]" 
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                )}
              >
                {lightweightMode ? (
                  <>
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Speed Mode On</span>
                  </>
                ) : (
                  <>
                    <ZapOff className="w-3.5 h-3.5" />
                    <span>Normal Mode</span>
                  </>
                )}
              </button>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Mina%20Romany%20Abdel-shaheed.CV.pdf" 
                className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all shadow-xl hover:shadow-white/10"
              >
                Resume PDF
              </motion.a>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleLightweightMode}
                className={clsx(
                  "p-2 rounded-xl border transition-all",
                  lightweightMode 
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400" 
                    : "bg-white/5 border-white/5 text-gray-400"
                )}
                title="Toggle Performance Mode"
              >
                {lightweightMode ? <Zap className="w-4 h-4 fill-current" /> : <ZapOff className="w-4 h-4" />}
              </button>

              <DisclosureButton className="inline-flex items-center justify-center rounded-xl p-2 text-gray-300 hover:text-white hover:bg-white/5 transition outline-none border border-white/5">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </DisclosureButton>
            </div>
          </div>

          <DisclosurePanel className="md:hidden mt-4 origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
            <div className="rounded-2xl glass p-8 space-y-6 shadow-2xl">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block text-gray-400 hover:text-white font-black text-sm uppercase tracking-widest transition-colors"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-3">
                 <a 
                   href="/Mina%20Romany%20Abdel-shaheed.CV.pdf" 
                   className="block text-center bg-white text-black text-[10px] font-black uppercase tracking-widest py-4 rounded-xl"
                 >
                   Download Resume PDF
                 </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}