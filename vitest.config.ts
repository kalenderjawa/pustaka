import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        'lib/',
        'docs/',
        'coverage/',
        '**/*.d.ts',
        '**/*.test.{js,ts}',
        '**/*.spec.{js,ts}',
        'src/__tests__/**/*',
        'vite.config.ts',
        'vitest.config.ts',
        'babel.config.cjs',
        'jest-puppeteer.config.cjs',
      ],
    },
    include: ['src/__tests__/**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules/', 'dist/', 'src/**/__browser*.test.js'],
  },
});
