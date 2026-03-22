'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Studies', href: '#studies' }, // تعديل الـ href ليكون Slug سليم
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // إضافة تأثير عند السكرول لتقليل حجم النوافبار أو تغيير شفافيته
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
        "fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300",
        scrolled ? "top-2" : "top-4" // بيتحرك سنة بسيطة لما تنزل
      )}
    >
      {({ open }) => (
        <>
          {/* Main Bar */}
          <div className={clsx(
            "backdrop-blur-xl border transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between shadow-lg",
            scrolled ? "bg-black/40 border-white/20" : "bg-white/5 border-white/10"
          )}>
            
            {/* Logo */}
            <a
              href="#home"
              className="font-bold text-xl tracking-tighter text-white group"
            >
              Mina<span className="text-blue-500 group-hover:animate-pulse">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium text-gray-300 hover:text-white transition-all relative group',
                  )}
                >
                  {item.name}
                  {/* Underline Animation Improved */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Action Button (Optional) - ممكن تضيف زرار سريع للـ CV هنا */}
            <div className="hidden md:block">
               <a 
                 href="/Mina%20Romany%20Abdel-shaheed.CV.pdf" 
                 className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-blue-500/20"
               >
                 Resume
               </a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-full p-2 text-gray-300 hover:text-white hover:bg-white/10 transition outline-none">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Panel with Animation */}
          <DisclosurePanel className="md:hidden mt-4 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
            <div className="rounded-3xl backdrop-blur-2xl bg-black/60 border border-white/10 p-6 space-y-4 shadow-2xl">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block text-gray-300 hover:text-blue-400 font-medium text-lg transition-colors"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}