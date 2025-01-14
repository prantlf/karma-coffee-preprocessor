module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
      '*.coffee',
      // For tests with external source maps
      { pattern: '*.map', included: false, nocache: true },
      { pattern: '**/*.map', included: false, nocache: true }
    ],

    preprocessors: {
      '*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      options: {
        sourceMap: true
      }
    },

    exclude: [],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['ChromeHeadless'],

    singleRun: true,

    plugins: [
      require('../..'),
      'karma-chrome-launcher',
      'karma-mocha'
    ]
  })
}
