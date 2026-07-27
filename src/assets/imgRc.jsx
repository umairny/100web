const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./images";
const outputDir = "./optimized";

const maxWidth = 1920;
const quality = 82;
const allowed = [".jpg", ".jpeg", ".webp", ".webp"];

function getAllFiles(dir) {
  let results = [];

  const list = fs.readdirSync(dir);

  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

async function compressImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();

  if (!allowed.includes(ext)) return;

  const relativePath = path.relative(inputDir, inputPath);
  const parsed = path.parse(relativePath);

  const outputFolder = path.join(outputDir, parsed.dir);

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  const outputPath = path.join(outputFolder, `${parsed.name}.webp`);

  try {
    await sharp(inputPath)
      .rotate()
      .resize({
        width: maxWidth,
        withoutEnlargement: true,
      })
      .webp({
        quality,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`Done: ${relativePath}`);
  } catch (error) {
    console.log(`Error with ${relativePath}:`, error.message);
  }
}

async function run() {
  const files = getAllFiles(inputDir);

  for (const file of files) {
    await compressImage(file);
  }

  console.log("All images compressed successfully.");
}

run();
