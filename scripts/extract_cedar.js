const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'src/assets/images/portfolio/cedar.png';
const outDir = 'public/images/cedar';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extractAll() {
  console.log('Extracting Cedar UX Consultant assets...');

  // 1. Logo tree icon
  await sharp(src)
    .extract({ left: 35, top: 16, width: 30, height: 30 })
    .resize(120, 120, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'logo-tree.webp'));

  // 2. Majestic Cedar Tree with roots illustration
  // x: 155 to 445, y: 45 to 345
  await sharp(src)
    .extract({ left: 155, top: 45, width: 290, height: 300 })
    .resize(870, 900, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'hero-cedar-tree.webp'));

  // 3. Three Positioning Cards
  // Card 1: Ecosystem Thinking (x: 48, top: 375, width: 146, height: 180)
  await sharp(src)
    .extract({ left: 48, top: 375, width: 146, height: 180 })
    .resize(438, 540, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'positioning-card-1.webp'));

  // Card 2: Data-Driven Empathy (x: 198, top: 375, width: 146, height: 180)
  await sharp(src)
    .extract({ left: 198, top: 375, width: 146, height: 180 })
    .resize(438, 540, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'positioning-card-2.webp'));

  // Card 3: Actionable Strategy (x: 348, top: 375, width: 146, height: 180)
  await sharp(src)
    .extract({ left: 348, top: 375, width: 146, height: 180 })
    .resize(438, 540, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'positioning-card-3.webp'));

  // 4. Selected Work Case Study UI mockups
  // Case Study 1: Fintech Revolution (x: 275, top: 615, width: 220, height: 115)
  await sharp(src)
    .extract({ left: 275, top: 615, width: 220, height: 115 })
    .resize(660, 345, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'case-fintech-dashboard.webp'));

  // Case Study 2: SaaS Growth Engine (x: 275, top: 760, width: 220, height: 110)
  await sharp(src)
    .extract({ left: 275, top: 760, width: 220, height: 110 })
    .resize(660, 330, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'case-saas-core.webp'));

  // Case Study 3: Health Tech Impact (x: 275, top: 890, width: 220, height: 115)
  await sharp(src)
    .extract({ left: 275, top: 890, width: 220, height: 115 })
    .resize(660, 345, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'case-healthtech.webp'));

  // 5. The Cedar Method process diagram
  await sharp(src)
    .extract({ left: 20, top: 1040, width: 504, height: 215 })
    .resize(1008, 430, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-cedar-method.webp'));

  // 6. Credible Outcomes:
  // Client logos strip: x: 40, top: 1298, width: 464, height: 40
  await sharp(src)
    .extract({ left: 40, top: 1298, width: 464, height: 40 })
    .resize(928, 80, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'client-logos.webp'));

  // Testimonial card with portrait: x: 40, top: 1348, width: 464, height: 125
  await sharp(src)
    .extract({ left: 40, top: 1348, width: 464, height: 125 })
    .resize(928, 250, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'testimonial-card.webp'));

  // Executive photo avatar: x: 50, top: 1355, width: 125, height: 115
  await sharp(src)
    .extract({ left: 50, top: 1355, width: 125, height: 115 })
    .resize(375, 345, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'client-executive.webp'));

  console.log('All Cedar UX Consultant assets extracted successfully!');
}

extractAll().catch(e => {
  console.error(e);
  process.exit(1);
});
