import { defineConfig } from 'vite'
import path from 'path'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        grab: path.resolve(__dirname, 'src/styles/main.scss')
      },
      output: {
        assetFileNames: '[name].[ext]'
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'src/styles/*.scss',
              dest: '../dist/scss'
            }
          ],
          hook: 'writeBundle'
        })
      ]
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  publicDir: false,
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
