const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'axiom');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Quantum Payments Card
const quantumSvg = `
<svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="q-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#083344" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#021a24" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#02080d" stop-opacity="1"/>
    </radialGradient>
    <radialGradient id="q-core-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="1"/>
      <stop offset="30%" stop-color="#06b6d4" stop-opacity="0.8"/>
      <stop offset="70%" stop-color="#0e7490" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#083344" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="q-ring-1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="50%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="q-ring-2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="50%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#67e8f9"/>
    </linearGradient>
    <filter id="q-blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="q-intense-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="16" result="blur2"/>
      <feMerge>
        <feMergeNode in="blur2"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="480" fill="url(#q-bg)"/>

  <!-- Geometric Grid Accent -->
  <g opacity="0.15" stroke="#06b6d4" stroke-width="1">
    <line x1="0" y1="120" x2="800" y2="120"/>
    <line x1="0" y1="240" x2="800" y2="240"/>
    <line x1="0" y1="360" x2="800" y2="360"/>
    <line x1="200" y1="0" x2="200" y2="480"/>
    <line x1="400" y1="0" x2="400" y2="480"/>
    <line x1="600" y1="0" x2="600" y2="480"/>
  </g>

  <!-- Ambient Light Blobs -->
  <circle cx="400" cy="240" r="180" fill="url(#q-core-glow)" opacity="0.65" filter="url(#q-intense-glow)"/>
  <circle cx="340" cy="200" r="90" fill="#34d399" opacity="0.18" filter="url(#q-intense-glow)"/>
  <circle cx="460" cy="280" r="100" fill="#38bdf8" opacity="0.22" filter="url(#q-intense-glow)"/>

  <!-- 3D Orbital Rings -->
  <g transform="translate(400, 240) rotate(-28)" filter="url(#q-blur)">
    <!-- Primary Outer Ring -->
    <ellipse cx="0" cy="0" rx="220" ry="85" fill="none" stroke="url(#q-ring-1)" stroke-width="3" opacity="0.85"/>
    <ellipse cx="0" cy="0" rx="220" ry="85" fill="none" stroke="#22d3ee" stroke-width="1.5" opacity="0.95"/>
    <!-- Nodes on Outer Ring -->
    <circle cx="-190" cy="-35" r="5" fill="#34d399" filter="url(#q-intense-glow)"/>
    <circle cx="160" cy="55" r="6" fill="#67e8f9" filter="url(#q-intense-glow)"/>
    <circle cx="80" cy="-78" r="4" fill="#a7f3d0"/>
  </g>

  <g transform="translate(400, 240) rotate(38)" filter="url(#q-blur)">
    <!-- Secondary Intersecting Ring -->
    <ellipse cx="0" cy="0" rx="210" ry="70" fill="none" stroke="url(#q-ring-2)" stroke-width="3" opacity="0.8"/>
    <ellipse cx="0" cy="0" rx="210" ry="70" fill="none" stroke="#a7f3d0" stroke-width="1" opacity="0.9"/>
    <!-- Nodes -->
    <circle cx="170" cy="-40" r="5.5" fill="#22d3ee" filter="url(#q-intense-glow)"/>
    <circle cx="-140" cy="48" r="4.5" fill="#34d399"/>
  </g>

  <g transform="translate(400, 240) rotate(82)" filter="url(#q-blur)">
    <!-- Third Vertical Ring -->
    <ellipse cx="0" cy="0" rx="190" ry="60" fill="none" stroke="url(#q-ring-1)" stroke-width="2.2" opacity="0.75"/>
    <circle cx="0" cy="-185" r="5" fill="#38bdf8" filter="url(#q-intense-glow)"/>
    <circle cx="0" cy="185" r="5" fill="#34d399" filter="url(#q-intense-glow)"/>
  </g>

  <g transform="translate(400, 240) rotate(-70)" filter="url(#q-blur)">
    <!-- Fourth Tilted Ring -->
    <ellipse cx="0" cy="0" rx="175" ry="50" fill="none" stroke="#22d3ee" stroke-width="1.8" opacity="0.6"/>
  </g>

  <!-- Central Quantum Sphere / Energy Core -->
  <circle cx="400" cy="240" r="46" fill="#021824" stroke="#22d3ee" stroke-width="2"/>
  <circle cx="400" cy="240" r="42" fill="url(#q-core-glow)" opacity="0.8"/>
  <circle cx="400" cy="240" r="18" fill="#ecfeff" filter="url(#q-blur)"/>

  <!-- Energy Wavelets -->
  <path d="M 330 240 Q 365 210, 400 240 T 470 240" fill="none" stroke="#67e8f9" stroke-width="2" opacity="0.7"/>
  <path d="M 340 230 Q 370 260, 400 230 T 460 230" fill="none" stroke="#34d399" stroke-width="1.5" opacity="0.7"/>

  <!-- Particle Dots Scattering -->
  <g fill="#a5f3fc" opacity="0.75">
    <circle cx="280" cy="160" r="2.5"/>
    <circle cx="520" cy="150" r="3"/>
    <circle cx="230" cy="310" r="2"/>
    <circle cx="560" cy="320" r="2.5"/>
    <circle cx="380" cy="110" r="3.5"/>
    <circle cx="430" cy="370" r="2"/>
    <circle cx="180" cy="220" r="1.5"/>
    <circle cx="610" cy="230" r="2"/>
  </g>

  <!-- Inner Holographic Text Overlay -->
  <text x="400" y="232" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">QUANTUM</text>
  <text x="400" y="264" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">PAYMENTS</text>
</svg>
`;

