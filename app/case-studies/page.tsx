'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'

const caseStudies = [
  {
    title: 'Brand Refresh for TechStart Inc.',
    category: 'Brand Identity',
    imageUrl: '/images/heromain.jpg',
    description: 'A complete overhaul of the brand identity to better reflect their innovative technology and appeal to a modern audience.',
  },
  {
    title: 'E-commerce Website for Green Innovations',
    category: 'Web Design & Development',
    imageUrl: '/images/heroservices.jpg',
    description: 'A high-converting e-commerce platform that resulted in a 300% increase in online sales within the first quarter.',
  },
  {
    title: 'Social Media Campaign for Local Fitness',
    category: 'Social Media Management',
    imageUrl: '/images/heroabout.jpg',
    description: 'A viral social media campaign that grew their audience by 500% and drove a significant increase in membership sign-ups.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath('/images/heropricing.jpg')}
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
              Case Studies
            </h1>
            <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable growth through strategic marketing and creative design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl bg-white overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img src={study.imageUrl} alt={study.title} className="object-cover" />
                  </div>
                  <div className="p-8">
                    <p className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-2">{study.category}</p>
                    <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                      {study.title}
                    </h3>
                    <p className="text-[#86868b] leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}