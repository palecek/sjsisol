var getRev = require('../libs/getrev.js').getRev

function index (buildName) {
  console.log(buildName + ' modb, librev: ' + getRev())
}

exports.index = index
