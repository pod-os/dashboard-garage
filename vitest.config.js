import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@opencode-ai/plugin': path.resolve('./node_modules/@opencode-ai/plugin/dist/tool.js'),
    },
  },
  test: {
    globals: true,
  },
});
