/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';
import { coverageConfigDefaults } from 'vitest/config';

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
      exclude: [
        ...coverageConfigDefaults.exclude,
        'server.ts',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
        'src/App.tsx',
        'src/HTMLtoserver.tsx',
        'src/Hook.tsx',
        'src/*.d.ts',
        '**/I*.ts',
      ],
    },
  },
  server: {
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
});