// 2. Aether Space Card
const aetherSvg = `
<svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ae-bg" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="40%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#020408"/>
    </radialGradient>
    <radialGradient id="ae-nebula" cx="50%" cy="35%" r="45%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.45"/>
      <stop offset="45%" stop-color="#6366f1" stop-opacity="0.25"/>
      <stop offset="80%" stop-color="#0284c7" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="0"/>
    </radialGradient>
    <filter id="ae-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="glow"/>
      <feMerge>
        <feMergeNode in="glow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#ae-bg)"/>
  <rect width="800" height="480" fill="url(#ae-nebula)"/>

  <!-- Starry Background Points -->
  <g fill="#ffffff">
    <circle cx="120" cy="80" r="1.5" opacity="0.6"/>
    <circle cx="210" cy="140" r="1.2" opacity="0.7"/>
    <circle cx="340" cy="65" r="2" opacity="0.85"/>
    <circle cx="470" cy="90" r="1.8" opacity="0.8"/>
    <circle cx="610" cy="110" r="1.5" opacity="0.6"/>
    <circle cx="720" cy="60" r="2" opacity="0.9"/>
    <circle cx="680" cy="200" r="1.2" opacity="0.5"/>
    <circle cx="750" cy="320" r="1.6" opacity="0.7"/>
    <circle cx="100" cy="380" r="1.4" opacity="0.5"/>
    <circle cx="150" cy="280" r="2.2" opacity="0.9"/>
    <circle cx="270" cy="410" r="1.3" opacity="0.6"/>
    <circle cx="550" cy="420" r="1.8" opacity="0.8"/>
    <circle cx="670" cy="390" r="1.2" opacity="0.5"/>
  </g>

  <!-- Celestial Perspective Rays from Apex -->
  <g stroke="#38bdf8" stroke-width="1.2" opacity="0.45">
    <line x1="400" y1="80" x2="80" y2="460"/>
    <line x1="400" y1="80" x2="180" y2="460"/>
    <line x1="400" y1="80" x2="280" y2="460"/>
    <line x1="400" y1="80" x2="360" y2="460"/>
    <line x1="400" y1="80" x2="440" y2="460"/>
    <line x1="400" y1="80" x2="520" y2="460"/>
    <line x1="400" y1="80" x2="620" y2="460"/>
    <line x1="400" y1="80" x2="720" y2="460"/>
  </g>

  <!-- Orbital Conic Arcs -->
  <g fill="none" stroke="#60a5fa" stroke-width="1.4" opacity="0.55">
    <path d="M 220 280 A 240 100 0 0 1 580 280"/>
    <path d="M 160 340 A 320 130 0 0 1 640 340" stroke="#38bdf8" stroke-width="1.8"/>
    <path d="M 100 410 A 420 160 0 0 1 700 410" stroke="#93c5fd" stroke-width="1.2"/>
  </g>

  <!-- Constellation Nodes & Connecting Wireframe -->
  <g stroke="#7dd3fc" stroke-width="1.4" opacity="0.65" fill="none">
    <polyline points="290,160 350,130 400,80 450,130 510,160"/>
    <polyline points="220,240 290,160 360,210 440,210 510,160 580,240"/>
    <polyline points="260,320 330,290 400,320 470,290 540,320"/>
  </g>

  <!-- Bright Star Quasar / Origin Core -->
  <g transform="translate(400, 80)" filter="url(#ae-glow)">
    <circle cx="0" cy="0" r="28" fill="#38bdf8" opacity="0.4"/>
    <circle cx="0" cy="0" r="14" fill="#67e8f9" opacity="0.8"/>
    <circle cx="0" cy="0" r="5" fill="#ffffff"/>
    <!-- 4-point star spike -->
    <path d="M 0 -35 L 3 -6 L 35 0 L 3 6 L 0 35 L -3 6 L -35 0 L -3 -6 Z" fill="#ffffff" opacity="0.9"/>
  </g>

  <!-- Constellation Pin Points -->
  <g fill="#ffffff" filter="url(#ae-glow)">
    <circle cx="290" cy="160" r="3.5"/>
    <circle cx="510" cy="160" r="3.5"/>
    <circle cx="360" cy="210" r="3"/>
    <circle cx="440" cy="210" r="3"/>
    <circle cx="220" cy="240" r="4"/>
    <circle cx="580" cy="240" r="4"/>
    <circle cx="330" cy="290" r="3.5"/>
    <circle cx="470" cy="290" r="3.5"/>
  </g>

  <!-- Inner Holographic Text Overlay -->
  <text x="400" y="232" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">AETHER</text>
  <text x="400" y="264" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">SPACE</text>
</svg>
`;

