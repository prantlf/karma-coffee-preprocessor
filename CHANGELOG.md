# 1.0.0 (2023-04-10)


### Bug Fixes

* actually pass cloned options to coffee.compile ([01a3e09](https://github.com/prantlf/karma-coffee-preprocessor/commit/01a3e094ce190c98457db7a32a5e91e4c40cb9e9))
* append sourceMappingURL, per spec ([7a330c5](https://github.com/prantlf/karma-coffee-preprocessor/commit/7a330c57c1156957baa8b1caf48591cbcf506338))
* clone mutable options ([6722fa4](https://github.com/prantlf/karma-coffee-preprocessor/commit/6722fa441e6251cf00fb330dde98909c6771d509))
* don't error out when coffee compilation fails ([4a8074b](https://github.com/prantlf/karma-coffee-preprocessor/commit/4a8074b5e6b0fe7bab14fd118a6fadba9f61bef4))
* don't suffix filename with -compiled.js ([14b1835](https://github.com/prantlf/karma-coffee-preprocessor/commit/14b1835aacc0b930f4cf5ef0effd4500acb1cc15))
* Include only index.js in the published package ([9b00edc](https://github.com/prantlf/karma-coffee-preprocessor/commit/9b00edc359d85591ab503cae7181a03bbe3bd482))
* missing var ([63b402a](https://github.com/prantlf/karma-coffee-preprocessor/commit/63b402ac84f8bbc23f2e8b19b9a044f9b9f70706))
* Modernise the JavaScript language ([1d492b9](https://github.com/prantlf/karma-coffee-preprocessor/commit/1d492b9921468e2522b5b918f2d3339fc54524bf))
* Remove the dependency on object-assign ([7793851](https://github.com/prantlf/karma-coffee-preprocessor/commit/7793851b0ec0f51021923548119176b7d2d6cea5))
* use object-assign to stop deprecation notice ([#36](https://github.com/prantlf/karma-coffee-preprocessor/issues/36)) ([769283e](https://github.com/prantlf/karma-coffee-preprocessor/commit/769283e7e348a612f54a95ceed672b26ad6fef92))
* warnings in chrome. ([acc1bce](https://github.com/prantlf/karma-coffee-preprocessor/commit/acc1bce9cfa6533f2ffb56fff94cad9970f87b2c))


### Features

* add a line number to the error log if there is a parse error ([56315e1](https://github.com/prantlf/karma-coffee-preprocessor/commit/56315e16a3583f6545e76a2ae3085302ab67a149))
* add sourceMap support ([0593c2f](https://github.com/prantlf/karma-coffee-preprocessor/commit/0593c2fac742300973def734abb3d1fe307d5387)), closes [#3](https://github.com/prantlf/karma-coffee-preprocessor/issues/3)
* cancel build on error ([b099260](https://github.com/prantlf/karma-coffee-preprocessor/commit/b0992606925e200d2bde1ff01d46d17cf3a05c6f))
* **config:** upgrade coffee-script to 1.6.3 ([202b893](https://github.com/prantlf/karma-coffee-preprocessor/commit/202b8930f82bf487deefdca8aa86be2c5aef23d3))
* Depend on any 1.* version of coffee-script ([ed41be7](https://github.com/prantlf/karma-coffee-preprocessor/commit/ed41be726a484e95ac2e6f715f30c89aa9f46c48))
* Fork the project ([0739c07](https://github.com/prantlf/karma-coffee-preprocessor/commit/0739c072304527ddc3fe376ab51b35cc3ce22637))
* make options, transformPath configurable ([486abcc](https://github.com/prantlf/karma-coffee-preprocessor/commit/486abccb97ad4e5d13a44df8a687d9011ae6d8e3)), closes [#1](https://github.com/prantlf/karma-coffee-preprocessor/issues/1)
* Move coffeescript to peer dependencies ([f84f552](https://github.com/prantlf/karma-coffee-preprocessor/commit/f84f552a73b6b0bff3583039215e4c5c285d21da))
* support source maps (rewriting stack traces) ([f1d5e7e](https://github.com/prantlf/karma-coffee-preprocessor/commit/f1d5e7ef090d21b7bc4608d1468fd7fbce21fbe7))
* update coffee script to 1.7 ([fec5e82](https://github.com/prantlf/karma-coffee-preprocessor/commit/fec5e821ae7d37cda20ff1039311080caef5ea93))
* Upgrade to CoffeeScript 2 ([cb4adc7](https://github.com/prantlf/karma-coffee-preprocessor/commit/cb4adc75a5d59b1028520812c196f1670260078b))


### BREAKING CHANGES

* The package coffeescript was moved to peer dependencies. If you use a package manager with the feature parity of NPM 8, you won't notice a difference, because it will install the peer depednencies automatically. Otherwise you will need to install coffeescript as a dev dependency, like you did karma earlier.
* The minimum supported version of Node.js is 8 now.
* Upgrade Node.js to version 4 or later.
* CoffeeScript version 2 is not 100% compatible with the version 1. See https://coffeescript.org/#breaking-changes for more information.

<a name="1.0.1"></a>
## [1.0.1](https://github.com/karma-runner/karma-coffee-preprocessor/compare/v1.0.0...v1.0.1) (2016-07-12)


### Bug Fixes

* use object-assign to stop deprecation notice ([#36](https://github.com/karma-runner/karma-coffee-preprocessor/issues/36)) ([769283e](https://github.com/karma-runner/karma-coffee-preprocessor/commit/769283e))
* warnings in chrome. ([acc1bce](https://github.com/karma-runner/karma-coffee-preprocessor/commit/acc1bce))



<a name"1.0.0"></a>
## 1.0.0 (2016-05-03)


<a name"0.3.0"></a>
## 0.3.0 (2015-07-09)


#### Features

* Depend on any 1.* version of coffee-script ([ed41be72](https://github.com/karma-runner/karma-coffee-preprocessor/commit/ed41be72))


<a name"0.2.1"></a>
### 0.2.1 (2015-07-09)


<a name"0.2.0"></a>
## 0.2.0 (2015-07-09)


#### Features

* cancel build on error ([b0992606](https://github.com/karma-runner/karma-coffee-preprocessor/commit/b0992606))


<a name"0.1.3"></a>
### 0.1.3 (2015-07-09)


#### Features

* update coffee script to 1.7 ([fec5e821](https://github.com/karma-runner/karma-coffee-preprocessor/commit/fec5e821))


<a name"0.1.2"></a>
### 0.1.2 (2015-07-09)


#### Features

* support source maps (rewriting stack traces) ([f1d5e7ef](https://github.com/karma-runner/karma-coffee-preprocessor/commit/f1d5e7ef))


<a name"0.1.1"></a>
### 0.1.1 (2015-07-09)


#### Features

* add a line number to the error log if there is a parse error ([56315e16](https://github.com/karma-runner/karma-coffee-preprocessor/commit/56315e16))


<a name"0.1.0"></a>
## 0.1.0 (2015-07-09)


<a name"0.0.4"></a>
### 0.0.4 (2015-07-09)


#### Bug Fixes

* append sourceMappingURL, per spec ([7a330c57](https://github.com/karma-runner/karma-coffee-preprocessor/commit/7a330c57))
* missing var ([63b402ac](https://github.com/karma-runner/karma-coffee-preprocessor/commit/63b402ac))
* don't error out when coffee compilation fails ([4a8074b5](https://github.com/karma-runner/karma-coffee-preprocessor/commit/4a8074b5))


#### Features

* add sourceMap support ([0593c2fa](https://github.com/karma-runner/karma-coffee-preprocessor/commit/0593c2fa), closes [#3](https://github.com/karma-runner/karma-coffee-preprocessor/issues/3))


<a name"0.0.3"></a>
### 0.0.3 (2015-07-09)


#### Bug Fixes

* actually pass cloned options to coffee.compile ([01a3e094](https://github.com/karma-runner/karma-coffee-preprocessor/commit/01a3e094))
* clone mutable options ([6722fa44](https://github.com/karma-runner/karma-coffee-preprocessor/commit/6722fa44))


#### Features

* **config:** upgrade coffee-script to 1.6.3 ([202b8930](https://github.com/karma-runner/karma-coffee-preprocessor/commit/202b8930))


<a name"0.0.2"></a>
### 0.0.2 (2015-07-09)


#### Bug Fixes

* don't suffix filename with -compiled.js ([14b1835a](https://github.com/karma-runner/karma-coffee-preprocessor/commit/14b1835a))


#### Features

* make options, transformPath configurable ([486abccb](https://github.com/karma-runner/karma-coffee-preprocessor/commit/486abccb), closes [#1](https://github.com/karma-runner/karma-coffee-preprocessor/issues/1))
