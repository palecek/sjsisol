var getRev = require('../libs/getrev.js').getRev

function index (buildName) {
  console.log(buildName + ' modc, librev: ' + getRev())
}

exports.index = index
