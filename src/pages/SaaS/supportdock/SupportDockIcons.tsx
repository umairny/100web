import React from 'react'

export function SupportDockLogo({ className = 'w-7 h-7', showText = true, textClass = 'text-xl' }: { className?: string; showText?: boolean; textClass?: string }) {
  return (
    <div className="flex items-center gap-2.5 font-bold tracking-tight">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Lighthouse Base Platform */}
          <rect x="8" y="30" width="20" height="3" rx="1.5" fill="#0F2942" />
          
          {/* Lighthouse Tower Structure */}
          <path d="M12 30 L14 14 L22 14 L24 30 Z" fill="#0F2942" />
          
          {/* White/Mint Tower Stripes */}
          <path d="M13.2 24 L22.8 24 L22.3 20 L13.7 20 Z" fill="#10B981" />
          <path d="M14.2 16 L21.8 16 L21.5 14 L14.5 14 Z" fill="#E2E8F0" />

          {/* Lantern Room & Dome */}
          <rect x="13" y="10" width="10" height="4" rx="1" fill="#0F2942" />
          <path d="M14 10 C 14 6, 22 6, 22 10 Z" fill="#10B981" />

          {/* Light Beams Radiating */}
          <path d="M13 12 L2 8 L4 16 Z" fill="#34D399" opacity="0.4" />
          <path d="M23 12 L34 8 L32 16 Z" fill="#34D399" opacity="0.4" />
        </svg>
      </div>
      {showText && (
        <span className={`font-black tracking-tight text-slate-900 ${textClass}`}>
          Support<span className="text-[#10B981]">Dock</span> <span className="bg-[#10B981] text-white text-[10px] uppercase font-black px-1.5 py-0.5 rounded ml-1">AI</span>
        </span>
      )}
    </div>
  )
}

export function SupportPartnerIcon({ name, className = 'w-8 h-8' }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case 'zendesk':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#03363D"/>
          <path d="M8 8 L18 8 L8 24 L18 24 Z" fill="#FFFFFF"/>
          <circle cx="21" cy="11" r="3" fill="#FFFFFF"/>
          <circle cx="21" cy="21" r="3" fill="#10B981"/>
        </svg>
      )
    case 'salesforce':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#00A1E0"/>
          <path d="M23.35 15.04C22.67 11.59 19.64 9 16 9C13.11 9 10.6 10.64 9.35 13.04C6.34 13.36 4 15.91 4 19C4 22.31 6.69 25 10 25H23C25.76 25 28 22.76 28 20C28 17.36 25.95 15.22 23.35 15.04Z" fill="white"/>
        </svg>
      )
    case 'hubspot':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FF7A59"/>
          <circle cx="16" cy="16" r="5" fill="white"/>
          <circle cx="23" cy="11" r="3" fill="white"/>
          <circle cx="9" cy="16" r="2.5" fill="white"/>
        </svg>
      )
    case 'slack':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#4A154B"/>
          <circle cx="11" cy="11" r="2.5" fill="#E01E5A"/>
          <circle cx="21" cy="11" r="2.5" fill="#2EB67D"/>
          <circle cx="21" cy="21" r="2.5" fill="#ECB22E"/>
          <circle cx="11" cy="21" r="2.5" fill="#36C5F0"/>
        </svg>
      )
    case 'shopify':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#95BF47"/>
          <path d="M19.5 8.5L14 10L12.5 13.5L12 16L19 14.5L20 8.5H19.5Z" fill="#5E8E3E"/>
          <path d="M12.5 13.5L10 14L8 23.5L18 26L24 23.5L22 13.5L19 14.5L12.5 13.5Z" fill="white"/>
          <text x="16" y="21" font-family="sans-serif" font-size="9" font-weight="900" fill="#95BF47" text-anchor="middle">S</text>
        </svg>
      )
    case 'intercom':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#1F8CEB"/>
          <rect x="8" y="10" width="3" height="12" rx="1.5" fill="white"/>
          <rect x="13" y="8" width="3" height="16" rx="1.5" fill="white"/>
          <rect x="18" y="8" width="3" height="16" rx="1.5" fill="white"/>
          <rect x="23" y="10" width="3" height="12" rx="1.5" fill="white"/>
        </svg>
      )
    case 'gmail':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
          <path d="M6 9V23H10V14L16 19L22 14V23H26V9L16 16.5L6 9Z" fill="#EA4335"/>
          <path d="M6 9L16 16.5L10 14V23H6V9Z" fill="#4285F4"/>
          <path d="M26 9L16 16.5L22 14V23H26V9Z" fill="#34A853"/>
        </svg>
      )
    case 'jira':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#0052CC"/>
          <path d="M16 8L22 14L16 20L10 14Z" fill="white"/>
          <path d="M16 14L22 20L16 26L10 20Z" fill="#2684FF"/>
        </svg>
      )
    default:
      return (
        <div className={`rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      )
  }
}
