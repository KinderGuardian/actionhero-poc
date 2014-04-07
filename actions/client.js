var co = require('co');

/*
 * Client API
 * 
 * Implementation Notes
 * -  
 */


/*
 ******************************************************************************
 | PLAYER SECTION                                                            |
 ******************************************************************************
 */

exports.authenticatePlayer = {
  name: 'authenticatePlayer',
  description: 'authenticatePlayer',
  inputs: {
    required: ['apiKey', 'email', 'passwordHash'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {
    playerUuid: 'some uuid',
    email: 'test@test.com'
  },
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield authenticatePlayer(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.registerPlayer = {
  name: 'registerPlayer',
  description: 'registerPlayer',
  inputs: {
    required: ['apiKey', 'email', 'password', 'pin'],
    optional: []
  },
  blockedConnectionTypes: [],
  outputExample: {
    playerUuid: 'some uuid',
    email: 'test@test.com'
  },
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield registerPlayer(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.resetPassword = {
  name: 'resetPassword',
  description: 'resetPassword',
  inputs: {
    required: ['apiKey', 'email'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield resetPassword(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.verifyPin = {
  name: 'verifyPin',
  description: 'verifyPin',
  inputs: {
    required: ['apiKey', 'playerUuid', 'pin'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: {
    authenticated: true
  },
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield verifyPin(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.changePin = {
  name: 'changePin',
  description: 'changePin',
  inputs: {
    required: ['apiKey', 'playerUuid', 'oldPin', 'newPin'],
    optional: ['passwordHash'],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield changePin(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

function *authenticatePlayer(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *registerPlayer(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *resetPassword(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *verifyPin(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *changePin(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

/*
 ******************************************************************************
 | SESSION SECTION                                                            |
 ******************************************************************************
 */

/*

// Create a key for each session and use a counter in CB 
// to increment session time
exports.startSession = {
  name: 'startSession',
  description: 'startSession',
  inputs: {
    required: [],//['apiKey', 'deviceUuid'],
    optional: ['playerUuid', 'metadata', 'timestamp', 'elapsed'],
  },
  blockedConnectionTypes: [],
  outputExample: {
    sessionId: 'someuuid',
    limits: [
      {
        type: 'monetary',
        currencyCode: 'CA',
        amount: 5.0,
        balance: 3.01,
        reset: 1390921438,

      }
    ],
    heartbeat: 30000
  },
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        if (connection.params.elapsed) {
          var response = yield offlineStart(api, connection);
        } else {
          var response = yield onlineStart(api, connection);
        }
        //var profile = yield api.gameprofile.findOne(connection.params.id);
        //connection.response = profile;
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);
      }
    })();
  }
};

exports.extendSession = {
  name: 'extendSession',
  description: 'extendSession',
  inputs: {
    required: ['apiKey', 'sessionId', 'duration'],
    optional: []
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield extendSession(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.endSession = {
  name: 'endSession',
  description: 'endSession',
  inputs: {
    required: ['apiKey', 'sessionId', 'duration'],
    optional: ['events'],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield endSession(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

*/

exports.logSession = {
  name: 'logSession',
  description: 'logSession',
  inputs: {
    required: ['apiKey', 'deviceUuid', 'timestamp', 'duration'],
    optional: ['playerUuid', 'metadata', 'events'],
  },
  blockedConnectionTypes: [],
  outputExample: {},
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield offlineDump(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.logPurchase = {
  name: 'logPurchase',
  description: 'logPurchase',
  inputs: {
    required: ['apiKey', 'deviceUuid', 'sessionId', 'amount', 'currencyCode'],
    optional: ['playerUuid']
  },
  blockedConnectionTypes: [],
  outputExample: {
      sufficient: true
  },
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield logPurchase(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

/*
function *offlineStart(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *onlineStart(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *extendSession(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *endSession(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

*/

function *offlineDump(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *logPurchase(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

/*
 ******************************************************************************
 | LIMITS SECTION                                                            |
 ******************************************************************************
 */

exports.setLimits = {
  name: 'setLimits',
  description: 'setLimits',
  inputs: {
    required: ['apiKey', 'playerUuid', 'limits'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: [
    {
      type: 'monetary',
      amount: 9.99,
      interval: 'weekly'
    },
    {
      type: 'time',
      amount: 60,
      interval: 'daily'
    }
  ],
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield setLimits(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.getLimits = {
  name: 'getLimits',
  description: 'getLimits',
  inputs: {
    required: ['apiKey', 'playerUuid'],
    optional: [],
  },
  blockedConnectionTypes: [],
  outputExample: [
    {
      type: 'monetary',
      currencyCode: 'CA',
      amount: 9.99,
      interval: 'weekly'
    },
    {
      type: 'time',
      amount: 60,
      interval: 'daily'
    }
  ],
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield getLimits(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

exports.checkBalance = {
  name: 'checkBalance',
  description: 'checkBalance',
  inputs: {
    required: ['apiKey', 'playerUuid', 'type', 'amount'],
    optional: ['currencyCode'],
  },
  blockedConnectionTypes: [],
  outputExample: {
    sufficient: true
  },
  matchExtensionMimeType: false,
  version: 1.0,
  toDocument: true,
  run: function(api, connection, next) {
    co(function *() {
      try {
        var response = yield checkBalance(api, connection);
      } catch (e) {
        api.log('Error', 'error', e);
        connection.error = e.payload;
      } finally {
        next(connection, true);      
      }
    })();
  }
};

function *setLimits(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *getLimits(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};

function *getBalance(api, connection) {
  connection.rawConnection.responseHttpCode = 501;
  api.exception.raise('NOT_IMPLEMENTED');
};
