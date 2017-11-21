var modules = [
  'moda',
  'modb',
  'modc'
]

modules.map(function (item) {
  System.import('/dist/' + item + '.bundle.js').then(function () {
    return System.import('/src/' + item + '/index.js').then(function (m) {
      m.index('bundle')
    })
  })
})
