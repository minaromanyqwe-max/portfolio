'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#studies' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        "fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500",
        scrolled ? "top-6" : "top-8"
      )}
    >
      {({ open }) => (
        <>
          <div className={clsx(
            "glass transition-all duration-500 rounded-2xl px-8 py-4 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)]",
            scrolled ? "py-3 bg-black/60 border-white/10" : "bg-white/5 border-white/5"
          )}>
            
            {/* Logo */}
            <a
              href="#home"
              className="font-black text-2xl tracking-tighter text-white group flex items-center gap-1"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white text-base">M</span>
              </div>
              <span>R<span className="text-blue-500 group-hover:animate-pulse">.</span></span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all relative group',
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Action Button */}
            <div className="hidden md:block">
               <motion.a 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 href="/Mina%20Romany%20Abdel-shaheed.CV.pdf" 
                 className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all shadow-xl hover:shadow-white/10"
               >
                 Resume
               </motion.a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
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
              <div className="pt-4 border-t border-white/5">
                 <a 
                   href="/Mina%20Romany%20Abdel-shaheed.CV.pdf" 
                   className="block text-center bg-white text-black text-[10px] font-black uppercase tracking-widest py-4 rounded-xl"
                 >
                   Download Resume
                 </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}