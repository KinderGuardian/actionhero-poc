var co = require('co');
var Player = require('./model/player');

var player = new Player();
console.log('here');

co(function *() {
  console.log('in run');
  var x = yield player.findOne(123);
  console.log("x = " + x);
})();



//})();
