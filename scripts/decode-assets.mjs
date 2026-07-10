// Reconstructs binary assets from committed base64 "*.b64" text files.
//
// Why this exists: GitHub's Contents API (used by our deploy tooling) can
// only reliably transport text content — pushing raw binary through it
// corrupts the bytes. So binary assets are committed as plain-text base64
// (`<name>.b64`) instead, and this script decodes them back into real files
// before dev/build runs. It's idempotent and safe to run on every install.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SEARCH_DIRS = ['src/assets', 'public']

function decodeIn(dir) {
  const abs = join(ROOT, dir)
  let entries
  try {
    entries = readdirSync(abs)
  } catch {
    return
  }
  for (const entry of entries) {
    const fullPath = join(abs, entry)
    if (statSync(fullPath).isDirectory()) continue
    if (!entry.endsWith('.b64')) continue

    const outPath = fullPath.slice(0, -'.b64'.length)
    const b64 = readFileSync(fullPath, 'utf8').trim()
    const buffer = Buffer.from(b64, 'base64')
    writeFileSync(outPath, buffer)
    console.log(`[decode-assets] ${dir}/${entry} -> ${dir}/${entry.slice(0, -4)} (${buffer.length} bytes)`)
  }
}

for (const dir of SEARCH_DIRS) decodeIn(dir)
