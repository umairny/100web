const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'src/assets/images/portfolio/framelab.png';
const outDir = 'public/images/framelab';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extract() {
  console.log('Extracting FrameLab Photo assets...');

  // 1. Hero studio photoshoot image:
  // In the reference image (544px wide), hero right side shows studio lights and models.
  // x: 155 to 520, y: 55 to 325 (approx 365x270)
  await sharp(src)
    .extract({ left: 160, top: 58, width: 350, height: 265 })
    .resize(700, 530, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'hero-studio-shoot.webp'));

  // 2. Positioning Visual Identity image:
  // Right card in positioning: x ~ 275 to 510, y ~ 385 to 525 (approx 235x140)
  await sharp(src)
    .extract({ left: 275, top: 385, width: 235, height: 140 })
    .resize(470, 280, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'positioning-visual-identity.webp'));

  // 3. Selected Work Row 1:
  // Vogue: Naomi's Journey (x: 45 to 192, y: 600 to 790 -> width: 146, height: 190)
  // Let's crop just the photo: y: 600 to 750 (height: 150)
  await sharp(src)
    .extract({ left: 45, top: 600, width: 146, height: 150 })
    .resize(440, 450, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-vogue-naomi.webp'));

  // Harper's: Urban Canvas (x: 198 to 345, y: 600 to 750)
  await sharp(src)
    .extract({ left: 198, top: 600, width: 146, height: 150 })
    .resize(440, 450, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-harpers-urban.webp'));

  // Numéro: The Dancer (x: 351 to 498, y: 600 to 750)
  await sharp(src)
    .extract({ left: 351, top: 600, width: 146, height: 150 })
    .resize(440, 450, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-numero-dancer.webp'));

  // 4. Selected Work Row 2 (ELLE Magazine Covers):
  // ELLE Cover 1: Modern Grace (White dress): x: 45 to 192, y: 808 to 965
  await sharp(src)
    .extract({ left: 45, top: 808, width: 146, height: 155 })
    .resize(440, 465, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-elle-white.webp'));

  // ELLE Cover 2: Modern Grace (Red backdrop): x: 198 to 345, y: 808 to 965
  await sharp(src)
    .extract({ left: 198, top: 808, width: 146, height: 155 })
    .resize(440, 465, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-elle-red.webp'));

  // ELLE Cover 3: Modern Grace (Haute Couture Coat): x: 351 to 498, y: 808 to 965
  await sharp(src)
    .extract({ left: 351, top: 808, width: 146, height: 155 })
    .resize(440, 465, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'work-elle-black.webp'));

  // 5. The Process Steps Icons:
  // Step 1: Research & Concept (x: 70 to 125, y: 555 to 600 - wait, let's find y for Process)
  // Let's crop the entire process diagram bar: y: 1030 to 1260
  await sharp(src)
    .extract({ left: 20, top: 1030, width: 504, height: 215 })
    .resize(1008, 430, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-diagram-full.webp'));

  // 4 individual process circles:
  // Process 1: Research & Concept (x ~ 72 to 120, y ~ 1070 to 1120)
  await sharp(src)
    .extract({ left: 72, top: 1070, width: 50, height: 50 })
    .resize(150, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-step-1.webp'));

  // Process 2: Planning & Casting (x ~ 186 to 234, y ~ 1070 to 1120)
  await sharp(src)
    .extract({ left: 186, top: 1070, width: 50, height: 50 })
    .resize(150, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-step-2.webp'));

  // Process 3: Production & Direction (x ~ 300 to 348, y ~ 1070 to 1120)
  await sharp(src)
    .extract({ left: 300, top: 1070, width: 50, height: 50 })
    .resize(150, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-step-3.webp'));

  // Process 4: Post & Delivery (x ~ 416 to 464, y ~ 1070 to 1120)
  await sharp(src)
    .extract({ left: 416, top: 1070, width: 50, height: 50 })
    .resize(150, 150, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'process-step-4.webp'));

  // 6. Credible Outcomes:
  // Publisher logos strip: y ~ 1335 to 1380, x ~ 40 to 500
  await sharp(src)
    .extract({ left: 40, top: 1335, width: 460, height: 45 })
    .resize(920, 90, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'publisher-logos-strip.webp'));

  // 7. Editorial Magazine Spread:
  // Open book/magazine mockup: x ~ 285 to 475, y ~ 1445 to 1570
  await sharp(src)
    .extract({ left: 285, top: 1445, width: 190, height: 125 })
    .resize(570, 375, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'magazine-spread-1.webp'));

  console.log('All FrameLab Photo assets successfully extracted!');
}

extract().catch(e => {
  console.error(e);
  process.exit(1);
});
