"use client"

import { motion } from "framer-motion"
import { Bike } from "lucide-react"

// Shared SVG path data so strokes and riders stay perfectly aligned
const ORANGE_PATH = "M-100,300 Q300,150 600,300 T1300,300";
const GREEN_PATH  = "M-100,450 Q400,250 800,450 T1400,450";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Urban cityscape silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Dynamic grid pattern - subtle motion */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Roads + glow + riders inside the same SVG coordinate system */}
      <svg 
        className="absolute inset-0 w-full h-full z-0" 
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="gGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orange road: base, highlight, animated dashes */}
        <path id="orangeRoad" d={ORANGE_PATH} fill="none" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="14" strokeLinecap="round" filter="url(#glow)" />
        <path d={ORANGE_PATH} fill="none" stroke="url(#gOrange)" strokeWidth="6" strokeLinecap="round" />
        <motion.path
          d={ORANGE_PATH}
          fill="none"
          stroke="#fde68a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 14"
          animate={{ strokeDashoffset: [0, -300] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          opacity={0.7}
        />

        {/* Green road: base, highlight, animated dashes */}
        <path id="greenRoad" d={GREEN_PATH} fill="none" stroke="#10b981" strokeOpacity="0.18" strokeWidth="14" strokeLinecap="round" filter="url(#glow)" />
        <path d={GREEN_PATH} fill="none" stroke="url(#gGreen)" strokeWidth="6" strokeLinecap="round" />
        <motion.path
          d={GREEN_PATH}
          fill="none"
          stroke="#d1fae5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 14"
          animate={{ strokeDashoffset: [0, -300] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          opacity={0.7}
        />

        {/* Riders INSIDE the SVG so coordinates match exactly */}
        <g>
          {/* Orange rider (raised slightly to ride the dotted center) */}
          <g>
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orangeRoad" />
            </animateMotion>
            <g transform="translate(-16,-30)" className="text-amber-400">
              <Bike width={32} height={32} className="drop-shadow-lg" />
            </g>
          </g>

          {/* Green rider (raised slightly + staggered start) */}
          <g>
            <animateMotion dur="15s" begin="2.8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#greenRoad" />
            </animateMotion>
            <g transform="translate(-13,-28)" className="text-emerald-300">
              <Bike width={26} height={26} className="drop-shadow-lg" />
            </g>
          </g>
        </g>
      </svg>

      {/* Floating city sign */}
      <motion.div
        className="absolute top-8 md:top-1/5 right-4 sm:right-8 md:right-16 text-blue-400/70 z-10"
        animate={{ 
          rotate: [0, 5, -5, 0],
          y: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-gray-800/90 rounded-lg p-4 border border-gray-600/50 shadow-lg">
          <div className="text-sm text-green-300 font-bold">HYDERABAD</div>
          <div className="text-xs text-gray-300">←CITY CENTER</div>
        </div>
      </motion.div>
    </div>
  )
}