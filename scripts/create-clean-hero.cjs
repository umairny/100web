const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = 'F:/100web/public/images/motiondesk';

async function buildCleanHero() {
  console.log('Building clean high-definition 3D fluid glass hero image...');

  const width = 2560;
  const height = 1200;

  // 1. Extract pristine left fluid glass ribbon from original motiondesk.jpg
  // Left 950px is totally free of text
  const leftGlass = await sharp('F:/100web/src/assets/images/portfolio/motiondesk.jpg')
    .extract({ left: 0, top: 0, width: 950, height: 1250 })
    .resize(1100, height, { fit: 'cover' })
    .toBuffer();

  // 2. Extract pristine right fluid glass ribbon
  // Right 950px (from 2122 to 3072) is totally free of text
  const rightGlass = await sharp('F:/100web/src/assets/images/portfolio/motiondesk.jpg')
    .extract({ left: 2122, top: 0, width: 950, height: 1250 })
    .resize(1100, height, { fit: 'cover' })
    .toBuffer();

  // 3. Create SVG artistic composite with fluid procedural caustics and seamless feathering
  const compositeSvg = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.35"/>
          <stop offset="35%" stop-color="#0f172a" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#050811" stop-opacity="0.98"/>
        </radialGradient>
        <linearGradient id="cyanRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.7"/>
          <stop offset="50%" stop-color="#818cf8" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#c084fc" stop-opacity="0.8"/>
        </linearGradient>
        <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
          <stop offset="30%" stop-color="#38bdf8" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#050811" stop-opacity="0"/>
        </linearGradient>
        <filter id="bloomFilter">
          <feGaussianBlur stdDeviation="24" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="leftFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="60%" stop-color="#000000" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#050811" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="rightFade" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="60%" stop-color="#000000" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#050811" stop-opacity="1"/>
        </linearGradient>
      </defs>

      <!-- Deep Space Canvas -->
      <rect width="${width}" height="${height}" fill="#050811"/>
      <rect width="${width}" height="${height}" fill="url(#centerGlow)"/>

      <!-- Smooth Ambient 3D Flow Lines across center bridging left and right -->
      <g opacity="0.65" filter="url(#bloomFilter)">
        <path d="M -100,200 C 400,600 800,50 1280,250 C 1760,450 2160,100 2660,300" fill="none" stroke="url(#cyanRibbon)" stroke-width="18" stroke-linecap="round"/>
        <path d="M -100,280 C 450,700 850,120 1280,320 C 1710,520 2100,180 2660,380" fill="none" stroke="#60a5fa" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
        <path d="M 300,900 C 700,500 1100,850 1500,650 C 1900,450 2300,800 2700,600" fill="none" stroke="#a855f7" stroke-width="12" stroke-linecap="round" opacity="0.4"/>
      </g>

      <!-- Glass Prism Specular Flares -->
      <circle cx="1280" cy="250" r="180" fill="#38bdf8" opacity="0.12" filter="url(#bloomFilter)"/>
      <circle cx="950" cy="180" r="120" fill="#818cf8" opacity="0.15" filter="url(#bloomFilter)"/>
      <circle cx="1600" cy="320" r="140" fill="#60a5fa" opacity="0.12" filter="url(#bloomFilter)"/>

      <!-- Vignette and Top/Bottom Glass Edge -->
      <rect width="${width}" height="${height}" fill="url(#glassReflection)"/>
    </svg>
  `);

  // 4. Create feathered left overlay and feathered right overlay
  // Render base composite
  const baseBackground = await sharp(compositeSvg).toBuffer();

  // Combine base with left authentic fluid glass and right authentic fluid glass
  const finalImage = await sharp(baseBackground)
    .composite([
      {
        input: leftGlass,
        left: 0,
        top: 0,
        blend: 'screen',
      },
      {
        input: rightGlass,
        left: width - 1100,
        top: 0,
        blend: 'screen',
      },
    ])
    .webp({ quality: 95 })
    .toBuffer();

  // Save to hero-fluid-glass.webp (used in MotionDeskStudio.tsx)
  await sharp(finalImage).toFile(path.join(outDir, 'hero-fluid-glass.webp'));
  console.log('✓ Successfully updated hero-fluid-glass.webp with pristine text-free 3D fluid artwork!');
}

buildCleanHero().catch(console.error);
