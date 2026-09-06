import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = path.resolve('src/assets/optimized/ecommerce/glowcart');

const images = {
  'hero-dewy-1': {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'hero-dewy-2': {
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'hero-dewy-3': {
    url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'hero-dewy-4': {
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'prod-serum': {
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'prod-foundation': {
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'prod-tint': {
    url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'prod-blush': {
    url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'prod-lipoil': {
    url: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'prod-primer': {
    url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'promo-balm': {
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'spotlight-elixir': {
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&h=800&q=85',
    w: 1200,
    h: 800
  },
  'look-everyday': {
    url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=900&h=1200&q=85',
    w: 900,
    h: 1200
  },
  'look-sculpted': {
    url: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=900&h=1200&q=85',
    w: 900,
    h: 1200
  },
  'look-nightout': {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&h=1200&q=85',
    w: 900,
    h: 1200
  },
  'look-editorial': {
    url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&h=1200&q=85',
    w: 900,
    h: 1200
  },
  'ugc-1': {
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'ugc-2': {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'ugc-3': {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  },
  'ugc-4': {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&h=900&q=85',
    w: 900,
    h: 900
  }
};

async function run() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const [name, item] of Object.entries(images)) {
    const dest = path.join(targetDir, `${name}.webp`);
    console.log(`Downloading ${name} (${item.w}x${item.h}) from ${item.url}...`);
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

  // Also copy hero-dewy-1.webp to hero-dewy.webp for backward compatibility
  const hero1Path = path.join(targetDir, 'hero-dewy-1.webp');
  const heroLegacyPath = path.join(targetDir, 'hero-dewy.webp');
  if (fs.existsSync(hero1Path)) {
    fs.copyFileSync(hero1Path, heroLegacyPath);
    console.log(`✓ Copied hero-dewy-1.webp to legacy hero-dewy.webp`);
  }

  console.log('All GlowCart Beauty photography assets processed successfully!');
}

run();
