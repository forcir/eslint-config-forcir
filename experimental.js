module.exports = {
  extends: ['./index.js'],
  rules: {
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowedPromiseNames: ['Thenable'],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
  },
};
