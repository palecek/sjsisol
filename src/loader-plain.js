var modules = [
  '/src/moda/index.js',
  '/src/modb/index.js',
  '/src/modc/index.js'
]

modules.map(function (item) {
  System.import(item).then(function (m) {
    m.index('plain')
  })
})
