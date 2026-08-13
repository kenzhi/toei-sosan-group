#!/usr/bin/env node
// scripts/optimize-factory-images.mjs
// 把 public/images/factory/*.jpg 转换为 WebP，并生成多种尺寸
// 同时保留原图（作为兜底 / 不同屏幕密度）

import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import sharp from 'sharp';

const SRC = 'public/images/factory';
const OUT = 'public/images/factory';

// 输出尺寸（宽像素）：content 区域大约 600-800px，所以 800 是主用，1600 给 retina
const SIZES = [
  { name: '', width: 1200, quality: 78 },     // 主图，约 1MB
  { name: '-thumb', width: 600, quality: 75 } // 缩略图，约 200-300KB
];

const files = (await readdir(SRC))
  .filter(f => f.toLowerCase().endsWith('.jpg'))
  .filter(f => !f.startsWith('._'))  // skip macOS metadata
  .filter(f => !f.includes('-thumb') && !f.includes('-1200'))
  .sort();

console.log(`Processing ${files.length} images...`);

for (const f of files) {
  const base = basename(f, '.jpg');
  const srcPath = join(SRC, f);
  const srcStat = await stat(srcPath);
  const srcSizeKb = Math.round(srcStat.size / 1024);
  let totalOut = 0;

  for (const { name, width, quality } of SIZES) {
    const outName = name ? `${base}${name}.webp` : `${base}.webp`;
    const outPath = join(OUT, outName);
    await sharp(srcPath)
      .rotate()  // 尊重 EXIF
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(outPath);
    const outStat = await stat(outPath);
    const outSizeKb = Math.round(outStat.size / 1024);
    totalOut += outStat.size;
    console.log(`  ${base}.jpg (${srcSizeKb}KB) → ${outName} (${outSizeKb}KB)  [${width}w q${quality}]`);
  }

  const ratio = ((totalOut / srcStat.size) * 100).toFixed(1);
  console.log(`  ↳ ${base}: ${srcSizeKb}KB → ${Math.round(totalOut / 1024)}KB total (${ratio}%)`);
}

console.log(`\nDone! ${files.length} images × ${SIZES.length} sizes = ${files.length * SIZES.length} WebP files.`);
