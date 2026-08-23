const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDirImg = path.join(__dirname, '..', 'src', 'assets', 'images', 'Construction', 'terraform');
const targetDirOpt = path.join(__dirname, '..', 'src', 'assets', 'optimized', 'Construction', 'terraform');
const targetDirPub = path.join(__dirname, '..', 'public', 'images', 'Construction', 'terraform');

[targetDirImg, targetDirOpt, targetDirPub].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// We can also copy and utilize existing high-res project assets where fitting
const existingHero = path.join(__dirname, '..', 'src', 'assets', 'images', 'Construction', 'terraform.png');

const imagesToFetch = [
  {
    name: 'structural',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'foundation',
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'architectural',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'polished',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'flatwork',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'stamped',
    url: 'https://images.unsplash.com/photo-1584463699039-ecbd69165609?auto=format&fit=crop&w=1600&q=80',
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
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function processAll() {
  // 1. Process Hero from existing terraform.png
  if (fs.existsSync(existingHero)) {
    console.log('Processing hero from existing terraform.png...');
    const buffer = await sharp(existingHero)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toBuffer();
    fs.writeFileSync(path.join(targetDirOpt, 'hero.webp'), buffer);
    fs.writeFileSync(path.join(targetDirPub, 'hero.webp'), buffer);
    console.log(`Done hero (${buffer.length} bytes)`);
  }

  // 2. Fetch and optimize each image
  for (const item of imagesToFetch) {
    const tempFile = path.join(targetDirImg, `${item.name}_temp.jpg`);
    const optWebp = path.join(targetDirOpt, `${item.name}.webp`);
    const pubWebp = path.join(targetDirPub, `${item.name}.webp`);

    console.log(`Downloading ${item.name}...`);
    try {
      if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
      await downloadImage(item.url, tempFile);
      console.log(`Optimizing ${item.name} to WebP...`);
      
      const buffer = await sharp(tempFile)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toBuffer();

      fs.writeFileSync(optWebp, buffer);
      fs.writeFileSync(pubWebp, buffer);
      console.log(`Done ${item.name} (${buffer.length} bytes)`);
      if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err.message);
    }
  }
  console.log('All TerraForm concrete assets processed successfully!');
}

processAll();
