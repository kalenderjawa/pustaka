import { defineConfig } from 'vite';

export default defineConfig({
  root: 'examples',
  server: {
    port: 3113,
    open: true,
  },
  build: {
    outDir: '../dist-examples',
    emptyOutDir: true,
  },
  publicDir: false, // Don't copy public files since we're serving from examples
});
