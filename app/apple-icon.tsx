import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '36px',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(24, 24)">
            {/* Motorcycle body */}
            <path
              d="M-8 -4 Q-6 -8 0 -8 Q6 -8 8 -4 L10 0 Q10 2 8 2 L-8 2 Q-10 2 -10 0 Z"
              fill="white"
            />
            
            {/* Engine block */}
            <rect x="-4" y="2" width="8" height="4" fill="white" rx="1" />
            
            {/* Front wheel */}
            <circle cx="-10" cy="10" r="6" stroke="white" strokeWidth="3" fill="none" />
            <circle cx="-10" cy="10" r="2" fill="white" />
            
            {/* Rear wheel */}
            <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="3" fill="none" />
            <circle cx="10" cy="10" r="2" fill="white" />
            
            {/* Suspension */}
            <line x1="-8" y1="2" x2="-10" y2="8" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <line x1="8" y1="2" x2="10" y2="8" stroke="white" strokeWidth="3" strokeLinecap="round" />
            
            {/* Handlebars */}
            <circle cx="-8" cy="-6" r="1.5" fill="white" />
            <circle cx="8" cy="-6" r="1.5" fill="white" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}