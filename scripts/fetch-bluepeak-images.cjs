const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDirImg = path.join(__dirname, '..', 'src', 'assets', 'images', 'Construction', 'bluepeak');
const targetDirOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'Construction', 'bluepeak');
const targetDirPub = path.join(__dirname, '..', 'public', 'images', 'Construction', 'bluepeak');

[targetDirImg, targetDirOpt, targetDirPub].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const imagesToFetch = [
  {
    name: 'hero',
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'emergency',
    url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'repipe',
    url: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'commercial',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'waterheater',
    url: 'https://images.unsplash.com/photo-1584622650111-ead93a40610f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'drain',
    url: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1600&q=80',
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
  console.log('Starting BluePeak Plumbing image fetch & optimization...');
  
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

  // Copy hero as bluepeak.webp in root
  const rootOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'Construction', 'bluepeak.webp');
  const heroOpt = path.join(targetDirOpt, 'hero.webp');
  if (fs.existsSync(heroOpt)) {
    fs.copyFileSync(heroOpt, rootOpt);
  }

  console.log('BluePeak Plumbing image pipeline complete!');
}

processImages();
