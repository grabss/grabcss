import { defineConfig } from 'vite'
import path from 'path'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        grab: path.resolve(__dirname, 'src/main.scss')
      },
      output: {
        assetFileNames: '[name].[ext]'
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'src/*.scss',
              dest: 'dist/scss'
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
  publicDir: false
})