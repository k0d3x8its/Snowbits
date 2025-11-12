module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs'],

  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  settings: {
    react: { version: '18.2' },
    "import/resolver": {
      alias: {
        map: [
          ["@assets", "./src/assets/"],
        ],
        extensions: [
          ".js", ".jsx", ".ts", ".tsx", ".json", ".svg", ".png",
          ".jpg", ".jpeg", ".gif", ".webp"
        ],
      },
    },
  },

  plugins: ['react-refresh', 'import'],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