// 3. Synapse Health Card
const synapseSvg = `
<svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sy-bg" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#082f49"/>
      <stop offset="55%" stop-color="#041829"/>
      <stop offset="100%" stop-color="#020811"/>
    </radialGradient>
    <radialGradient id="sy-aura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#0284c7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#082f49" stop-opacity="0"/>
    </radialGradient>
    <filter id="sy-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="glow"/>
      <feMerge>
        <feMergeNode in="glow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="sy-pulse" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="14" result="pulse"/>
      <feMerge>
        <feMergeNode in="pulse"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#sy-bg)"/>
  <circle cx="400" cy="240" r="220" fill="url(#sy-aura)"/>

  <!-- Neural Synapse Filaments / Axon Paths -->
  <g stroke="#0ea5e9" stroke-width="1.8" opacity="0.65" fill="none" filter="url(#sy-glow)">
    <!-- Primary Bridges -->
    <path d="M 120 180 Q 240 140 330 200"/>
    <path d="M 140 320 Q 250 300 320 260"/>
    <path d="M 330 200 Q 400 130 470 190"/>
    <path d="M 320 260 Q 400 330 480 270"/>
    <path d="M 470 190 Q 560 140 680 180"/>
    <path d="M 480 270 Q 580 320 670 290"/>
    <!-- Cross Dendrites -->
    <path d="M 330 200 L 320 260" stroke="#22d3ee" stroke-width="2"/>
    <path d="M 470 190 L 480 270" stroke="#22d3ee" stroke-width="2"/>
    <path d="M 330 200 L 480 270" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="4,4"/>
    <path d="M 320 260 L 470 190" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="4,4"/>
    <!-- Peripheral Branching -->
    <path d="M 210 90 L 330 200 L 260 220"/>
    <path d="M 470 190 L 530 110"/>
    <path d="M 400 90 L 400 160"/>
    <path d="M 400 380 L 400 300"/>
    <path d="M 220 380 L 320 260"/>
    <path d="M 590 380 L 480 270"/>
    <path d="M 680 180 L 730 120"/>
    <path d="M 670 290 L 740 350"/>
    <path d="M 120 180 L 60 140"/>
    <path d="M 140 320 L 70 360"/>
  </g>

  <!-- Bioluminescent Secondary Network Lines -->
  <g stroke="#38bdf8" stroke-width="1" opacity="0.4" fill="none">
    <path d="M 180 210 Q 280 170 380 210 T 580 210"/>
    <path d="M 200 270 Q 300 310 400 270 T 600 270"/>
    <path d="M 300 110 Q 400 180 500 110"/>
    <path d="M 300 370 Q 400 300 500 370"/>
  </g>

  <!-- Glowing Bio-Synapse Nodes -->
  <g filter="url(#sy-pulse)">
    <circle cx="330" cy="200" r="7" fill="#67e8f9"/>
    <circle cx="320" cy="260" r="7.5" fill="#22d3ee"/>
    <circle cx="470" cy="190" r="7" fill="#67e8f9"/>
    <circle cx="480" cy="270" r="7.5" fill="#22d3ee"/>

    <circle cx="120" cy="180" r="5" fill="#38bdf8"/>
    <circle cx="140" cy="320" r="5.5" fill="#34d399"/>
    <circle cx="680" cy="180" r="5.5" fill="#34d399"/>
    <circle cx="670" cy="290" r="5" fill="#38bdf8"/>

    <circle cx="210" cy="90" r="4.5" fill="#67e8f9"/>
    <circle cx="530" cy="110" r="4" fill="#a7f3d0"/>
    <circle cx="400" cy="90" r="4" fill="#38bdf8"/>
    <circle cx="400" cy="380" r="4" fill="#38bdf8"/>
    <circle cx="220" cy="380" r="4" fill="#22d3ee"/>
    <circle cx="590" cy="380" r="4.5" fill="#67e8f9"/>
  </g>

  <!-- Center Core Aura -->
  <circle cx="400" cy="240" r="85" fill="#021422" stroke="#0ea5e9" stroke-width="1.8" opacity="0.8"/>
  <circle cx="400" cy="240" r="75" fill="#042035" opacity="0.6"/>

  <!-- Inner Holographic Text Overlay -->
  <text x="400" y="232" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">SYNAPSE</text>
  <text x="400" y="264" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">HEALTH</text>
</svg>
`;

