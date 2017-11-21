var jspm = require('jspm')

var builder = new jspm.Builder()

var config = {
  format: 'cjs',
  minify: true
}

builder
  .buildStatic('./src/moda/index.js', './public/dist/moda.sfx.js', config)
  .then(function () {
    console.log('SystemJS SFX build complete for "moda.js"');
  }).catch(function (err) {
    console.log(err);
  })

  builder
  .buildStatic('./src/modb/index.js', './public/dist/modb.sfx.js', config)
  .then(function () {
    console.log('SystemJS SFX build complete for "modb.js"');
  }).catch(function (err) {
    console.log(err);
  })
