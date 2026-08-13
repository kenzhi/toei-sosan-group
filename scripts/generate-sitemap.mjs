#!/usr/bin/env node
// scripts/generate-sitemap.mjs
// 自定义 sitemap 生成器：扫描 dist/ 全部 HTML，按 i18n 生成 hreflang alternate
// 比 @astrojs/sitemap 更可控、没兼容问题

import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const SITE = 'https://toei-sosan.com';
const DIST = 'dist';
const LOCALES = ['ja', 'zh', 'en'];
const DEFAULT_LOCALE = 'ja';
const LOCALE_HREFLANG = { ja: 'ja-JP', zh: 'zh-CN', en: 'en-US' };

// 不收录的路径
const EXCLUDE = [
  /^404\.html$/,
  /^en\/404\//,
  /^zh\/404\//,
  /^_astro\//,
  /^images\//,
  /\.xml$/,
];

// 优先级（首页最高）
function priorityFor(path) {
  if (path === '/') return '1.0';
  if (/^\/(about|zh\/about|en\/about)\/?$/.test(path)) return '0.8';
  if (/^\/(services|zh\/services|en\/services)\/?$/.test(path)) return '0.8';
  if (/^\/(factory|zh\/factory|en\/factory)\/?$/.test(path)) return '0.8';
  if (/^\/(contact|zh\/contact|en\/contact)\/?$/.test(path)) return '0.7';
  if (/^\/(privacy|zh\/privacy|en\/privacy)\/?$/.test(path)) return '0.3';
  if (/^(zh\/)?(cases|insights|news|products)\/?$/.test(path)) return '0.7';
  if (/^(zh\/)?(cases|insights|news|products)\/.+\/?$/.test(path)) return '0.6';
  return '0.5';
}

// changefreq
function changefreqFor(path) {
  if (path === '/') return 'weekly';
  if (/^(zh\/)?(insights|news)\//.test(path)) return 'monthly';
  return 'monthly';
}

async function walkDir(dir, base = dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walkDir(full, base)));
    } else if (e.name === 'index.html') {
      const rel = relative(base, full).replace('/index.html', '') || '';
      const urlPath = rel ? '/' + rel + '/' : '/';
      out.push(urlPath);
    }
  }
  return out;
}

const allPaths = await walkDir(DIST);
const filtered = allPaths.filter(p => !EXCLUDE.some(re => re.test(p) || re.test(p + 'index.html') || (p === '' && re.test('/'))));
const uniquePaths = [...new Set(filtered)].sort();

console.log(`Found ${uniquePaths.length} unique page paths`);

// 生成 sitemap XML
const urls = uniquePaths.map(p => {
  // 生成 hreflang alternates
  // ja 路径（去掉 /zh/ 或 /en/ 前缀）
  let basePath = p;
  if (p.startsWith('/zh/')) basePath = '/' + p.slice(4);
  else if (p.startsWith('/en/')) basePath = '/' + p.slice(4);
  else if (p === '/zh/' || p === '/zh') basePath = '/';
  else if (p === '/en/' || p === '/en') basePath = '/';

  const alternates = LOCALES.map(loc => {
    let altPath;
    if (loc === DEFAULT_LOCALE) altPath = basePath;
    else altPath = basePath === '/' ? `/${loc}/` : `/${loc}${basePath}`;
    return `    <xhtml:link rel="alternate" hreflang="${LOCALE_HREFLANG[loc]}" href="${SITE}${altPath}" />`;
  }).join('\n');

  const loc = p.startsWith('/zh/') ? 'zh' : p.startsWith('/en/') ? 'en' : 'ja';
  return `  <url>
    <loc>${SITE}${p}</loc>
${alternates}
    <changefreq>${changefreqFor(p)}</changefreq>
    <priority>${priorityFor(p)}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`Wrote dist/sitemap.xml with ${uniquePaths.length} URLs`);
