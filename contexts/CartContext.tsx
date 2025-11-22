'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface Plan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

export interface AddOn {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export interface CartItem {
  plan?: Plan
  addOns: AddOn[]
}

interface CartContextType {
  cart: CartItem | null
  addPlan: (plan: Plan) => void
  removePlan: () => void
  addAddOn: (addOn: AddOn) => void
  removeAddOn: (addOnId: string) => void
  clearCart: () => void
  getTotal: () => number
  getAddOnsTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const addOns: AddOn[] = [
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    description: 'Advanced search engine optimization to improve your online visibility',
    price: 299,
    category: 'Marketing',
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing Campaigns',
    description: 'Monthly email campaigns with design and automation setup',
    price: 199,
    category: 'Marketing',
  },
  {
    id: 'video-production',
    name: 'Video Production',
    description: 'Professional video content creation (1 video per month)',
    price: 799,
    category: 'Content',
  },
  {
    id: 'photography',
    name: 'Professional Photography',
    description: 'Product or brand photography session (1 session per month)',
    price: 499,
    category: 'Content',
  },
  {
    id: 'analytics-pro',
    name: 'Advanced Analytics & Reporting',
    description: 'Comprehensive monthly reports with insights and recommendations',
    price: 149,
    category: 'Analytics',
  },
  {
    id: 'social-accounts',
    name: 'Additional Social Media Accounts',
    description: 'Manage 2 additional social media platforms',
    price: 399,
    category: 'Social Media',
  },
  {
    id: 'brand-guidelines',
    name: 'Brand Guidelines Documentation',
    description: 'Complete brand guidelines document with usage rules',
    price: 599,
    category: 'Branding',
  },
  {
    id: 'training-session',
    name: 'Team Training Session',
    description: 'One-on-one or group training session for your team',
    price: 349,
    category: 'Support',
  },
  {
    id: 'priority-support',
    name: 'Priority Support',
    description: '24/7 priority support with faster response times',
    price: 199,
    category: 'Support',
  },
  {
    id: 'content-extra',
    name: 'Extra Content Creation',
    description: 'Additional 10 pieces of content per month',
    price: 249,
    category: 'Content',
  },
]

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: 1499,
    description: 'Build a strong foundation with everything you need to establish a professional presence online.',
    features: [
      'Visual identity design',
      'First website creation',
      'Social media setup',
      'Basic content strategy',
    ],
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: 4999,
    description: "When you're ready to grow your business remarkably, this package brings strategy and content together.",
    features: [
      'Refined brand identity',
      'Fully responsive website',
      'Social media management',
      'Strategic content planning',
      'Performance analytics',
    ],
  },
  {
    id: 'signature',
    name: 'SIGNATURE',
    price: 0, // Custom pricing
    description: "Our most personalized experience — designed for businesses ready to elevate their presence across every digital touchpoint.",
    features: [
      'Long-term strategy',
      'Full-service management',
      'Design excellence',
      'Dedicated team',
      'Custom solutions',
    ],
  },
]

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem | null>(null)

  const addPlan = (plan: Plan) => {
    setCart((prev) => ({
      plan,
      addOns: prev?.addOns || [],
    }))
  }

  const removePlan = () => {
    setCart((prev) => (prev ? { ...prev, plan: undefined } : null))
  }

  const addAddOn = (addOn: AddOn) => {
    setCart((prev) => {
      if (!prev) {
        return { addOns: [addOn] }
      }
      if (prev.addOns.some((item) => item.id === addOn.id)) {
        return prev
      }
      return {
        ...prev,
        addOns: [...prev.addOns, addOn],
      }
    })
  }

  const removeAddOn = (addOnId: string) => {
    setCart((prev) => {
      if (!prev) return null
      return {
        ...prev,
        addOns: prev.addOns.filter((item) => item.id !== addOnId),
      }
    })
  }

  const clearCart = () => {
    setCart(null)
  }

  const getAddOnsTotal = () => {
    if (!cart?.addOns) return 0
    return cart.addOns.reduce((sum, addOn) => sum + addOn.price, 0)
  }

  const getTotal = () => {
    const planPrice = cart?.plan?.price || 0
    return planPrice + getAddOnsTotal()
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addPlan,
        removePlan,
        addAddOn,
        removeAddOn,
        clearCart,
        getTotal,
        getAddOnsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

