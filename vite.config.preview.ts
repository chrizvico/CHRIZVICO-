// Standalone build config used ONLY to produce a single self-contained HTML
// file (JS + CSS inlined) for quick previewing. The real project uses
// vite.config.ts with normal code-splitting for production deployment.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist-preview',
    cssCodeSplit: false,
  },
})
