# SNORDIAN's Common ESLint config for H5P projects

H5P Group provides a set of [coding guidelines](https://h5p.org/documentation/for-developers/coding-guidelines).

This is the common ESLint configuration based on those per repository
configurations that helps to follow that guidelines. It also adds some rules
which are not clearly specified by H5P Group, but that feel reasonable to have.
In turn, this set of rules is even stricter than what H5P Group demands.

H5PGroup has now (December 2024) created https://github.com/h5p/eslint-config-h5p/
with their default rules to lint code. When I find some time, I'll assess whether
this SNORDIAN configuration is obsolete or maybe amends the default rules with
the additional stricter rules.

## Requirements
You need to use ESLint 9 or later with flat config.

## Usage
1. Assuming you are using `npm`, install the module with
  ```console
  npm install github:otacke/eslint-config-snordian-h5p
  ```
2. Assuming that you are using ECMA script modules, setting up a file
  `eslint.config.js` with
  ```javascript
  import eslintConfigSnordianH5P from 'eslint-config-snordian-h5p';

  export default [eslintConfigSnordianH5P.configs['flat/recommended']];
  ```
  should do the job. If you need to tweak the settings: Beware, I may not have
  fully understood flat config yet and may not have implemented everything to
  work as required.

3. Assuming you have a dedicated source (src) directory, do your linting with
  something such as
  ```console
  npx eslint './src/**/*.js'
  ```
