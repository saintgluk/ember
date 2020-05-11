module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 160 }],
    'linebreak-style': 'off',
    'no-debugger': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
      }
    ],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'eol-last': 0, // убирает перенос строки в конце файла
    'object-curly-spacing': ['error', 'always'],
  },
};
