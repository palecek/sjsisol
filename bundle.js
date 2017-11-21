var jspm = require('jspm')

var builder = new jspm.Builder()

function moduleSfxBuild(moduleName) {
  var config = {
    format: 'cjs',
    minify: true
  }
  var src = './src/' + moduleName + '/index.js'
  var dest = './public/dist/' + moduleName + '.sfx.js'

  builder
    .buildStatic(src, dest, config)
    .then(function () {
      console.log('SystemJS SFX build complete for "' + moduleName + '.js"');
    }).catch(function (err) {
      console.log(err);
    })
}

function loaderSfxBuild(loaderName) {
  var config = {
    format: 'cjs',
    minify: true
  }
  var src = './src/' + loaderName + '.js'
  var dest = './public/dist/' + loaderName + '.sfx.js'

  builder
    .buildStatic(src, dest, config)
    .then(function () {
      console.log('SystemJS SFX build complete for "' + loaderName + '.js"');
    }).catch(function (err) {
      console.log(err);
    })
}

function moduleBundle(moduleName) {
  var config = {
    minify: true
  }
  var src = './src/' + moduleName + '/index.js'
  var dest = './public/dist/' + moduleName + '.bundle.js'

  builder
    .bundle(src, dest, config)
    .then(function () {
      console.log('SystemJS bundle complete for "' + moduleName + '.js"');
    }).catch(function (err) {
      console.log(err);
    })
}

var modules = ['modb']

modules.map(moduleSfxBuild)
modules.map(moduleBundle)

var loaders = ['loader-bundle', 'loader-sfx']
// loaders.map(loaderSfxBuild)
