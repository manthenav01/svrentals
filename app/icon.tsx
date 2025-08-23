import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(16, 16)">
            {/* Motorcycle body */}
            <path
              d="M-4 -2 Q-2 -3 0 -3 Q2 -3 4 -2 L5 1 L-5 1 Z"
              fill="white"
            />
            
            {/* Wheels */}
            <circle cx="-5" cy="5" r="3" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="5" cy="5" r="3" stroke="white" strokeWidth="1.5" fill="none" />
            
            {/* Suspension */}
            <line x1="-4" y1="1" x2="-5" y2="3" stroke="white" strokeWidth="1.5" />
            <line x1="4" y1="1" x2="5" y2="3" stroke="white" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}