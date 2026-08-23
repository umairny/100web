const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDirImg = path.join(__dirname, '..', 'src', 'assets', 'images', 'education', 'brightbridge');
const targetDirOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'education', 'brightbridge');
const targetDirPub = path.join(__dirname, '..', 'public', 'images', 'education', 'brightbridge');

[targetDirImg, targetDirOpt, targetDirPub].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const imagesToFetch = [
  {
    name: 'hero',
    url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'brightbridge-campus',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'brightbridge-students',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'brightbridge-admissions',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'brightbridge-faculty',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'arts',
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80',
  }
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      fileStream.on('error', reject);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
    }).on('error', reject);
  });
}

async function processImages() {
  console.log('Starting BrightBridge Academy image fetch & optimization...');
  
  for (const img of imagesToFetch) {
    const rawPath = path.join(targetDirImg, `${img.name}.jpg`);
    const optPath = path.join(targetDirOpt, `${img.name}.webp`);
    const pubPath = path.join(targetDirPub, `${img.name}.webp`);
    
    try {
      console.log(`Downloading ${img.name}...`);
      await downloadImage(img.url, rawPath);
      
      console.log(`Optimizing ${img.name} -> WebP...`);
      await sharp(rawPath)
        .resize(1600, 1000, { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: 84 })
        .toFile(optPath);

      fs.copyFileSync(optPath, pubPath);
      console.log(`Successfully generated ${img.name}.webp`);
    } catch (err) {
      console.error(`Error processing ${img.name}:`, err.message);
    }
  }

  // Also copy hero as brightbridge.webp in parent folder
  const rootOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'education', 'brightbridge.webp');
  const heroOpt = path.join(targetDirOpt, 'hero.webp');
  if (fs.existsSync(heroOpt)) {
    fs.copyFileSync(heroOpt, rootOpt);
  }

  console.log('BrightBridge Academy image pipeline complete!');
}

processImages();
