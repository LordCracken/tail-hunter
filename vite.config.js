import { defineConfig } from 'vite';
const path = require('path');

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
