var jspm = require('jspm')

var builder = new jspm.Builder()

function sfxBuild(moduleName) {
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

['moda', 'modb'].map(sfxBuild)
