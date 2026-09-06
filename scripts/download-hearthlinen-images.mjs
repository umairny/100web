import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = path.resolve('src/assets/optimized/ecommerce/hearthlinen');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = {
  'hero-sofa': {
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012,
  },
  'coll-bedding': {
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750,
  },
  'coll-pillows': {
    url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750,
  },
  'coll-decor': {
    url: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750,
  },
  'coll-dining': {
    url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750,
  },
  'promo-throw': {
    url: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1200&h=900&q=85',
    w: 1200,
    h: 900,
  },
  'prod-sheets': {
    url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-pillow': {
    url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-vase': {
    url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-candle': {
    url: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-duvet': {
    url: 'https://images.unsplash.com/photo-1584100936709-eb4407b469a4?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-throw': {
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-napkins': {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'prod-tray': {
    url: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800,
  },
  'layer-oatmeal': {
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&h=675&q=85',
    w: 900,
    h: 675,
  },
  'layer-white': {
    url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&h=675&q=85',
    w: 900,
    h: 675,
  },
  'layer-terracotta': {
    url: 'https://images.unsplash.com/photo-1584100936709-eb4407b469a4?auto=format&fit=crop&w=900&h=675&q=85',
    w: 900,
    h: 675,
  },
  'lookbook-room': {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&h=1000&q=85',
    w: 1600,
    h: 1000,
  },
  'artisan-linen': {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&h=600&q=85',
    w: 800,
    h: 600,
  },
  'artisan-pottery': {
    url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&h=600&q=85',
    w: 800,
    h: 600,
  },
  'journal-textiles': {
    url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&h=600&q=85',
    w: 900,
    h: 600,
  },
  'journal-shelf': {
    url: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&h=600&q=85',
    w: 900,
    h: 600,
  },
};

async function downloadAndOptimize() {
  console.log('Starting download and optimization of Hearth & Linen assets...');
  for (const [name, info] of Object.entries(images)) {
    const destPath = path.join(targetDir, `${name}.webp`);
    try {
      console.log(`Fetching ${name}...`);
      const res = await fetch(info.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      await sharp(buffer)
        .resize(info.w, info.h, { fit: 'cover', position: 'center' })
        .webp({ quality: 82 })
        .toFile(destPath);
      console.log(`Saved ${name}.webp`);
    } catch (err) {
      console.error(`Failed to download/process ${name}:`, err.message);
    }
  }
  console.log('All Hearth & Linen assets processed successfully.');
}

downloadAndOptimize();
