import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/styles/utilities.scss')
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
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
