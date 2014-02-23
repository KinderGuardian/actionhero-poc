var co = require('co');

exports.gameprofileGet = {
  name: 'gameprofileGet',
  description: 'gameprofileGet',
  inputs: {
    required: ['playerId', 'id'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next){
    co(function *() {
      var profile = yield api.gameprofile.findOne(connection.params.id);
      connection.response = profile;
      next(connection, true);
    })();
  }
};

exports.gameprofileGetAll = {
  name: 'gameprofileGetAll',
  description: 'gameprofileGetAll',
  inputs: {
    required: ['playerId'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next){
    co(function *() {
      var profiles = yield api.gameprofile.findAll(connection.params.playerId);
      connection.response = profiles;
      next(connection, true);
    })();
  }
};
