const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'F:/100web/src/assets/images/portfolio/inkhouse.png';
const outDir = 'F:/100web/public/images/inkhouse';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extract() {
  console.log('Extracting Inkhouse assets from inkhouse.png...');

  // 1. Hero Calligraphy & Fluid Ink Art (Right side of hero)
  // In 544x1952: top: ~50 to ~320, left: ~300 to ~530
  await sharp(src)
    .extract({ left: 300, top: 45, width: 235, height: 285 })
    .resize(600, 720, { fit: 'contain', background: '#fbf8f3' })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'hero-ink-art.webp'));
  console.log('✓ Extracted hero-ink-art.webp');

  // 2. Case study 1 (Ecommerce checkout)
  // In 544x1952: y is around 635, left: 40, width: 145, height: 130
  await sharp(src)
    .extract({ left: 42, top: 625, width: 140, height: 130 })
    .resize(500, 460, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'case-checkout.webp'));
  console.log('✓ Extracted case-checkout.webp');

  // 3. Case study 2 (SaaS Free-trial)
  await sharp(src)
    .extract({ left: 202, top: 625, width: 140, height: 130 })
    .resize(500, 460, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'case-saas.webp'));
  console.log('✓ Extracted case-saas.webp');

  // 4. Case study 3 (B2B Nurture)
  await sharp(src)
    .extract({ left: 362, top: 625, width: 140, height: 130 })
    .resize(500, 460, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'case-b2b.webp'));
  console.log('✓ Extracted case-b2b.webp');

  // 5. Six project thumbnails from carousel (y: 895 to 975)
  // The row has 6 thumbnails
  const thumbWidth = 65;
  for (let i = 0; i < 6; i++) {
    const left = 45 + i * 76;
    await sharp(src)
      .extract({ left: Math.min(left, 544 - thumbWidth), top: 895, width: thumbWidth, height: 80 })
      .resize(260, 320, { fit: 'cover' })
      .webp({ quality: 95 })
      .toFile(path.join(outDir, `thumb-${i + 1}.webp`));
  }
  console.log('✓ Extracted 6 project thumbnails');

  // 6. Testimonial Avatar (Anna V.)
  // y is around 1350 to 1420
  await sharp(src)
    .extract({ left: 98, top: 1360, width: 50, height: 50 })
    .resize(160, 160, { fit: 'cover' })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'client-anna.webp'));
  console.log('✓ Extracted client-anna.webp');

  console.log('All Inkhouse assets extracted successfully!');
}

extract().catch(console.error);
