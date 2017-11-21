var modules = [
  '/dist/moda.sfx.js',
  '/dist/modb.sfx.js',
  '/dist/modc.sfx.js'
]

modules.map(function (item) {
  System.import(item).then(function (m) {
    m.index('sfx')
  })
})
