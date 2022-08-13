module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    "jest/globals": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"]
  },
  plugins: ["@typescript-eslint", "jest", "import"],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  rules: {
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@components/**",
            group: "parent",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: ["builtin", "external", "internal", "parent", "object", "sibling", "index"],
        "newlines-between": "always"
      }
    ],
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-cycle": "warn",
    "import/export": "error",
    "import/prefer-default-export": "off",
    "import/no-duplicates": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],

    "jest/no-export": "off",
    "jest/no-commented-out-tests": "off"
  }
};
