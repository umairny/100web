import React from "react";

export function InvoicePilotLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
      {/* Origami Airplane Body */}
      <polygon points="12,18 7,27 28,10" fill="#0284C7" />
      <polygon points="12,18 28,10 10,30" fill="#38BDF8" />
      <polygon points="8,20 28,10 15,7" fill="#10B981" />
      {/* Dollar dot */}
      <circle cx="23" cy="14" r="2" fill="#FFFFFF" />
    </svg>
  );
}

export function CalendarGearIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="6" y="10" width="36" height="32" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5" />
      <line x1="6" y1="18" x2="42" y2="18" stroke="#3B82F6" strokeWidth="2.5" />
      <line x1="16" y1="6" x2="16" y2="12" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="6" x2="32" y2="12" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
      {/* Small Gear */}
      <circle cx="32" cy="30" r="6" fill="#FFFFFF" stroke="#059669" strokeWidth="2" />
      <path d="M32 22V24M32 36V38M24 30H26M38 30H40" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LayeredCardsIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <polygon points="24,8 42,16 24,24 6,16" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M6 24L24 32L42 24" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 32L24 40L42 32" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobalCardIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="6" y="12" width="36" height="26" rx="6" fill="#ECFDF5" stroke="#059669" strokeWidth="2.5" />
      <line x1="6" y1="20" x2="42" y2="20" stroke="#059669" strokeWidth="2.5" />
      <rect x="12" y="27" width="8" height="5" rx="1.5" fill="#10B981" />
      <circle cx="34" cy="29" r="3" fill="#3B82F6" />
      <circle cx="30" cy="29" r="3" fill="#F59E0B" />
    </svg>
  );
}

export function StripeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#635BFF">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.934 15.632.4 12.356.4 6.84.4 2.875 3.327 2.875 8.165c0 4.793 4.106 6.137 7.78 7.42 2.766.974 3.704 1.77 3.704 2.81 0 1.077-.96 1.666-2.508 1.666-2.423 0-5.26-1.127-7.14-2.148L3.81 23.334c2.083.99 5.37 1.666 8.79 1.666 5.86 0 9.873-2.868 9.873-7.925 0-4.996-3.957-6.284-8.497-7.925z" />
    </svg>
  );
}

export function PayPalLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M7 21L9.5 4h6.5c3 0 5 1.5 5 4.5 0 3.5-2.5 6-6 6h-2.5L10.5 21H7z" fill="#003087" />
      <path d="M9.5 17.5L11 6h5c2.5 0 4.5 1.5 4.5 4 0 3.2-2.2 5.5-5.5 5.5H12l-1.5 6H9.5l1-4z" fill="#0079C1" />
      <path d="M8.5 14.5L10 3.5h5.5c2.5 0 4.5 1.5 4.5 4 0 3.2-2.2 5.5-5.5 5.5H11l-1.5 6H8.5l1-4.5z" fill="#00457C" opacity="0.3" />
    </svg>
  );
}

export function QuickBooksLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#2CA01C] flex items-center justify-center font-bold text-white text-xs ${className}`}>
      qb
    </div>
  );
}

export function XeroLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#13B5EA] flex items-center justify-center font-bold text-white text-xs ${className}`}>
      xero
    </div>
  );
}

export function NetSuiteLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`rounded bg-[#1A365D] flex items-center justify-center font-bold text-white text-[10px] ${className}`}>
      NS
    </div>
  );
}

export function PciDssBadge({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
    </svg>
  );
}
