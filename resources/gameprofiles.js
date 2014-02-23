var Gameprofile = require('../model/gameprofile.js');

var profiles = [
{ id: 1, uuid: '550e8400-e29b-41d4-a716-446655440000', game: 1, balance: 21.34 },
{ id: 2, uuid: '660e8411-h32k-41d4-c717-556655446666', game: 2, balance: 3.25 }
];

module.exports = {
  // GET /players/:id/gameprofiles
  index: function *(next) {
  	this.body = this.params.profiles;
  },
  // GET /players/:player/gameprofiles/new
  new: function *(next) {
    let x = new Gameprofile();
    x.player = this.params.player;
    this.body = x;
  },
  // POST /players/:player/gameprofiles
  create: function *(next) {
  },
  // GET /players/:player/gameprofiles/:id
  show: function *(next) {
    this.body = profiles[0];
  },
  // GET /players/:player/gameprofiles/:id/edit
  edit: function *(next) {
  },
  // PUT /players/:player/gameprofiles/:id
  update: function *(next) {
  },
  // DELETE /players/:player/gameprofiles/:id
  destroy: function *(next) {
  }
};