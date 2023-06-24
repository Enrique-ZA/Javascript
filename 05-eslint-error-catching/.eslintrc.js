module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb-base"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    // enforces ---> use strict;
    strict: ['error', 'global'],
    // multiline style choice
    "multiline-comment-style": ['error', 'bare-block'],
    // spaces in comments choice
    "spaced-comment": ['error', 'always'],
    // handles semicolon choice
    semi: ['error', 'always'],
    // handle semicolon spacing
    "semi-spacing": 'error',
    // only one semicolon allowed per line
    "no-extra-semi": 'error',
    "no-unexpected-multiline": 'error',
    // max line length
    "max-len": ['error', {'code': 80}],
    // comma style choice
    "comma-style": ['error', 'last'],
    // comma at EOL or not
    "comma-dangle": ['error', 'always-multiline'],
    // number of spaces to indent with
    indent: ['error', 2],
    "space-infix-ops": 'error',
    // brasce style choice
    "brace-style": 'error',
    // space before blocks choice
    "space-before-blocks": 'error',
    // space between keyword and ( or not
      "keyword-spacing": ['error', {"after": true}],
      // space between =>
      "arrow-spacing": 'error',
      // space between a function paren or not
      "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "never",
      }],
      // how new line chains work
      "newline-per-chained-call": 'error',
      // space allowed in parens or not
      "space-in-parens": 'error',
      // space in brackets or not
      "array-bracket-spacing": 'error',
      // space in objects or nor
      "object-curly-spacing": 'error',
      // how comman spacing is handled
      "comma-spacing": ['error', {"before": false, "after": true}], 
      // how many new lines permitted bewteen, EOF and BOF
      "no-multiple-empty-lines": ['error', {"max": 2, "maxBOF": 2, "maxEOF": 1}],
      // arguments to a function must be unique
      "no-dupe-args": 'error',
      // cannot use the same function name again
      "no-func-assign": 'error',
      // check that the direction of inc is correct in for loop
      "for-direction": 'error',
      // check for duplications in else if
      "no-dupe-else-if": 'error',
      // checks for empty in statements
      "no-empty": 'error',
      // no debugger;
      "no-debugger": 'error',
      // what console. 's are allowed
      "no-console": ['warn', {'allow': ['warn', 'error']}],
      // example [1, 2,, 3];
      "no-sparse-arrays": 'error',
      // catches errors where ` should be used such as "${home}"
      "no-template-curly-in-string": 'error',
      // catches a = b instead of a === b
      "no-cond-assign": 'error',
      // example if (false)
      "no-constant-condition": 'error',
      // checks string spelling for common js data types
      "valid-typeof": 'error',
      // force calls to isNaN()
      "use-isnan": 'error',
      // fixes common ! use mistakes
      "no-unsafe-negation": 'error',
      // checks for declared vars that were not used
      "no-unused-vars": 'warn',
    }
};
