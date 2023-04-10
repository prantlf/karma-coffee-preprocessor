# @prantlf/karma-coffee-preprocessor

[![Latest version](https://img.shields.io/npm/v/@prantlf/karma-coffee-preprocessor)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/@prantlf/karma-coffee-preprocessor)
](https://www.npmjs.com/package/@prantlf/karma-coffee-preprocessor)
[![Code coverage](https://codecov.io/gh/prantlf/karma-coffee-preprocessor/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/karma-coffee-preprocessor)

> Preprocessor to compile CoffeeScript on the fly.

This is a fork of the [original project] with the following changes:

* Upgrade to CoffeeScript 2 ([#87], [#89], [#91])
* Move coffeescript to peer dependencies
* Require Node.js 8 or newer

## Installation

The easiest way is to keep `@prantlf/karma-coffee-preprocessor` as a devDependency. You can simply do it by:

```sh
npm install @prantlf/karma-coffee-preprocessor --save-dev
```

This package requires `karma` and `coffeescript` as peer dependencies. If your package manager doesn't install peer dependencies automatically, you will need to install them together:

```sh
npm install @prantlf/karma-coffee-preprocessor karma coffeescript --save-dev
```

## Configuration

Following code shows the default configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js')
      }
    },

    // make sure to include the .coffee files not the compiled .js files
    files: [
      '**/*.coffee'
    ]
  })
}
```

If you set the `sourceMap` coffee compiler option to `true` then the generated source map will be inlined as a data-uri.

Note that paths like "**/*.coffee" inside your "preprocessor" list will not match files where you are traversing up a directory (like "../app/*.coffee" inside your "files" list) or where your basePath goes up a directory. If you need to match these, use something like `preprocessors: { '../**/*.coffee': ['coffee'] }`.
----

For more information on Karma see the [homepage].

[original project]: https://github.com/karma-runner/karma-coffee-preprocessor
[homepage]: http://karma-runner.github.com
[#87]: https://github.com/karma-runner/karma-coffee-preprocessor/issues/87
[#89]: https://github.com/karma-runner/karma-coffee-preprocessor/issues/89
[#91]: https://github.com/karma-runner/karma-coffee-preprocessor/pull/91
