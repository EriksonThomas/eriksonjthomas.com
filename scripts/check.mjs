import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
for (const page of ['index.html', 'resume.html', '404.html']) {
  const html = await readFile(resolve('dist', page), 'utf8');
  assert.match(html, /<html lang="en">/);
  assert.match(html, /name="viewport"/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${page} needs exactly one main heading`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate IDs in ${page}`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith('#') && url.length > 1) assert(ids.includes(url.slice(1)), `Missing target ${url}`);
    if (url.startsWith('/') && !url.startsWith('//')) await access(resolve('dist', '.' + url));
  }
}
const css = await readFile('dist/styles.css', 'utf8');
for (const [, asset] of css.matchAll(/url\(['"]?(\/[^)'" ]+)/g)) await access(resolve('dist', '.' + asset));
assert(!((await readFile('dist/index.html', 'utf8')).includes('eriksonkjthomas')));
console.log('Passed: page structure, section anchors, local links, assets, font, and canonical domain.');
