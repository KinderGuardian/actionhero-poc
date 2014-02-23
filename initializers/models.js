exports.models = function(api, next){

  var Player = require('../model/player.js');
  api.player = new Player();

  var Gameprofile = require('../model/gameprofile.js');
  api.gameprofile = new Gameprofile();

  var Exception = require('../model/exception.js');
  api.exception = new Exception();

  next();
}
