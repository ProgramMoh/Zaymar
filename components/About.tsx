'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              About ZAYMAR
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#f5f5f7]">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                Our Mission
              </h3>
              <p className="text-[#86868b] leading-relaxed">
                To empower businesses with creative marketing solutions that
                drive real results and build lasting connections with their
                audience.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f5f5f7]">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                Our Approach
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
  )
}

