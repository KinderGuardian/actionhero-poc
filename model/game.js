var uuid = require('node-uuid');

function Game() {
  this.id = 0;
  this.uuid = uuid.v4();
  this.name = '';
  this.publisher = '';
}

module.exports = Game;
// Scratchpad

var games = [
{ id: 555, name: "Boom Beach", publisher: "Supercell" }
];