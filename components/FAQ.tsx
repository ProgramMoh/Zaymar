'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What Services Does ZAYMAR Creatives Offer?",
    answer:
      "ZAYMAR Creatives provides a full suite of marketing solutions designed to elevate your brand's digital presence. From professional logo and website creation to strategic social media management and promotional material design, our services help businesses stand out in the digital world. We focus on crafting tailored, engaging marketing strategies to enhance visibility, drive growth, and ensure long-term success for your brand.",
  },
  {
    question: "How Does ZAYMAR Creatives Improve Efficiency and Reduce Costs?",
    answer:
      "By implementing streamlined digital marketing solutions and integrating creative tools into a cohesive strategy, ZAYMAR Creatives optimizes your brand's digital presence, automates content management, and minimizes marketing spend. Our clients typically experience improved engagement, enhanced brand visibility, and a significant reduction in marketing-related costs. With tailored strategies, we deliver impactful results that maximize both efficiency and return on investment.",
  },
  {
    question: "Is My Data Secure with ZAYMAR Creatives?",
    answer:
      "Yes, your data security is our priority at ZAYMAR Creatives. We implement industry-standard encryption protocols and secure systems to safeguard your business information. Whether managing social media accounts or handling website content, we ensure that your brand's data remains protected with the highest security measures in place.",
  },
  {
    question: "Can ZAYMAR Creatives Integrate with Other Tools and Platforms?",
    answer:
      "Absolutely! ZAYMAR Creatives seamlessly integrates with a range of tools to enhance your marketing strategy. From social media platforms to content management systems, we ensure a smooth flow of data and functionality. Our team can also provide tailored integration solutions to fit your specific business needs, enabling you to optimize your marketing efforts across multiple platforms.",
  },
  {
    question:
      "What Kind of Support and Training Does ZAYMAR Creatives Provide?",
    answer:
      "At ZAYMAR Creatives, we offer comprehensive training and ongoing support to ensure your team can make the most of our marketing solutions. From one-on-one sessions to group workshops, our training is tailored to your business needs. Plus, our dedicated support team is available around the clock, ensuring you have assistance whenever you need it to keep your digital marketing efforts running smoothly.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Empowering Your Business
            <br />
            with Creative Solutions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full py-6 text-left flex items-center justify-between group"
              >
                <span className="text-lg font-medium text-[#1d1d1f] pr-8 group-hover:text-[#86868b] transition-colors">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-[#1d1d1f] flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[#86868b] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

