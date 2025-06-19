const path = require("path");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: [
      "dist/**",
      "build/**",
      "eslint.config.js",
      "webpack.common.js",
      "webpack.dev.js",
      "webpack.prod.js"
    ]
  },

  ...compat.config({
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: path.resolve(__dirname, "./tsconfig.json"),
      tsconfigRootDir: __dirname,
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: { jsx: true },
    },
    plugins: ["@typescript-eslint", "prettier", "react"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "no-console": "error",
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "prettier/prettier": "error",
    },
    settings: {
      react: { version: "detect" },
    },
  }),
];
