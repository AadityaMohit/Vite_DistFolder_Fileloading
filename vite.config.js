import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
    {
      name: 'copy-cs-js',
      configureServer(server) {
         const src = path.resolve(__dirname, 'cs.js')
        const dest = path.resolve(server.config.root, 'dist', 'cs.js')
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest)
        }
      },
      closeBundle() {
         const src = path.resolve(__dirname, 'cs.js')
        const dest = path.resolve(__dirname, 'dist', 'cs.js')
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest)
        }
      },
    },
  ],
})
