'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start lg:items-center">
          
          {/* LEFT COLUMN: Main Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-8 leading-[1.1]">
              About <span className="brand-gradient text-transparent bg-clip-text">ZAYMAR</span>
            </h2>
            <p className="text-xl sm:text-2xl text-[#86868b] leading-relaxed mb-8">
              ZAYMAR Creatives is a full-service marketing and design agency
              helping brands stand out through strategy, storytelling, and clean
              creative execution.
            </p>
            <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
              We build digital experiences that connect your business to the
              people who matter most. Our approach combines strategic thinking
              with creative excellence to deliver results that drive growth and
              elevate your brand presence.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Card 1: Mission */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#f5f5f7] hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-6 h-6 text-[#1d1d1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                Our Mission
              </h3>
              <p className="text-[#86868b] leading-relaxed text-base sm:text-lg">
                To empower businesses with creative marketing solutions that
                drive real results and build lasting connections with their
                audience.
              </p>
            </motion.div>

            {/* Card 2: Approach */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#f5f5f7] hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-6 h-6 text-[#1d1d1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                Our Approach
              </h3>
              <p className="text-[#86868b] leading-relaxed text-base sm:text-lg">
                We combine data-driven strategy with creative excellence,
                ensuring every project delivers measurable impact and elevates
                your brand presence.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}