import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 13,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      camelcase: 0,
      'comma-dangle': [0, 'never'],
      'comma-style': [2, 'last'],
      eqeqeq: 2,
      indent: [2, 2, { VariableDeclarator: 2 }],
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
      'no-undef': 0,
      'no-underscore-dangle': 0,
      'no-void': 2,
      quotes: [2, 'single'],
      semi: [2, 'never'],
    },
  },
]
