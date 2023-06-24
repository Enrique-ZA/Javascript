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
    }
};
