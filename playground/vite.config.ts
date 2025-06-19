import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Read version from grabcss package.json
const grabcssPackageJson = JSON.parse(
  readFileSync(resolve(__dirname, '../packages/grabcss/package.json'), 'utf-8')
)

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/grabcss/' : '/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  define: {
    __GRABCSS_VERSION__: JSON.stringify(grabcssPackageJson.version)
  }
})
