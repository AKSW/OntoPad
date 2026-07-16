import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // ensure href links are build relatively
  base: '/OntoPad/pad/',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      fileName: 'ontopad',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
      },
      output: {
        exports: 'named',
        globals: {
          pinia: 'Pinia',
          vue: 'Vue'
        }
      }
    }
  },
})
