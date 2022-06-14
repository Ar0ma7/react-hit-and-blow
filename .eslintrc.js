module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:react/jsx-runtime",
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  }
}
