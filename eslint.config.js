import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
import stylisticJs from '@stylistic/eslint-plugin';

const INDENTATION_CHARS = 2;

// This seems to be wrong style, but I could not get flat cascade working
export default [{
  ...jsdoc.configs['flat/recommended'],
  ...nodePlugin.configs['flat/recommended-script'],
  ...importPlugin.flatConfigs.recommended,
  ...{
    name: 'eslint-config-snordian-h5p',
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
      globals: {
        ...globals.browser,
        H5P: 'readonly',
        H5PEditor: 'readonly',
        H5PIntegration: 'readonly',
      },
    },
    plugins: {
      'import': importPlugin,
      'jsdoc': jsdoc,
      'n': nodePlugin,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      // H5P Group rules
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/indent': ['error', INDENTATION_CHARS, { 'SwitchCase': 1 }],
      '@stylistic/js/brace-style': ['error', 'stroustrup'],
      '@stylistic/js/keyword-spacing': ['error', { 'after': true }],
      '@stylistic/js/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/js/space-infix-ops': ['error', { 'int32Hint': false }],
      'eqeqeq': ['error', 'smart'],
      '@stylistic/js/space-before-blocks': 'error',
      '@stylistic/js/space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      }],
      'no-extra-boolean-cast': 'off',
      'no-console': ['error', { 'allow': ['warn', 'error'] }],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      'n/handle-callback-err': ['error'],
      'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
      'import/prefer-default-export': 'off',
      'no-restricted-syntax': 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',
      // SNORDIAN specific rules
      'curly': ['error', 'all'],
      '@stylistic/js/arrow-parens': ['error', 'always'],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
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
        'ignore': [-1, 0, 1, 100],
      }],
      'no-nested-ternary': ['error'],
      '@stylistic/js/max-len': ['warn', { 'code': 120 }],
      // SNORDIAN specific rules JSDOC rules
      ...jsdoc.configs['flat/recommended'].rules,
      // Prevent use of `function` to raise an error
      'jsdoc/valid-types': 0,
    },
    settings: {
      jsdoc: {
        // SNORDIAN specific rules JSDOC settings
        preferredTypes: {
          Function: 'function',
        },
      },
    },
  },
}];
