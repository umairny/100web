const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = 'F:/100web/public/images/motiondesk';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generateAssets() {
  console.log('Generating premium MotionDesk Studio visual assets...');

  // 1. Wireframe / Clay Render Breakdown (1200x800)
  const wireframeSvg = Buffer.from(`
    <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="clayGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </radialGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="0.75" opacity="0.4"/>
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#clayGlow)"/>
      <rect width="1200" height="800" fill="url(#grid)"/>
      
      <!-- Top HUD Header -->
      <text x="50" y="60" fill="#94a3b8" font-family="monospace" font-size="16" letter-spacing="2">VIEWPORT: PERSPECTIVE // SHADING: CLAY WIREFRAME // POLYCOUNT: 4,820,192</text>
      <line x1="50" y1="80" x2="1150" y2="80" stroke="#334155" stroke-width="1"/>

      <!-- Central 3D Mesh Ribbons Wireframe -->
      <g stroke="#38bdf8" stroke-width="1.2" fill="none" opacity="0.85">
        <!-- Icosahedron / Orb Wireframe -->
        <circle cx="600" cy="420" r="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
        <ellipse cx="600" cy="420" rx="220" ry="80" stroke="#38bdf8" stroke-width="1.5"/>
        <ellipse cx="600" cy="420" rx="80" ry="220" stroke="#38bdf8" stroke-width="1.5"/>
        <ellipse cx="600" cy="420" rx="160" ry="160" stroke="#0ea5e9" stroke-width="1.2"/>
        
        <!-- Polygon Wireframe Latice -->
        <polygon points="600,200 780,310 780,530 600,640 420,530 420,310" stroke="#60a5fa" stroke-width="1.5"/>
        <polygon points="600,240 740,330 740,510 600,600 460,510 460,330" stroke="#93c5fd" stroke-width="1"/>
        <line x1="600" y1="200" x2="600" y2="640" stroke="#38bdf8" stroke-width="1"/>
        <line x1="420" y1="310" x2="780" y2="530" stroke="#38bdf8" stroke-width="1"/>
        <line x1="420" y1="530" x2="780" y2="310" stroke="#38bdf8" stroke-width="1"/>
      </g>

      <!-- Vertices dots -->
      <g fill="#60a5fa">
        <circle cx="600" cy="200" r="4"/>
        <circle cx="780" cy="310" r="4"/>
        <circle cx="780" cy="530" r="4"/>
        <circle cx="600" cy="640" r="4"/>
        <circle cx="420" cy="530" r="4"/>
        <circle cx="420" cy="310" r="4"/>
        <circle cx="600" cy="420" r="5" fill="#38bdf8"/>
      </g>

      <text x="50" y="740" fill="#64748b" font-family="monospace" font-size="14">C4D R26 • OCTANE KERNEL • SUBDIVISION LVL 4</text>
      <text x="1050" y="740" fill="#38bdf8" font-family="monospace" font-size="14" text-anchor="end">MODE: TOPOLOGY PASS</text>
    </svg>
  `);
  await sharp(wireframeSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'breakdown-wireframe.webp'));
  console.log('✓ Created breakdown-wireframe.webp');

  // 2. Final Render Breakdown (1200x800)
  const finalRenderSvg = Buffer.from(`
    <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="40%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#030712"/>
        </radialGradient>
        <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
          <stop offset="30%" stop-color="#818cf8" stop-opacity="0.95"/>
          <stop offset="70%" stop-color="#c084fc" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.95"/>
        </linearGradient>
        <filter id="bloom">
          <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="1200" height="800" fill="url(#bgGlow)"/>
      
      <!-- Volumetric light rays -->
      <circle cx="600" cy="420" r="300" fill="#3b82f6" opacity="0.15" filter="url(#bloom)"/>
      <circle cx="600" cy="420" r="210" fill="url(#orbGrad)" filter="url(#bloom)"/>
      
      <!-- Glass refraction highlights -->
      <ellipse cx="550" cy="360" rx="90" ry="40" fill="#ffffff" opacity="0.4" transform="rotate(-25 550 360)"/>
      <path d="M 450,420 Q 600,300 750,420 Q 600,540 450,420" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.5"/>
      <path d="M 420,440 Q 600,280 780,440" fill="none" stroke="#38bdf8" stroke-width="4" opacity="0.8" filter="url(#bloom)"/>

      <!-- Reflected Caustic Rim -->
      <circle cx="600" cy="420" r="210" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.6"/>

      <!-- HUD Watermark -->
      <text x="50" y="60" fill="#38bdf8" font-family="monospace" font-size="16" letter-spacing="2">OUTPUT: ACEScg 32-BIT EXR // RESOLUTION: 3840 x 2160 // D-RANGE: 16 STOPS</text>
      <line x1="50" y1="80" x2="1150" y2="80" stroke="#3b82f6" stroke-width="1" opacity="0.4"/>
      <text x="50" y="740" fill="#94a3b8" font-family="monospace" font-size="14">SPECTRAL DISPERSION • CHROMATIC CAUSTICS • MOTION BLUR (180° SHUTTER)</text>
      <text x="1050" y="740" fill="#60a5fa" font-family="monospace" font-size="14" text-anchor="end">STATUS: FINAL COMPOSITED MASTER</text>
    </svg>
  `);
  await sharp(finalRenderSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'breakdown-final.webp'));
  console.log('✓ Created breakdown-final.webp');

  // 3. Discipline: Brand Motion Systems (800x600)
  const brandMotionSvg = Buffer.from(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bmGrad)"/>
      <!-- Kinetic Typography Pattern -->
      <g fill="#1e293b" font-family="sans-serif" font-weight="900" font-size="72" letter-spacing="6" opacity="0.3">
        <text x="40" y="100">KINETIC</text>
        <text x="40" y="190">DYNAMIC</text>
        <text x="40" y="280">CADENCE</text>
        <text x="40" y="370">IDENTITY</text>
        <text x="40" y="460">SYSTEMS</text>
      </g>
      <!-- Fluid Glowing Ribbon -->
      <path d="M 50,500 C 200,200 400,600 750,150" fill="none" stroke="#2563eb" stroke-width="24" stroke-linecap="round"/>
      <path d="M 50,500 C 200,200 400,600 750,150" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
      <circle cx="750" cy="150" r="16" fill="#60a5fa"/>
    </svg>
  `);
  await sharp(brandMotionSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'discipline-brand-motion.webp'));
  console.log('✓ Created discipline-brand-motion.webp');

  // 4. Discipline: Product CGI & Hardware (800x600)
  const productCgiSvg = Buffer.from(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#070a12"/>
      <!-- Floating curved glass device chassis -->
      <g transform="translate(200, 100)">
        <rect x="0" y="0" width="400" height="400" rx="48" fill="#111827" stroke="#38bdf8" stroke-width="2"/>
        <rect x="24" y="24" width="352" height="352" rx="36" fill="#030712"/>
        <!-- Camera sensor array -->
        <circle cx="200" cy="200" r="110" fill="#0f172a" stroke="#2563eb" stroke-width="3"/>
        <circle cx="200" cy="200" r="70" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="200" cy="200" r="35" fill="#3b82f6"/>
        <circle cx="185" cy="185" r="12" fill="#ffffff" opacity="0.6"/>
      </g>
    </svg>
  `);
  await sharp(productCgiSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'discipline-product-cgi.webp'));
  console.log('✓ Created discipline-product-cgi.webp');

  // 5. Discipline: Spatial UI & VisionOS (800x600)
  const spatialUiSvg = Buffer.from(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#060913"/>
      <!-- Perspective spatial glass cards -->
      <g transform="perspective(600)">
        <rect x="120" y="100" width="560" height="360" rx="32" fill="#1e293b" fill-opacity="0.35" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
        <rect x="180" y="160" width="440" height="240" rx="24" fill="#0f172a" fill-opacity="0.5" stroke="#38bdf8" stroke-opacity="0.5" stroke-width="1.5"/>
        <!-- Floating audio equalizer bars -->
        <g fill="#38bdf8">
          <rect x="240" y="260" width="12" height="60" rx="6"/>
          <rect x="270" y="220" width="12" height="100" rx="6"/>
          <rect x="300" y="240" width="12" height="80" rx="6"/>
          <rect x="330" y="200" width="12" height="120" rx="6" fill="#60a5fa"/>
          <rect x="360" y="250" width="12" height="70" rx="6"/>
          <rect x="390" y="230" width="12" height="90" rx="6"/>
          <rect x="420" y="270" width="12" height="50" rx="6"/>
        </g>
      </g>
    </svg>
  `);
  await sharp(spatialUiSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'discipline-spatial-ui.webp'));
  console.log('✓ Created discipline-spatial-ui.webp');

  // 6. Discipline: Generative VFX & Houdini (800x600)
  const generativeVfxSvg = Buffer.from(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#050711"/>
      <g stroke="#818cf8" stroke-width="1.5" opacity="0.6">
        ${Array.from({ length: 18 })
          .map((_, i) => {
            const y = 80 + i * 26;
            return `<path d="M 50,${y} Q 200,${y - 40} 400,${y + 40} T 750,${y}" fill="none"/>`;
          })
          .join('')}
      </g>
      <circle cx="400" cy="300" r="140" fill="#4f46e5" opacity="0.25"/>
      <circle cx="400" cy="300" r="70" fill="#38bdf8" opacity="0.4"/>
    </svg>
  `);
  await sharp(generativeVfxSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'discipline-generative-vfx.webp'));
  console.log('✓ Created discipline-generative-vfx.webp');

  // 7. Leadership Portraits: Alex Vance (Founder & Executive Creative Director)
  const alexPortraitSvg = Buffer.from(`
    <svg width="600" height="750" viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgAlex" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="url(#bgAlex)"/>
      <circle cx="300" cy="270" r="130" fill="#334155"/>
      <ellipse cx="300" cy="560" rx="210" ry="160" fill="#1e293b"/>
      <!-- Creative lighting accents -->
      <circle cx="300" cy="270" r="130" fill="none" stroke="#38bdf8" stroke-width="4" opacity="0.6"/>
      <text x="300" y="290" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="64" text-anchor="middle">AV</text>
    </svg>
  `);
  await sharp(alexPortraitSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'director-alex-vance.webp'));

  // 8. Leadership Portraits: Maya Lin (Head of 3D & Technical Direction)
  const mayaPortraitSvg = Buffer.from(`
    <svg width="600" height="750" viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgMaya" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </linearGradient>
      </defs>
      <rect width="600" height="750" fill="url(#bgMaya)"/>
      <circle cx="300" cy="270" r="130" fill="#312e81"/>
      <ellipse cx="300" cy="560" rx="210" ry="160" fill="#1e1b4b"/>
      <!-- Lighting accents -->
      <circle cx="300" cy="270" r="130" fill="none" stroke="#a855f7" stroke-width="4" opacity="0.6"/>
      <text x="300" y="290" fill="#f8fafc" font-family="sans-serif" font-weight="bold" font-size="64" text-anchor="middle">ML</text>
    </svg>
  `);
  await sharp(mayaPortraitSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'director-maya-lin.webp'));

  // 9. Soundstage & Audio Wave Studio
  const soundStudioSvg = Buffer.from(`
    <svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="600" fill="#04060d"/>
      <g fill="#2563eb" opacity="0.7">
        ${Array.from({ length: 48 })
          .map((_, i) => {
            const h = 40 + Math.sin(i * 0.4) * 160 + Math.cos(i * 0.8) * 80;
            const y = 300 - Math.abs(h) / 2;
            return `<rect x="${60 + i * 23}" y="${y}" width="14" height="${Math.max(10, Math.abs(h))}" rx="7"/>`;
          })
          .join('')}
      </g>
      <text x="600" y="520" fill="#94a3b8" font-family="monospace" font-size="18" text-anchor="middle" letter-spacing="4">5.1 SURROUND &amp; DOLBY ATMOS SPATIAL SOUND MASTERING</text>
    </svg>
  `);
  await sharp(soundStudioSvg).webp({ quality: 95 }).toFile(path.join(outDir, 'studio-sound-booth.webp'));
  console.log('✓ Created studio-sound-booth.webp');

  console.log('All 9 MotionDesk Studio complementary assets generated successfully!');
}

generateAssets().catch(console.error);
