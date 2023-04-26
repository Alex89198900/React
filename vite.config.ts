/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [react(), eslint(), istanbul()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html'],
      provider: 'c8',
      reportsDirectory: './test/unit/coverage',
    },
  },
});
