import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@plugin': resolve(__dirname, 'src'),
    },
  },
})
