# webpack-closet-type

[![NPM Version](https://img.shields.io/npm/v/webpack-closet-type.svg)](https://www.npmjs.com/package/webpack-closet-type)
[![webpack-closet-type CI](https://github.com/syarul/webpack-closet-type/actions/workflows/main-ci.yml/badge.svg)](https://github.com/syarul/webpack-closet-type/actions/workflows/main-ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/syarul/webpack-closet-type/badge.svg?branch=main)](https://coveralls.io/github/syarul/webpack-closet-type?branch=main)

Webpack loader for [closet-type](https://github.com/syarul/closet-type), to transform the file automatically on compilation

## Usage

```js
// webpack.config
...
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.(js|jsx)$/,
        use: 'webpack-closet-type'
      }
    ]
  },
...
```
