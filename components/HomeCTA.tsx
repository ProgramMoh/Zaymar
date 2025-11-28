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
            
            {/* Button 1: View Services */}
            <Link
              href="/services"
              className="
                px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-base font-medium 
                transition-all duration-300 ease-out
                hover:bg-[#2d2d2f]
                hover:scale-105 hover:-translate-y-1 
                hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)]
              "
            >
              View Services
            </Link>

            {/* Button 2: Contact Us */}
            <Link
              href="/contact"
              className="
                px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-base font-medium 
                transition-all duration-300 ease-out
                hover:bg-[#2d2d2f]
                hover:scale-105 hover:-translate-y-1 
                hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)]
              "
            >
              Contact Us
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  )
}