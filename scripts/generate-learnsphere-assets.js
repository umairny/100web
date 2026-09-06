const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rawDir = path.resolve('src/assets/images/education/learnsphere');
const optDir = path.resolve('src/assets/optimized/education/learnsphere');

if (!fs.existsSync(optDir)) {
  fs.mkdirSync(optDir, { recursive: true });
}

async function processProgramImages() {
  console.log('Processing Program Images...');
  
  // 1. UI/UX: 1200x750 focused on the monitor and mobile wireframes
  await sharp(path.join(rawDir, 'learnsphere-uiux.png'))
    .resize(1200, 750, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(path.join(optDir, 'learnsphere-uiux.webp'));
  console.log('Created learnsphere-uiux.webp');

  // 2. Frontend: 1200x750 focused on dual screen IDE & browser
  await sharp(path.join(rawDir, 'learnsphere-frontend.png'))
    .resize(1200, 750, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(path.join(optDir, 'learnsphere-frontend.webp'));
  console.log('Created learnsphere-frontend.webp');

  // 3. Analytics: 1200x750 focused on dashboard charts
  await sharp(path.join(rawDir, 'learnsphere-analytics.png'))
    .resize(1200, 750, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(path.join(optDir, 'learnsphere-analytics.webp'));
  console.log('Created learnsphere-analytics.webp');

  // 4. Product Design: 1200x750 focused on laptop & tablet flows
  await sharp(path.join(rawDir, 'learnsphere-product.png'))
    .resize(1200, 750, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(path.join(optDir, 'learnsphere-product.webp'));
  console.log('Created learnsphere-product.webp');
}

async function generateProjectLabGraphics() {
  console.log('Generating Project Lab Visual Graphics...');

  // Project 1: Hands-on Assignments (Clipboard, checklist, badge, pencil)
  const assignmentsSvg = `
  <svg width="600" height="380" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#eff6ff"/>
        <stop offset="100%" stop-color="#dbeafe"/>
      </linearGradient>
      <linearGradient id="blueG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
      <filter id="sh" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1e3a8a" flood-opacity="0.12"/>
      </filter>
    </defs>
    <rect width="600" height="380" rx="16" fill="url(#bg1)"/>
    <circle cx="510" cy="80" r="90" fill="#bfdbfe" opacity="0.4"/>
    <circle cx="90" cy="300" r="70" fill="#bfdbfe" opacity="0.3"/>
    
    <!-- Main Clipboard Document -->
    <g transform="translate(140, 45)" filter="url(#sh)">
      <!-- Board backing -->
      <rect x="0" y="20" width="320" height="270" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <!-- Clip top -->
      <rect x="110" y="8" width="100" height="24" rx="8" fill="url(#blueG)"/>
      <circle cx="160" cy="20" r="5" fill="#ffffff"/>
      
      <!-- Checklist Rows -->
      <!-- Row 1 -->
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="24" height="24" rx="6" fill="#dcfce7"/>
        <path d="M6 12L10 16L18 8" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <rect x="36" y="4" width="140" height="8" rx="4" fill="#334155"/>
        <rect x="36" y="15" width="90" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="210" y="4" width="48" height="16" rx="8" fill="#dbeafe"/>
        <text x="234" y="15" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Passed</text>
      </g>

      <!-- Row 2 -->
      <g transform="translate(30, 110)">
        <rect x="0" y="0" width="24" height="24" rx="6" fill="#dcfce7"/>
        <path d="M6 12L10 16L18 8" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <rect x="36" y="4" width="160" height="8" rx="4" fill="#334155"/>
        <rect x="36" y="15" width="110" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="210" y="4" width="48" height="16" rx="8" fill="#dbeafe"/>
        <text x="234" y="15" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Passed</text>
      </g>

      <!-- Row 3 -->
      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="24" height="24" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="12" cy="12" r="3" fill="#2563eb"/>
        <rect x="36" y="4" width="130" height="8" rx="4" fill="#0f172a"/>
        <rect x="36" y="15" width="80" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="200" y="4" width="58" height="16" rx="8" fill="#fef3c7"/>
        <text x="229" y="15" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#b45309" text-anchor="middle">In Review</text>
      </g>

      <!-- Row 4 -->
      <g transform="translate(30, 210)">
        <rect x="0" y="0" width="24" height="24" rx="6" fill="#f1f5f9"/>
        <rect x="36" y="4" width="150" height="8" rx="4" fill="#64748b"/>
        <rect x="36" y="15" width="70" height="5" rx="2.5" fill="#cbd5e1"/>
        <rect x="205" y="4" width="53" height="16" rx="8" fill="#f1f5f9"/>
        <text x="231" y="15" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#64748b" text-anchor="middle">Next Up</text>
      </g>
    </g>

    <!-- Floating Score Badge -->
    <g transform="translate(390, 240)" filter="url(#sh)">
      <rect width="110" height="46" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <circle cx="26" cy="23" r="14" fill="#16a34a"/>
      <path d="M21 23L25 27L31 19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="50" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">98%</text>
      <text x="50" y="34" font-family="Arial, sans-serif" font-size="9" fill="#64748b">Weekly Score</text>
    </g>
  </svg>
  `;

  // Project 2: Capstone Projects (Laptop workspace with dark editor and live UI preview)
  const capstoneSvg = `
  <svg width="600" height="380" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
      <filter id="sh2" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#0f172a" flood-opacity="0.18"/>
      </filter>
    </defs>
    <rect width="600" height="380" rx="16" fill="url(#bg2)"/>
    <circle cx="100" cy="90" r="80" fill="#cbd5e1" opacity="0.3"/>
    <circle cx="500" cy="290" r="100" fill="#93c5fd" opacity="0.25"/>
    
    <!-- Laptop -->
    <g transform="translate(100, 50)" filter="url(#sh2)">
      <!-- Screen bezel -->
      <rect x="30" y="10" width="340" height="210" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
      <!-- Web camera -->
      <circle cx="200" cy="18" r="2.5" fill="#64748b"/>
      
      <!-- Screen Display -->
      <rect x="42" y="26" width="316" height="182" rx="4" fill="#090d16"/>
      
      <!-- Window controls -->
      <circle cx="56" cy="38" r="4" fill="#ef4444"/>
      <circle cx="68" cy="38" r="4" fill="#f59e0b"/>
      <circle cx="80" cy="38" r="4" fill="#10b981"/>
      <rect x="100" y="34" width="80" height="8" rx="4" fill="#1e293b"/>
      
      <!-- Split View inside Screen: Left Code, Right Live UI -->
      <!-- Left Code Panel -->
      <g transform="translate(48, 52)">
        <rect width="144" height="148" fill="#0f172a" rx="4"/>
        <rect x="10" y="12" width="60" height="5" rx="2.5" fill="#38bdf8"/>
        <rect x="10" y="24" width="90" height="5" rx="2.5" fill="#a855f7"/>
        <rect x="20" y="36" width="70" height="5" rx="2.5" fill="#34d399"/>
        <rect x="30" y="48" width="85" height="5" rx="2.5" fill="#fbbf24"/>
        <rect x="30" y="60" width="50" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="20" y="72" width="100" height="5" rx="2.5" fill="#38bdf8"/>
        <rect x="10" y="84" width="40" height="5" rx="2.5" fill="#a855f7"/>
        <rect x="20" y="96" width="80" height="5" rx="2.5" fill="#34d399"/>
        <rect x="10" y="108" width="60" height="5" rx="2.5" fill="#94a3b8"/>
      </g>
      
      <!-- Right Live UI Preview -->
      <g transform="translate(200, 52)">
        <rect width="150" height="148" fill="#ffffff" rx="4"/>
        <!-- Hero in preview -->
        <rect x="8" y="10" width="134" height="40" rx="4" fill="#2563eb"/>
        <rect x="16" y="20" width="60" height="6" rx="3" fill="#ffffff"/>
        <rect x="16" y="30" width="40" height="4" rx="2" fill="#bfdbfe"/>
        <!-- Cards in preview -->
        <rect x="8" y="58" width="62" height="38" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="14" y="66" width="30" height="5" rx="2.5" fill="#0f172a"/>
        <rect x="14" y="75" width="48" height="4" rx="2" fill="#64748b"/>
        
        <rect x="78" y="58" width="64" height="38" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="84" y="66" width="30" height="5" rx="2.5" fill="#2563eb"/>
        <rect x="84" y="75" width="48" height="4" rx="2" fill="#64748b"/>
        
        <!-- Live Chart preview -->
        <path d="M12 130 Q40 115 70 125 T138 108" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="138" cy="108" r="3" fill="#2563eb"/>
      </g>

      <!-- Laptop Base -->
      <path d="M0 220 L400 220 L370 232 L30 232 Z" fill="#94a3b8"/>
      <rect x="160" y="220" width="80" height="6" rx="3" fill="#64748b"/>
    </g>
  </svg>
  `;

  // Project 3: Critique Sessions (Collaborative speech bubbles, avatars, constructive reviews)
  const critiqueSvg = `
  <svg width="600" height="380" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f5f3ff"/>
        <stop offset="100%" stop-color="#ede9fe"/>
      </linearGradient>
      <linearGradient id="purpleG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6"/>
        <stop offset="100%" stop-color="#6d28d9"/>
      </linearGradient>
      <filter id="sh3" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#581c87" flood-opacity="0.12"/>
      </filter>
    </defs>
    <rect width="600" height="380" rx="16" fill="url(#bg3)"/>
    <circle cx="520" cy="80" r="90" fill="#ddd6fe" opacity="0.4"/>
    <circle cx="80" cy="300" r="70" fill="#ddd6fe" opacity="0.3"/>

    <!-- Left Mentor Comment Bubble -->
    <g transform="translate(70, 60)" filter="url(#sh3)">
      <rect width="250" height="100" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M40 100 L30 115 L55 100 Z" fill="#ffffff"/>
      <circle cx="36" cy="34" r="16" fill="url(#purpleG)"/>
      <text x="36" y="39" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">SC</text>
      
      <text x="62" y="32" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Sarah Chen (Mentor)</text>
      <text x="62" y="46" font-family="Arial, sans-serif" font-size="9" fill="#8b5cf6">Senior UX Lead • 10m ago</text>
      <rect x="26" y="60" width="200" height="6" rx="3" fill="#334155"/>
      <rect x="26" y="72" width="160" height="6" rx="3" fill="#64748b"/>
    </g>

    <!-- Right Student Reply Bubble -->
    <g transform="translate(270, 150)" filter="url(#sh3)">
      <rect width="260" height="96" rx="16" fill="#2563eb"/>
      <path d="M220 96 L235 110 L210 96 Z" fill="#2563eb"/>
      <circle cx="36" cy="32" r="16" fill="#ffffff"/>
      <text x="36" y="37" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">AL</text>
      
      <text x="62" y="30" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Aisha Lin (Student)</text>
      <text x="62" y="44" font-family="Arial, sans-serif" font-size="9" fill="#bfdbfe">UI/UX Cohort • Just now</text>
      <rect x="26" y="58" width="208" height="6" rx="3" fill="#ffffff"/>
      <rect x="26" y="70" width="150" height="6" rx="3" fill="#bfdbfe"/>
    </g>

    <!-- Bottom Action Pill: Live Critique Room -->
    <g transform="translate(160, 280)" filter="url(#sh3)">
      <rect width="280" height="48" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <circle cx="26" cy="24" r="8" fill="#10b981"/>
      <circle cx="26" cy="24" r="4" fill="#ffffff"/>
      <text x="44" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Live Critique: 14 Active</text>
      <rect x="205" y="12" width="60" height="24" rx="12" fill="#eff6ff"/>
      <text x="235" y="28" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Join</text>
    </g>
  </svg>
  `;

  // Project 4: Portfolio Building (Showcase card with 3 projects, live preview, verification badge)
  const portfolioSvg = `
  <svg width="600" height="380" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff7ed"/>
        <stop offset="100%" stop-color="#ffedd5"/>
      </linearGradient>
      <linearGradient id="amberG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
      <filter id="sh4" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#7c2d12" flood-opacity="0.1"/>
      </filter>
    </defs>
    <rect width="600" height="380" rx="16" fill="url(#bg4)"/>
    <circle cx="510" cy="80" r="90" fill="#fed7aa" opacity="0.4"/>
    <circle cx="90" cy="300" r="70" fill="#fed7aa" opacity="0.3"/>

    <!-- Browser Window Showcase -->
    <g transform="translate(80, 45)" filter="url(#sh4)">
      <rect width="440" height="270" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <!-- Window Bar -->
      <rect width="440" height="36" rx="14" fill="#f8fafc"/>
      <rect y="26" width="440" height="10" fill="#f8fafc"/>
      <line x1="0" y1="36" x2="440" y2="36" stroke="#e2e8f0" stroke-width="1"/>
      
      <circle cx="20" cy="18" r="4" fill="#ef4444"/>
      <circle cx="32" cy="18" r="4" fill="#f59e0b"/>
      <circle cx="44" cy="18" r="4" fill="#10b981"/>
      
      <rect x="70" y="10" width="220" height="16" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="180" y="22" font-family="Arial, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">learnsphere.me/aisha-portfolio</text>

      <!-- Profile Header inside Portfolio -->
      <g transform="translate(24, 52)">
        <circle cx="22" cy="22" r="18" fill="#2563eb"/>
        <text x="22" y="27" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">A</text>
        <rect x="50" y="10" width="100" height="9" rx="4.5" fill="#0f172a"/>
        <rect x="50" y="24" width="160" height="6" rx="3" fill="#64748b"/>
        <rect x="300" y="12" width="90" height="22" rx="11" fill="#dcfce7"/>
        <text x="345" y="27" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">Verified Portfolio</text>
      </g>

      <!-- 3 Showcase Cards inside -->
      <g transform="translate(24, 110)">
        <!-- Card 1 -->
        <rect x="0" y="0" width="120" height="135" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="0" y="0" width="120" height="65" rx="8" fill="#dbeafe"/>
        <rect x="12" y="76" width="70" height="7" rx="3.5" fill="#0f172a"/>
        <rect x="12" y="88" width="96" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="12" y="108" width="50" height="14" rx="4" fill="#2563eb"/>
        <text x="37" y="118" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Case Study</text>

        <!-- Card 2 -->
        <rect x="136" y="0" width="120" height="135" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="136" y="0" width="120" height="65" rx="8" fill="#fef3c7"/>
        <rect x="148" y="76" width="70" height="7" rx="3.5" fill="#0f172a"/>
        <rect x="148" y="88" width="96" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="148" y="108" width="50" height="14" rx="4" fill="#d97706"/>
        <text x="173" y="118" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Prototype</text>

        <!-- Card 3 -->
        <rect x="272" y="0" width="120" height="135" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="272" y="0" width="120" height="65" rx="8" fill="#f3e8ff"/>
        <rect x="284" y="76" width="70" height="7" rx="3.5" fill="#0f172a"/>
        <rect x="284" y="88" width="96" height="5" rx="2.5" fill="#94a3b8"/>
        <rect x="284" y="108" width="50" height="14" rx="4" fill="#9333ea"/>
        <text x="309" y="118" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Figma File</text>
      </g>
    </g>
  </svg>
  `;

  // Write all 4 project lab graphics
  await sharp(Buffer.from(assignmentsSvg)).webp({ quality: 90 }).toFile(path.join(optDir, 'project-assignments.webp'));
  console.log('Created project-assignments.webp');

  await sharp(Buffer.from(capstoneSvg)).webp({ quality: 90 }).toFile(path.join(optDir, 'project-capstone.webp'));
  console.log('Created project-capstone.webp');

  await sharp(Buffer.from(critiqueSvg)).webp({ quality: 90 }).toFile(path.join(optDir, 'project-critique.webp'));
  console.log('Created project-critique.webp');

  await sharp(Buffer.from(portfolioSvg)).webp({ quality: 90 }).toFile(path.join(optDir, 'project-portfolio.webp'));
  console.log('Created project-portfolio.webp');
}

async function generateGraduationBannerGraphic() {
  console.log('Generating Graduation Banner Graphic...');

  const bannerSvg = `
  <svg width="480" height="340" viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="capG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
      <linearGradient id="tasselG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
      <linearGradient id="diplomaG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f1f5f9"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
      <filter id="capSh" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#020617" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Star sparkles -->
    <g fill="#93c5fd" opacity="0.8">
      <path d="M90 60 L93 72 L105 75 L93 78 L90 90 L87 78 L75 75 L87 72 Z"/>
      <path d="M390 90 L392 98 L400 100 L392 102 L390 110 L388 102 L380 100 L388 98 Z"/>
      <path d="M360 220 L363 230 L373 233 L363 236 L360 246 L357 236 L347 233 L357 230 Z"/>
    </g>

    <!-- Glowing backdrop -->
    <circle cx="240" cy="170" r="120" fill="#2563eb" opacity="0.25" filter="url(#glow)"/>

    <!-- 3D Mortarboard / Graduation Cap -->
    <g transform="translate(110, 40)" filter="url(#capSh)">
      <!-- Cap Base / Skullcap -->
      <path d="M70 110 C70 145 190 145 190 110 L180 150 C180 175 80 175 80 150 Z" fill="#1e3a8a"/>
      <path d="M80 140 C80 165 180 165 180 140 L176 155 C176 172 84 172 84 155 Z" fill="#172554"/>

      <!-- Diamond Cap Top -->
      <polygon points="130,40 250,90 130,135 10,90" fill="url(#capG)"/>
      <!-- Edge highlights -->
      <polygon points="130,40 250,90 250,98 130,48" fill="#60a5fa" opacity="0.6"/>
      <polygon points="130,135 250,90 250,98 130,143" fill="#1e40af"/>
      
      <!-- Top Center Button -->
      <circle cx="130" cy="88" r="7" fill="url(#tasselG)"/>

      <!-- Golden Tassel Ribbon & Fringes -->
      <path d="M130 88 C170 95 210 120 225 150" fill="none" stroke="url(#tasselG)" stroke-width="4.5" stroke-linecap="round"/>
      <g transform="translate(225, 150)">
        <polygon points="0,0 -8,25 8,25" fill="url(#tasselG)"/>
        <rect x="-3" y="-3" width="6" height="6" rx="3" fill="#fef08a"/>
      </g>
    </g>

    <!-- Rolled Diploma Scroll with Red/Gold Ribbon -->
    <g transform="translate(80, 210)" filter="url(#capSh)">
      <!-- Diploma cylinder -->
      <rect x="50" y="10" width="180" height="34" rx="6" fill="url(#diplomaG)"/>
      <ellipse cx="50" cy="27" rx="8" ry="17" fill="#e2e8f0"/>
      <ellipse cx="230" cy="27" rx="8" ry="17" fill="#ffffff"/>
      <ellipse cx="50" cy="27" rx="5" ry="12" fill="#cbd5e1"/>
      
      <!-- Tied Ribbon around scroll -->
      <rect x="130" y="8" width="22" height="38" rx="3" fill="#dc2626"/>
      <path d="M141 46 L130 70 L141 62 L152 70 Z" fill="#b91c1c"/>
      <circle cx="141" cy="27" r="6" fill="#facc15"/>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(bannerSvg)).webp({ quality: 92 }).toFile(path.join(optDir, 'banner-graduation.webp'));
  console.log('Created banner-graduation.webp');
}

async function copyStudentAvatars() {
  console.log('Creating/Copying Student Avatars...');
  
  // Aisha student avatar: use teacher-aisha.jpg from scholarspring
  const aishaSrc = path.resolve('src/assets/optimized/education/scholarspring/teacher-aisha.jpg');
  if (fs.existsSync(aishaSrc)) {
    await sharp(aishaSrc)
      .resize(200, 200, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(optDir, 'student-aisha.webp'));
    console.log('Created student-aisha.webp');
  }

  // James student avatar: use avatar-jason.jpg
  const jamesSrc = path.resolve('src/assets/optimized/ecommerce/cartbloom/avatar-jason.jpg');
  if (fs.existsSync(jamesSrc)) {
    await sharp(jamesSrc)
      .resize(200, 200, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(optDir, 'student-james.webp'));
    console.log('Created student-james.webp');
  }

  // Emily student avatar: use elena.webp from beauty serenity
  const emilySrc = path.resolve('src/assets/optimized/beauty/serenity/elena.webp');
  if (fs.existsSync(emilySrc)) {
    await sharp(emilySrc)
      .resize(200, 200, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(optDir, 'student-emily.webp'));
    console.log('Created student-emily.webp');
  }
}

async function generateMentorSupportGraphics() {
  console.log('Generating Mentor Support Graphics...');

  const officeHoursSvg = `
  <svg width="400" height="260" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ohBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#eff6ff"/>
        <stop offset="100%" stop-color="#dbeafe"/>
      </linearGradient>
      <linearGradient id="calHead" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
      <filter id="ohSh" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#1e3a8a" flood-opacity="0.12"/>
      </filter>
    </defs>
    <rect width="400" height="260" rx="14" fill="url(#ohBg)"/>
    <circle cx="340" cy="50" r="50" fill="#bfdbfe" opacity="0.4"/>
    <circle cx="60" cy="200" r="40" fill="#bfdbfe" opacity="0.3"/>

    <!-- Calendar Card -->
    <g transform="translate(100, 30)" filter="url(#ohSh)">
      <rect width="200" height="180" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Header -->
      <rect width="200" height="42" rx="14" fill="url(#calHead)"/>
      <rect y="30" width="200" height="12" fill="url(#calHead)"/>
      <text x="100" y="27" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Weekly Office Hours</text>
      
      <!-- Hanging rings -->
      <rect x="40" y="-8" width="12" height="16" rx="6" fill="#64748b"/>
      <rect x="148" y="-8" width="12" height="16" rx="6" fill="#64748b"/>

      <!-- Event blocks -->
      <g transform="translate(16, 56)">
        <!-- Event 1: Today Live -->
        <rect width="168" height="44" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
        <circle cx="20" cy="22" r="6" fill="#ef4444"/>
        <circle cx="20" cy="22" r="3" fill="#ffffff"/>
        <text x="34" y="19" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Live Q&amp;A Session</text>
        <text x="34" y="32" font-family="Arial, sans-serif" font-size="9" fill="#2563eb">Today • 4:00 PM EST</text>
      </g>

      <g transform="translate(16, 110)">
        <!-- Event 2: Portfolio Review -->
        <rect width="168" height="44" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <circle cx="20" cy="22" r="6" fill="#10b981"/>
        <text x="34" y="19" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Design Teardown</text>
        <text x="34" y="32" font-family="Arial, sans-serif" font-size="9" fill="#64748b">Thursday • 6:00 PM EST</text>
      </g>
    </g>
  </svg>
  `;

  const feedbackSvg = `
  <svg width="400" height="260" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fbBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f0fdf4"/>
        <stop offset="100%" stop-color="#dcfce7"/>
      </linearGradient>
      <filter id="fbSh" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#14532d" flood-opacity="0.1"/>
      </filter>
    </defs>
    <rect width="400" height="260" rx="14" fill="url(#fbBg)"/>
    <circle cx="340" cy="50" r="50" fill="#bbf7d0" opacity="0.4"/>
    <circle cx="60" cy="200" r="40" fill="#bbf7d0" opacity="0.3"/>

    <!-- Feedback Note Card -->
    <g transform="translate(80, 30)" filter="url(#fbSh)">
      <rect width="240" height="180" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      
      <!-- Top Bar with Verified Badge -->
      <g transform="translate(18, 16)">
        <rect width="80" height="22" rx="11" fill="#dcfce7"/>
        <path d="M12 11 L16 15 L22 8" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="48" y="15" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">Approved</text>
        
        <g transform="translate(155, 0)">
          <text x="0" y="16" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">★★★★★</text>
        </g>
      </g>

      <!-- Feedback snippet box -->
      <g transform="translate(18, 50)">
        <rect width="204" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <rect x="12" y="14" width="180" height="6" rx="3" fill="#334155"/>
        <rect x="12" y="26" width="150" height="6" rx="3" fill="#475569"/>
        <rect x="12" y="38" width="120" height="6" rx="3" fill="#64748b"/>
        <rect x="12" y="50" width="80" height="5" rx="2.5" fill="#2563eb"/>
      </g>

      <!-- Mentor signature row -->
      <g transform="translate(18, 130)">
        <circle cx="16" cy="16" r="14" fill="#1d4ed8"/>
        <text x="16" y="20" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">DC</text>
        <text x="38" y="14" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">David Chen</text>
        <text x="38" y="26" font-family="Arial, sans-serif" font-size="9" fill="#64748b">Staff Frontend Architect</text>
      </g>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(officeHoursSvg)).webp({ quality: 90 }).toFile(path.join(optDir, 'mentor-office-hours.webp'));
  console.log('Created mentor-office-hours.webp');

  await sharp(Buffer.from(feedbackSvg)).webp({ quality: 90 }).toFile(path.join(optDir, 'mentor-feedback.webp'));
  console.log('Created mentor-feedback.webp');
}

async function run() {
  try {
    await processProgramImages();
    await generateProjectLabGraphics();
    await generateGraduationBannerGraphic();
    await generateMentorSupportGraphics();
    await copyStudentAvatars();
    console.log('ALL LEARNSPHERE ASSETS CREATED SUCCESSFULLY!');
  } catch (err) {
    console.error('Error generating assets:', err);
    process.exit(1);
  }
}

run();
