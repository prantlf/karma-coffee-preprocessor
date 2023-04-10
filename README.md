# @prantlf/karma-coffee-preprocessor

[![Latest version](https://img.shields.io/npm/v/@prantlf/karma-coffee-preprocessor)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/@prantlf/karma-coffee-preprocessor)
](https://www.npmjs.com/package/@prantlf/karma-coffee-preprocessor)
[![Code coverage](https://codecov.io/gh/prantlf/karma-coffee-preprocessor/branch/master/graph/badge.svg)](https://codecov.io/gh/prantlf/karma-coffee-preprocessor)

> Karma preprocessor to compile CoffeeScript on the fly.

This is a fork of the [original project] with the following changes:

* Upgrade to CoffeeScript 2 ([#87], [#89], [#91])
* Move coffeescript to peer dependencies
* Allow saving the transformed script with source map to disk
* Require Node.js 8 or newer

For more information on Karma see the [homepage].

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

The following code shows the default configuration:

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      // default options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // default transforming the filenames
      transformPath(path) {
        return path.replace(/\.coffee$/, '.js')
      }
    },

    // make sure to include the .coffee files, not the compiled .js files
    files: [
      '**/*.coffee'
    ]
  })
}
```

If you set the `sourceMap` coffee compiler option to `true` then the generated source map will be inlined as a data URI.

Note that paths like `**/*.coffee` inside your `preprocessors` list will not match files where you are traversing up a directory (like `../app/*.coffee` inside your `files` list) or where your `basePath` goes up a directory. If you need to match these, use something like `preprocessors: { '../**/*.coffee': ['coffee'] }`.

### External Source Maps

If you use tools for analysing the web application or computing code coverage, you may need to save the preprocessed scripts with source maps to disk.

For example, the following configuration will save the transformed scripts and source maps as siblings of the original source files:

```js
coffeePreprocessor: {
  options: {
    sourceMap: true
  },
  writeTransformed: true
},
files: [
  '*.coffee',
  { pattern: '*.map', included: false, nocache: true }
]
```

```
├── plus.coffee
├── plus.js
├── plus.js.map
├── test.coffee
├── test.js
└── test.js.map
```

For example, the following configuration will save the transformed scripts and source maps to a separate directory from the original source files:

```js
coffeePreprocessor: {
  options: {
    sourceMap: true
  },
  writeTransformed: true,
  transformDir: 'tmp'
},
files: [
  '*.coffee',
  { pattern: '**/*.map', included: false, nocache: true }
]
```

```
├── plus.coffee
├── test.coffee
└── tmp
    ├── plus.js
    ├── plus.js.map
    ├── test.js
    └── test.js.map`
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code.

## License

Copyright (C) 2011-2013 Google, Inc.<br>
Copyright (c) 2023 Ferdinand Prantl

Licensed under the MIT license.

[homepage]: http://karma-runner.github.com
[original project]: https://github.com/karma-runner/karma-coffee-preprocessor
[#87]: https://github.com/karma-runner/karma-coffee-preprocessor/issues/87
[#89]: https://github.com/karma-runner/karma-coffee-preprocessor/issues/89
[#91]: https://github.com/karma-runner/karma-coffee-preprocessor/pull/91
