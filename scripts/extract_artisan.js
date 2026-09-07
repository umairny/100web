const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'src/assets/images/portfolio/artisan.png';
const outDir = 'public/images/artisan';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extractAll() {
  console.log('Extracting Artisan Objects assets...');

  // 1. Hero potter at the wheel:
  // x: 0 to 544, y: 35 to 315
  await sharp(src)
    .extract({ left: 0, top: 35, width: 544, height: 280 })
    .resize(1088, 560, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'hero-potter-wheel.webp'));

  // 2. Three Positioning Manifesto Icons:
  // Time & Patience (Hourglass): x: 90 to 145, y: 395 to 450
  await sharp(src)
    .extract({ left: 90, top: 395, width: 55, height: 55 })
    .resize(165, 165, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'icon-time.webp'));

  // Material Integrity (Chisel & Block): x: 245 to 300, y: 395 to 450
  await sharp(src)
    .extract({ left: 245, top: 395, width: 55, height: 55 })
    .resize(165, 165, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'icon-material.webp'));

  // The Human Touch (Hand): x: 400 to 455, y: 395 to 450
  await sharp(src)
    .extract({ left: 400, top: 395, width: 55, height: 55 })
    .resize(165, 165, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'icon-touch.webp'));

  // 3. Selected Work Projects:
  // Collection 1: The Aegean Series (Ceramic vase on timber): x: 35 to 270, y: 605 to 830
  await sharp(src)
    .extract({ left: 35, top: 605, width: 235, height: 225 })
    .resize(705, 675, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-aegean-vase.webp'));

  // Collection 2: Walnut & Brass Table: x: 275 to 510, y: 605 to 770
  await sharp(src)
    .extract({ left: 275, top: 605, width: 235, height: 165 })
    .resize(705, 495, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-walnut-table.webp'));

  // Collection 3: Loom-Woven Textiles: x: 275 to 510, y: 850 to 975
  await sharp(src)
    .extract({ left: 275, top: 850, width: 235, height: 125 })
    .resize(705, 375, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-loom-textiles.webp'));

  // 4. The Process Icons:
  // Step 1: Concept & Sketch: x: 50 to 110, y: 1100 to 1170
  await sharp(src)
    .extract({ left: 50, top: 1100, width: 60, height: 70 })
    .resize(180, 210, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-sketch.webp'));

  // Step 2: Material Selection: x: 140 to 205, y: 1100 to 1170
  await sharp(src)
    .extract({ left: 140, top: 1100, width: 65, height: 70 })
    .resize(195, 210, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-material.webp'));

  // Step 3: Making & Refinement: x: 235 to 300, y: 1100 to 1170
  await sharp(src)
    .extract({ left: 235, top: 1100, width: 65, height: 70 })
    .resize(195, 210, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-making.webp'));

  // Step 4: Finishing & Curation: x: 330 to 395, y: 1100 to 1170
  await sharp(src)
    .extract({ left: 330, top: 1100, width: 65, height: 70 })
    .resize(195, 210, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-finishing.webp'));

  // Step 5: Final Object: x: 425 to 490, y: 1100 to 1170
  await sharp(src)
    .extract({ left: 425, top: 1100, width: 65, height: 70 })
    .resize(195, 210, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-final.webp'));

  // Full process timeline flow banner:
  await sharp(src)
    .extract({ left: 25, top: 1080, width: 494, height: 160 })
    .resize(988, 320, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-flow-banner.webp'));

  // 5. Credible Outcomes:
  // Collector Sarah J portrait: x: 395, top: 1390, width: 95, height: 95
  await sharp(src)
    .extract({ left: 395, top: 1390, width: 95, height: 95 })
    .resize(285, 285, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'collector-sarah.webp'));

  // Press logos (Monocle, Dezeen, World of Interiors): x: 135 to 415, y: 1515 to 1550
  await sharp(src)
    .extract({ left: 135, top: 1515, width: 280, height: 35 })
    .resize(560, 70, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'press-logos.webp'));

  // 6. Inquiry Studio ceramics photo:
  // x: 45 to 215, y: 1660 to 1820
  await sharp(src)
    .extract({ left: 45, top: 1660, width: 170, height: 160 })
    .resize(510, 480, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'inquiry-studio-craft.webp'));

  console.log('All Artisan Objects assets extracted successfully!');
}

extractAll().catch(e => {
  console.error(e);
  process.exit(1);
});
