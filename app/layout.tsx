import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: 'ZAYMAR Creatives - Full-Service Marketing & Design Agency',
  description: 'Full-service marketing and design agency helping brands stand out through strategy, storytelling, and clean creative execution.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Layout>{children}</Layout>
        </CartProvider>
      </body>
    </html>
  )
}

