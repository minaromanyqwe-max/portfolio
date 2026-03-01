import GradientText from '@/components/GradientText'
import { Image } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <>
        <section id="about" className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">
                      <GradientText
                colors={["#5227FF","#FF9FFC","#B19EEF","#e11414"]}
                animationSpeed={8}
                showBorder={false}
                className="custom-class"
              >
 About Me              </GradientText>
              
             </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
                                          <div className="grid md:grid-cols-2 gap-16 items-start">
                      <div className="space-y-6 text-gray-400 text-lg">
                        <p>
                        As a passionate front-end developer with a background in computer science, I specialize in building high-performance, responsive web applications that bridge complex back-end systems with intuitive user interfaces.
                        </p>
                        <p>
My journey in the tech world began at Al Jazeera Higher Institute, where I gained a foundation in algorithms and software engineering. Since then, I have dedicated myself to mastering the modern web environment
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-[#1f1e24] p-4 rounded-2xl border border-[#ffffff0d]">
                            <h4 className="text-white font-bold text-2xl mb-1">15+</h4>
                            <p className="text-sm">Projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
          
        </section>
      
    </>
  )
}
