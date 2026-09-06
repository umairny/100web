const path = require('path');
const sharp = require('sharp');

const SOURCE_IMAGE = path.join(__dirname, '../src/assets/images/ecommerce/cyclebox.png');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/optimized/ecommerce/cyclebox');

const crops = [
  {
    name: 'hero-cyclist.webp',
    left: 66,
    top: 76,
    width: 636,
    height: 247,
  },
  {
    name: 'coll-road.webp',
    left: 66,
    top: 373,
    width: 153,
    height: 88,
  },
  {
    name: 'coll-mtb.webp',
    left: 227,
    top: 373,
    width: 153,
    height: 88,
  },
  {
    name: 'coll-apparel.webp',
    left: 388,
    top: 373,
    width: 153,
    height: 88,
  },
  {
    name: 'coll-tools.webp',
    left: 549,
    top: 373,
    width: 153,
    height: 88,
  },
  {
    name: 'promo-jersey.webp',
    left: 66,
    top: 644,
    width: 175,
    height: 118,
  },
  {
    name: 'prod-wheels.webp',
    left: 78,
    top: 835,
    width: 130,
    height: 88,
  },
  {
    name: 'prod-helmet.webp',
    left: 238,
    top: 835,
    width: 130,
    height: 88,
  },
  {
    name: 'prod-shorts.webp',
    left: 398,
    top: 835,
    width: 130,
    height: 88,
  },
  {
    name: 'prod-tool.webp',
    left: 558,
    top: 835,
    width: 130,
    height: 88,
  },
  {
    name: 'guide-tubeless.webp',
    left: 66,
    top: 1078,
    width: 146,
    height: 92,
  },
  {
    name: 'guide-nutrition.webp',
    left: 388,
    top: 1078,
    width: 146,
    height: 92,
  },
];

async function generateAssets() {
  console.log('Starting CycleBox asset generation from', SOURCE_IMAGE);
  for (const crop of crops) {
    const outPath = path.join(OUTPUT_DIR, crop.name);
    await sharp(SOURCE_IMAGE)
      .extract({
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height,
      })
      .webp({ quality: 95 })
      .toFile(outPath);
    console.log(`✓ Generated ${crop.name} (${crop.width}x${crop.height})`);
  }
  console.log('All CycleBox assets generated successfully!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
