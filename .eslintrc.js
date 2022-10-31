module.exports = {
  extends: ["@gazzati/eslint-config-node"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"]
  }
}
