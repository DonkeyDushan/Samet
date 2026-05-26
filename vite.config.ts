import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import packageJson from './package.json';

type ReactPluginOptionsWithBabel = Parameters<typeof react>[0] & {
  babel?: {
    plugins: Array<string | [string, unknown]>;
  };
};

const reactPluginOptions: ReactPluginOptionsWithBabel = {
  babel: {
    plugins: [['babel-plugin-react-compiler', {}]],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(reactPluginOptions),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
  },
  build: {
    outDir: 'build',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'react';
          }
          if (
            id.includes('node_modules/@mui')
            || id.includes('node_modules/@emotion/react')
            || id.includes('node_modules/@emotion/styled')
          ) {
            return 'mui';
          }
          return undefined;
        },
      },
    },
  },
});
