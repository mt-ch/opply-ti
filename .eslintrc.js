module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts', '.d.ts']
      },
      alias: {
        extensions: ['.vue', '.js', '.ts', '.scss', '.d.ts'],
        map: [
          ['@/components', './src/components'],
          ['@/pages', './src/pages'],
          ['@/router', './src/router'],
          ['@/store', './src/store'],
          ['@/styles', './src/styles'],
          ['@/types', './src/types'],
          ['@/utils', './src/utils']
        ]
      }
    }
  }
}
