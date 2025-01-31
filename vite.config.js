import { fileURLToPath, URL } from 'node:url'

import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['buffer', 'events'],
    }),
    vue({
      template: {
          compilerOptions: {
              isCustomElement: (tag) => ['shacl-form'].includes(tag),

          }
      }}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'OntoPad',
      // the proper extensions will be added
      fileName: 'ontopad',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  base: ''
})
