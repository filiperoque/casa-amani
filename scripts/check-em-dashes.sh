#!/usr/bin/env bash
# Fail the build if any em-dash (U+2014) is found in source files.
# Covers .tsx, .ts, .md, .json, and .csv files inside src/.

set -euo pipefail

EMDASH=$'\xe2\x80\x94'

hits=$(grep -rn "$EMDASH" src/ \
  --include='*.tsx' \
  --include='*.ts' \
  --include='*.md' \
  --include='*.json' \
  --include='*.csv' || true)

if [ -n "$hits" ]; then
  echo "ERROR: Em-dash characters (U+2014) found in src/:"
  echo "$hits"
  echo ""
  echo "Replace em-dashes with commas, periods, semicolons, or parentheses."
  exit 1
fi

echo "No em-dashes found in src/. Clean."
exit 0
