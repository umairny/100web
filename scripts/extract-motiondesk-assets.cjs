const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'F:/100web/src/assets/images/portfolio/motiondesk.jpg';
const outDir = 'F:/100web/public/images/motiondesk';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('Extracting high-resolution visual assets from motiondesk.jpg...');

  // 1. Hero fluid glass ribbon banner (Full width 3072 x 1250)
  await sharp(src)
    .extract({ left: 0, top: 0, width: 3072, height: 1250 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'hero-fluid-glass.webp'));
  console.log('✓ Extracted hero-fluid-glass.webp');

  // 2. Center Flagship Card: Project Alpha visual (fluid orb)
  // In the center card (left: 630 to 2100, top: 1550 to 2380)
  await sharp(src)
    .extract({ left: 635, top: 1555, width: 1460, height: 800 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-alpha-card.webp'));
  console.log('✓ Extracted project-alpha-card.webp');

  // 3. Right Card: Beta Corp visual
  await sharp(src)
    .extract({ left: 2155, top: 1555, width: 917, height: 800 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-beta-card.webp'));
  console.log('✓ Extracted project-beta-card.webp');

  // 4. Left Card: Gamma point cloud
  await sharp(src)
    .extract({ left: 0, top: 1555, width: 560, height: 800 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-gamma-card.webp'));
  console.log('✓ Extracted project-gamma-card.webp');

  // 5. Thumbnails strip (y: 2440 to 2730)
  // Thumb 1: Fluid glass ribbons
  await sharp(src)
    .extract({ left: 635, top: 2440, width: 530, height: 285 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-1-fluid-ribbons.webp'));

  // Thumb 2: Iridescent sphere
  await sharp(src)
    .extract({ left: 1205, top: 2440, width: 530, height: 285 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-2-iridescent-sphere.webp'));

  // Thumb 3: Particle vortex
  await sharp(src)
    .extract({ left: 1775, top: 2440, width: 530, height: 285 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-3-particle-vortex.webp'));

  // Thumb 4: Glass prism play button
  await sharp(src)
    .extract({ left: 2345, top: 2440, width: 530, height: 285 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-4-glass-prism.webp'));
  console.log('✓ Extracted 4 project thumbnails');

  // 6. Client Logos 4x4 Grid
  await sharp(src)
    .extract({ left: 635, top: 3680, width: 865, height: 750 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'clients-logo-grid.webp'));
  console.log('✓ Extracted clients-logo-grid.webp');

  console.log('All MotionDesk visual assets extracted successfully!');
}

run().catch(console.error);
