#!/usr/bin/env bash
set -euo pipefail

# Converts full-size .jpg files to .webp/.avif (requires cwebp and avifenc).
# Responsive width variants (<name>-768.*, <name>-1280.*) are generated
# separately by scripts/generate-image-variants.mjs (requires sharp):
#   node scripts/generate-image-variants.mjs
# Run it after adding any new base .jpg, or this script will try to
# convert the variants too (the glob below skips them).

SRC="public/images"

for jpg in "$SRC"/*.jpg; do
  # Skip generated width variants like name-768.jpg / name-1280.jpg
  if [[ "$jpg" =~ -[0-9]+\.jpg$ ]]; then
    continue
  fi

  base="${jpg%.jpg}"
  name="$(basename "$base")"

  if [ ! -f "${base}.webp" ]; then
    echo "WebP: $name"
    cwebp -q 80 -m 6 "$jpg" -o "${base}.webp" 2>/dev/null
  fi

  if [ ! -f "${base}.avif" ]; then
    echo "AVIF: $name"
    avifenc --min 20 --max 35 -s 4 "$jpg" "${base}.avif" 2>/dev/null
  fi
done

echo ""
echo "Done. Size comparison:"
for jpg in "$SRC"/*.jpg; do
  if [[ "$jpg" =~ -[0-9]+\.jpg$ ]]; then
    continue
  fi
  name="$(basename "${jpg%.jpg}")"
  jpg_size=$(stat -f%z "$jpg" 2>/dev/null || stat -c%s "$jpg" 2>/dev/null)
  webp_size=$(stat -f%z "${jpg%.jpg}.webp" 2>/dev/null || echo 0)
  avif_size=$(stat -f%z "${jpg%.jpg}.avif" 2>/dev/null || echo 0)
  printf "%-20s JPG:%6dK  WebP:%6dK  AVIF:%6dK\n" "$name" $((jpg_size/1024)) $((webp_size/1024)) $((avif_size/1024))
done
