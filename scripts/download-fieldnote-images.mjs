import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = path.resolve('src/assets/optimized/ecommerce/fieldnote');

const images = {
  'hero-botanical': {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'coll-morning': {
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'coll-evening': {
    url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'coll-treatments': {
    url: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'starter-kit': {
    url: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'prod-cleanser': {
    url: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'prod-toner': {
    url: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'prod-serum': {
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'prod-cream': {
    url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'guide-ritual': {
    url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&h=800&q=85',
    w: 1200,
    h: 800
  },
  'guide-skin': {
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&h=800&q=85',
    w: 1200,
    h: 800
  }
};

async function run() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const [name, item] of Object.entries(images)) {
    const dest = path.join(targetDir, `${name}.webp`);
    console.log(`Downloading ${name} from ${item.url}...`);
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
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
  console.log('All 11 FieldNote images processed successfully!');
}

run();
