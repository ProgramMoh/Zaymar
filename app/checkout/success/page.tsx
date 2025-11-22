'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
            Meeting Scheduled!
          </h1>
          <p className="text-xl text-[#86868b] mb-4">
            Thank you for choosing ZAYMAR Creatives.
          </p>
          {email && (
            <p className="text-lg text-[#86868b] mb-8">
              A confirmation email has been sent to <span className="font-medium text-[#1d1d1f]">{email}</span>
            </p>
          )}
          <p className="text-base text-[#86868b] mb-12 max-w-2xl mx-auto">
            We've received your meeting request and will confirm the details shortly. You'll receive an email with all the meeting information and next steps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-base font-medium hover:bg-[#2d2d2f] transition-colors duration-200"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-[#1d1d1f] text-[#1d1d1f] rounded-full text-base font-medium hover:bg-[#1d1d1f] hover:text-white transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1d1d1f] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#86868b]">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

