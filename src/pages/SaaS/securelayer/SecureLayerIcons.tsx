import React from 'react'

export function SecureLayerLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="slLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38BDF8" />
          <stop offset="50%" stop-color="#0284C7" />
          <stop offset="100%" stop-color="#1E3A8A" />
        </linearGradient>
      </defs>
      {/* Outer layered shield */}
      <path
        d="M 18 3 L 31 9 C 31 20 24 28 18 33 C 12 28 5 20 5 9 Z"
        fill="url(#slLogoGrad)"
      />
      {/* Inner dark core */}
      <path
        d="M 18 6.5 L 28 11.5 C 28 20 22 26 18 30 C 14 26 8 20 8 11.5 Z"
        fill="#0F172A"
      />
      {/* Emerald checkmark */}
      <path
        d="M 13 18 L 16.5 21.5 L 23 15"
        stroke="#10B981"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="8" r="2.5" fill="#38BDF8" />
    </svg>
  )
}

export function AwsIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M7 14C5.5 14 4 12.8 4 11C4 9.2 5.5 8 7 8C8.2 8 9.2 8.8 9.6 9.8L9.8 8.2H12V14H9.8L9.6 12.2C9.2 13.2 8.2 14 7 14Z" fill="#FF9900" />
      <path d="M14 8H16.2L17.5 12.2L18.8 8H21L18.8 14H16.2L14 8Z" fill="#FF9900" />
      <path d="M3 18C7.5 20.8 16.5 20.8 21 18" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 16.5L21.5 18L19 19.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AzureIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M13 3L4 18H9L14 7L13 3Z" fill="#0089D6" />
      <path d="M13 3L9 12L15 18H20L13 3Z" fill="#0072C6" />
      <path d="M9 12L4 18H15L13 15L9 12Z" fill="#005B9E" />
    </svg>
  )
}

export function GoogleCloudIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
    </svg>
  )
}

export function OktaIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#007DC1" strokeWidth="4" />
    </svg>
  )
}

export function GitHubIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function GitLabIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.65 14.39L20.15 6.7a.84.84 0 00-1.6 0l-1.95 6H7.4L5.45 6.7a.84.84 0 00-1.6 0L1.35 14.39a1.68 1.68 0 00.61 1.88l10.04 7.3 10.04-7.3a1.68 1.68 0 00.61-1.88z" fill="#E24329" />
      <path d="M12 23.57l4.6-10.87H7.4L12 23.57z" fill="#E24329" />
      <path d="M12 23.57L7.4 12.7H1.35l10.65 10.87z" fill="#FC6D26" />
      <path d="M12 23.57l4.6-10.87h6.05L12 23.57z" fill="#FC6D26" />
      <path d="M1.35 12.7a.84.84 0 01-.29-.89L2.3 8.3a.84.84 0 011.6 0l1.55 4.4H1.35z" fill="#FCA326" />
      <path d="M22.65 12.7a.84.84 0 00.29-.89L21.7 8.3a.84.84 0 00-1.6 0l-1.55 4.4h4.1z" fill="#FCA326" />
    </svg>
  )
}

export function SlackIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.04 15.54a2.22 2.22 0 0 1-2.22-2.22c0-1.23.99-2.22 2.22-2.22h2.22v2.22c0 1.23-.99 2.22-2.22 2.22zm3.33 0a2.22 2.22 0 0 1 2.22-2.22c1.23 0 2.22.99 2.22 2.22v5.55a2.22 2.22 0 0 1-2.22 2.22 2.22 2.22 0 0 1-2.22-2.22v-5.55z" fill="#E01E5A" />
      <path d="M8.37 5.04a2.22 2.22 0 0 1 2.22-2.22c1.23 0 2.22.99 2.22 2.22v2.22h-2.22a2.22 2.22 0 0 1-2.22-2.22zm0 3.33a2.22 2.22 0 0 1 2.22 2.22c0 1.23-.99 2.22-2.22 2.22H2.82a2.22 2.22 0 0 1-2.22-2.22c0-1.23.99-2.22 2.22-2.22h5.55z" fill="#36C5F0" />
      <path d="M18.87 8.37a2.22 2.22 0 0 1 2.22 2.22c0 1.23-.99 2.22-2.22 2.22h-2.22V10.6c0-1.23.99-2.23 2.22-2.23zm-3.33 0a2.22 2.22 0 0 1-2.22 2.22 2.22 2.22 0 0 1-2.22-2.22V2.82a2.22 2.22 0 0 1 2.22-2.22 2.22 2.22 0 0 1 2.22 2.22v5.55z" fill="#2EB67D" />
      <path d="M15.54 18.87a2.22 2.22 0 0 1-2.22 2.22 2.22 2.22 0 0 1-2.22-2.22v-2.22h2.22c1.23 0 2.22.99 2.22 2.22zm0-3.33a2.22 2.22 0 0 1-2.22-2.22c0-1.23.99-2.22 2.22-2.22h5.55a2.22 2.22 0 0 1 2.22 2.22c0 1.23-.99 2.22-2.22 2.22h-5.55z" fill="#ECB22E" />
    </svg>
  )
}

export function JiraIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.53 2c0 5.26-4.27 9.53-9.53 9.53v.94c5.26 0 9.53 4.27 9.53 9.53h.94c0-5.26 4.27-9.53 9.53-9.53v-.94c-5.26 0-9.53-4.27-9.53-9.53h-.94z" fill="#0052CC" />
    </svg>
  )
}

export function HubSpotIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M18.8 8.6V6.1C19.7 5.8 20.3 5 20.3 4c0-1.3-1-2.3-2.3-2.3-1.3 0-2.3 1-2.3 2.3 0 1 .6 1.8 1.5 2.1v2.5c-.9.3-1.7.8-2.3 1.5l-5.6-4.4c.1-.3.1-.5.1-.8 0-1.7-1.4-3.1-3.1-3.1S3.3 3.2 3.3 4.9s1.4 3.1 3.1 3.1c.6 0 1.1-.2 1.6-.4l5.5 4.3c-.4.8-.6 1.7-.6 2.6 0 2.2 1.4 4.1 3.4 4.8v2.3c-.9.3-1.5 1.1-1.5 2.1 0 1.3 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-1-.6-1.8-1.5-2.1v-2.3c2.4-.8 4.1-3.1 4.1-5.7.1-2.6-1.4-4.8-3.2-5.7z" fill="#FF7A59" />
    </svg>
  )
}

export function AsanaIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7.5" r="4.5" fill="#F06A6A" />
      <circle cx="6" cy="16.5" r="4.5" fill="#F06A6A" />
      <circle cx="18" cy="16.5" r="4.5" fill="#F06A6A" />
    </svg>
  )
}

export function JamfIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#007AB8" />
      <text x="12" y="16" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle">jamf</text>
    </svg>
  )
}

export function Soc2Badge({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill="#0284C7" stroke="#38BDF8" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="24" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="32" y="28" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">SOC</text>
      <text x="32" y="42" fill="#38BDF8" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">Type II</text>
    </svg>
  )
}

export function Iso27001Badge({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" />
      <text x="32" y="28" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">ISO</text>
      <text x="32" y="42" fill="#93C5FD" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">27001</text>
    </svg>
  )
}

export function HipaaBadge({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" fill="#065F46" stroke="#34D399" strokeWidth="2.5" />
      <text x="32" y="28" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle">HIPAA</text>
      <text x="32" y="42" fill="#6EE7B7" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle">READY</text>
    </svg>
  )
}
