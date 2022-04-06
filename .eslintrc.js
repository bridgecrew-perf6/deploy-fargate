module.exports = {
  root: true,
  env: {
    browser:  false,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module",
  },
  plugins: ["import"],
  // add your custom rules here
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ignorePackages: true,
        pattern: {
          js: "always"
        }
      }
    ]
  },
}
