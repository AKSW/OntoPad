import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['buffer', 'events'],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // ensure href links are build relatively
  base: '',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'ontopad',
      fileName: 'ontopad',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        exports: 'named',
      }
    }
  },
})
