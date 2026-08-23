const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDirImg = path.join(__dirname, '..', 'src', 'assets', 'images', 'education', 'codenest');
const targetDirOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'education', 'codenest');
const targetDirPub = path.join(__dirname, '..', 'public', 'images', 'education', 'codenest');

[targetDirImg, targetDirOpt, targetDirPub].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const imagesToFetch = [
  {
    name: 'hero',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'scratch',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'python',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'robotics',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'classroom',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'showcase',
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
  console.log('Starting CodeNest Kids image fetch & optimization...');
  
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

  // Also copy hero as codenest.webp in parent folder
  const rootOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'education', 'codenest.webp');
  const heroOpt = path.join(targetDirOpt, 'hero.webp');
  if (fs.existsSync(heroOpt)) {
    fs.copyFileSync(heroOpt, rootOpt);
  }

  console.log('CodeNest Kids image pipeline complete!');
}

processImages();
