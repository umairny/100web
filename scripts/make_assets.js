const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processAssets() {
  const dir = 'public/images/inkhouse';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log('Generating high-density assets...');

  // 1. Upscale and enhance pillars
  await sharp(path.join(dir, 'pillar-human.webp'))
    .resize(240, 240, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'pillar-human-2x.webp'));

  await sharp(path.join(dir, 'pillar-data.webp'))
    .resize(240, 240, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'pillar-data-2x.webp'));

  await sharp(path.join(dir, 'pillar-narrative.webp'))
    .resize(240, 240, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'pillar-narrative-2x.webp'));

  // 2. Upscale and enhance process cards
  for (let i = 1; i <= 5; i++) {
    await sharp(path.join(dir, 'process-card-' + i + '.webp'))
      .resize(280, 320, { kernel: 'lanczos3' })
      .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
      .webp({ quality: 95 })
      .toFile(path.join(dir, 'process-card-' + i + '-2x.webp'));
  }

  // 3. Upscale process diagram
  await sharp(path.join(dir, 'process-diagram-full.webp'))
    .resize(1008, 420, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'process-diagram-full-2x.webp'));

  // 4. Upscale client logos strip
  await sharp(path.join(dir, 'client-logos-strip.webp'))
    .resize(988, 90, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'client-logos-strip-2x.webp'));

  // 5. Testimonial card
  await sharp(path.join(dir, 'testimonial-card.webp'))
    .resize(948, 180, { kernel: 'lanczos3' })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'testimonial-card-2x.webp'));

  // 6. Enhanced Hero Calligraphy artwork (Sharpen and enrich tone)
  await sharp(path.join(dir, 'hero-ink-art.webp'))
    .resize(800, 960, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1.2, m1: 0.8, m2: 3 })
    .webp({ quality: 95 })
    .toFile(path.join(dir, 'hero-ink-art-hd.webp'));

  // 7. Extract crisp standalone client logos from the strip
  // Shopify, Asana, Mailchimp, Salesforce, Adobe / A.
  const logos = [
    { name: 'logo-shopify', left: 25, width: 85 },
    { name: 'logo-asana', left: 125, width: 80 },
    { name: 'logo-mailchimp', left: 220, width: 60 },
    { name: 'logo-salesforce', left: 290, width: 85 },
    { name: 'logo-adobe', left: 385, width: 45 },
    { name: 'logo-client', left: 440, width: 80 },
  ];

  for (const item of logos) {
    await sharp('src/assets/images/portfolio/inkhouse.png')
      .extract({ left: item.left, top: 1292, width: item.width, height: 42 })
      .resize(item.width * 2, 84, { kernel: 'lanczos3' })
      .webp({ quality: 95 })
      .toFile(path.join(dir, item.name + '.webp'));
  }

  console.log('All bespoke assets generated successfully!');
}

processAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
