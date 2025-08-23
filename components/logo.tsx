import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" opacity="0.1" />
      
      {/* Motorcycle body */}
      <g transform="translate(24, 24)">
        {/* Fuel tank and seat */}
        <path
          d="M-8 -4 Q-6 -8 0 -8 Q6 -8 8 -4 L10 0 Q10 2 8 2 L6 2 L4 4 L-4 4 L-6 2 L-8 2 Q-10 2 -10 0 Z"
          fill="url(#logoGradient)"
        />
        
        {/* Engine block */}
        <rect x="-4" y="0" width="8" height="6" fill="url(#logoGradient)" rx="1" />
        
        {/* Handlebars */}
        <line x1="-10" y1="-6" x2="-4" y2="-4" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="-6" x2="4" y2="-4" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Front fork */}
        <line x1="-8" y1="-2" x2="-10" y2="8" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Rear suspension */}
        <line x1="8" y1="0" x2="10" y2="8" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Exhaust pipe */}
        <path
          d="M4 4 Q8 4 10 6 L12 8"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Front wheel */}
        <circle cx="-10" cy="10" r="6" stroke="url(#wheelGradient)" strokeWidth="2" fill="none" />
        <circle cx="-10" cy="10" r="3" stroke="url(#wheelGradient)" strokeWidth="1.5" fill="none" />
        <circle cx="-10" cy="10" r="1" fill="url(#wheelGradient)" />
        
        {/* Rear wheel */}
        <circle cx="10" cy="10" r="6" stroke="url(#wheelGradient)" strokeWidth="2" fill="none" />
        <circle cx="10" cy="10" r="3" stroke="url(#wheelGradient)" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="1" fill="url(#wheelGradient)" />
        
        {/* SV text on the body */}
        <text x="0" y="1" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">
          SV
        </text>
      </g>
    </svg>
  );
}

export function LogoWithText({ className = "", logoSize = 40 }: LogoProps & { logoSize?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={logoSize} />
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent leading-tight">
          SV Rentals
        </span>
        <span className="text-xs text-gray-500 font-medium">Your Journey Starts Here</span>
      </div>
    </div>
  );
}