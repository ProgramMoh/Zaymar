'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAssetPath } from '@/lib/utils'
import { useCart, plans, addOns } from '@/contexts/CartContext'
import { useState } from 'react'

export default function PricingPage() {
  const { addPlan, addAddOn, removeAddOn, cart } = useCart()
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const handleAddToCart = (planId: string) => {
    const plan = plans.find((p) => p.id === planId)
    if (plan) {
      addPlan(plan)
      // Scroll to top or show notification
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const isAddOnInCart = (addOnId: string) => {
    return cart?.addOns?.some((item) => item.id === addOnId) || false
  }

  const groupedAddOns = addOns.reduce((acc, addOn) => {
    if (!acc[addOn.category]) {
      acc[addOn.category] = []
    }
    acc[addOn.category].push(addOn)
    return acc
  }, {} as Record<string, typeof addOns>)

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
              Choose Your Plan
            </h1>
            <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto">
              Whether you're just starting out or ready to scale, each package is
              built to grow your brand with clarity and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {cart?.plan && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-[#1d1d1f] text-white rounded-2xl text-center"
            >
              <p className="mb-2">You have successfully added {cart.plan.name} plan to your cart. Check some of our add-ons below to grow your business to broader horizons!</p>
              <Link
                href="/cart"
                className="text-sm underline hover:no-underline"
              >
                View Cart →
              </Link>
            </motion.div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => {
              const isSelected = cart?.plan?.id === plan.id
              const isPopular = plan.id === 'growth'
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${
                    isPopular
                      ? 'md:-mt-4 md:mb-4 lg:scale-105'
                      : ''
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1d1d1f] text-white text-sm font-medium rounded-full">
                      Popular
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute -top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      In Cart
                    </div>
                  )}
                  <div
                    className={`h-full p-8 rounded-2xl bg-white border-2 transition-all duration-300 ${
                      isPopular
                        ? 'border-[#1d1d1f] shadow-xl'
                        : isSelected
                        ? 'border-green-500 shadow-lg'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-4xl lg:text-5xl font-semibold text-[#1d1d1f]">
                          {plan.price === 0 ? 'By Inquiry' : `$${plan.price.toLocaleString()}`}
                        </span>
                        {plan.price > 0 && (
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
                            className="w-5 h-5 text-[#1d1d1f] mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#1d1d1f]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.price === 0 ? (
                      <Link
                        href="/contact"
                        className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-200 ${
                          isPopular
                            ? 'bg-[#1d1d1f] text-white hover:bg-[#2d2d2f]'
                            : 'border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'
                        }`}
                      >
                        Inquire
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(plan.id)}
                        disabled={isSelected}
                        className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : isPopular
                            ? 'bg-[#1d1d1f] text-white hover:bg-[#2d2d2f]'
                            : 'border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'
                        }`}
                      >
                        {isSelected ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Add-ons Section - Separate Card */}
          {cart?.plan && cart.plan.price > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                      Available Add-ons
                    </h3>
                    <p className="text-[#86868b]">
                      Enhance your {cart.plan.name} plan with these additional services
                    </p>
                  </div>
                  <button
                    onClick={() => setExpandedPlan(expandedPlan ? null : 'all')}
                    className="flex items-center space-x-2 text-sm font-medium text-[#1d1d1f] hover:text-[#86868b] transition-colors"
                  >
                    <span>{expandedPlan ? 'Hide' : 'Show'} Add-ons</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        expandedPlan ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {expandedPlan && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-x-auto"
                  >
                    <div className="flex gap-4 pb-4 min-w-max">
                      {Object.entries(groupedAddOns).map(([category, categoryAddOns]) => (
                        <div key={category} className="flex-shrink-0 w-80">
                          <h4 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-3">
                            {category}
                          </h4>
                          <div className="space-y-3">
                            {categoryAddOns.map((addOn) => {
                              const inCart = isAddOnInCart(addOn.id)
                              return (
                                <div
                                  key={addOn.id}
                                  className={`p-4 rounded-xl border-2 transition-all ${
                                    inCart
                                      ? 'border-[#1d1d1f] bg-[#f5f5f7]'
                                      : 'border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-2 mb-1">
                                        <h5 className="text-sm font-semibold text-[#1d1d1f]">
                                          {addOn.name}
                                        </h5>
                                        {inCart && (
                                          <span className="text-xs font-medium text-[#1d1d1f] bg-white px-2 py-0.5 rounded">
                                            Added
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-[#86868b] mb-2">
                                        {addOn.description}
                                      </p>
                                      <span className="text-base font-semibold text-[#1d1d1f]">
                                        {formatPrice(addOn.price)}/month
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => {
                                      if (inCart) {
                                        removeAddOn(addOn.id)
                                      } else {
                                        addAddOn(addOn)
                                      }
                                    }}
                                    className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                      inCart
                                        ? 'bg-[#1d1d1f] text-white hover:bg-[#2d2d2f]'
                                        : 'border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'
                                    }`}
                                  >
                                    {inCart ? 'Remove' : 'Add to Cart'}
                                  </button>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-[#86868b] mt-8"
          >
            * Monthly costs are customized based on your chosen tier and specific
            service requirements, determined during our thorough evaluation
            process to ensure the best value for your business.
          </motion.p>
        </div>
      </section>
    </div>
  )
}

