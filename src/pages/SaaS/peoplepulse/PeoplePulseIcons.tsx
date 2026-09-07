import React from 'react'

export function PeoplePulseLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ppPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#14B8A6" />
          <stop offset="100%" stop-color="#0D9488" />
        </linearGradient>
      </defs>
      {/* Left person / pulse dot */}
      <circle cx="9" cy="18" r="5" fill="#14B8A6" />
      <path d="M 5 29 C 5 24 8 23 9 23 C 10 23 13 24 13 29 Z" fill="#14B8A6" opacity="0.8" />

      {/* Heartbeat pulse wave connecting them */}
      <path
        d="M 12 18 L 15 18 L 18 10 L 21 26 L 24 18 L 27 18"
        stroke="url(#ppPulseGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right person / pulse dot */}
      <circle cx="27" cy="18" r="5" fill="#0D9488" />
      <path d="M 23 29 C 23 24 26 23 27 23 C 28 23 31 24 31 29 Z" fill="#0D9488" opacity="0.8" />
    </svg>
  )
}

export function SlackLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.04 15.54a2.22 2.22 0 0 1-2.22-2.22c0-1.23.99-2.22 2.22-2.22h2.22v2.22c0 1.23-.99 2.22-2.22 2.22zm3.33 0a2.22 2.22 0 0 1 2.22-2.22c1.23 0 2.22.99 2.22 2.22v5.55a2.22 2.22 0 0 1-2.22 2.22 2.22 2.22 0 0 1-2.22-2.22v-5.55z" fill="#E01E5A" />
      <path d="M8.37 5.04a2.22 2.22 0 0 1 2.22-2.22c1.23 0 2.22.99 2.22 2.22v2.22h-2.22a2.22 2.22 0 0 1-2.22-2.22zm0 3.33a2.22 2.22 0 0 1 2.22 2.22c0 1.23-.99 2.22-2.22 2.22H2.82a2.22 2.22 0 0 1-2.22-2.22c0-1.23.99-2.22 2.22-2.22h5.55z" fill="#36C5F0" />
      <path d="M18.87 8.37a2.22 2.22 0 0 1 2.22 2.22c0 1.23-.99 2.22-2.22 2.22h-2.22V10.6c0-1.23.99-2.23 2.22-2.23zm-3.33 0a2.22 2.22 0 0 1-2.22 2.22 2.22 2.22 0 0 1-2.22-2.22V2.82a2.22 2.22 0 0 1 2.22-2.22 2.22 2.22 0 0 1 2.22-2.22v5.55z" fill="#2EB67D" />
      <path d="M15.54 18.87a2.22 2.22 0 0 1-2.22 2.22 2.22 2.22 0 0 1-2.22-2.22v-2.22h2.22c1.23 0 2.22.99 2.22 2.22zm0-3.33a2.22 2.22 0 0 1-2.22-2.22c0-1.23.99-2.22 2.22-2.22h5.55a2.22 2.22 0 0 1 2.22 2.22c0 1.23-.99 2.22-2.22 2.22h-5.55z" fill="#ECB22E" />
    </svg>
  )
}

export function MicrosoftLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  )
}

export function ZoomLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="14" height="14" rx="4" fill="#2D8CFF" />
      <path d="M17 9.5L22 6.5V17.5L17 14.5V9.5Z" fill="#2D8CFF" />
    </svg>
  )
}

export function GoogleWorkspaceLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#4285F4" />
      <path d="M11 6h2v6h-2zm0 8h2v2h-2z" fill="#34A853" />
    </svg>
  )
}

export function AdpLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 20" fill="none">
      <text x="18" y="16" fill="#D32F2F" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="900" fontStyle="italic" textAnchor="middle">
        ADP
      </text>
    </svg>
  )
}

export function GustoLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 20" fill="none">
      <text x="18" y="16" fill="#F43F5E" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle">
        gusto
      </text>
    </svg>
  )
}

export function LeverLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 20" fill="none">
      <line x1="4" y1="16" x2="12" y2="4" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      <text x="24" y="15" fill="#0F172A" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="bold">
        LEVER
      </text>
    </svg>
  )
}

export function GreenhouseLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 20" fill="none">
      <circle cx="6" cy="10" r="4" fill="#047857" />
      <text x="22" y="14" fill="#047857" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold">
        greenhouse
      </text>
    </svg>
  )
}

export function Soc2BadgePP({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
      <text x="24" y="21" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle">SOC 2</text>
      <text x="24" y="32" fill="#BAE6FD" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">Type II</text>
    </svg>
  )
}

export function GdprBadgePP({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
      <text x="24" y="22" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">GDPR</text>
      <text x="24" y="33" fill="#93C5FD" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="bold" textAnchor="middle">COMPLIANT</text>
    </svg>
  )
}
