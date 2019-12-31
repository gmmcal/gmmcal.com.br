/*eslint-env node*/
module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'browser': true
  },
  'rules': {
    'camelcase': 0,
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'eqeqeq': 2,
    'indent': [2, 2, { 'VariableDeclarator': 2 }],
    'no-eq-null': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 0,
    'no-nested-ternary': 2,
    'no-param-reassign': 2,
    'no-self-compare': 2,
    'no-shadow': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-void': 2,
    'quotes': [2, 'single'],
    'semi': [2, 'never']
  }
};
