"use client"

import { motion } from "framer-motion"
import { Users, Clock, Star, ThumbsUp } from "lucide-react"

import { useEffect, useState } from "react"

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animateCount = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

export function TrustIndicators() {

  const stats = [
    {
      icon: Users,
      number: 15000,
      suffix: "+",
      label: "Happy Customers",
      color: "text-emerald-600"
    },
    {
      icon: Star,
      number: 4.9,
      suffix: "/5",
      label: "Average Rating",
      color: "text-yellow-500"
    },
    {
      icon: Clock,
      number: 24,
      suffix: "/7",
      label: "Support Available",
      color: "text-emerald-600"
    },
    {
      icon: ThumbsUp,
      number: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      color: "text-green-600"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Trust Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 mb-3 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div 
              className="text-2xl md:text-3xl font-bold text-gray-700 mb-1"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}
            >
              <CountUp end={stat.number} duration={2} />{stat.suffix}
            </div>
            <div 
              className="text-sm text-gray-600"
              style={{ textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}