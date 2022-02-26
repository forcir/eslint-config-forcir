module.exports = {
  extends: ['./index.js', 'next'],
  overrides: [
    {
      files: ['pages/**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
