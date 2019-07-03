module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
    },
    // extends: ["plugin:vue/essential", "@vue/prettier"],
    // extends: ["plugin:vue/strongly-recommended", "@vue/prettier"],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     sourceType: 'module',
//   },
//   env: {
//     node: true, // browser: true,
//   },
//   // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
//   // extends: 'standard',
//   extends: ['eslint:recommended', 'plugin:prettier/recommended'],
//   // required to lint *.vue files
//   plugins: ['html'],
//   // add your custom rules here
//   rules: {
//     // allow paren-less arrow functions
//     // 'arrow-parens': 0,
//     // allow async-await
//     // 'generator-star-spacing': 0,
//     // allow debugger during development
//     // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   },
// };
