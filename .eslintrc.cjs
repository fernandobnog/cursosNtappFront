module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },

  ignorePatterns: ['components.d.ts', 'cypress.config.ts', 'cypress/'],
}
