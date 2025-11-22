'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'STARTER',
    price: '$1,499',
    description:
      'Build a strong foundation with everything you need to establish a professional presence online.',
    features: [
      'Visual identity design',
      'First website creation',
      'Social media setup',
      'Basic content strategy',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'GROWTH',
    price: '$4,999',
    description:
      "When you're ready to grow your business remarkably, this package brings strategy and content together.",
    features: [
      'Refined brand identity',
      'Fully responsive website',
      'Social media management',
      'Strategic content planning',
      'Performance analytics',
    ],
    cta: "Let's Talk",
    popular: true,
  },
  {
    name: 'SIGNATURE',
    price: 'By Inquiry',
    description:
      "Our most personalized experience — designed for businesses ready to elevate their presence across every digital touchpoint.",
    features: [
      'Long-term strategy',
      'Full-service management',
      'Design excellence',
      'Dedicated team',
      'Custom solutions',
    ],
    cta: 'Inquire',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto mb-8">
            Whether you're just starting out or ready to scale, each package is
            built to grow your brand with clarity and creativity.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 border-2 border-white text-white rounded-full text-base font-medium hover:bg-white hover:text-[#1d1d1f] transition-all duration-200"
          >
            View Full Pricing
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${
                plan.popular
                  ? 'md:-mt-4 md:mb-4 lg:scale-105'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#1d1d1f] text-sm font-medium rounded-full">
                  Popular
                </div>
              )}
              <div
                className={`h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-white shadow-xl bg-white/10'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl lg:text-5xl font-semibold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== 'By Inquiry' && (
                      <span className="text-[#86868b] ml-2">/month</span>
                    )}
                  </div>
                  <p className="text-[#86868b] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-[#1d1d1f] hover:bg-gray-100'
                      : 'border-2 border-white text-white hover:bg-white hover:text-[#1d1d1f]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-[#86868b] mt-12"
        >
          * Monthly costs are customized based on your chosen tier and specific
          service requirements, determined during our thorough evaluation
          process to ensure the best value for your business.
        </motion.p>
      </div>
    </section>
  )
}

