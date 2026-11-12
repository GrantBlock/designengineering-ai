#!/usr/bin/env bash
# Builds the static sample site into ./site for Cloudflare Workers (static assets).
# Only the prototype pages, the shared scripts, the fonts and the icon are copied.
# Planning documents (tracker, design system, memory, specs) are never copied.
set -euo pipefail
cd "$(dirname "$0")"
OUT=site
rm -rf "./$OUT"
mkdir -p "$OUT/exports" "$OUT/system-kit/fonts" "$OUT/assets"

# pages and shared files
for d in exports/P*/ exports/shared/; do
  mkdir -p "$OUT/$d"
  cp "$d"*.html "$d"*.js "$d"*.css "$OUT/$d" 2>/dev/null || true
done
cp system-kit/fonts/*.woff2 "$OUT/system-kit/fonts/"
cp assets/favicon.svg "$OUT/assets/"

# the sample frame becomes the home page (prototype.html has no doctype because it is also published as an artifact)
{
  printf '%s\n' '<!doctype html>' '<html lang="en">' '<head>' '<meta charset="utf-8">' '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">' '<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">'
  awk '/<\/style>/{print; print "</head>"; print "<body>"; next} {print}' prototype.html
  printf '%s\n' '</body>' '</html>'
} > "$OUT/index.html"

echo "Built $(find "$OUT" -type f | wc -l) files in $(pwd)/$OUT"
