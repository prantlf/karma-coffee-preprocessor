const { compile } = require('coffeescript')
const { basename, dirname, isAbsolute, join, relative, resolve } = require('path')
const { mkdir, writeFile } = require('fs/promises')

const createCoffeePreprocessor = function (args, logger, helper, config = {}) {
  const coffeeConfig = config.coffeePreprocessor || /* c8 ignore next */ {}
  const log = logger.create('preprocessor.coffee')

  const defaultOptions = {
    bare: true,
    sourceMap: false
  }
  const options = helper.merge(defaultOptions,
    args.options || /* c8 ignore next */ {}, coffeeConfig.options || {})

  const transformPath = args.transformPath || coffeeConfig.transformPath ||
    (path => path.replace(/\.coffee$/, '.js'))

  return async function (content, file, done) {
    const { originalPath } = file
    log.debug('Processing "%s".', originalPath)
    let path = transformPath(originalPath)

    // Clone the options because coffee.compile mutates them
    const opts = Object.assign({}, options)

    let result
    try {
      result = compile(content, opts)
    /* c8 ignore next 4 */
    } catch (e) {
      log.error('%s\n  at %s:%d', e.message, originalPath, e.location.first_line)
      return done(e, null)
    }

    let { js, v3SourceMap } = result
    if (v3SourceMap) {
      const map = JSON.parse(v3SourceMap)
      const jsName = basename(path)
      map.file = jsName
      file.sourceMap = map

      const createInlineMap = () => {
        map.sources[0] = basename(originalPath)
        const data = Buffer.from(JSON.stringify(map)).toString('base64')
        const datauri = `data:application/json;charset=utf-8;base64,${data}`
        js = `${js}\n//# sourceMappingURL=${datauri}\n`
      }

      let { transformDir, writeTransformed } = coffeeConfig

      const prepareTransformPath = async () => {
        const { basePath } = config
        // Prepend the Karma basePath if transformDir isn't an absolute path
        if (!isAbsolute(transformDir)) transformDir = join(basePath, transformDir)
        transformDir = resolve(transformDir)
        // Compute the path of the transformed script relative to the Karma basePath
        const relativePath = relative(basePath, path)
        // Append the relative path of the transformed script to the transformDir
        path = join(transformDir, relativePath)
        // Ensure that the parent directory of the transformed script will exist
        const targetDir = dirname(path)
        if (targetDir !== '.') await mkdir(targetDir, { recursive: true })
        // Return the path of the original script relative to the parent directory
        // of the transformed script
        return join(relative(transformDir, basePath), basename(originalPath))
      }

      const createExternalMap = async () => {
        try {
          map.sources[0] = transformDir ? await prepareTransformPath() : basename(originalPath)
          // Prevent requesting the .coffee file, which would transform again
          // map.sourcesContent = []
          js = `${js}\n//# sourceMappingURL=${jsName}.map`
          await writeFile(path, js)
          await writeFile(`${path}.map`, JSON.stringify(map))
        /* c8 ignore next 3 */
        } catch (e) {
          log.warn('Writing "%s" with map failed:\n%s', path, e.message)
        }
      }

      if (writeTransformed) {
        await createExternalMap()
      } else {
        createInlineMap()
      }

      // Set the output script path this late; it might be moved to `tranmsformDir`
      file.path = path
      done(null, js)
    } else {
      file.path = path
      done(null, js || result)
    }
  }
}

createCoffeePreprocessor.$inject = ['args', 'logger', 'helper', 'config']

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:coffee': ['factory', createCoffeePreprocessor]
}
