import React from 'react'

export function FlowPilotLogo({ className = 'w-7 h-7', showText = true, textClass = 'text-xl' }: { className?: string; showText?: boolean; textClass?: string }) {
  return (
    <div className="flex items-center gap-2.5 font-bold tracking-tight">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Calming dual flow ribbon */}
          <path
            d="M6 24C10 12 20 4 32 3C28 16 19 23 8 26C6 26.5 5 25.5 6 24Z"
            fill="url(#flowGrad1)"
          />
          <path
            d="M10 29C17 18 24 13 34 11C30 22 22 28 12 31C10 31.5 9 30.5 10 29Z"
            fill="url(#flowGrad2)"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="flowGrad1" x1="6" y1="3" x2="32" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DD4BF" />
              <stop offset="1" stopColor="#0D9488" />
            </linearGradient>
            <linearGradient id="flowGrad2" x1="10" y1="11" x2="34" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <span className={`font-black tracking-tight text-slate-900 ${textClass}`}>
          Flow<span className="text-[#0D9488]">Pilot</span>
        </span>
      )}
    </div>
  )
}

export function IntegrationIcon({ name, className = 'w-7 h-7' }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case 'salesforce':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
            fill="#00A1E0"
          />
          <text x="12" y="14" fill="white" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SF</text>
        </svg>
      )
    case 'pipedrive':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#26292C" />
          <path d="M12 6C8.69 6 6 8.69 6 12C6 14.7 7.78 16.98 10.25 17.72V12.75H8.75V11.25H10.25V9.75C10.25 8.23 11.16 7.5 12.44 7.5C13.05 7.5 13.57 7.55 13.73 7.57V9.06H12.79C12.05 9.06 11.91 9.41 11.91 9.93V11.25H13.62L13.39 12.75H11.91V17.95C15.35 17.47 18 14.54 18 11C18 7.69 15.31 6 12 6Z" fill="#00D26A" />
        </svg>
      )
    case 'outlook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0078D4" />
          <path d="M14 6H19V18H14V6Z" fill="#28A8EA" />
          <circle cx="8" cy="12" r="4.5" fill="white" />
          <text x="8" y="14.5" fill="#0078D4" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">O</text>
        </svg>
      )
    case 'gmail':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#FFFFFF" stroke="#E2E8F0" />
          <path d="M4 6V18H7V10.5L12 14.5L17 10.5V18H20V6L12 12.5L4 6Z" fill="#EA4335" />
          <path d="M4 6L12 12.5L7 10.5V18H4V6Z" fill="#4285F4" />
          <path d="M20 6L12 12.5L17 10.5V18H20V6Z" fill="#34A853" />
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
    case 'zoom':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#2D8CFF" />
          <rect x="5" y="8" width="9" height="8" rx="2" fill="white" />
          <path d="M14 10.5L18.5 7.5V16.5L14 13.5V10.5Z" fill="white" />
        </svg>
      )
    case 'teams':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#5059C9" />
          <circle cx="16" cy="9" r="2.5" fill="white" opacity="0.8" />
          <rect x="13.5" y="12.5" width="5" height="5" rx="1.5" fill="white" opacity="0.8" />
          <rect x="5" y="7" width="9" height="10" rx="2" fill="#7B83EB" />
          <text x="9.5" y="14" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">T</text>
        </svg>
      )
    default:
      return (
        <div className={`rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      )
  }
}
