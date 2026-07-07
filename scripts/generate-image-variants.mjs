#!/usr/bin/env node
// Generates responsive width variants for every base .jpg in public/images.
// For each <name>.jpg it emits <name>-768.{jpg,webp,avif} and <name>-1280.{jpg,webp,avif},
// skipping a width when the source is not meaningfully larger than it.
// Full-size .jpg/.webp/.avif files stay as the largest srcset candidate
// (see scripts/convert-images.sh for the full-size webp/avif pipeline).
//
// Usage: node scripts/generate-image-variants.mjs
// Requires: sharp (npm install --no-save sharp)

import { existsSync, readdirSync, renameSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SRC = "public/images";
const WIDTHS = [768, 1280];
// Skip a width if the source is not meaningfully larger than it.
const SKIP_FACTOR = 1.1;

const isVariant = (name) => /-\d+\.jpg$/.test(name);
const baseJpgs = readdirSync(SRC).filter(
  (f) => f.endsWith(".jpg") && !isVariant(f)
);

let generated = 0;
let skipped = 0;

for (const file of baseJpgs) {
  const srcPath = join(SRC, file);
  const base = file.replace(/\.jpg$/, "");
  const { width } = await sharp(srcPath).metadata();

  for (const w of WIDTHS) {
    if (width < w * SKIP_FACTOR) {
      console.log(`skip  ${base}-${w} (source is only ${width}px wide)`);
      skipped += 1;
      continue;
    }
    const targets = [
      [`${base}-${w}.jpg`, (s) => s.jpeg({ quality: 80, mozjpeg: true })],
      [`${base}-${w}.webp`, (s) => s.webp({ quality: 80 })],
      [`${base}-${w}.avif`, (s) => s.avif({ quality: 55, effort: 6 })],
    ];
    const resized = sharp(srcPath).resize(w);
    for (const [out, encode] of targets) {
      if (existsSync(join(SRC, out))) continue;
      // Write to a temp path then rename, so an interrupted run never
      // leaves a truncated file behind (re-runs skip existing files).
      const tmp = join(SRC, `.tmp-${out}`);
      await encode(resized.clone()).toFile(tmp);
      renameSync(tmp, join(SRC, out));
      generated += 1;
    }
    console.log(`done  ${base}-${w} (jpg/webp/avif)`);
  }
}

console.log(`\nGenerated ${generated} files, skipped ${skipped} widths.`);
for (const file of readdirSync(SRC).sort()) {
  const size = statSync(join(SRC, file)).size;
  console.log(`${String(Math.round(size / 1024)).padStart(6)}K  ${file}`);
}
