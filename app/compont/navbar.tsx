'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
    { name: 'My studies', href: '#My studies' },
  { name: 'Contact', href: '#contact' },

];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      {({ open }) => (
        <>
          {/* Main Bar */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
            
            {/* Logo */}
            <a
              href="#home"
              className="font-bold text-lg tracking-wide text-white"
            >
              Mina<span className="text-blue-400">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium text-gray-300 hover:text-white transition relative',
                    'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-full p-2 text-gray-300 hover:text-white hover:bg-white/10 transition">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Panel */}
          <DisclosurePanel className="md:hidden mt-4">
            <div className="rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 space-y-4 shadow-xl">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block text-gray-300 hover:text-white font-medium transition"
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