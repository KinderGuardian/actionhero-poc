var uuid = require('node-uuid');
var Q = require('q');

function delay(milliseconds) {
  var deferred = Q.defer();
  setTimeout(deferred.resolve, milliseconds);
  return deferred.promise;
}

function Gameprofile() {
  this.id = 0;
  this.game = 0;
  this.player = {};
  this.allowance = { balance: 0.0 };
};

Gameprofile.prototype.findOne = function *(id) {
  yield delay(500);
  return profiles[0];
}

Gameprofile.prototype.findAll = function *(playerid) {
  yield delay(500);
  return profiles;
}

module.exports = Gameprofile;

// Scratchpad

var profiles = [
{ id: 444, player: { id: 1234, uuid: '550e8400-e29b-41d4-a716-446655440000', email: 'matt.pichette@gmail.com', password: 'g2j3gxud3', pin: 1432 }, game: { id: 555, name: "Boom Beach", publisher: "Supercell" }, allowance: { balance: 2.45 } },
{ id: 999, player: { id: 1234, uuid: '550e8400-e29b-41d4-a716-446655440000', email: 'matt.pichette@gmail.com', password: 'g2j3gxud3', pin: 1432 }, game: { id: 777, name: "Candy Crush Saga", publisher: "King Games" }, allowance: { balance: 19.99 } }
];