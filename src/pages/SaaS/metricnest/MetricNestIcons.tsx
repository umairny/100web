import React from 'react'

export function MetricNestLogo({ className = 'w-7 h-7', showText = true, textClass = 'text-xl' }: { className?: string; showText?: boolean; textClass?: string }) {
  return (
    <div className="flex items-center gap-2.5 font-bold tracking-tight">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Bird Nest Base */}
          <path
            d="M3 20C5 27 15 31 25 29C29 28 33 24 35 20C27 23 15 23 5 20Z"
            fill="#0F172A"
          />
          <path
            d="M6 18C11 12 19 8 29 8C25 13 19 17 9 18Z"
            fill="#06B6D4"
          />
          {/* Ascending Chart Bars resting inside Nest */}
          <rect x="10" y="10" width="3.5" height="12" rx="1.75" fill="#10B981" />
          <rect x="16" y="6" width="3.5" height="16" rx="1.75" fill="#06B6D4" />
          <rect x="22" y="12" width="3.5" height="10" rx="1.75" fill="#3B82F6" />
        </svg>
      </div>
      {showText && (
        <span className={`font-black tracking-tight text-white ${textClass}`}>
          Metric<span className="text-[#10B981]">Nest</span> <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block sm:inline sm:ml-1">Analytics</span>
        </span>
      )}
    </div>
  )
}

export function PartnerIcon({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case 'salesforce':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
            fill="#00A1E0"
          />
          <text x="12" y="14.5" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SF</text>
        </svg>
      )
    case 'hubspot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF7A59"/>
          <circle cx="12" cy="12" r="4" fill="white"/>
          <circle cx="18" cy="8" r="2.5" fill="white"/>
        </svg>
      )
    case 'slack':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#4A154B" />
          <circle cx="8" cy="8" r="2" fill="#E01E5A" />
          <circle cx="16" cy="8" r="2" fill="#2EB67D" />
          <circle cx="16" cy="16" r="2" fill="#ECB22E" />
          <circle cx="8" cy="16" r="2" fill="#36C5F0" />
        </svg>
      )
    case 'segment':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#52BD95" />
          <circle cx="9" cy="9" r="2.5" fill="white"/>
          <circle cx="15" cy="15" r="2.5" fill="white"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2"/>
        </svg>
      )
    case 'stripe':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#635BFF" />
          <text x="12" y="16" fill="white" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">S</text>
        </svg>
      )
    case 'google-analytics':
    case 'analytics':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#F9AB00" />
          <rect x="6" y="12" width="3" height="6" rx="1.5" fill="white"/>
          <rect x="10.5" y="8" width="3" height="10" rx="1.5" fill="white"/>
          <rect x="15" y="5" width="3" height="13" rx="1.5" fill="white"/>
        </svg>
      )
    case 'jira':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0052CC" />
          <path d="M12 5L17 10L12 15L7 10Z" fill="white"/>
          <path d="M12 10L17 15L12 20L7 15Z" fill="#2684FF"/>
        </svg>
      )
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#1E1E1E" />
          <circle cx="9" cy="8" r="2.5" fill="#F24E1E"/>
          <circle cx="15" cy="8" r="2.5" fill="#FF7262"/>
          <circle cx="9" cy="12" r="2.5" fill="#A259FF"/>
          <circle cx="15" cy="12" r="2.5" fill="#1ABCFE"/>
          <circle cx="9" cy="16" r="2.5" fill="#0ACF83"/>
        </svg>
      )
    case 'api':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0F172A" stroke="#334155"/>
          <text x="12" y="15" fill="#10B981" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">API</text>
        </svg>
      )
    default:
      return (
        <div className={`rounded-md bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      )
  }
}
