// .eslintrc.mjs

import {defineConfig} from '@eslint/config';

export default defineConfig({
  root: true,
  extends: ['@react-native'],
  settings: {
    react: {
      version: 'detect',
    },
  },
});
