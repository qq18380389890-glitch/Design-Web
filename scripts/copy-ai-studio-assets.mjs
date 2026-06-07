import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve('src/assets/images');

if (!existsSync(source)) {
  console.log('No AI Studio image directory found; skipping asset copy.');
  process.exit(0);
}

const destinations = [
  resolve('dist/assets/images'),
  resolve('dist/src/assets/images'),
];

for (const destination of destinations) {
  mkdirSync(destination, { recursive: true });
  cpSync(source, destination, { recursive: true });
}

console.log(`Copied AI Studio images to ${destinations.length} production paths.`);