// 4. Vanguard Logistics Card
const vanguardSvg = `
<svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="va-bg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="50%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#020408"/>
    </radialGradient>
    <linearGradient id="va-beam" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.1"/>
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.1"/>
    </linearGradient>
    <filter id="va-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="glow"/>
      <feMerge>
        <feMergeNode in="glow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#va-bg)"/>

  <!-- 3D Perspective Grid Tunnel Lines Converging to Center (400, 240) -->
  <g stroke="#38bdf8" stroke-width="1.2" opacity="0.55">
    <!-- Top Corridors -->
    <line x1="0" y1="0" x2="400" y2="240"/>
    <line x1="160" y1="0" x2="400" y2="240"/>
    <line x1="320" y1="0" x2="400" y2="240"/>
    <line x1="480" y1="0" x2="400" y2="240"/>
    <line x1="640" y1="0" x2="400" y2="240"/>
    <line x1="800" y1="0" x2="400" y2="240"/>

    <!-- Bottom Corridors -->
    <line x1="0" y1="480" x2="400" y2="240"/>
    <line x1="160" y1="480" x2="400" y2="240"/>
    <line x1="320" y1="480" x2="400" y2="240"/>
    <line x1="480" y1="480" x2="400" y2="240"/>
    <line x1="640" y1="480" x2="400" y2="240"/>
    <line x1="800" y1="480" x2="400" y2="240"/>

    <!-- Side Corridors -->
    <line x1="0" y1="120" x2="400" y2="240"/>
    <line x1="0" y1="240" x2="400" y2="240"/>
    <line x1="0" y1="360" x2="400" y2="240"/>
    <line x1="800" y1="120" x2="400" y2="240"/>
    <line x1="800" y1="240" x2="400" y2="240"/>
    <line x1="800" y1="360" x2="400" y2="240"/>
  </g>

  <!-- Concentric Geometric Frames (Tunnel Rings) -->
  <g fill="none" stroke="#60a5fa" opacity="0.65" filter="url(#va-glow)">
    <!-- Outer Frame 1 -->
    <polygon points="60,36 740,36 700,444 100,444" stroke-width="2" stroke="#38bdf8"/>
    <!-- Frame 2 -->
    <polygon points="150,90 650,90 620,390 180,390" stroke-width="1.8" stroke="#0ea5e9"/>
    <!-- Frame 3 -->
    <polygon points="240,144 560,144 540,336 260,336" stroke-width="2" stroke="#38bdf8"/>
    <!-- Frame 4 -->
    <polygon points="315,190 485,190 475,290 325,290" stroke-width="2.5" stroke="#93c5fd"/>
  </g>

  <!-- Glowing Speed Light Streaks -->
  <g stroke="#ffffff" stroke-width="2.5" opacity="0.85" filter="url(#va-glow)">
    <line x1="120" y1="430" x2="260" y2="350"/>
    <line x1="680" y1="430" x2="540" y2="350"/>
    <line x1="100" y1="50" x2="240" y2="135"/>
    <line x1="700" y1="50" x2="560" y2="135"/>
  </g>

  <!-- Center Hex/Shield Backdrop -->
  <polygon points="310,185 490,185 530,240 490,295 310,295 270,240" fill="#040813" stroke="#38bdf8" stroke-width="2.5" opacity="0.95"/>

  <!-- Inner Holographic Text Overlay -->
  <text x="400" y="232" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">VANGUARD</text>
  <text x="400" y="264" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" letter-spacing="3" fill="#ffffff" text-anchor="middle">LOGISTICS</text>
</svg>
`;

async function buildAssets() {
  const assets = [
    { name: 'quantum-payments', svg: quantumSvg },
    { name: 'aether-space', svg: aetherSvg },
    { name: 'synapse-health', svg: synapseSvg },
    { name: 'vanguard-logistics', svg: vanguardSvg },
  ];

  for (const asset of assets) {
    const svgPath = path.join(outputDir, `${asset.name}.svg`);
    const webpPath = path.join(outputDir, `${asset.name}.webp`);

    fs.writeFileSync(svgPath, asset.svg.trim(), 'utf-8');
    console.log(`Saved SVG: ${svgPath}`);

    await sharp(Buffer.from(asset.svg.trim()))
      .webp({ quality: 95 })
      .toFile(webpPath);
    console.log(`Rendered WebP: ${webpPath}`);
  }
}

buildAssets().catch((err) => {
  console.error('Error rendering assets:', err);
  process.exit(1);
});
