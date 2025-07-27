import { defineConfig } from 'vitest/config'

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
        '**/*.d.ts',
        'vite.config.ts',
        'vitest.config.ts'
      ]
    },
    include: ['src/**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules/', 'dist/', 'src/**/__browser*.test.js']
  }
})