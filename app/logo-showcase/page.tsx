"use client"

import { Logo, LogoWithText } from "@/components/logo"
import { LogoAlt, LogoMinimal, LogoIcon } from "@/components/logo-alt"
import { motion } from "framer-motion"

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
          SV Rentals Logo Variations
        </h1>
        
        {/* Main Logo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Primary Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <Logo size={80} />
              <p className="mt-4 text-gray-600">Default Logo</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <LogoWithText logoSize={60} />
              <p className="mt-4 text-gray-600">Logo with Text</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <Logo size={80} />
              <p className="mt-4 text-gray-300">On Dark Background</p>
            </motion.div>
          </div>
        </section>
        
        {/* Alternative Logos */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Alternative Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <LogoAlt size={80} />
              <p className="mt-4 text-gray-600">Hexagon Style</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <LogoMinimal size={80} />
              <p className="mt-4 text-gray-600">Minimal Square</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <LogoIcon size={80} />
              <p className="mt-4 text-gray-600">Icon Variant</p>
            </motion.div>
          </div>
        </section>
        
        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Size Variations</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-around flex-wrap gap-8">
              <div className="flex flex-col items-center">
                <Logo size={24} />
                <p className="mt-2 text-sm text-gray-600">24px</p>
              </div>
              <div className="flex flex-col items-center">
                <Logo size={32} />
                <p className="mt-2 text-sm text-gray-600">32px</p>
              </div>
              <div className="flex flex-col items-center">
                <Logo size={48} />
                <p className="mt-2 text-sm text-gray-600">48px</p>
              </div>
              <div className="flex flex-col items-center">
                <Logo size={64} />
                <p className="mt-2 text-sm text-gray-600">64px</p>
              </div>
              <div className="flex flex-col items-center">
                <Logo size={96} />
                <p className="mt-2 text-sm text-gray-600">96px</p>
              </div>
              <div className="flex flex-col items-center">
                <Logo size={128} />
                <p className="mt-2 text-sm text-gray-600">128px</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Color Schemes */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Application Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Logo size={40} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Header Usage</h3>
                  <p className="text-gray-600">Perfect for navigation bars</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <LogoWithText logoSize={32} />
                  <nav className="flex gap-4 text-sm text-gray-600">
                    <a href="#" className="hover:text-emerald-600">Home</a>
                    <a href="#" className="hover:text-emerald-600">About</a>
                    <a href="#" className="hover:text-emerald-600">Contact</a>
                  </nav>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <LogoIcon size={40} />
                <div>
                  <h3 className="text-xl font-bold">App Icon</h3>
                  <p className="opacity-90">Suitable for mobile apps and favicons</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-8">
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur">
                  <LogoIcon size={32} />
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur">
                  <LogoMinimal size={32} />
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur">
                  <LogoAlt size={32} />
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur">
                  <Logo size={32} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}