var getRev = require('../libs/getrev.js').getRev

function index () {
  console.log('moda, librev: ' + getRev())
}

exports.index = index
