import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';

// This seems to be wrong style, but I could not get flat cascade working
export default [{
  ...jsdoc.configs['flat/recommended'],
  ...{
    name: 'eslint-config-snordian-h5p',
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      globals: {
        ...globals.browser,
        H5P: 'readonly',
        H5PEditor: 'readonly',
        H5PIntegration: 'readonly'
      }
    },
    /*
     * With version 10 of eslint, formatting rules will be removed:
     * semi, indend, brace-style, keyword-spacing, comma-spacing, space-infix-ops
     * space-before-blocks, space-before-function-paren, quotes, arrow-parens,
     * object-curly-spacing
     * Probably replaceable by @stylistic/eslint-plugin-js
     */
    rules: {
      // H5P Group rules
      'semi': ['error', 'always'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'brace-style': ['error', 'stroustrup'],
      'keyword-spacing': ['error', { 'after': true }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'space-infix-ops': ['error', { 'int32Hint': false }],
      'eqeqeq': ['error', 'smart'],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }],
      'no-extra-boolean-cast': 'off',
      'no-console': ['error', { 'allow': ['warn', 'error'] }],
      'quotes': ['error', 'single'],
      // SNORDIAN specific rules
      'arrow-parens': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'prefer-template': ['error'],
      'no-await-in-loop': ['error'],
      'no-self-compare': ['error'],
      'dot-notation': ['error'],
      'no-eval': ['error'],
      'no-implied-eval': ['error'],
      'no-magic-numbers': ['warn', {
        'ignoreArrayIndexes': true,
        'ignoreDefaultValues': true,
        'enforceConst': true,
        'ignore': [-1, 0, 1]
      }],
      'no-nested-ternary': ['error'],
      'complexity': ['warn', 10],
      // SNORDIAN specific rules JSDOC rules
      ...jsdoc.configs['flat/recommended'].rules
    },
    settings: {
      jsdoc: {
        // SNORDIAN specific rules JSDOC settings
        preferredTypes: {
          Function: 'function'
        }
      }
    }
  }
}];
