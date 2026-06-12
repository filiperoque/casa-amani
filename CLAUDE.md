@AGENTS.md

# i18n: automatic translation on content changes

When modifying any English (`en`) content in `src/i18n/translations.ts`:

1. **Always update all 4 other locales** (pt, de, fr, pl) to match.
2. Do not leave any locale out of sync — every key must exist in all 5 locales.

## Translation voice rules

- **PT**: European Portuguese (PT-PT), not Brazilian. Use "pequeno-almoço" not "café da manhã", "autocarro" not "ônibus", "telemóvel" not "celular".
- **All locales**: Match the brand voice — short declarative sentences, no exclamation marks, no "stunning"/"luxurious"/"breathtaking". The register is restrained, slow, considered.
- **Sound human, not translated.** Restructure sentences for natural flow in the target language rather than mirroring English word order. Use colloquial phrasing where appropriate. Avoid stiff/bookish constructions.
- **No em-dashes (U+2014).** The brand does not use em-dashes in any language. Use commas, periods, semicolons, or parentheses instead. The build will fail if an em-dash is introduced (`scripts/check-em-dashes.sh` runs as prebuild).
- **Markdown links in FAQ answers.** FAQ a15 contains `[Airbnb](url)` syntax. Preserve this verbatim in all translations (the word "Airbnb" stays as "Airbnb"; only surrounding text translates).
- **Place names** stay untranslated: Arco da Calheta, Funchal, Ponta do Sol, Jardim do Mar, etc.
- **Proper nouns** stay untranslated: Airbnb, Plausible Analytics, Pingo Doce, etc.
- **Numbers and distances** stay identical across locales.

## FAQ JSON-LD

The FAQ page builds its JSON-LD from `t.faq.items`. When FAQ content changes, the structured data updates automatically per locale.
