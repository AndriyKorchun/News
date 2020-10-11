module.exports = {
    parser: 'babel-eslint',
    extends: [
      'eslint:recommended',
      'airbnb-base',
    ],
    env: {
      node: true,
      browser: true,
      es6: true,
    },
    rules: {
      "indent": 0,
      'linebreak-style': 0,
      "eol-last": 0,
    },
  };