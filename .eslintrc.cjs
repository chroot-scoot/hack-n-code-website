/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react-refresh', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}', 'tests'],
      extends: ['plugin:playwright/recommended'],
    },
  ],
};
