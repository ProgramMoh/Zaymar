'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto mb-12">
            Explore our services, choose your plan, and let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="px-8 py-4 brand-gradient text-white rounded-full text-base font-medium hover:opacity-90 transition-opacity duration-200"
            >
              View Services
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border border-[#1d1d1f] text-[#1d1d1f] rounded-full text-base font-medium hover:bg-[#1d1d1f] hover:text-white transition-all duration-200"
            >
              See Pricing
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#1d1d1f] text-[#1d1d1f] rounded-full text-base font-medium hover:bg-[#1d1d1f] hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

