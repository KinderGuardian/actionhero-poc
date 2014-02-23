//var Player = require('../model/player.js');
var co = require('co');

exports.action = {
  name: 'playerGet',
  description: 'playerGet',
  inputs: {
    required: ['id'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  logLevel: "debug",
  run: function(api, connection, next) {
    api.log('step 1', 'debug');
    co(function *() {
      api.log('in co', 'debug');
      var player = yield api.player.findOne(connection.params.id);
      api.log('in co - after yield', 'debug');
      connection.response = player;
      next(connection, true);
    })();
  }
};
