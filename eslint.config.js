import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { parser: typescriptParser },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {},
    ignores: ['node_modules', 'dist'],
  },
  eslintConfigPrettier,
];
