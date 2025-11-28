'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Wait 4 seconds, then collapse the section
    setTimeout(() => {
      setIsVisible(false)
    }, 4000)
  }

  // If the section is fully hidden, return null so it renders nothing
  if (!isVisible) return null;

  return (
    <section className="bg-[#1d1d1f] text-white">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
              <div className="min-h-[100px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="signup-form"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-center w-full"
                    >
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                        Join ZAYMAR
                      </h2>
                      <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-8">
                        Be the first to hear about new creative launches, digital tools, and
                        growth opportunities.
                      </p>

                      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className="
                              flex-1 px-6 py-4 rounded-full 
                              bg-[#2d2d2f] text-white placeholder-[#86868b]
                              border border-gray-600 
                              focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]
                              transition-all duration-300
                            "
                          />
                          <button
                            type="submit"
                            className="px-8 py-4 bg-white text-[#1d1d1f] rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                          >
                            Register
                          </button>
                        </div>
                        <p className="text-xs text-[#86868b] text-center mt-4">
                          By subscribing, you agree to receive occasional emails from
                          ZAYMAR. You can unsubscribe anytime.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
                        Welcome to the Inner Circle.
                      </h2>
                      <p className="text-xl text-[#86868b] max-w-xl mx-auto">
                        You are now subscribed. Keep an eye on your inbox.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}