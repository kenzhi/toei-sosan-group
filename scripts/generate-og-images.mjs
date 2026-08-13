#!/usr/bin/env node
// scripts/generate-og-images.mjs
// 生成每页的 OG image（1200x630 PNG）
// 设计：深蓝背景 + 橙色 accent line + 标题（中/英/日自适应）+ 站点名 + URL

import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import sharp from 'sharp';

const SITE = 'TOEI SOSAN GROUP';
const SITE_SUB = '東栄創産グループ';
const COLORS = {
  bg: '#1B3A5C',
  accent: '#E29C52',
  text: '#FFFFFF',
  textSoft: 'rgba(255,255,255,0.7)',
  textMute: 'rgba(255,255,255,0.45)',
};

const DIST = 'dist';
const OUT_DIR = 'dist/og';

// 从 dist HTML 提取每页的 title + description
async function walkDir(dir, base = dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walkDir(full, base)));
    } else if (e.name === 'index.html') {
      // 根目录的 index.html → ''，子目录的 → 'about' / 'zh/factory' 等
      let rel = relative(base, full);
      rel = rel === 'index.html' ? '' : rel.replace(/\/index\.html$/, '');
      out.push(rel);
    }
  }
  return out;
}

// 简单 title 提取
async function extractTitle(htmlPath) {
  const fs = await import('node:fs/promises');
  const html = await fs.readFile(htmlPath, 'utf-8');
  const m = html.match(/<title>([^<]+)<\/title>/);
  return m ? m[1].trim() : '東栄創産グループ';
}

// 路径 → 输出文件名
function ogPath(urlPath) {
  // /about/ → about
  // /zh/about/ → zh-about
  // / → index
  // '' → index
  if (!urlPath || urlPath === '' || urlPath === '/') return 'index';
  return urlPath.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-');
}

// SVG → PNG
async function renderOgImage(title, urlPath) {
  // 标题长度自适应：长标题截断到 36 字符
  const displayTitle = title.length > 36 ? title.slice(0, 35) + '…' : title;
  const url = urlPath ? `toei-sosan.com${urlPath}` : 'toei-sosan.com';

  // 安全转义 XML
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#122A45"/>
      <stop offset="1" stop-color="#1B3A5C"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- 装饰：橙色斜线 -->
  <line x1="0" y1="60" x2="1200" y2="60" stroke="${COLORS.accent}" stroke-width="2" opacity="0.4"/>
  <line x1="0" y1="570" x2="1200" y2="570" stroke="${COLORS.accent}" stroke-width="2" opacity="0.4"/>
  <!-- 装饰点 -->
  <circle cx="80" cy="315" r="3" fill="${COLORS.accent}" opacity="0.6"/>
  <circle cx="1120" cy="315" r="3" fill="${COLORS.accent}" opacity="0.6"/>

  <!-- 顶部：站点标识 -->
  <text x="80" y="120" font-family="Plus Jakarta Sans, sans-serif" font-size="20" font-weight="600" letter-spacing="3" fill="${COLORS.accent}">${esc(SITE)}</text>
  <text x="80" y="148" font-family="Noto Sans JP, sans-serif" font-size="14" fill="${COLORS.textMute}">${esc(SITE_SUB)}</text>

  <!-- 中部：主标题 -->
  <text x="80" y="370" font-family="Noto Serif JP, serif" font-size="56" font-weight="500" fill="${COLORS.text}">${esc(displayTitle)}</text>

  <!-- 装饰线 -->
  <line x1="80" y1="420" x2="200" y2="420" stroke="${COLORS.accent}" stroke-width="3"/>

  <!-- 底部：URL -->
  <text x="80" y="560" font-family="Plus Jakarta Sans, sans-serif" font-size="18" fill="${COLORS.textSoft}">${esc(url)}</text>
</svg>`;

  return sharp(Buffer.from(svg))
    .png()
    .toBuffer();
}

await import('node:fs/promises').then(fs => fs.mkdir(OUT_DIR, { recursive: true }));

const allPaths = await walkDir(DIST);
let count = 0;
for (const rel of allPaths) {
  if (rel.startsWith('_astro') || rel === '404') continue;
  const urlPath = rel === '' ? '/' : '/' + rel + '/';
  // 根目录的 index.html 在 dist/index.html（不是 dist/index.html/index.html）
  const htmlPath = rel === '' ? join(DIST, 'index.html') : join(DIST, rel, 'index.html');
  const title = await extractTitle(htmlPath);
  const png = await renderOgImage(title, urlPath);
  const outName = ogPath(rel) + '.png';
  await writeFile(join(OUT_DIR, outName), png);
  count++;
}
console.log(`Generated ${count} OG images in ${OUT_DIR}/`);
