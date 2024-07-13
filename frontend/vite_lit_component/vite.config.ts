import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
        output: {
            entryFileNames: 'vite-lit-components.js',
            assetFileNames: 'vite-lit-components.css',
        }
    }
  }
})