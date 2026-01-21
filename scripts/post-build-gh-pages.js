import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist/public');
const attachedAssetsDir = resolve(__dirname, '../attached_assets');

const indexPath = resolve(distDir, 'index.html');
const notFoundPath = resolve(distDir, '404.html');

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
  console.log('Created 404.html for SPA routing on GitHub Pages');
}

const destAssetsDir = resolve(distDir, 'attached_assets');
if (!existsSync(destAssetsDir)) {
  mkdirSync(destAssetsDir, { recursive: true });
}

if (existsSync(attachedAssetsDir)) {
  const files = readdirSync(attachedAssetsDir);
  for (const file of files) {
    const srcPath = resolve(attachedAssetsDir, file);
    const destPath = resolve(destAssetsDir, file);
    try {
      copyFileSync(srcPath, destPath);
    } catch (e) {
      console.log(`Skipped: ${file}`);
    }
  }
  console.log(`Copied ${files.length} attached assets to build`);
}
