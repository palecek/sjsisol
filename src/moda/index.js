var getRev = require('../libs/getrev.js').getRev

function index (buildName) {
  console.log(buildName + ' moda, librev: ' + getRev())
}

exports.index = index
