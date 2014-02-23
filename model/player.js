var uuid = require('node-uuid');
var co = require('co');
var thunkify = require('thunkify');
var Q = require('q');

function delay(milliseconds) {
  var deferred = Q.defer();
  setTimeout(deferred.resolve, milliseconds);
  return deferred.promise;
}

function Player() {
  this.id = 0;
  this.uuid = uuid.v4();
  this.email = '';
  this.password = '';
  this.pin = 1234;
}

var yy = function *(id) {
  yield delay(500);
  console.log('after delay');
  return id;
}

Player.prototype.findOne = function *(id) {
  var x = yield yy(id);
  return players[0];
}

Player.prototype.save = function() {

}

module.exports = Player;

// Scratchpad

var players = [
{ id: 1234, uuid: '550e8400-e29b-41d4-a716-446655440000', email: 'matt.pichette@gmail.com', password: 'g2j3gxud3', pin: 1432 },
{ id: 666, uuid: '660e8411-h32k-41d4-c717-556655446666', email: 'melanirose@gmail.com', password: 'hfihwrfiuh759hr53u', pin: 8321 },
{ id: 4321, uuid: '820e8499-j22n-41d4-a712-449955440123', email: 'steve@gmail.com', password: 'iuuih324oi24', pin: 8888 }
];
