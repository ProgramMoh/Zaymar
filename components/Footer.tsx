'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Linkedin, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* --- MAIN FOOTER CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        >
          
          {/* COLUMN 1: CONNECT (ICONS) */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-6">
              CONNECT
            </h3>
            {/* The Icon Grid */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              
              {/* Phone Icon - Glows Pink */}
              <a 
                href="tel:+17144944105" 
                className="bg-[#2d2d2f] p-3 rounded-full hover:bg-[#3d3d3f] transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                aria-label="Call Us"
              >
                <Phone size={20} className="text-white group-hover:text-pink-500 transition-colors" />
              </a>

              {/* Mail Icon - Glows Purple */}
              <a 
                href="mailto:info@zaymar.xyz" 
                className="bg-[#2d2d2f] p-3 rounded-full hover:bg-[#3d3d3f] transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                aria-label="Email Us"
              >
                <Mail size={20} className="text-white group-hover:text-purple-500 transition-colors" />
              </a>

              {/* Instagram - Glows Red */}
              <a 
                href="#" 
                className="bg-[#2d2d2f] p-3 rounded-full hover:bg-[#3d3d3f] transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white group-hover:text-red-500 transition-colors" />
              </a>

              {/* LinkedIn - Glows Blue */}
              <a 
                href="#" 
                className="bg-[#2d2d2f] p-3 rounded-full hover:bg-[#3d3d3f] transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white group-hover:text-blue-500 transition-colors" />
              </a>

            </div>
          </div>

          {/* COLUMN 2: LOCATION */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              REACH US
            </h3>
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-start gap-3 text-[#86868b] leading-relaxed">
                   <MapPin className="shrink-0 mt-1 hidden md:block" size={18} /> 
                   <p>
                    160 W Foothill Pkwy S Ste 105
                    <br />
                    Corona, CA 92882
                  </p>
                </div>
            </div>
          </div>

          {/* COLUMN 3: NAVIGATION */}
          <div>
            <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-4">
              EXPLORE
            </h3>
            <div className="space-y-3">
              <Link
                href="/services"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

        </motion.div>

        {/* --- COPYRIGHT --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm text-[#86868b]">
              © {new Date().getFullYear()} ZAYMAR Creatives. All rights reserved.
            </p>
            {/* Tiny glowing dot indicator */}
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}