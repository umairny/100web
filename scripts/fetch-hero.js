const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      let html = '';
      res.on('data', d => html += d);
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const pages = [
    'https://unsplash.com/photos/cyclist-riding-on-a-winding-road-near-mountains-aWp-3-Z2y2A',
    'https://unsplash.com/photos/a-man-riding-a-bike-down-a-curvy-road-p0vJ84B7uU8',
    'https://unsplash.com/photos/two-bicyclists-riding-down-a-road-in-the-mountains-8rZq6wW6j_Y',
    'https://unsplash.com/photos/cyclist-on-a-winding-road-in-the-mountains-Zk_8q4lV0lE'
  ];

  let foundUrl = null;
  for (const p of pages) {
    try {
      console.log('Fetching', p);
      const html = await fetchHtml(p);
      const m = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/);
      if (m) {
        console.log('Found image:', m[0]);
        foundUrl = m[0];
        break;
      }
    } catch (e) {
      console.log('Error fetching', p, e.message);
    }
  }

  if (!foundUrl) {
    // Fallback: search Unsplash API/source
    foundUrl = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8';
  }

  console.log('Using image URL:', foundUrl);
  const tempPath = path.join(__dirname, '../src/assets/optimized/ecommerce/cyclebox/new-hero-temp.jpg');
  const targetWebp = path.join(__dirname, '../src/assets/optimized/ecommerce/cyclebox/hero-cyclist.webp');

  const fullImgUrl = foundUrl + '?auto=format&fit=crop&w=1600&h=640&q=90';
  await downloadImage(fullImgUrl, tempPath);
  
  await sharp(tempPath)
    .resize(1280, 520, { fit: 'cover', position: 'center' })
    .webp({ quality: 92 })
    .toFile(targetWebp);

  fs.unlinkSync(tempPath);
  console.log('Successfully updated hero-cyclist.webp!');
}

main().catch(console.error);
