'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function CartIcon() {
  const { cart } = useCart()
  const itemCount = (cart?.plan ? 1 : 0) + (cart?.addOns?.length || 0)

  return (
    <Link
      href="/cart"
      className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
      aria-label="Shopping cart"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-[#1d1d1f] text-white text-xs font-semibold rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  )
}

