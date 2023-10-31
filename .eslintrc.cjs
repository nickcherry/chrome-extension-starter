/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'no-restricted-imports',
    'react-hooks',
    'react',
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    curly: 'error',
    eqeqeq: 'error',
    'import/no-default-export': 'error',
    'no-console': 'off',
    'no-duplicate-imports': 'error',
    'no-restricted-globals': ['error', 'reportError'],
    'no-restricted-imports': [
      'error',
      {
        patterns: [],
        paths: [],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
