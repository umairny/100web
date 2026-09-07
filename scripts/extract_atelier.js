const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'src/assets/images/portfolio/atelier.png';
const outDir = 'public/images/atelier';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extractAll() {
  console.log('Extracting Atelier North Architecture assets...');

  // 1. Hero Fjord Cabin photograph:
  // x: 0 to 544, y: 35 to 345
  await sharp(src)
    .extract({ left: 0, top: 35, width: 544, height: 310 })
    .resize(1088, 620, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'hero-fjord-cabin.webp'));

  // 2. Positioning Icons:
  // Nordic Sensitivity: x: 80 to 140, y: 405 to 455
  await sharp(src)
    .extract({ left: 80, top: 405, width: 60, height: 50 })
    .resize(180, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'icon-nordic.webp'));

  // Contextual Integrity: x: 235 to 295, y: 405 to 455
  await sharp(src)
    .extract({ left: 235, top: 405, width: 60, height: 50 })
    .resize(180, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'icon-contextual.webp'));

  // Sustainable Innovation: x: 395 to 455, y: 405 to 455
  await sharp(src)
    .extract({ left: 395, top: 405, width: 60, height: 50 })
    .resize(180, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'icon-sustainable.webp'));

  // 3. Selected Work Architectural Projects:
  // Project 1: The Fjord Cabin (Left vertical, x: 37, top: 595, width: 148, height: 195)
  await sharp(src)
    .extract({ left: 37, top: 595, width: 148, height: 195 })
    .resize(444, 585, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-fjord-cabin-large.webp'));

  // Project 2: Urban Refuge (Center vertical, x: 192, top: 595, width: 148, height: 195)
  await sharp(src)
    .extract({ left: 192, top: 595, width: 148, height: 195 })
    .resize(444, 585, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-urban-refuge.webp'));

  // Project 3: Mountain Retreat A-frame (Top right, x: 348, top: 595, width: 148, height: 93)
  await sharp(src)
    .extract({ left: 348, top: 595, width: 148, height: 93 })
    .resize(444, 280, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-mountain-aframe.webp'));

  // Project 4: The Fjord Cabin Chalet (Mid right, x: 348, top: 697, width: 148, height: 93)
  await sharp(src)
    .extract({ left: 348, top: 697, width: 148, height: 93 })
    .resize(444, 280, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-fjord-chalet.webp'));

  // Project 5: Mountain Retreat Glass Front (Bottom left, x: 37, top: 800, width: 148, height: 155)
  await sharp(src)
    .extract({ left: 37, top: 800, width: 148, height: 155 })
    .resize(444, 465, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-mountain-glass.webp'));

  // Project 6: Mountain Retreat Black Timber (Bottom center, x: 192, top: 800, width: 148, height: 155)
  await sharp(src)
    .extract({ left: 192, top: 800, width: 148, height: 155 })
    .resize(444, 465, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-mountain-black.webp'));

  // Project 7: Mountain Retreat Deck/Interior (Bottom right, x: 348, top: 800, width: 148, height: 155)
  await sharp(src)
    .extract({ left: 348, top: 800, width: 148, height: 155 })
    .resize(444, 465, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'project-mountain-terrace.webp'));

  // 4. The Process Diagram:
  // x: 30 to 514, y: 1040 to 1200
  await sharp(src)
    .extract({ left: 30, top: 1040, width: 484, height: 140 })
    .resize(968, 280, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-diagram.webp'));

  // 5. Credible Outcomes:
  // Logos strip: x: 35 to 510, y: 1285 to 1325
  await sharp(src)
    .extract({ left: 35, top: 1285, width: 475, height: 40 })
    .resize(950, 80, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'architecture-logos.webp'));

  // Client Sarah J. portrait: x: 70, top: 1355, width: 90, height: 90
  await sharp(src)
    .extract({ left: 70, top: 1355, width: 90, height: 90 })
    .resize(270, 270, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'client-sarah.webp'));

  console.log('All Atelier North Architecture assets extracted successfully!');
}

extractAll().catch(e => {
  console.error(e);
  process.exit(1);
});
