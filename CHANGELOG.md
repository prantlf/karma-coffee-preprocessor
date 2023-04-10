# [2.1.0](https://github.com/prantlf/karma-coffee-preprocessor/compare/v2.0.0...v2.1.0) (2023-04-10)


### Features

* Allow saving the transformed script and source map to disk ([0dbb86a](https://github.com/prantlf/karma-coffee-preprocessor/commit/0dbb86ad5692dcedff3625f2c4acb6f59465939a))

## [2.0.0](https://github.com/prantlf/karma-coffee-preprocessor/compare/ef1c7ae0c9a2153ba66e17610da175ac7996423d...v2.0.0) (2023-04-10)


### Bug Fixes

* Include only index.js in the published package ([9b00edc](https://github.com/prantlf/karma-coffee-preprocessor/commit/9b00edc359d85591ab503cae7181a03bbe3bd482))
* Modernise the JavaScript language ([1d492b9](https://github.com/prantlf/karma-coffee-preprocessor/commit/1d492b9921468e2522b5b918f2d3339fc54524bf))
* Remove the dependency on object-assign ([7793851](https://github.com/prantlf/karma-coffee-preprocessor/commit/7793851b0ec0f51021923548119176b7d2d6cea5))


### Features

* Fork the project ([0739c07](https://github.com/prantlf/karma-coffee-preprocessor/commit/0739c072304527ddc3fe376ab51b35cc3ce22637))
* Move coffeescript to peer dependencies ([f84f552](https://github.com/prantlf/karma-coffee-preprocessor/commit/f84f552a73b6b0bff3583039215e4c5c285d21da))
* Upgrade to CoffeeScript 2 ([cb4adc7](https://github.com/prantlf/karma-coffee-preprocessor/commit/cb4adc75a5d59b1028520812c196f1670260078b))


### BREAKING CHANGES

* The package coffeescript was moved to peer dependencies. If you use a package manager with the feature parity of NPM 8, you won't notice a difference, because it will install the peer depednencies automatically. Otherwise you will need to install coffeescript as a dev dependency, like you did karma earlier.
* The minimum supported version of Node.js is 8 now.
* Upgrade Node.js to version 4 or later.
* CoffeeScript version 2 is not 100% compatible with the version 1. See https://coffeescript.org/#breaking-changes for more information.


## [1.0.1](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v1.0.0...v1.0.1) (2016-07-12)


### Bug Fixes

* use object-assign to stop deprecation notice ([#36](https://github.com/karma-runner/karma-coffee-preprocessor/issues/36)) ([769283e](https://github.com/karma-runner/karma-coffee-preprocessor/commit/769283e))
* warnings in chrome. ([acc1bce](https://github.com/karma-runner/karma-coffee-preprocessor/commit/acc1bce))


## [1.0.0](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.3.0...v1.0.0) (2016-05-03)


## [0.3.0](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.2.1...v0.3.0) (2015-07-09)


#### Features

* Depend on any 1.* version of coffee-script ([ed41be72](https://github.com/karma-runner/karma-coffee-preprocessor/commit/ed41be72))


## [0.2.1](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.2.0...v0.2.1) (2015-07-09)


## [0.2.0](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.1.3...v0.2.0) (2015-07-09)


#### Features

* cancel build on error ([b0992606](https://github.com/karma-runner/karma-coffee-preprocessor/commit/b0992606))


## [0.1.3](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.1.2...v0.1.3) (2015-07-09)


#### Features

* update coffee script to 1.7 ([fec5e821](https://github.com/karma-runner/karma-coffee-preprocessor/commit/fec5e821))


## [0.1.2](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.1.1...v0.1.2) (2015-07-09)


#### Features

* support source maps (rewriting stack traces) ([f1d5e7ef](https://github.com/karma-runner/karma-coffee-preprocessor/commit/f1d5e7ef))


## [0.1.1](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.1.0...v0.1.1) (2015-07-09)


#### Features

* add a line number to the error log if there is a parse error ([56315e16](https://github.com/karma-runner/karma-coffee-preprocessor/commit/56315e16))


## [0.1.0](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.0.4...v0.1.0) (2015-07-09)


## [0.0.4](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.0.3...v0.0.4) (2015-07-09)


#### Bug Fixes

* append sourceMappingURL, per spec ([7a330c57](https://github.com/karma-runner/karma-coffee-preprocessor/commit/7a330c57))
* missing var ([63b402ac](https://github.com/karma-runner/karma-coffee-preprocessor/commit/63b402ac))
* don't error out when coffee compilation fails ([4a8074b5](https://github.com/karma-runner/karma-coffee-preprocessor/commit/4a8074b5))


#### Features

* add sourceMap support ([0593c2fa](https://github.com/karma-runner/karma-coffee-preprocessor/commit/0593c2fa), closes [#3](https://github.com/karma-runner/karma-coffee-preprocessor/issues/3))


## [0.0.3](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.0.2...v0.0.3) (2015-07-09)


#### Bug Fixes

* actually pass cloned options to coffee.compile ([01a3e094](https://github.com/karma-runner/karma-coffee-preprocessor/commit/01a3e094))
* clone mutable options ([6722fa44](https://github.com/karma-runner/karma-coffee-preprocessor/commit/6722fa44))


#### Features

* **config:** upgrade coffee-script to 1.6.3 ([202b8930](https://github.com/karma-runner/karma-coffee-preprocessor/commit/202b8930))


## [0.0.2](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v0.0.1...v0.0.2) (2015-07-09)


#### Bug Fixes

* don't suffix filename with -compiled.js ([14b1835a](https://github.com/karma-runner/karma-coffee-preprocessor/commit/14b1835a))


#### Features

* make options, transformPath configurable ([486abccb](https://github.com/karma-runner/karma-coffee-preprocessor/commit/486abccb), closes [#1](https://github.com/karma-runner/karma-coffee-preprocessor/issues/1))
