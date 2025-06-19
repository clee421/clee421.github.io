const path = require('path');

module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    project: path.resolve(__dirname, './tsconfig.json'),
    "tsconfigRootDir": __dirname,
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "tsx": true
    },
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-console": 2,
    "semi": [2, "always"],
    "comma-dangle": [2, "always-multiline"],
  }
}