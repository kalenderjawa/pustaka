import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    // Note: dts plugin disabled temporarily due to dependency issues
    // Will be re-enabled after dependency resolution
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KalenderJawa',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => {
        switch (format) {
          case 'es':
            return 'kalenderjawa.min.js';
          case 'cjs':
            return 'kalenderjawa.min.cjs';
          case 'umd':
            return 'kalenderjawa.browser.min.js';
          default:
            return `kalenderjawa.${format}.js`;
        }
      },
    },
    rollupOptions: {
      external: ['@kalenderjawa/saptawara', '@kalenderjawa/pancawara'],
      output: {
        globals: {
          '@kalenderjawa/saptawara': 'Saptawara',
          '@kalenderjawa/pancawara': 'Pancawara',
        },
      },
    },
    minify: 'terser',
    sourcemap: true,
    target: 'es2018',
  },
});
