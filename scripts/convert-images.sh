#!/usr/bin/env bash
set -euo pipefail

SRC="public/images"

for jpg in "$SRC"/*.jpg; do
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
  name="$(basename "${jpg%.jpg}")"
  jpg_size=$(stat -f%z "$jpg" 2>/dev/null || stat -c%s "$jpg" 2>/dev/null)
  webp_size=$(stat -f%z "${jpg%.jpg}.webp" 2>/dev/null || echo 0)
  avif_size=$(stat -f%z "${jpg%.jpg}.avif" 2>/dev/null || echo 0)
  printf "%-20s JPG:%6dK  WebP:%6dK  AVIF:%6dK\n" "$name" $((jpg_size/1024)) $((webp_size/1024)) $((avif_size/1024))
done
