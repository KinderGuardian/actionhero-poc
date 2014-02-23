var Player = require('../model/player.js');

var players = [
{ id: 1234, uuid: '550e8400-e29b-41d4-a716-446655440000', email: 'matt.pichette@gmail.com', password: 'g2j3gxud3', pin: 1432 },
{ id: 666, uuid: '660e8411-h32k-41d4-c717-556655446666', email: 'melanirose@gmail.com', password: 'hfihwrfiuh759hr53u', pin: 8321 },
{ id: 4321, uuid: '820e8499-j22n-41d4-a712-449955440123', email: 'steve@gmail.com', password: 'iuuih324oi24', pin: 8888 }
];

module.exports = {
  // GET /players
  index: function *(next) {
  	this.body = players;
  },
  // GET /players/new
  new: function *(next) {
    this.body = new Player();
  },
  // POST /players
  create: function *(next) {
  },
  // GET /players/:id
  show: function *(next) {
    this.body = players[0];
  },
  // GET /players/:id/edit
  edit: function *(next) {
  },
  // PUT /players/:id
  update: function *(next) {
  },
  // DELETE /players/:id
  destroy: function *(next) {
  }
};