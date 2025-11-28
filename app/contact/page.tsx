'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { getAssetPath } from '@/lib/utils'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Reset after 4 seconds to allow seeing the success message
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 4000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath('/images/heroservices.jpg')}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f]/80 to-[#2d2d2f]/70"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)] z-0"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white mb-6">
              Let's Talk
            </h1>
            <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto">
              Ready to elevate your brand? We are ready to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-[#86868b] leading-relaxed mb-10">
                Whether you have a project in mind or just want to learn more
                about our services, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {/* Email Card */}
                <a 
                  href="mailto:info@zaymar.xyz"
                  className="group flex items-start p-6 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-[#1d1d1f]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-lg font-medium text-[#1d1d1f]">info@zaymar.xyz</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#86868b] ml-auto self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+17144944105"
                  className="group flex items-start p-6 rounded-3xl bg-[#f5f5f7] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-5 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-[#1d1d1f]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-lg font-medium text-[#1d1d1f]">(714) 494-4105</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#86868b] ml-auto self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>

                {/* Address Card (Non-clickable but styled same) */}
                <div className="flex items-start p-6 rounded-3xl bg-[#f5f5f7]">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <MapPin className="w-5 h-5 text-[#1d1d1f]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-1">Studio</h3>
                    <p className="text-lg font-medium text-[#1d1d1f] leading-snug">
                      160 W Foothill Pkwy S Ste 105<br />Corona, CA 92882
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: The Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white lg:pl-10"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] border-none text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] border-none text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Company (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] border-none text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1d1d1f] mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] border-none text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="
                        w-full px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-base font-medium 
                        transition-all duration-300 ease-out
                        hover:bg-[#2d2d2f] hover:scale-[1.02] hover:-translate-y-1 
                        hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)]
                      "
                    >
                      Send Message
                    </button>
                  </motion.form>
                ) : (
                  // Success State
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 bg-[#f5f5f7] rounded-3xl"
                  >
                    <div className="w-16 h-16 bg-[#1d1d1f] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">Message Sent!</h3>
                    <p className="text-[#86868b] max-w-xs">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}