import React from "react";

export function RecruitFlowLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
      {/* Curved modern 'R' ribbon */}
      <path
        d="M10 8H20C24 8 27 11 27 15C27 19 24 22 20 22H15V28H10V8Z"
        fill="#2563EB"
      />
      <circle cx="17" cy="15" r="3" fill="#FFFFFF" />
      <path
        d="M18 20L25 28H19L14 22H18Z"
        fill="#1D4ED8"
      />
    </svg>
  );
}

export function GSuiteLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-bold text-slate-700 text-sm ${className}`}>
      <span className="text-red-500 font-extrabold">G</span>
      <span className="text-slate-700">Suite</span>
    </div>
  );
}

export function MicrosoftBrandLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 font-bold text-slate-700 text-xs ${className}`}>
      <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
        <div className="bg-[#F25022] w-1.5 h-1.5" />
        <div className="bg-[#7FBA00] w-1.5 h-1.5" />
        <div className="bg-[#00A4EF] w-1.5 h-1.5" />
        <div className="bg-[#FFB900] w-1.5 h-1.5" />
      </div>
      <span>Microsoft</span>
    </div>
  );
}

export function SlackBrandLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-bold text-slate-800 text-xs ${className}`}>
      <span className="text-[#E01E5A] font-black text-sm">#</span>
      <span>slack</span>
    </div>
  );
}

export function LinkedInBrandLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center font-bold text-[#0A66C2] text-xs ${className}`}>
      <span>Linked</span>
      <span className="bg-[#0A66C2] text-white px-1 py-0.5 rounded text-[10px] ml-0.5 font-bold">in</span>
    </div>
  );
}

export function ZipRecruiterLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-bold text-[#1F8E38] text-xs ${className}`}>
      <span className="font-extrabold text-sm">✓</span>
      <span>ZipRecruiter</span>
    </div>
  );
}

export function GlassdoorLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`font-black text-[#0CAA41] text-xs tracking-tight ${className}`}>
      glassdoor
    </div>
  );
}

export function ZoomBrandLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`font-black text-[#2D8CFF] text-xs tracking-tight ${className}`}>
      zoom
    </div>
  );
}
