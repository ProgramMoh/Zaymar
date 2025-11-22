'use client'

import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CheckoutPage() {
  const { cart, getTotal, getAddOnsTotal } = useCart()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    meetingMethod: '',
    date: '',
    timeStart: '',
    timeEnd: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.meetingMethod) newErrors.meetingMethod = 'Please select a meeting method'
    if (!formData.date) newErrors.date = 'Please select a date'
    if (!formData.timeStart) newErrors.timeStart = 'Please select a start time'
    if (!formData.timeEnd) newErrors.timeEnd = 'Please select an end time'

    if (formData.timeStart && formData.timeEnd && formData.timeStart >= formData.timeEnd) {
      newErrors.timeEnd = 'End time must be after start time'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare submission data
      const submissionData = {
        ...formData,
        plan: cart?.plan?.name || 'N/A',
        planPrice: cart?.plan?.price || 0,
        addOns: cart?.addOns?.map((a) => `${a.name} (${formatPrice(a.price)}/month)`).join(', ') || 'None',
        addOnsTotal: getAddOnsTotal(),
        total: getTotal(),
        timestamp: new Date().toISOString(),
      }

      // Option 1: Use EmailJS (recommended - free tier available)
      // You'll need to set up EmailJS and add your service ID, template ID, and public key
      // Install: npm install @emailjs/browser
      // Then uncomment and configure:
      /*
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: formData.email,
          to_name: formData.name,
          from_name: 'ZAYMAR Creatives',
          subject: 'Meeting Confirmation - ZAYMAR Creatives',
          message: `Your meeting has been scheduled for ${formData.date} from ${formData.timeStart} to ${formData.timeEnd} via ${formData.meetingMethod}.`,
          plan: submissionData.plan,
          total: formatPrice(submissionData.total),
          ...submissionData,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      */

      // Submit to Formspree
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
      
      if (!formspreeEndpoint) {
        throw new Error('Formspree endpoint is not configured. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your environment variables.')
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to submit form')
      }

      // Option 3: Use a serverless function (Vercel/Netlify)
      // Create an API route at /app/api/submit/route.ts
      /*
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })
      */

      // Redirect to success page
      router.push(`/checkout/success?email=${encodeURIComponent(formData.email)}`)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
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
              No Items in Cart
            </h1>
            <p className="text-xl text-[#86868b] mb-8">
              Please add a plan to your cart first.
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
            Schedule Your Meeting
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-2xl border border-gray-200 bg-[#f5f5f7]">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-[#1d1d1f] mb-1">
                      <span className="font-medium">Plan</span>
                      <span className="font-semibold">{cart.plan.name}</span>
                    </div>
                    <div className="text-sm text-[#86868b]">
                      {cart.plan.price === 0 ? 'Custom Pricing' : formatPrice(cart.plan.price)}/month
                    </div>
                  </div>

                  {cart.addOns && cart.addOns.length > 0 && (
                    <div>
                      <div className="flex justify-between text-sm text-[#86868b] mb-2">
                        <span>Add-ons ({cart.addOns.length})</span>
                        <span>{formatPrice(getAddOnsTotal())}</span>
                      </div>
                      <div className="space-y-1">
                        {cart.addOns.map((addOn) => (
                          <div key={addOn.id} className="text-xs text-[#86868b] pl-4">
                            {addOn.name} - {formatPrice(addOn.price)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between text-lg font-semibold text-[#1d1d1f]">
                      <span>Total</span>
                      <span>
                        {cart.plan.price === 0 ? 'Custom Pricing' : formatPrice(getTotal())}
                        {cart.plan.price > 0 && (
                          <span className="text-sm font-normal text-[#86868b]">/month</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="meetingMethod"
                    className="block text-sm font-medium text-[#1d1d1f] mb-2"
                  >
                    Preferred Meeting Method <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="meetingMethod"
                    name="meetingMethod"
                    value={formData.meetingMethod}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.meetingMethod ? 'border-red-500' : 'border-gray-300'
                    } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                  >
                    <option value="">Select a method</option>
                    <option value="In Person">In Person</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Google Meet">Google Meet</option>
                    <option value="Facetime">Facetime</option>
                  </select>
                  {errors.meetingMethod && (
                    <p className="mt-1 text-sm text-red-500">{errors.meetingMethod}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="timeStart"
                      className="block text-sm font-medium text-[#1d1d1f] mb-2"
                    >
                      Start Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      id="timeStart"
                      name="timeStart"
                      value={formData.timeStart}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.timeStart ? 'border-red-500' : 'border-gray-300'
                      } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                    />
                    {errors.timeStart && (
                      <p className="mt-1 text-sm text-red-500">{errors.timeStart}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="timeEnd"
                      className="block text-sm font-medium text-[#1d1d1f] mb-2"
                    >
                      End Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      id="timeEnd"
                      name="timeEnd"
                      value={formData.timeEnd}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.timeEnd ? 'border-red-500' : 'border-gray-300'
                      } bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all`}
                    />
                    {errors.timeEnd && (
                      <p className="mt-1 text-sm text-red-500">{errors.timeEnd}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1d1d1f] mb-2"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d1d1f] transition-all resize-none"
                    placeholder="Any additional information or questions..."
                  />
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-base font-medium hover:bg-[#2d2d2f] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
                  </button>
                  <p className="mt-4 text-sm text-[#86868b] text-center">
                    By scheduling, you agree to receive a confirmation email and meeting details.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

