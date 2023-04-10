module.exports = function (grunt) {
  grunt.initConfig({
    pkgFile: 'package.json',
    'npm-contributors': {
      options: {
        commitMessage: 'chore: update contributors'
      }
    },
    karma: {
      options: {
        configFile: 'examples/plus/karma.conf.js'
      },
      inline: {
      },
      external: {
        coffeePreprocessor: {
          writeTransformed: true
        }
      },
      separate: {
        coffeePreprocessor: {
          writeTransformed: true,
          transformDir: 'tmp'
        }
      },
      nomap: {
        coffeePreprocessor: {
          options: {
            sourceMap: false
          }
        }
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('default', ['karma'])
}
