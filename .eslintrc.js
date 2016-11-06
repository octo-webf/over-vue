module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {

    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // This rule enforces consistent use of trailing commas in object and array literals
    // http://eslint.org/docs/rules/comma-dangle
    "comma-dangle": ["error", "never"]
  }
}
