import React from "react";

export function LaunchGridLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
      {/* Rocket fuselage */}
      <path
        d="M20 9C26 9 27 15 27 19C24 20 22 19 19 16C16 13 15 11 20 9Z"
        fill="#2563EB"
      />
      <circle cx="21" cy="13" r="1.75" fill="#FFFFFF" />
      {/* Rocket wings */}
      <path d="M14 20L11 25L16 23L17 20" fill="#3B82F6" />
      <path d="M22 25L25 28L23 23" fill="#3B82F6" />
      {/* Rocket exhaust flame */}
      <path d="M13 24L9 28L15 26" fill="#F59E0B" />
      <path d="M12 25L10 27L14 26" fill="#EF4444" />
    </svg>
  );
}

export function SlackLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M6 15a2 2 0 1 1-2-2h2v2zM7 15a2 2 0 0 1 2-2h5a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2z" fill="#E01E5A" />
      <path d="M9 6a2 2 0 1 1 2-2v2H9zM9 7a2 2 0 0 1 2 2v5a2 2 0 0 1-4 0V9a2 2 0 0 1 2-2z" fill="#36C5F0" />
      <path d="M18 9a2 2 0 1 1 2 2h-2V9zM17 9a2 2 0 0 1-2 2H10a2 2 0 1 1 0-4h5a2 2 0 0 1 2 2z" fill="#2EB67D" />
      <path d="M15 18a2 2 0 1 1-2 2v-2h2zM15 17a2 2 0 0 1-2-2v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2z" fill="#ECB22E" />
    </svg>
  );
}

export function GitHubLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function JiraLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.53 2c0 5.25-4.28 9.53-9.53 9.53a9.53 9.53 0 0 0 9.53 9.53c5.25 0 9.53-4.28 9.53-9.53A9.53 9.53 0 0 0 11.53 2z" fill="#0052CC" />
      <path d="M11.53 6.77A4.77 4.77 0 0 0 6.77 11.53a4.77 4.77 0 0 0 4.76 4.77 4.77 4.77 0 0 0 4.77-4.77 4.77 4.77 0 0 0-4.77-4.76z" fill="#2684FF" />
    </svg>
  );
}

export function TrelloLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#0079BF" />
      <rect x="4" y="4" width="6.5" height="13" rx="1.5" fill="#FFFFFF" />
      <rect x="13.5" y="4" width="6.5" height="8.5" rx="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function GoogleCalendarLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="19" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="2" y="3" width="20" height="6" rx="3" fill="#4285F4" />
      <circle cx="7" cy="3" r="1.5" fill="#34A853" />
      <circle cx="17" cy="3" r="1.5" fill="#EA4335" />
      <text x="12" y="18" fill="#1E293B" fontFamily="sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">
        31
      </text>
    </svg>
  );
}

export function ZoomLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#2D8CFF" />
      <rect x="4" y="8" width="10" height="8" rx="2" fill="#FFFFFF" />
      <path d="M14 10.5L19 7V17L14 13.5V10.5Z" fill="#FFFFFF" />
    </svg>
  );
}

export function SalesforceLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M10 5.5a4.5 4.5 0 0 1 4.3 3.1 3.5 3.5 0 0 1 3.2 2.4 4 4 0 0 1 1 7.5H5a4 4 0 0 1-1-7.8 4 4 0 0 1 3.5-5 4.5 4.5 0 0 1 2.5-.2z"
        fill="#00A1E0"
      />
    </svg>
  );
}

export function NetflixBrandLogo({ className = "h-6" }: { className?: string }) {
  return (
    <span className={`font-black tracking-widest text-[#E50914] ${className}`}>
      NETFLIX
    </span>
  );
}

export function SpotifyBrandLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 font-bold text-[#1DB954] ${className}`}>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.624.624 0 1 1-.277-1.216c3.811-.871 7.077-.497 9.712 1.116a.625.625 0 0 1 .207.857zm1.225-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.456-1.492c3.633-1.103 8.147-.568 11.236 1.33a.78.78 0 0 1 .257 1.071zm.105-2.835C14.692 8.94 8.68 8.74 5.21 9.794a.936.936 0 0 1-.546-1.791c3.996-1.214 10.638-.98 14.492 1.31a.936.936 0 0 1-.94 1.621l-.3-.068z" />
      </svg>
      <span>Spotify</span>
    </div>
  );
}

export function AmazonBrandLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center font-black tracking-tight text-[#111827] ${className}`}>
      <span>amazon</span>
      <span className="text-[#FF9900] text-sm ml-0.5">smile</span>
    </div>
  );
}
