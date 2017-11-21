var getRev = require('../libs/getrev.js').getRev

function index () {
  console.log('modb, librev: ' + getRev())
}

exports.index = index
