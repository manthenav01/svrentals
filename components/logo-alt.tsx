import React from 'react';

interface LogoAltProps {
  className?: string;
  size?: number;
}

export function LogoAlt({ className = "", size = 40 }: LogoAltProps) {
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
        <linearGradient id="altGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="altGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Hexagon background */}
      <path
        d="M24 4 L40 14 L40 34 L24 44 L8 34 L8 14 Z"
        fill="url(#altGradient1)"
        opacity="0.15"
      />
      
      {/* Simplified motorcycle silhouette */}
      <g transform="translate(24, 22)">
        {/* Body and seat */}
        <path
          d="M-6 -2 Q-4 -4 0 -4 Q4 -4 6 -2 L7 2 L-7 2 Z"
          fill="white"
        />
        
        {/* Handlebars */}
        <line x1="-8" y1="-3" x2="-3" y2="-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="-3" x2="3" y2="-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        
        {/* Wheels */}
        <circle cx="-8" cy="8" r="5" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="2" fill="none" />
        
        {/* Wheel spokes */}
        <line x1="-8" y1="3" x2="-8" y2="13" stroke="white" strokeWidth="1" />
        <line x1="-13" y1="8" x2="-3" y2="8" stroke="white" strokeWidth="1" />
        <line x1="8" y1="3" x2="8" y2="13" stroke="white" strokeWidth="1" />
        <line x1="3" y1="8" x2="13" y2="8" stroke="white" strokeWidth="1" />
        
        {/* Front and rear suspension */}
        <line x1="-6" y1="2" x2="-8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      {/* Outer ring */}
      <circle cx="24" cy="24" r="20" stroke="url(#altGradient1)" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );
}

export function LogoMinimal({ className = "", size = 40 }: LogoAltProps) {
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
        <linearGradient id="minimalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      
      {/* Rounded square background */}
      <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#minimalGradient)" />
      
      {/* Minimal motorcycle icon */}
      <g transform="translate(24, 24)">
        {/* Body */}
        <rect x="-8" y="-4" width="16" height="6" rx="2" fill="white" />
        
        {/* Seat */}
        <path d="M2 -4 L8 -4 L6 -1 L2 -1 Z" fill="white" />
        
        {/* Front wheel */}
        <circle cx="-8" cy="6" r="4" stroke="white" strokeWidth="2.5" fill="none" />
        
        {/* Rear wheel */}
        <circle cx="8" cy="6" r="4" stroke="white" strokeWidth="2.5" fill="none" />
        
        {/* Fork connections */}
        <line x1="-8" y1="2" x2="-8" y2="-2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="-2" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* SV text */}
        <text x="0" y="1" fontSize="5" fontWeight="bold" fill="url(#minimalGradient)" textAnchor="middle" fontFamily="Arial, sans-serif">
          SV
        </text>
      </g>
    </svg>
  );
}

export function LogoIcon({ className = "", size = 40 }: LogoAltProps) {
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
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>
      
      {/* Circle background */}
      <circle cx="24" cy="24" r="20" fill="url(#iconGradient)" filter="url(#shadow)" />
      
      {/* Motorcycle icon */}
      <g transform="translate(24, 23)">
        {/* Main body */}
        <path
          d="M-5 -3 Q-3 -5 0 -5 Q3 -5 5 -3 L6 0 L-6 0 Z"
          fill="white"
        />
        
        {/* Engine/lower body */}
        <rect x="-3" y="0" width="6" height="3" fill="white" rx="1" />
        
        {/* Front wheel */}
        <circle cx="-7" cy="7" r="4.5" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="-7" cy="7" r="1" fill="white" />
        
        {/* Rear wheel */}
        <circle cx="7" cy="7" r="4.5" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="7" cy="7" r="1" fill="white" />
        
        {/* Suspension lines */}
        <line x1="-5" y1="0" x2="-7" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="0" x2="7" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        
        {/* Handlebars */}
        <circle cx="-6" cy="-4" r="1" fill="white" />
        <circle cx="6" cy="-4" r="1" fill="white" />
      </g>
    </svg>
  );
}