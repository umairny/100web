const sharp = require('sharp');
const path = require('path');

async function run() {
  const width = 2560;
  const height = 1400;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="45%" stop-color="#060913"/>
        <stop offset="100%" stop-color="#020408"/>
      </radialGradient>
      <linearGradient id="fluid1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.95"/>
        <stop offset="35%" stop-color="#818cf8" stop-opacity="0.85"/>
        <stop offset="70%" stop-color="#c084fc" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#2563eb" stop-opacity="0.95"/>
      </linearGradient>
      <linearGradient id="fluid2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.85"/>
        <stop offset="55%" stop-color="#3b82f6" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="#a855f7" stop-opacity="0.9"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="28" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
    
    <!-- 3D Optical Caustic Waves -->
    <path d="M -100,420 C 500,80 800,1050 1350,520 C 1900, -20 2200,880 2700,320" fill="none" stroke="url(#fluid1)" stroke-width="52" stroke-linecap="round" filter="url(#glow)"/>
    <path d="M -100,420 C 500,80 800,1050 1350,520 C 1900, -20 2200,880 2700,320" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity="0.8"/>

    <path d="M -50,880 C 400,1280 1000,380 1500,820 C 2000,1260 2350,420 2680,780" fill="none" stroke="url(#fluid2)" stroke-width="36" stroke-linecap="round" filter="url(#glow)"/>
    <path d="M -50,880 C 400,1280 1000,380 1500,820 C 2000,1260 2350,420 2680,780" fill="none" stroke="#67e8f9" stroke-width="6" stroke-linecap="round" opacity="0.85"/>

    <!-- Subtle Optical Flares -->
    <circle cx="650" cy="320" r="280" fill="#2563eb" opacity="0.22" filter="url(#glow)"/>
    <circle cx="1780" cy="380" r="320" fill="#0ea5e9" opacity="0.18" filter="url(#glow)"/>
    <circle cx="1280" cy="620" r="220" fill="#8b5cf6" opacity="0.16" filter="url(#glow)"/>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .webp({ quality: 95 })
    .toFile(path.join('F:/100web/public/images/motiondesk', 'hero-prism-motion.webp'));

  console.log('✓ Successfully created hero-prism-motion.webp');
}

run().catch(console.error);
