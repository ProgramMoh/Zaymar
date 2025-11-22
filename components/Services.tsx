'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Brand Identity',
    description:
      'Crafting visual identities that resonate with your audience and reflect your brand values.',
  },
  {
    title: 'Web Design & Development',
    description:
      'Building fully responsive websites that deliver exceptional user experiences across all devices.',
  },
  {
    title: 'Social Media Management',
    description:
      'Strategic content creation and management to grow your presence and engage your audience.',
  },
  {
    title: 'Marketing Strategy',
    description:
      'Data-driven strategies that connect your business to the people who matter most.',
  },
  {
    title: 'Content Creation',
    description:
      'Compelling visuals and copy that tell your story and drive meaningful engagement.',
  },
  {
    title: 'Digital Experiences',
    description:
      'Creating immersive digital experiences that leave lasting impressions on your customers.',
  },
]

export default function Services() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
            Creative Solutions,
            <br />
            Real Results.
          </h2>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto mb-8">
            We build digital experiences that connect your business to the
            people who matter most.
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-4 border border-[#1d1d1f] text-[#1d1d1f] rounded-full text-base font-medium hover:bg-[#1d1d1f] hover:text-white transition-all duration-200"
          >
            View All Services
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl bg-white">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

