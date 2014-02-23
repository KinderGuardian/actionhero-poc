exports.action = {
  name: 'playerEdit',
  description: 'playerEdit',
  inputs: {
    required: [],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next){
    // your logic here
    next(connection, true);
  }
};
