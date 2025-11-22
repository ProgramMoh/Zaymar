'use client'

import { motion } from 'framer-motion'
import { useCart, addOns } from '@/contexts/CartContext'
import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
  const { cart, removePlan, removeAddOn, addAddOn, clearCart, getTotal, getAddOnsTotal } = useCart()
  const [showAddOns, setShowAddOns] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const groupedAddOns = addOns.reduce((acc, addOn) => {
    if (!acc[addOn.category]) {
      acc[addOn.category] = []
    }
    acc[addOn.category].push(addOn)
    return acc
  }, {} as Record<string, typeof addOns>)

  const isAddOnInCart = (addOnId: string) => {
    return cart?.addOns?.some((item) => item.id === addOnId) || false
  }

  if (!cart || !cart.plan) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-[#86868b] mb-8">
              Choose a plan to get started.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-base font-medium hover:bg-[#2d2d2f] transition-colors duration-200"
            >
              View Plans
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-12">
            Your Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Selected Plan */}
              <div className="p-6 rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                      {cart.plan.name}
                    </h3>
                    <p className="text-[#86868b]">{cart.plan.description}</p>
                  </div>
                  <button
                    onClick={removePlan}
                    className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                    aria-label="Remove plan"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-3xl font-semibold text-[#1d1d1f]">
                  {cart.plan.price === 0 ? 'Custom Pricing' : formatPrice(cart.plan.price)}
                  {cart.plan.price > 0 && <span className="text-lg text-[#86868b] font-normal">/month</span>}
                </div>
              </div>

              {/* Selected Add-ons */}
              {cart.addOns.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-4">Selected Add-ons</h3>
                  <div className="space-y-4">
                    {cart.addOns.map((addOn) => (
                      <div
                        key={addOn.id}
                        className="p-6 rounded-2xl border border-gray-200 bg-white flex items-start justify-between"
                      >
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-[#1d1d1f] mb-1">
                            {addOn.name}
                          </h4>
                          <p className="text-sm text-[#86868b]">{addOn.description}</p>
                          <span className="inline-block mt-2 text-sm font-medium text-[#86868b]">
                            {addOn.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-semibold text-[#1d1d1f]">
                            {formatPrice(addOn.price)}/month
                          </span>
                          <button
                            onClick={() => removeAddOn(addOn.id)}
                            className="text-[#86868b] hover:text-[#1d1d1f] transition-colors"
                            aria-label="Remove add-on"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add-ons Section */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-[#1d1d1f]">Available Add-ons</h3>
                  <button
                    onClick={() => setShowAddOns(!showAddOns)}
                    className="text-sm font-medium text-[#1d1d1f] hover:text-[#86868b] transition-colors"
                  >
                    {showAddOns ? 'Hide' : 'Show'} Add-ons
                  </button>
                </div>

                {showAddOns && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    {Object.entries(groupedAddOns).map(([category, categoryAddOns]) => (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-3">
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
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h5 className="text-base font-semibold text-[#1d1d1f]">
                                        {addOn.name}
                                      </h5>
                                      {inCart && (
                                        <span className="text-xs font-medium text-[#1d1d1f] bg-white px-2 py-0.5 rounded">
                                          Added
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-[#86868b] mb-2">{addOn.description}</p>
                                    <span className="text-base font-semibold text-[#1d1d1f]">
                                      {formatPrice(addOn.price)}/month
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => {
                                      if (inCart) {
                                        removeAddOn(addOn.id)
                                      } else {
                                        addAddOn(addOn)
                                      }
                                    }}
                                    className={`ml-4 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                      inCart
                                        ? 'bg-[#1d1d1f] text-white hover:bg-[#2d2d2f]'
                                        : 'border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white'
                                    }`}
                                  >
                                    {inCart ? 'Remove' : 'Add'}
                                  </button>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-2xl border border-gray-200 bg-[#f5f5f7]">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[#1d1d1f]">
                    <span>Plan</span>
                    <span className="font-semibold">
                      {cart.plan.price === 0 ? 'Custom' : formatPrice(cart.plan.price)}
                    </span>
                  </div>
                  {cart.addOns.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-[#86868b]">
                        <span>Add-ons ({cart.addOns.length})</span>
                        <span>{formatPrice(getAddOnsTotal())}</span>
                      </div>
                      {cart.addOns.map((addOn) => (
                        <div key={addOn.id} className="flex justify-between text-xs text-[#86868b] pl-4">
                          <span>{addOn.name}</span>
                          <span>{formatPrice(addOn.price)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between text-lg font-semibold text-[#1d1d1f]">
                      <span>Total</span>
                      <span>
                        {cart.plan.price === 0 ? 'Custom Pricing' : formatPrice(getTotal())}
                        {cart.plan.price > 0 && <span className="text-sm font-normal text-[#86868b]">/month</span>}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full text-center px-6 py-4 bg-[#1d1d1f] text-white rounded-full font-medium hover:bg-[#2d2d2f] transition-colors duration-200 mb-3"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full px-6 py-4 border border-gray-300 text-[#1d1d1f] rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

