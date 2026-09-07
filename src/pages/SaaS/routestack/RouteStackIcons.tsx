import React from 'react'

export function RouteStackLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rsLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      {/* Compass Outer Ring */}
      <circle cx="18" cy="18" r="15" fill="#0F172A" stroke="url(#rsLogoGrad)" strokeWidth="2.5" />
      <circle cx="18" cy="18" r="11" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
      {/* Compass Needle */}
      <polygon points="18,6 21,18 18,16 15,18" fill="#38BDF8" />
      <polygon points="18,30 21,18 18,20 15,18" fill="#FFFFFF" opacity="0.9" />
      {/* Center Pivot */}
      <circle cx="18" cy="18" r="2.5" fill="#EA580C" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  )
}

// Partner Brand Logos (Buyer Trust section in Frame 3)
export function ApexGlobalLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-black tracking-widest text-slate-700 ${className}`}>
      <svg className="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 5.5l5.5 11h-11L12 7.5z" />
      </svg>
      <span className="text-sm font-extrabold tracking-wider text-slate-800">APEX GLOBAL</span>
    </div>
  )
}

export function CoastalFreightLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-black tracking-widest text-slate-700 ${className}`}>
      <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M2 12c4-4 8 4 12 0s8 4 8 0" />
        <path d="M2 17c4-4 8 4 12 0s8 4 8 0" />
      </svg>
      <span className="text-sm font-extrabold tracking-wider text-slate-800">COASTAL FREIGHT</span>
    </div>
  )
}

export function UrbanDeliveriesLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-black tracking-widest text-slate-700 ${className}`}>
      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="10" width="4" height="11" rx="1" />
        <rect x="10" y="4" width="4" height="17" rx="1" />
        <rect x="17" y="8" width="4" height="13" rx="1" />
      </svg>
      <span className="text-sm font-extrabold tracking-wider text-slate-800">URBAN DELIVERIES</span>
    </div>
  )
}

export function SynergyLogisticsLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-black tracking-widest text-slate-700 ${className}`}>
      <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="8" cy="12" r="5" fillOpacity="0.8" />
        <circle cx="16" cy="12" r="5" fillOpacity="0.8" />
      </svg>
      <span className="text-sm font-extrabold tracking-wider text-slate-800">SYNERGY LOGISTICS</span>
    </div>
  )
}
