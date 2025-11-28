'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1d1d1f] via-[#2d2d2f] to-[#1d1d1f] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src='/images/heromain.jpg'
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f]/80 via-[#2d2d2f]/70 to-[#1d1d1f]/80"></div>
      </div>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)] z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Step Forward,
            <br />
            <span className="text-[#86868b]">Dominate Everything</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-[#86868b] max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Full-service marketing and design agency helping brands stand out
            through strategy, storytelling, and clean creative execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/services"
              className="
                inline-block px-10 py-4 rounded-full bg-white text-[#1d1d1f] 
                text-base font-medium tracking-wide
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-1 
                hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.4)]
              "
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          // Changed border to a subtle Pink/Purple tint to match theme
          className="w-6 h-10 border-2 border-pink-500/30 rounded-full flex justify-center box-border p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            // Applied the Red->Pink->Purple gradient to the dot itself
            className="w-1.5 h-3 bg-gradient-to-b from-red-500 via-pink-500 to-purple-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

