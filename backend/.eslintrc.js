module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "generator-star-spacing": ["error", "after"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "prefer-promise-reject-errors": "off",
    "array-callback-return": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "off",
    "react/no-unescaped-entities": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-useless-escape": "off",
    "prefer-regex-literals": "off",
    "quote-props": "off",
    "max-len": ["error", { "code": 120 }],
    "operator-linebreak": ["error", "before"],
    "no-mixed-operators": "off"
  },
};
