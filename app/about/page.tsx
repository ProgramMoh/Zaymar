'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { Brain, Sparkles, Users, Zap, Target, Layers } from 'lucide-react'

// Added icons to the values array for better visual storytelling
const values = [
  {
    title: 'Strategic Thinking',
    description: 'Every project starts with understanding your business goals. We develop data-driven strategies that deliver measurable results.',
    icon: Brain,
    colorClass: 'text-[#fb2c36]', // Color 1 (Start)
  },
  {
    title: 'Creative Excellence',
    description: 'We combine artistic vision with technical expertise to create work that not only looks great but performs exceptionally well.',
    icon: Sparkles,
    colorClass: 'text-[#e13479]', // Color 2
  },
  {
    title: 'Client Partnership',
    description: 'We work as an extension of your team, building long-term relationships based on trust, transparency, and shared success.',
    icon: Users,
    colorClass: 'text-[#c73dbc]', // Color 3
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of trends and leverage the latest tools and technologies to give your brand a competitive edge.',
    icon: Zap,
    colorClass: 'text-[#ad46ff]', // Color 4 (End)
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src='/images/heroabout.jpg'
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f]/70 via-[#1d1d1f]/80 to-[#1d1d1f]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white mb-6">
              About <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent inline-block pb-1">ZAYMAR</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto leading-relaxed">
              Empowering brands through creative excellence and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & APPROACH --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-[#86868b] leading-relaxed mb-6">
                ZAYMAR Creatives is a full-service marketing and design agency
                helping brands stand out through strategy, storytelling, and clean
                creative execution.
              </p>
              <p className="text-lg text-[#86868b] leading-relaxed">
                We build digital experiences that connect your business to the
                people who matter most. Our approach combines strategic thinking
                with creative excellence to deliver results that drive growth and
                elevate your brand presence.
              </p>
            </motion.div>

            {/* Right Column: Interactive Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Card 1: What We Do */}
              <div className="group p-8 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-[#1d1d1f]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  What We Do
                </h3>
                <p className="text-[#86868b] leading-relaxed">
                  From brand identity and web design to social media management
                  and marketing strategy, we provide comprehensive solutions that
                  help businesses thrive.
                </p>
              </div>

              {/* Card 2: How We Work */}
              <div className="group p-8 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6 text-[#1d1d1f]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  How We Work
                </h3>
                <p className="text-[#86868b] leading-relaxed">
                  We combine data-driven strategy with creative excellence,
                  ensuring every project delivers measurable impact and elevates
                  your brand presence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-20 lg:py-32 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
              The core principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-10 rounded-3xl bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* UPDATED ICON CONTAINER 
                  1. We apply the specific text color to the container (value.colorClass).
                  2. We make the bg use that current text color but at 5% opacity (bg-current/5).
                  3. This creates a perfectly matching faint background for every icon.
                */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-current/5 ${value.colorClass}`}>
                  {/* The icon inherits the text color from the parent div */}
                  <value.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  {value.title}
                </h3>
                <p className="text-lg text-[#86868b] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 lg:py-32 bg-[#1d1d1f] text-white overflow-hidden relative">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl sm:text-2xl text-[#86868b] mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your brand? Get in touch and let's discuss how we can help.
            </p>
            <Link
              href="/contact"
              className="
                inline-block px-10 py-5 bg-white text-[#1d1d1f] rounded-full text-lg font-medium 
                transition-all duration-300 ease-out
                hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 
                hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)]
              "
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}