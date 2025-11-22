'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'

const values = [
  {
    title: 'Strategic Thinking',
    description:
      'Every project starts with understanding your business, your audience, and your goals. We develop data-driven strategies that deliver measurable results.',
  },
  {
    title: 'Creative Excellence',
    description:
      'We combine artistic vision with technical expertise to create work that not only looks great but performs exceptionally well.',
  },
  {
    title: 'Client Partnership',
    description:
      'We work as an extension of your team, building long-term relationships based on trust, transparency, and shared success.',
  },
  {
    title: 'Innovation',
    description:
      'We stay ahead of trends and leverage the latest tools and technologies to give your brand a competitive edge.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath('/images/heroabout.jpg')}
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
              About ZAYMAR
            </h1>
            <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto">
              Empowering brands through creative excellence and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl bg-[#f5f5f7]">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  What We Do
                </h3>
                <p className="text-[#86868b] leading-relaxed">
                  From brand identity and web design to social media management
                  and marketing strategy, we provide comprehensive solutions that
                  help businesses thrive in the digital landscape.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-[#f5f5f7]">
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

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#86868b] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#1d1d1f] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-[#86868b] mb-8 max-w-2xl mx-auto">
              Ready to elevate your brand? Get in touch and let's discuss how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1d1d1f] rounded-full text-base font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

