'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            Join ZAYMAR
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-8">
            Be the first to hear about new creative launches, digital tools, and
            growth opportunities from ZAYMAR.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-1 px-6 py-4 rounded-full border border-gray-600 bg-[#2d2d2f] text-white placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-white transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-[#1d1d1f] rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
              >
                {submitted ? 'Subscribed!' : 'Register'}
              </button>
            </div>
            <p className="text-xs text-[#86868b] text-center mt-4">
              By subscribing, you agree to receive occasional emails from
              ZAYMAR. You can unsubscribe anytime.
            </p>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-gray-800 pt-12"
        >
          <div>
            <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:info@zaymar.xyz"
                className="block hover:text-[#86868b] transition-colors"
              >
                info@zaymar.xyz
              </a>
              <a
                href="tel:+17144944105"
                className="block hover:text-[#86868b] transition-colors"
              >
                (714) 494-4105
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-4">
              P.O. Box
            </h3>
            <p className="leading-relaxed">
              160 W Foothill Pkwy S Ste 105
              <br />
              Corona, CA 92882
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              <Link
                href="/services"
                className="block hover:text-[#86868b] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block hover:text-[#86868b] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block hover:text-[#86868b] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm text-[#86868b]">
              © {new Date().getFullYear()} ZAYMAR Creatives. All rights reserved.
            </p>
            <div className="w-8 h-0.5 brand-gradient rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

