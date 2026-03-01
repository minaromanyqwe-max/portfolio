import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div>
              <footer className="border-t border-[#ffffff0d] pt-12 mt-40 text-center">
          <p className="text-gray-500 text-sm mb-6">
            © {new Date().getFullYear()} Mina Romany. All rights reserved.
          </p>
          <div className="flex justify-center gap-8 mb-12 opacity-50">
            <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </footer>

    </div>
  )
}
