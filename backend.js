module.exports = {
  extends: ['./index.js'],
  env: {
    node: true,
  },
  rules: {
    'node/no-unpublished-require': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
  },
};
