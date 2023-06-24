"use strict";

module.exports = {
    env: {
        es6: true,
    },
    rules: {
        strict: ['error', 'global'],
        "multiline-comment-style": ['error', 'bare-block'],
        "spaced-comment": ['error', 'always'],
        semi: ['error', 'always'],
        "semi-spacing": 'error',
        "no-extra-semi": 'error',
        "no-unexpected-multiline": 'error',
        "max-len": ['error', {'code': 80}],
        "comma-style": ['error', 'last'],
        "comma-dangle": ['error', 'always-multiline'],
        indent: ['error', 4],
        "space-infix-ops": 'error',
        "brace-style": 'error',
        "space-before-blocks": 'error',
        "keyword-spacing": ['error', {"after": false}],
        "arrow-spacing": 'error',
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never",
        }],
        "newline-per-chained-call": 'error',
        "space-in-parens": 'error',
        "array-bracket-spacing": 'error',
        "object-curly-spacing": 'error',
        "comma-spacing": ['error', {"before": false, "after": true}], 
        "no-multiple-empty-lines": ['error', {"max": 1, "maxEOF": 1, 
            "maxBOF": 3}],
    },
};
// "multiline-comment-style": ['error', 'bare-block'],
