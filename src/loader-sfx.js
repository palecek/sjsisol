var modules = [
  '/dist/moda.sfx.js',
  '/dist/modb.sfx.js'
]

modules.map(function (item) {
  System.import(item).then(function (m) {
    m.index()
  })
})
