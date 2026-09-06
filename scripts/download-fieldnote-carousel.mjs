import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = path.resolve('src/assets/optimized/ecommerce/fieldnote');

const carouselImages = {
  'hero-slide-1': {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'hero-slide-2': {
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'hero-slide-3': {
    url: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'hero-slide-4': {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  }
};

async function downloadCarousel() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const [name, item] of Object.entries(carouselImages)) {
    const dest = path.join(targetDir, `${name}.webp`);
    console.log(`Downloading ${name} from ${item.url}...`);
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP status: ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await sharp(buf)
        .resize(item.w, item.h, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(dest);
      console.log(`✓ Saved ${dest}`);
    } catch (err) {
      console.error(`Failed ${name}:`, err);
    }
  }
  console.log('All hero carousel images downloaded successfully!');
}

downloadCarousel();
