const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'signal');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Quantum Design Tokens Specimen (1200 x 700)
const quantumTokensSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="tk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050b14"/>
      <stop offset="50%" stop-color="#030712"/>
      <stop offset="100%" stop-color="#020409"/>
    </linearGradient>
    <radialGradient id="tk-glow" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="tk-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="700" fill="url(#tk-bg)"/>
  <rect width="1200" height="700" fill="url(#tk-glow)"/>

  <!-- Blueprint Grid Lines -->
  <g stroke="#0e3b5e" stroke-width="1" stroke-dasharray="3 3" opacity="0.4">
    <line x1="60" y1="0" x2="60" y2="700"/>
    <line x1="1140" y1="0" x2="1140" y2="700"/>
    <line x1="60" y1="120" x2="1140" y2="120"/>
    <line x1="60" y1="420" x2="1140" y2="420"/>
    <line x1="600" y1="120" x2="600" y2="640"/>
  </g>

  <!-- Header info -->
  <text x="80" y="70" font-family="'Space Grotesk', -apple-system, sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="1">QUANTUM LEAP / SYSTEM SPECIFICATION</text>
  <text x="80" y="95" font-family="monospace" font-size="12" fill="#38bdf8" letter-spacing="2">TOKEN TAXONOMY &amp; MATHEMATICAL SCALING MATRIX — V2.4</text>
  <text x="1000" y="80" font-family="monospace" font-size="12" fill="#64748b" text-anchor="end">SYS-ID: QNTM-8890</text>

  <!-- Left: Color Ramp & Tokens -->
  <g transform="translate(80, 150)">
    <text x="0" y="0" font-family="monospace" font-size="12" fill="#94a3b8" letter-spacing="1.5">01 // COLOR TOKEN SYSTEM</text>
    
    <!-- Color Swatches -->
    <g transform="translate(0, 20)">
      <rect x="0" y="0" width="80" height="60" rx="8" fill="#00f0ff"/>
      <text x="0" y="80" font-family="monospace" font-size="10" fill="#f8fafc">CYAN-500</text>
      <text x="0" y="95" font-family="monospace" font-size="9" fill="#64748b">#00F0FF</text>

      <rect x="95" y="0" width="80" height="60" rx="8" fill="#0284c7"/>
      <text x="95" y="80" font-family="monospace" font-size="10" fill="#f8fafc">SKY-600</text>
      <text x="95" y="95" font-family="monospace" font-size="9" fill="#64748b">#0284C7</text>

      <rect x="190" y="0" width="80" height="60" rx="8" fill="#1e293b"/>
      <text x="190" y="80" font-family="monospace" font-size="10" fill="#f8fafc">SLATE-800</text>
      <text x="190" y="95" font-family="monospace" font-size="9" fill="#64748b">#1E293B</text>

      <rect x="285" y="0" width="80" height="60" rx="8" fill="#030712" stroke="#334155" stroke-width="1"/>
      <text x="285" y="80" font-family="monospace" font-size="10" fill="#f8fafc">CORE-DARK</text>
      <text x="285" y="95" font-family="monospace" font-size="9" fill="#64748b">#030712</text>

      <rect x="380" y="0" width="80" height="60" rx="8" fill="#f8fafc"/>
      <text x="380" y="80" font-family="monospace" font-size="10" fill="#f8fafc">PURE-LIGHT</text>
      <text x="380" y="95" font-family="monospace" font-size="9" fill="#64748b">#F8FAFC</text>
    </g>

    <!-- Spacing scale -->
    <g transform="translate(0, 150)">
      <text x="0" y="0" font-family="monospace" font-size="12" fill="#94a3b8" letter-spacing="1.5">02 // SPATIAL INTERVALS (8PT BASE)</text>
      <g transform="translate(0, 20)">
        <rect x="0" y="0" width="16" height="40" rx="4" fill="#0284c7"/>
        <text x="0" y="55" font-family="monospace" font-size="9" fill="#64748b">4px</text>

        <rect x="30" y="0" width="24" height="40" rx="4" fill="#0284c7"/>
        <text x="30" y="55" font-family="monospace" font-size="9" fill="#64748b">8px</text>

        <rect x="70" y="0" width="40" height="40" rx="4" fill="#0284c7"/>
        <text x="70" y="55" font-family="monospace" font-size="9" fill="#64748b">16px</text>

        <rect x="130" y="0" width="60" height="40" rx="4" fill="#0ea5e9"/>
        <text x="130" y="55" font-family="monospace" font-size="9" fill="#64748b">24px</text>

        <rect x="210" y="0" width="80" height="40" rx="4" fill="#38bdf8"/>
        <text x="210" y="55" font-family="monospace" font-size="9" fill="#64748b">32px</text>

        <rect x="310" y="0" width="120" height="40" rx="4" fill="#00f0ff"/>
        <text x="310" y="55" font-family="monospace" font-size="9" fill="#64748b">48px</text>
      </g>
    </g>
  </g>

  <!-- Right: Logo Geometry Construction -->
  <g transform="translate(640, 150)">
    <text x="0" y="0" font-family="monospace" font-size="12" fill="#94a3b8" letter-spacing="1.5">03 // GEOMETRIC MARK CONSTRUCTION</text>
    
    <g transform="translate(40, 30)">
      <!-- Construction Circle & Angles -->
      <circle cx="200" cy="180" r="140" fill="none" stroke="#0e3b5e" stroke-width="1.5" stroke-dasharray="6 4"/>
      <circle cx="200" cy="180" r="90" fill="none" stroke="#0284c7" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="20" y1="180" x2="380" y2="180" stroke="#0e3b5e" stroke-width="1"/>
      <line x1="200" y1="20" x2="200" y2="340" stroke="#0e3b5e" stroke-width="1"/>
      <line x1="60" y1="60" x2="340" y2="300" stroke="#0e3b5e" stroke-width="1" stroke-dasharray="4 4"/>
      <line x1="340" y1="60" x2="60" y2="300" stroke="#0e3b5e" stroke-width="1" stroke-dasharray="4 4"/>

      <!-- Quantum Isometric Mark -->
      <g transform="translate(200, 180)">
        <polygon points="-75,-25 0,-70 75,-25 45,-8 0,-35 -45,-8" fill="url(#tk-cyan)"/>
        <polygon points="-75,25 0,70 75,25 45,8 0,35 -45,8" fill="#0284c7"/>
        <polygon points="-25,-75 -70,0 -25,75 -8,45 -35,0 -8,-45" fill="#38bdf8" opacity="0.8"/>
        <polygon points="25,-75 70,0 25,75 8,45 35,0 8,-45" fill="#00f0ff"/>
        <circle cx="0" cy="0" r="14" fill="#ffffff"/>
      </g>

      <!-- Dimension Callouts -->
      <text x="350" y="170" font-family="monospace" font-size="10" fill="#38bdf8">R=140px</text>
      <text x="210" y="32" font-family="monospace" font-size="10" fill="#38bdf8">θ=45.0°</text>
      <text x="30" y="360" font-family="monospace" font-size="11" fill="#64748b">MATHEMATICALLY RATIO-LOCKED RECEPTIVE GLYPH</text>
    </g>
  </g>

  <!-- Bottom Panel: Typography Ramp -->
  <g transform="translate(80, 480)">
    <text x="0" y="0" font-family="monospace" font-size="12" fill="#94a3b8" letter-spacing="1.5">04 // TYPOGRAPHIC HIERARCHY (SPACE GROTESK + INTER)</text>
    
    <g transform="translate(0, 30)">
      <text x="0" y="30" font-family="'Space Grotesk', sans-serif" font-size="36" font-weight="700" fill="#ffffff">Quantum Leap Display 36</text>
      <text x="560" y="30" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="600" fill="#38bdf8">Section Heading 22</text>
      <text x="860" y="30" font-family="sans-serif" font-size="14" fill="#94a3b8">Body Regular 14 / Inter Medium / 160% line height</text>

      <text x="0" y="70" font-family="monospace" font-size="13" fill="#00f0ff">MONOSPACE TELEMETRY 13 / 0.15em TRACKING / REAL-TIME LABELS</text>
      <text x="560" y="70" font-family="monospace" font-size="11" fill="#64748b">ACCENT-MICRO 11 / UPPERCASE DATA DENSITY</text>
    </g>
  </g>
</svg>
`;

// 2. Quantum Stationery & Investor Deck (1200 x 700)
const quantumStationerySvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="st-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="100%" stop-color="#0a121e"/>
    </linearGradient>
    <filter id="st-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
    <filter id="st-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="st-foil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="700" fill="url(#st-bg)"/>

  <!-- Subtle ambient grid -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.2">
    <line x1="0" y1="175" x2="1200" y2="175"/>
    <line x1="0" y1="350" x2="1200" y2="350"/>
    <line x1="0" y1="525" x2="1200" y2="525"/>
    <line x1="300" y1="0" x2="300" y2="700"/>
    <line x1="600" y1="0" x2="600" y2="700"/>
    <line x1="900" y1="0" x2="900" y2="700"/>
  </g>

  <!-- Large Investor Deck Folder (Left) -->
  <g transform="translate(100, 100)" filter="url(#st-shadow)">
    <!-- Folder body -->
    <rect width="440" height="500" rx="16" fill="#070e1a" stroke="#1e293b" stroke-width="2"/>
    <rect x="20" y="20" width="400" height="460" rx="10" fill="#091322" stroke="#0ea5e9" stroke-width="1" opacity="0.3"/>
    
    <!-- Top Notch & Label -->
    <rect x="40" y="40" width="120" height="24" rx="6" fill="#0284c7" opacity="0.2"/>
    <text x="50" y="56" font-family="monospace" font-size="10" fill="#38bdf8" font-weight="700" letter-spacing="1.5">INVESTOR CONFIDENTIAL</text>

    <!-- Folder Cover Geometry -->
    <g transform="translate(220, 220)">
      <circle cx="0" cy="0" r="70" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="8 4"/>
      <polygon points="-40,-15 0,-40 40,-15 25,-4 0,-20 -25,-4" fill="url(#st-foil)" filter="url(#st-glow)"/>
      <polygon points="-40,15 0,40 40,15 25,4 0,20 -25,4" fill="#0284c7"/>
      <circle cx="0" cy="0" r="8" fill="#ffffff"/>
    </g>

    <text x="220" y="340" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="2">QUANTUM LEAP</text>
    <text x="220" y="365" font-family="monospace" font-size="11" fill="#64748b" text-anchor="middle" letter-spacing="2">SERIES B INSTITUTIONAL MEMORANDUM</text>
    <text x="220" y="430" font-family="monospace" font-size="9" fill="#0284c7" text-anchor="middle">AUTHORIZED RECIPIENT // ASSET #0049</text>
  </g>

  <!-- Business Cards (Right Stack) -->
  <!-- Card 1: Front (Obverse) -->
  <g transform="translate(620, 120) rotate(-6)" filter="url(#st-shadow)">
    <rect width="400" height="230" rx="12" fill="#080f1c" stroke="#334155" stroke-width="1.5"/>
    <rect x="0" y="0" width="400" height="230" rx="12" fill="none" stroke="url(#st-foil)" stroke-width="1" opacity="0.4"/>
    
    <!-- Logo Monogram Hot Stamped -->
    <g transform="translate(50, 60)">
      <polygon points="-20,-8 0,-20 20,-8 12,-2 0,-10 -12,-2" fill="url(#st-foil)"/>
      <polygon points="-20,8 0,20 20,8 12,2 0,10 -12,2" fill="#0284c7"/>
    </g>

    <text x="80" y="66" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#ffffff" letter-spacing="1">QUANTUM LEAP</text>
    
    <text x="50" y="150" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#ffffff">DR. ARLO CHEN</text>
    <text x="50" y="170" font-family="monospace" font-size="10" fill="#38bdf8" letter-spacing="1">CHIEF ARCHITECT &amp; CO-FOUNDER</text>
    <text x="50" y="195" font-family="monospace" font-size="9" fill="#64748b">a.chen@quantumleap.network  •  +1 (415) 890-2210</text>
  </g>

  <!-- Card 2: Back (Reverse) -->
  <g transform="translate(680, 320) rotate(8)" filter="url(#st-shadow)">
    <rect width="400" height="230" rx="12" fill="#050a14" stroke="#0ea5e9" stroke-width="1.5"/>
    <!-- Giant embossed watermark monogram -->
    <g transform="translate(200, 115) scale(2.2)">
      <polygon points="-20,-8 0,-20 20,-8 12,-2 0,-10 -12,-2" fill="none" stroke="#0ea5e9" stroke-width="1.5" opacity="0.3"/>
      <polygon points="-20,8 0,20 20,8 12,2 0,10 -12,2" fill="none" stroke="#0ea5e9" stroke-width="1.5" opacity="0.3"/>
    </g>
    <text x="200" y="185" font-family="monospace" font-size="11" fill="#38bdf8" text-anchor="middle" letter-spacing="3">DECISIVE LIQUIDITY SYSTEMS</text>
    <text x="200" y="205" font-family="monospace" font-size="9" fill="#475569" text-anchor="middle">WWW.QUANTUMLEAP.NETWORK</text>
  </g>

  <!-- Metal VIP Security NFC Keycard (Bottom Center) -->
  <g transform="translate(480, 480) rotate(-2)" filter="url(#st-shadow)">
    <rect width="260" height="150" rx="10" fill="#02050b" stroke="#00f0ff" stroke-width="1.5"/>
    <rect x="15" y="15" width="230" height="120" rx="6" fill="none" stroke="#1e293b" stroke-width="1"/>
    
    <!-- NFC chip glyph -->
    <rect x="30" y="30" width="36" height="28" rx="4" fill="#0ea5e9" opacity="0.3" stroke="#38bdf8" stroke-width="1"/>
    <text x="48" y="48" font-family="monospace" font-size="8" fill="#ffffff" text-anchor="middle">RFID</text>

    <text x="30" y="105" font-family="monospace" font-size="11" fill="#f8fafc" font-weight="700" letter-spacing="2">KEY // 0844-AX</text>
    <text x="30" y="122" font-family="monospace" font-size="9" fill="#38bdf8">LEVEL 5 ACCESS TOKEN</text>
  </g>
</svg>
`;

// 3. Synapse AI Brand Identity (Case Study 3 - 1200 x 720)
const synapseBrandSvg = `
<svg width="1200" height="720" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sy-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="60%" stop-color="#060b18"/>
      <stop offset="100%" stop-color="#02040a"/>
    </linearGradient>
    <linearGradient id="sy-violet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <radialGradient id="sy-glow" cx="30%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <filter id="sy-filter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <rect width="1200" height="720" fill="url(#sy-bg)"/>
  <rect width="1200" height="720" fill="url(#sy-glow)"/>

  <!-- Header -->
  <g transform="translate(80, 60)">
    <text x="0" y="0" font-family="monospace" font-size="11" fill="#a855f7" letter-spacing="3">CASE STUDY 03 // ENTERPRISE AI &amp; NEURAL SYSTEMS</text>
    <text x="0" y="32" font-family="'Space Grotesk', sans-serif" font-size="32" font-weight="800" fill="#ffffff" letter-spacing="1">PROJECT: SYNAPSE INTELLIGENCE</text>
  </g>

  <!-- Left Card: Neural Hexagon Brandmark & Construction -->
  <g transform="translate(80, 140)" filter="url(#sy-filter)">
    <rect width="480" height="480" rx="16" fill="#080e1e" stroke="#1e293b" stroke-width="1.5"/>
    
    <!-- Mathematical grid -->
    <g stroke="#1e293b" stroke-width="1" opacity="0.4" stroke-dasharray="4 4">
      <circle cx="240" cy="220" r="140" fill="none"/>
      <circle cx="240" cy="220" r="80" fill="none"/>
      <line x1="240" y1="40" x2="240" y2="400"/>
      <line x1="60" y1="220" x2="420" y2="220"/>
    </g>

    <!-- Glowing Hexagonal Neural Monogram -->
    <g transform="translate(240, 220)">
      <!-- Outer Hex Nodes -->
      <polygon points="0,-100 86,-50 86,50 0,100 -86,50 -86,-50" fill="none" stroke="url(#sy-violet)" stroke-width="3"/>
      
      <!-- Inner Synapse Network -->
      <line x1="0" y1="-100" x2="0" y2="0" stroke="#a855f7" stroke-width="2"/>
      <line x1="86" y1="-50" x2="0" y2="0" stroke="#6366f1" stroke-width="2"/>
      <line x1="86" y1="50" x2="0" y2="0" stroke="#06b6d4" stroke-width="2"/>
      <line x1="0" y1="100" x2="0" y2="0" stroke="#06b6d4" stroke-width="2"/>
      <line x1="-86" y1="50" x2="0" y2="0" stroke="#6366f1" stroke-width="2"/>
      <line x1="-86" y1="-50" x2="0" y2="0" stroke="#a855f7" stroke-width="2"/>

      <!-- Node Circles -->
      <circle cx="0" cy="-100" r="7" fill="#c084fc"/>
      <circle cx="86" cy="-50" r="7" fill="#818cf8"/>
      <circle cx="86" cy="50" r="7" fill="#22d3ee"/>
      <circle cx="0" cy="100" r="7" fill="#22d3ee"/>
      <circle cx="-86" cy="50" r="7" fill="#818cf8"/>
      <circle cx="-86" cy="-50" r="7" fill="#c084fc"/>

      <!-- Core Nucleus -->
      <circle cx="0" cy="0" r="16" fill="#ffffff" filter="url(#sy-filter)"/>
      <circle cx="0" cy="0" r="8" fill="#6366f1"/>
    </g>

    <text x="240" y="380" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="2">SYNAPSE AI</text>
    <text x="240" y="405" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle" letter-spacing="2">AUTONOMOUS COGNITIVE FABRIC</text>
    <text x="240" y="440" font-family="monospace" font-size="10" fill="#a855f7" text-anchor="middle">PRIMARY VECTOR EMBEDDING / ICON 1.0</text>
  </g>

  <!-- Right: Enterprise Live Telemetry Interface -->
  <g transform="translate(600, 140)" filter="url(#sy-filter)">
    <rect width="520" height="480" rx="16" fill="#070c18" stroke="#334155" stroke-width="1.5"/>
    
    <!-- App Window Titlebar -->
    <rect width="520" height="40" rx="16" fill="#0c1424"/>
    <circle cx="25" cy="20" r="5" fill="#ef4444"/>
    <circle cx="42" cy="20" r="5" fill="#eab308"/>
    <circle cx="59" cy="20" r="5" fill="#22c55e"/>
    <text x="260" y="25" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">console.synapse.ai/cluster-eu-01</text>

    <!-- Realtime Telemetry Graph -->
    <g transform="translate(30, 70)">
      <rect width="460" height="180" rx="10" fill="#040810" stroke="#1e293b" stroke-width="1"/>
      <text x="20" y="30" font-family="monospace" font-size="11" fill="#38bdf8">STREAMING INFERENCE LATENCY</text>
      <text x="440" y="30" font-family="monospace" font-size="11" fill="#22c55e" text-anchor="end">● LIVE 99.98%</text>

      <!-- Sparkline Waves -->
      <path d="M 20 140 Q 70 80, 120 120 T 220 70 T 320 100 T 440 60" fill="none" stroke="url(#sy-violet)" stroke-width="3"/>
      <path d="M 20 150 Q 80 120, 140 140 T 260 110 T 360 130 T 440 90" fill="none" stroke="#06b6d4" stroke-width="1.5" opacity="0.4"/>

      <!-- Metrics -->
      <g transform="translate(20, 205)">
        <rect width="135" height="60" rx="8" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
        <text x="15" y="24" font-family="monospace" font-size="9" fill="#64748b">THROUGHPUT</text>
        <text x="15" y="48" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#ffffff">4.8M req/s</text>

        <rect x="155" y="0" width="135" height="60" rx="8" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
        <text x="170" y="24" font-family="monospace" font-size="9" fill="#64748b">MEAN P99</text>
        <text x="170" y="48" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#a855f7">1.24 ms</text>

        <rect x="310" y="0" width="135" height="60" rx="8" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
        <text x="325" y="24" font-family="monospace" font-size="9" fill="#64748b">NEURAL CLUSTER</text>
        <text x="325" y="48" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#22c55e">ACTIVE</text>
      </g>
    </g>

    <!-- Bottom Feature Bar -->
    <g transform="translate(30, 375)">
      <rect width="460" height="70" rx="8" fill="#091122" stroke="#0ea5e9" stroke-width="1" opacity="0.5"/>
      <text x="20" y="28" font-family="monospace" font-size="11" fill="#f8fafc" font-weight="700">COMPREHENSIVE DESIGN TOKEN PIPELINE</text>
      <text x="20" y="48" font-family="sans-serif" font-size="11" fill="#94a3b8">Automated sync from Figma tokens to React, Rust, and iOS SDKs on commit.</text>
    </g>
  </g>
</svg>
`;

// 4. Synapse Hardware Kiosk & Security Badge (1200 x 720)
const synapseHardwareSvg = `
<svg width="1200" height="720" viewBox="0 0 1200 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hw-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020409"/>
      <stop offset="100%" stop-color="#090f1d"/>
    </linearGradient>
    <filter id="hw-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <rect width="1200" height="720" fill="url(#hw-bg)"/>

  <!-- Left: Industrial Server Rack Faceplate -->
  <g transform="translate(100, 100)" filter="url(#hw-shadow)">
    <rect width="500" height="520" rx="14" fill="#060a14" stroke="#1e293b" stroke-width="2"/>
    <rect x="20" y="20" width="460" height="480" rx="8" fill="#04070d" stroke="#334155" stroke-width="1"/>
    
    <!-- Rack Screws -->
    <circle cx="35" cy="35" r="5" fill="#334155"/>
    <circle cx="465" cy="35" r="5" fill="#334155"/>
    <circle cx="35" cy="485" r="5" fill="#334155"/>
    <circle cx="465" cy="485" r="5" fill="#334155"/>

    <!-- Illuminated Glass Brand Badge -->
    <rect x="60" y="80" width="380" height="120" rx="12" fill="#081426" stroke="#00f0ff" stroke-width="1.5"/>
    <g transform="translate(110, 140)">
      <polygon points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="0" cy="0" r="6" fill="#00f0ff"/>
    </g>
    <text x="160" y="138" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="800" fill="#ffffff" letter-spacing="1">SYNAPSE AI</text>
    <text x="160" y="160" font-family="monospace" font-size="10" fill="#38bdf8" letter-spacing="2">QUANTUM NEURAL ENGINE // RACK UNIT 01</text>

    <!-- Cooling Vents & Status LEDs -->
    <g transform="translate(60, 240)">
      <rect width="380" height="180" rx="8" fill="#020408" stroke="#1e293b" stroke-width="1"/>
      <g fill="#0284c7" opacity="0.6">
        <rect x="20" y="20" width="340" height="4" rx="2"/>
        <rect x="20" y="32" width="340" height="4" rx="2"/>
        <rect x="20" y="44" width="340" height="4" rx="2"/>
        <rect x="20" y="56" width="340" height="4" rx="2"/>
        <rect x="20" y="68" width="340" height="4" rx="2"/>
        <rect x="20" y="80" width="340" height="4" rx="2"/>
        <rect x="20" y="92" width="340" height="4" rx="2"/>
        <rect x="20" y="104" width="340" height="4" rx="2"/>
        <rect x="20" y="116" width="340" height="4" rx="2"/>
        <rect x="20" y="128" width="340" height="4" rx="2"/>
        <rect x="20" y="140" width="340" height="4" rx="2"/>
        <rect x="20" y="152" width="340" height="4" rx="2"/>
      </g>
      <!-- Activity LEDs -->
      <circle cx="340" cy="90" r="4" fill="#22c55e"/>
      <circle cx="355" cy="90" r="4" fill="#00f0ff"/>
    </g>

    <text x="250" y="465" font-family="monospace" font-size="11" fill="#475569" text-anchor="middle">MIL-SPEC ANODIZED ALUMINUM CHASSIS</text>
  </g>

  <!-- Right: Mobile Authenticator App Mockup -->
  <g transform="translate(680, 80)" filter="url(#hw-shadow)">
    <!-- Smartphone Bezel -->
    <rect width="380" height="560" rx="40" fill="#050a14" stroke="#334155" stroke-width="4"/>
    <!-- Screen -->
    <rect x="16" y="16" width="348" height="528" rx="30" fill="#030712"/>
    
    <!-- Dynamic Island notch -->
    <rect x="130" y="28" width="120" height="24" rx="12" fill="#000000"/>

    <!-- App Content -->
    <g transform="translate(36, 80)">
      <text x="0" y="20" font-family="monospace" font-size="11" fill="#a855f7" letter-spacing="1.5">SYNAPSE AUTHENTICATOR</text>
      <text x="0" y="48" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="700" fill="#ffffff">Biometric Passkey</text>

      <!-- Passkey Shield Vector -->
      <g transform="translate(154, 170)">
        <circle cx="0" cy="0" r="65" fill="#08142a" stroke="#0ea5e9" stroke-width="2"/>
        <circle cx="0" cy="0" r="50" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="6 3"/>
        <path d="M -20 -10 L 0 -25 L 20 -10 L 20 15 C 20 30, 0 40, 0 40 C 0 40, -20 30, -20 15 Z" fill="#00f0ff" opacity="0.8"/>
        <circle cx="0" cy="5" r="6" fill="#020617"/>
      </g>

      <text x="154" y="280" font-family="monospace" font-size="13" fill="#22c55e" text-anchor="middle">VERIFIED // ACCESS GRANTED</text>
      <text x="154" y="305" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">ZERO-TRUST QUANTUM CIPHER</text>

      <!-- Tap to unlock button -->
      <rect x="20" y="350" width="268" height="48" rx="24" fill="#0ea5e9"/>
      <text x="154" y="380" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#030712" text-anchor="middle">OPEN DATA CENTER DOOR</text>
    </g>
  </g>
</svg>
`;

// 5. Aurora Brand Guidelines Book Mockup (1200 x 700)
const auroraBrandBookSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#12100e"/>
      <stop offset="100%" stop-color="#1c1917"/>
    </linearGradient>
    <filter id="bk-shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
    <linearGradient id="bk-linen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2c2825"/>
      <stop offset="50%" stop-color="#231f1c"/>
      <stop offset="100%" stop-color="#181513"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="700" fill="url(#bk-bg)"/>

  <!-- Left: Open Hardcover Brand Manual (Spreads) -->
  <g transform="translate(100, 100)" filter="url(#bk-shadow)">
    <!-- Book Spine & Pages -->
    <rect width="500" height="480" rx="10" fill="#f5f2eb" stroke="#d6cfc4" stroke-width="1.5"/>
    <line x1="250" y1="0" x2="250" y2="480" stroke="#c4bcaf" stroke-width="3"/>
    
    <!-- Left Page Content: Architectural Vision -->
    <g transform="translate(40, 40)">
      <text x="0" y="20" font-family="serif" font-size="10" fill="#8c7f70" letter-spacing="2">AURORA HOME // BRAND IDENTITY STANDARDS</text>
      <text x="0" y="60" font-family="serif" font-size="24" font-weight="700" fill="#2d2823">Sensory Warmth &amp; Proportion</text>
      <text x="0" y="85" font-family="sans-serif" font-size="9" fill="#685d51" width="180">
        Every room tells a quiet story of light, clay, and intentional stillness.
      </text>

      <!-- Color Palette Blocks -->
      <g transform="translate(0, 130)">
        <rect x="0" y="0" width="38" height="48" rx="4" fill="#525b44"/>
        <rect x="44" y="0" width="38" height="48" rx="4" fill="#a05d42"/>
        <rect x="88" y="0" width="38" height="48" rx="4" fill="#c49e75"/>
        <rect x="132" y="0" width="38" height="48" rx="4" fill="#e8ded1"/>
      </g>

      <!-- Typographic specimen -->
      <g transform="translate(0, 220)">
        <text x="0" y="30" font-family="serif" font-size="34" font-style="italic" fill="#2d2823">Aa Bb Gg</text>
        <text x="0" y="60" font-family="serif" font-size="12" fill="#525b44">Cormorant Garamond Display</text>
        <text x="0" y="80" font-family="sans-serif" font-size="10" fill="#786c5f">Neue Haas Grotesk for Body Text</text>
      </g>
    </g>

    <!-- Right Page Content: Textile & Ceramic Material Studies -->
    <g transform="translate(290, 40)">
      <rect width="170" height="220" rx="8" fill="#e3dcce" stroke="#cfc6b6" stroke-width="1"/>
      <!-- Grid architectural line sketch -->
      <g stroke="#9a8e7e" stroke-width="1" opacity="0.6">
        <line x1="20" y1="40" x2="150" y2="40"/>
        <line x1="20" y1="80" x2="150" y2="80"/>
        <line x1="20" y1="120" x2="150" y2="120"/>
        <line x1="20" y1="160" x2="150" y2="160"/>
        <line x1="20" y1="200" x2="150" y2="200"/>
        <line x1="50" y1="20" x2="50" y2="200"/>
        <line x1="90" y1="20" x2="90" y2="200"/>
        <line x1="130" y1="20" x2="130" y2="200"/>
      </g>
      <text x="85" y="115" font-family="serif" font-size="18" fill="#2d2823" text-anchor="middle">AURORA</text>
      <text x="85" y="135" font-family="sans-serif" font-size="8" fill="#685d51" text-anchor="middle" letter-spacing="2">HOME OBJECTS</text>

      <text x="0" y="270" font-family="serif" font-size="14" font-weight="600" fill="#2d2823">Material Guidelines</text>
      <text x="0" y="295" font-family="sans-serif" font-size="9" fill="#685d51">100% Unbleached organic cotton</text>
      <text x="0" y="315" font-family="sans-serif" font-size="9" fill="#685d51">FSC-Certified tactile cardstock 350gsm</text>
      <text x="0" y="335" font-family="sans-serif" font-size="9" fill="#685d51">Hand-thrown stoneware glaze specs</text>
    </g>
  </g>

  <!-- Right: Closed Hardcover Cloth-Bound Edition with Gold Deboss -->
  <g transform="translate(680, 100)" filter="url(#bk-shadow)">
    <rect width="420" height="480" rx="14" fill="url(#bk-linen)" stroke="#3f3833" stroke-width="2"/>
    
    <!-- Blind Debossed Inner Border -->
    <rect x="25" y="25" width="370" height="430" rx="8" fill="none" stroke="#c49e75" stroke-width="1.5" opacity="0.6"/>

    <!-- Gold Foil Stamped Logo & Typography -->
    <g transform="translate(210, 200)">
      <circle cx="0" cy="0" r="50" fill="none" stroke="#d4af37" stroke-width="1.5"/>
      <path d="M -25 0 Q 0 -35 25 0 Q 0 35 -25 0 Z" fill="#d4af37" opacity="0.8"/>
      <circle cx="0" cy="0" r="6" fill="#181513"/>
    </g>

    <text x="210" y="290" font-family="serif" font-size="28" font-weight="700" fill="#e8c87c" text-anchor="middle" letter-spacing="3">AURORA HOME</text>
    <text x="210" y="320" font-family="sans-serif" font-size="10" fill="#a89a8a" text-anchor="middle" letter-spacing="3">COMPREHENSIVE BRAND SYSTEM</text>
    <text x="210" y="410" font-family="serif" font-size="10" fill="#786c5f" text-anchor="middle" font-style="italic">Volume I : Editions &amp; Spatial Language</text>
  </g>
</svg>
`;

// 6. Client Marcus Portrait (600 x 600)
const clientMarcusSvg = `
<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cm-bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#0e1e38"/>
      <stop offset="60%" stop-color="#060c18"/>
      <stop offset="100%" stop-color="#020408"/>
    </radialGradient>
    <linearGradient id="cm-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>

  <rect width="600" height="600" fill="url(#cm-bg)"/>

  <!-- Geometric aura circles -->
  <circle cx="300" cy="270" r="180" fill="none" stroke="#0ea5e9" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
  <circle cx="300" cy="270" r="210" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6 6" opacity="0.2"/>

  <!-- Stylized Executive Silhouette with crisp modern lighting -->
  <g transform="translate(300, 270)">
    <!-- Shoulders / Jacket -->
    <path d="M -160 250 C -160 170, -100 130, -50 110 L 50 110 C 100 130, 160 170, 160 250 Z" fill="#0f172a"/>
    <!-- Collar & Shirt -->
    <polygon points="-45,110 0,165 45,110 20,110 0,140 -20,110" fill="#38bdf8" opacity="0.8"/>
    <!-- Neck -->
    <rect x="-24" y="60" width="48" height="60" fill="#e2e8f0"/>
    <!-- Head & Hair -->
    <ellipse cx="0" cy="15" rx="55" ry="68" fill="#cbd5e1"/>
    <!-- Modern styled hair -->
    <path d="M -60 -15 C -60 -65, -30 -85, 10 -85 C 45 -85, 65 -60, 65 -20 C 60 -45, 30 -65, -10 -65 C -40 -65, -55 -40, -60 -15 Z" fill="#1e293b"/>
    <!-- Glasses -->
    <rect x="-42" y="5" width="34" height="22" rx="4" fill="none" stroke="#00f0ff" stroke-width="3"/>
    <rect x="8" y="5" width="34" height="22" rx="4" fill="none" stroke="#00f0ff" stroke-width="3"/>
    <line x1="-8" y1="14" x2="8" y2="14" stroke="#00f0ff" stroke-width="2"/>
    <!-- Beard trim -->
    <path d="M -45 25 C -45 75, -20 90, 0 90 C 20 90, 45 75, 45 25 C 35 60, 15 75, 0 75 C -15 75, -35 60, -45 25 Z" fill="#334155" opacity="0.6"/>
  </g>

  <!-- Cyan Rim Lighting Accents -->
  <path d="M 140 520 C 140 440, 200 400, 250 380" fill="none" stroke="#00f0ff" stroke-width="4" filter="drop-shadow(0 0 10px #00f0ff)"/>
  <path d="M 460 520 C 460 440, 400 400, 350 380" fill="none" stroke="#0284c7" stroke-width="3"/>

  <!-- Badge at bottom -->
  <rect x="150" y="525" width="300" height="45" rx="22" fill="#060c18" stroke="#00f0ff" stroke-width="1"/>
  <text x="300" y="552" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">MARCUS VANCE // SYNAPSE AI</text>
</svg>
`;

// 7. Client Elena Portrait (600 x 600)
const clientElenaSvg = `
<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ce-bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#2a1f18"/>
      <stop offset="60%" stop-color="#140f0c"/>
      <stop offset="100%" stop-color="#0a0705"/>
    </radialGradient>
  </defs>

  <rect width="600" height="600" fill="url(#ce-bg)"/>

  <!-- Warm geometric aura circles -->
  <circle cx="300" cy="270" r="180" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
  <circle cx="300" cy="270" r="210" fill="none" stroke="#fbbf24" stroke-width="1" stroke-dasharray="6 6" opacity="0.2"/>

  <!-- Stylized Creative Director Silhouette -->
  <g transform="translate(300, 270)">
    <!-- Silk / Cashmere turtleneck -->
    <path d="M -150 250 C -150 170, -95 130, -45 110 L 45 110 C 95 130, 150 170, 150 250 Z" fill="#1c1917"/>
    <!-- High Turtleneck collar -->
    <rect x="-30" y="65" width="60" height="50" rx="8" fill="#292524" stroke="#d97706" stroke-width="1" opacity="0.8"/>
    <!-- Head & Face -->
    <ellipse cx="0" cy="15" rx="52" ry="66" fill="#f5d0b5"/>
    <!-- Elegant hair flowing past shoulders -->
    <path d="M -65 -10 C -65 -75, -25 -95, 10 -95 C 50 -95, 75 -65, 75 -10 C 75 80, 50 150, 45 200 L 25 190 C 35 140, 55 70, 55 0 C 45 -45, 15 -65, -10 -65 C -45 -65, -55 -25, -55 40 C -55 100, -40 150, -35 200 L -55 200 C -65 140, -65 50, -65 -10 Z" fill="#451a03"/>
    <!-- Minimalist sculptural earring -->
    <circle cx="-56" cy="40" r="10" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  </g>

  <!-- Amber Warm Rim Lighting -->
  <path d="M 150 520 C 150 440, 205 400, 255 380" fill="none" stroke="#f59e0b" stroke-width="3.5" filter="drop-shadow(0 0 10px #f59e0b)"/>
  <path d="M 450 520 C 450 440, 395 400, 345 380" fill="none" stroke="#d97706" stroke-width="3"/>

  <!-- Badge at bottom -->
  <rect x="150" y="525" width="300" height="45" rx="22" fill="#140d09" stroke="#f59e0b" stroke-width="1"/>
  <text x="300" y="552" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">ELENA ROSTOVA // AURORA HOME</text>
</svg>
`;

async function generateAll() {
  console.log('Generating Signal assets...');
  
  await sharp(Buffer.from(quantumTokensSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'quantum-design-tokens.webp'));
  console.log('✔ quantum-design-tokens.webp generated');

  await sharp(Buffer.from(quantumStationerySvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'quantum-stationery-deck.webp'));
  console.log('✔ quantum-stationery-deck.webp generated');

  await sharp(Buffer.from(synapseBrandSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'synapse-brand-identity.webp'));
  console.log('✔ synapse-brand-identity.webp generated');

  await sharp(Buffer.from(synapseHardwareSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'synapse-hardware-kiosk.webp'));
  console.log('✔ synapse-hardware-kiosk.webp generated');

  await sharp(Buffer.from(auroraBrandBookSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'aurora-brand-book.webp'));
  console.log('✔ aurora-brand-book.webp generated');

  await sharp(Buffer.from(clientMarcusSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'client-marcus.webp'));
  console.log('✔ client-marcus.webp generated');

  await sharp(Buffer.from(clientElenaSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'client-elena.webp'));
  console.log('✔ client-elena.webp generated');

  console.log('All 7 new Signal assets generated successfully!');
}

generateAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
