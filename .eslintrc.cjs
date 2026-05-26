module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['build', 'dist'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.{js,cjs,mjs,ts}', 'vite.config.ts'],
      },
    ],
  },
};
