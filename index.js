import eslintConfig from './eslint.config.js';

/*
 * Waiting for https://github.com/tc39/proposal-json-modules to become
 * available in order to fetch the version from package.json. Don't want to
 * build-chain this.
 */
export default {
  meta: {
    name: eslintConfig.name,
    version: '1.0.0'
  },
  configs: {
    'flat/recommended': { ...eslintConfig[0] }
  },
  rules: {},
  processors: {}
};
