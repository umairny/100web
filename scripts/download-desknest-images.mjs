import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDir = path.resolve('src/assets/optimized/ecommerce/desknest');

// Curated high quality authentic workspace / product photography on Unsplash
const images = {
  'hero-desk': {
    // Stunning warm walnut standing desk with curved ultrawide monitor, mechanical keyboard, plant & ambient lighting
    url: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1800&h=1012&q=85',
    w: 1800,
    h: 1012
  },
  'coll-scandi': {
    // Light oak minimalist Scandinavian desk with laptop, daylight & plants
    url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'coll-tech': {
    // Dark developer workstation with dual monitors, mechanical keyboard, clean ambient lighting
    url: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'coll-boho': {
    // Warm bohemian natural wood workspace with rattan, plants and warm light
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&h=750&q=85',
    w: 1000,
    h: 750
  },
  'prod-chair': {
    // Modern ergonomic mesh office chair
    url: 'https://images.unsplash.com/photo-1580481077197-094119d65ee1?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'prod-stand': {
    // Minimalist wooden dual monitor riser stand desk shelf
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'prod-cable': {
    // Minimalist cable organizer box with wooden cover
    url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'prod-mat': {
    // Premium leather & wool felt desk mat with mouse
    url: 'https://images.unsplash.com/photo-1616353071588-708dcff912e2?auto=format&fit=crop&w=800&h=800&q=85',
    w: 800,
    h: 800
  },
  'aura-lamp': {
    // Architectural modern desk lamp with warm glow
    url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&h=800&q=85',
    w: 1200,
    h: 800
  },
  'journal-ergo': {
    // Ergonomic posture and modern standing workspace editorial
    url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&h=800&q=85',
    w: 1200,
    h: 800
  },
  'journal-cable': {
    // Clean cable management workspace setup editorial
    url: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&h=800&q=85',
    w: 1200,
    h: 800
  }
};

async function downloadAndProcess() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const [filename, item] of Object.entries(images)) {
    const destPath = path.join(targetDir, `${filename}.webp`);
    console.log(`Downloading ${filename} from ${item.url}...`);
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      await sharp(buffer)
        .resize(item.w, item.h, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`✓ Saved ${destPath}`);
    } catch (err) {
      console.error(`Failed to process ${filename}:`, err);
    }
  }
  console.log('All DeskNest images updated successfully!');
}

downloadAndProcess();
