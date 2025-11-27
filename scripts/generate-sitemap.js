const fs = require('fs');
const { globSync } = require('glob');

const baseUrl = 'https://satuvisibagiindonesia.org';

const ignoreList = [
  'pages/_*.tsx',
  'pages/api/**',
  'pages/404.tsx',
  'pages/cv-testing.tsx',
  'pages/layout.tsx',
  'pages/flip-book.tsx'
];

const pages = globSync('pages/**/*.tsx', {
  ignore: ignoreList
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.tsx', '')
        .replace('/index', '');
      const route = path === '/index' ? '' : path;
      return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated!');
