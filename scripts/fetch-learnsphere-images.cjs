const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDirImg = path.join(__dirname, '..', 'src', 'assets', 'images', 'education', 'learnsphere');
const targetDirOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'education', 'learnsphere');
const targetDirPub = path.join(__dirname, '..', 'public', 'images', 'education', 'learnsphere');

[targetDirImg, targetDirOpt, targetDirPub].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const imagesToFetch = [
  {
    name: 'hero',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'learnsphere-uiux',
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'learnsphere-frontend',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'learnsphere-analytics',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'learnsphere-product',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'mentor',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
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
  console.log('Starting LearnSphere Academy image fetch & optimization...');
  
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

  // Also copy hero as leansphere.webp in parent folder
  const rootOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'education', 'leansphere.webp');
  const heroOpt = path.join(targetDirOpt, 'hero.webp');
  if (fs.existsSync(heroOpt)) {
    fs.copyFileSync(heroOpt, rootOpt);
  }

  console.log('LearnSphere Academy image pipeline complete!');
}

processImages();
