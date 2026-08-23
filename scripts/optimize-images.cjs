const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration Defaults
const CONFIG = {
  inputDir: path.resolve(__dirname, '../src/assets/images'),
  outputOptimized: path.resolve(__dirname, '../src/assets/optimized'),
  outputPublic: path.resolve(__dirname, '../public/images'),
  maxWidth: 1920,
  quality: 85,
  effort: 6,
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
};

// Parse command line arguments: --dir=Category/site or --all or --file=path
function parseArgs() {
  const args = process.argv.slice(2);
  const options = { targetDir: null, all: true, force: false };

  for (const arg of args) {
    if (arg.startsWith('--dir=')) {
      options.targetDir = arg.replace('--dir=', '').trim();
      options.all = false;
    } else if (arg.startsWith('--site=')) {
      options.targetDir = arg.replace('--site=', '').trim();
      options.all = false;
    } else if (arg === '--force') {
      options.force = true;
    }
  }

  return options;
}

function getAllImageFiles(dir, baseDir = dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllImageFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONFIG.allowedExtensions.includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath);
        files.push({ fullPath, relativePath, fileName: entry.name, ext });
      }
    }
  }

  return files;
}

async function processImage(fileObj, baseDir, force = false) {
  const parsed = path.parse(fileObj.relativePath);
  
  // Target destination in src/assets/optimized
  const optimizedDir = path.join(CONFIG.outputOptimized, parsed.dir);
  const publicDir = path.join(CONFIG.outputPublic, parsed.dir);
  
  [optimizedDir, publicDir].forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  const optimizedPath = path.join(optimizedDir, `${parsed.name}.webp`);
  const publicPath = path.join(publicDir, `${parsed.name}.webp`);

  // Check if output already exists and is newer than source (unless force is true)
  if (!force && fs.existsSync(optimizedPath)) {
    const srcStat = fs.statSync(fileObj.fullPath);
    const destStat = fs.statSync(optimizedPath);
    if (destStat.mtimeMs > srcStat.mtimeMs) {
      return { status: 'skipped', path: fileObj.relativePath };
    }
  }

  try {
    // Convert to webp with sharp
    await sharp(fileObj.fullPath)
      .rotate()
      .resize({
        width: CONFIG.maxWidth,
        withoutEnlargement: true,
      })
      .webp({
        quality: CONFIG.quality,
        effort: CONFIG.effort,
      })
      .toFile(optimizedPath);

    // Also mirror to public/images for public URL access
    fs.copyFileSync(optimizedPath, publicPath);

    const oldSize = (fs.statSync(fileObj.fullPath).size / 1024).toFixed(1);
    const newSize = (fs.statSync(optimizedPath).size / 1024).toFixed(1);
    const savings = (((oldSize - newSize) / oldSize) * 100).toFixed(0);

    return {
      status: 'converted',
      path: fileObj.relativePath,
      oldSize: `${oldSize} KB`,
      newSize: `${newSize} KB`,
      savings: `${savings}%`,
    };
  } catch (err) {
    return { status: 'error', path: fileObj.relativePath, error: err.message };
  }
}

async function run() {
  const options = parseArgs();
  console.log('⚡ 100Web Image Optimization Pipeline');
  console.log('----------------------------------------------------');

  let targetScanDir = CONFIG.inputDir;
  if (options.targetDir) {
    targetScanDir = path.join(CONFIG.inputDir, options.targetDir);
    console.log(`🎯 Targeting directory: ${options.targetDir}`);
  } else {
    console.log('🌐 Scanning all directories in src/assets/images...');
  }

  if (!fs.existsSync(targetScanDir)) {
    console.error(`❌ Directory not found: ${targetScanDir}`);
    process.exit(1);
  }

  const files = getAllImageFiles(targetScanDir, CONFIG.inputDir);
  console.log(`📁 Found ${files.length} images to check.`);
  console.log('----------------------------------------------------');

  let convertedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const result = await processImage(file, CONFIG.inputDir, options.force);
    if (result.status === 'converted') {
      convertedCount++;
      console.log(`✅ [${result.savings} saved] ${result.path} (${result.oldSize} → ${result.newSize})`);
    } else if (result.status === 'skipped') {
      skippedCount++;
    } else if (result.status === 'error') {
      errorCount++;
      console.error(`❌ Error converting ${result.path}: ${result.error}`);
    }
  }

  console.log('----------------------------------------------------');
  console.log(`🎉 Optimization Complete!`);
  console.log(`   - Converted: ${convertedCount}`);
  console.log(`   - Up to Date (Skipped): ${skippedCount}`);
  if (errorCount > 0) console.log(`   - Errors: ${errorCount}`);
}

run().catch(err => {
  console.error('Fatal optimization error:', err);
  process.exit(1);
});
