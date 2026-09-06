const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcImg = path.resolve('src/assets/images/ecommerce/cartbloom.png');
const outDir = path.resolve('src/assets/optimized/ecommerce/cartbloom');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to remove heart icon in top right of product image
async function cleanProductImage(crop, filename) {
  // Extract base crop
  const base = await sharp(srcImg)
    .extract(crop)
    .toBuffer();

  // Create an off-white/beige cover patch for the heart icon in the top right
  const patchSvg = `
    <svg width="${crop.width}" height="${crop.height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${crop.width - 32}" y="0" width="32" height="30" fill="#f7f6f3"/>
    </svg>
  `;

  await sharp(base)
    .composite([{ input: Buffer.from(patchSvg), top: 0, left: 0 }])
    .resize(400, 370)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, filename));
  console.log(`Cleaned & Extracted ${filename}`);
}

async function extractAll() {
  console.log('Starting refined extraction from cartbloom.png...');

  // 1. Hero Gift Box (top: 115 avoids any menu text)
  await sharp(srcImg)
    .extract({ left: 440, top: 115, width: 420, height: 405 })
    .resize(800, 770)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'hero-gift-box.webp'));
  console.log('Extracted hero-gift-box.webp');

  // 2. 6 Category Images
  // Category 1: Gifts
  await sharp(srcImg)
    .extract({ left: 52, top: 635, width: 116, height: 105 })
    .resize(400, 360)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'cat-gifts.webp'));
  console.log('Extracted cat-gifts.webp');

  // Category 2: Home & Living
  await sharp(srcImg)
    .extract({ left: 182, top: 635, width: 116, height: 105 })
    .resize(400, 360)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'cat-home.webp'));
  console.log('Extracted cat-home.webp');

  // Category 3: Beauty & Wellness
  await sharp(srcImg)
    .extract({ left: 312, top: 635, width: 116, height: 105 })
    .resize(400, 360)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'cat-beauty.webp'));
  console.log('Extracted cat-beauty.webp');

  // Category 4: Food & Beverages
  await sharp(srcImg)
    .extract({ left: 442, top: 635, width: 116, height: 105 })
    .resize(400, 360)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'cat-food.webp'));
  console.log('Extracted cat-food.webp');

  // Category 5: Office & Stationery
  await sharp(srcImg)
    .extract({ left: 572, top: 635, width: 116, height: 105 })
    .resize(400, 360)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'cat-office.webp'));
  console.log('Extracted cat-office.webp');

  // Category 6: New Arrivals
  await sharp(srcImg)
    .extract({ left: 702, top: 635, width: 116, height: 105 })
    .resize(400, 360)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'cat-new.webp'));
  console.log('Extracted cat-new.webp');

  // 3. 6 Product Images without baked-in heart icons
  await cleanProductImage({ left: 52, top: 870, width: 116, height: 108 }, 'prod-candle.webp');
  await cleanProductImage({ left: 182, top: 870, width: 116, height: 108 }, 'prod-mug.webp');
  await cleanProductImage({ left: 312, top: 870, width: 116, height: 108 }, 'prod-tea.webp');
  await cleanProductImage({ left: 442, top: 870, width: 116, height: 108 }, 'prod-skincare.webp');
  await cleanProductImage({ left: 572, top: 870, width: 116, height: 108 }, 'prod-journal.webp');
  await cleanProductImage({ left: 702, top: 870, width: 116, height: 108 }, 'prod-nuts.webp');

  // 4. 3 Feature Banner Graphics (isolated artwork for HTML/CSS flex layout)
  // Banner 1: Build your own Gift Box (open box with gifts on soft pink)
  await sharp(srcImg)
    .extract({ left: 165, top: 1110, width: 133, height: 158 })
    .resize(400, 420)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'banner-build-box.webp'));
  console.log('Extracted banner-build-box.webp');

  // Banner 2: Bundle & Save (stacked kraft boxes on soft warm yellow/beige)
  await sharp(srcImg)
    .extract({ left: 430, top: 1110, width: 128, height: 158 })
    .resize(400, 420)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'banner-bundle-save.webp'));
  console.log('Extracted banner-bundle-save.webp');

  // Banner 3: Free Shipping (cardboard box with eucalyptus on soft cream)
  await sharp(srcImg)
    .extract({ left: 704, top: 1112, width: 114, height: 156 })
    .resize(400, 420)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'banner-free-shipping.webp'));
  console.log('Extracted banner-free-shipping.webp');

  // 5. Newsletter Banner Graphic (gift box tied with ribbon and eucalyptus leaves)
  await sharp(srcImg)
    .extract({ left: 62, top: 1573, width: 112, height: 76 })
    .resize(320, 218)
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'newsletter-gift.webp'));
  console.log('Extracted newsletter-gift.webp');

  console.log('ALL CARTBLOOM CROPS EXTRACTED & CLEANED SUCCESSFULLY!');
}

extractAll().catch(err => {
  console.error('Error during extraction:', err);
  process.exit(1);
});
