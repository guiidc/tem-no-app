module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
  },
};
