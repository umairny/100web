import React from 'react'

export function ConsentLayerLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="60%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#0F172A" />
        </linearGradient>
      </defs>
      {/* Outer 'C' circular arc */}
      <circle cx="18" cy="18" r="15" stroke="url(#clArcGrad)" strokeWidth="3.5" strokeDasharray="68 28" strokeLinecap="round" />
      {/* Inner cyan lock/shield dot */}
      <circle cx="18" cy="18" r="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2.5" fill="#10B981" />
    </svg>
  )
}

export function WordPressLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <text x="12" y="16" fill="#FFFFFF" fontFamily="serif" fontSize="13" fontWeight="bold" textAnchor="middle">W</text>
    </svg>
  )
}

export function ShopifyLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#95BF47" />
      <text x="12" y="16" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle">S</text>
    </svg>
  )
}

export function SegmentLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="3" fill="#52BD95" />
      <circle cx="18" cy="8" r="3" fill="#52BD95" />
      <circle cx="15" cy="17" r="3" fill="#52BD95" />
      <line x1="6" y1="12" x2="18" y2="8" stroke="#52BD95" strokeWidth="1.5" />
      <line x1="6" y1="12" x2="15" y2="17" stroke="#52BD95" strokeWidth="1.5" />
    </svg>
  )
}

export function HubSpotLogoCL({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF7A59" />
      <text x="12" y="16" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">H</text>
    </svg>
  )
}

export function SalesforceLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#00A1E0" />
      <text x="12" y="16" fill="#FFFFFF" fontFamily="sans-serif" fontSize="12" textAnchor="middle">☁</text>
    </svg>
  )
}

export function GoogleTagManagerLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4" height="7" rx="1" fill="#4285F4" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#4285F4" />
      <rect x="17" y="4" width="4" height="16" rx="1" fill="#4285F4" />
    </svg>
  )
}

export function Soc2BadgeCL({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
      <text x="24" y="21" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle">SOC 2</text>
      <text x="24" y="32" fill="#BAE6FD" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">Type II</text>
    </svg>
  )
}

export function Iso27001BadgeCL({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
      <text x="24" y="21" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle">ISO</text>
      <text x="24" y="32" fill="#93C5FD" fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="bold" textAnchor="middle">27001</text>
    </svg>
  )
}

export function GdprBadgeCL({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`${className} rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center p-1`}>
      <span className="text-[9px] font-black text-emerald-800 uppercase tracking-tighter text-center leading-none">GDPR<br />✓</span>
    </div>
  )
}

// Aliases for integrations
export const WordPressIcon = WordPressLogo;
export const ShopifyIcon = ShopifyLogo;
export const SegmentIcon = SegmentLogo;
export const HubSpotIcon = HubSpotLogoCL;
export const SalesforceIcon = SalesforceLogo;
export const GTMIcon = GoogleTagManagerLogo;
