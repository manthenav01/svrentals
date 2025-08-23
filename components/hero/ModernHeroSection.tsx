"use client"

import { motion } from "framer-motion"
import { AnimatedBackground } from "./AnimatedBackground"
import { SearchWidget } from "./SearchWidget"
import { useInView } from "react-intersection-observer"

export function ModernHeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-100 to-teal-200"
    >
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-600/30 to-teal-700/40 z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 pt-8 pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Hero Text */}
            <div className="text-center max-w-6xl mx-auto">
              <motion.div variants={textVariants} className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block text-gray-600"
                    style={{ textShadow: '0 1px 3px rgba(255,255,255,0.5)' }}
                  >
                    Your City.
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
                    style={{ 
                      filter: 'drop-shadow(0 1px 4px rgba(251, 191, 36, 0.15))'
                    }}
                  >
                    Your Ride.
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="block text-gray-600"
                    style={{ textShadow: '0 1px 3px rgba(255,255,255,0.5)' }}
                  >
                    Your Rules.
                  </motion.span>
                </h1>
                
                <motion.p
                  variants={textVariants}
                  className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
                  style={{ textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}
                >
                  Experience freedom like never before. Premium bikes and cars available 
                  across Hyderabad with instant booking and 24/7 support.
                </motion.p>
              </motion.div>
            </div>

            {/* Search Widget */}
            <motion.div variants={textVariants}>
              <SearchWidget />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}