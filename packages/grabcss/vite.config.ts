import { defineConfig } from 'vite'
import path from 'path'

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
      }
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