process.env.NODE_ENV = 'test';

var should = require('should');
var request = require('request');
var actionheroPrototype = require("actionhero").actionHeroPrototype;
var actionhero = new actionheroPrototype();
var api;
var url;

function checkNotImplemented(path, done) {
  request.get(url + path, function(err, response, body) {
    body = JSON.parse(body);
    body.should.be.an.instanceOf(Object);
    body.error.should.have.property('code');
    body.error.code.should.eql(1001);
    response.statusCode.should.eql(501);
    done();
  })
}

function checkApiKey(path, done) {
  request.get(url + path, function(err, response, body) {
    body = JSON.parse(body);
    body.should.be.an.instanceOf(Object);
    body.error.should.eql('Error: apiKey is a required parameter for this action');
    response.statusCode.should.eql(200);
    done();
  })
}

describe('Server: Web', function() {

  before(function(done) {
    actionhero.start(function(err, a) {
      api = a;
      url = 'http://localhost:' + api.config.servers.web.port;
      done();
    })
  })

  after(function(done) {
    actionhero.stop(function(err) {
      done();
    })
  })

  it('Server should be up and return data', function(done) {
    request.get(url + '/api/', function(err, response, body) {
      body = JSON.parse(body);
      body.should.be.an.instanceOf(Object);
      done();
    })
  })

  describe('action: authenticatePlayer', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/authenticatePlayer', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/authenticatePlayer?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })

    it('should require an email');

    it('should require a passwordHash');

    it('should return an error if the email/account does not exist'); 

    it('should return an error if the passwordHash does not match'); 

    it('should return the playerUuid and email on successful authentication'); 

    it('placeholder');    
  })

  describe('action: resetPassword', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/resetPassword', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/resetPassword?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })

    it('should require an email'); 

    it('should require a password'); 

    it('should require a pin');     

    it('should return the playerUuid and email on successful registration');       
  })

  describe('action: resetPassword', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/resetPassword', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/resetPassword?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })

    it('should require an email'); 

    it('should return an error if email does not match an existing account');     

    it('should send a password reset email');          
  })

  describe('action: verifyPin', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/verifyPin', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/verifyPin?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })   

    it('should require a playerUuid'); 

    it('should require a pin');     

    it('should return an error if pin does not match');  

    it('should have authenticated == true if pin matches');      
  })

  describe('action: changePin', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/changePin', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/changePin?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })

    it('should require a playerUuid'); 

    it('should require a newPin');     

    it('should require passwordHash if oldPin not provided');  

    it('newPin should not be the same as oldPin'); 

    it('newPin should be a minimum of 4 digits'); 

    it('newPin should be digits only'); 

    it('newPin should not simple sequential numbers'); 
  })

  describe('action: startSession', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/startSession', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/startSession?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);   
    })

    it('should require a deviceUuid');

    it('should store metadata if provided');

    it('should return a sessionId');

    it('should return limits and balance if playerUuid is provided');

    it('should return a heartbeat');

  })

  describe('action: extendSession', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/extendSession', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/extendSession?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);   
    })

    it('should a sessionId');

    it('should require a duration');

    it('should require duration to be a non-negative integer');

    it('should return an error if no valid session is found');

  })

  describe('action: endSession', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/endSession', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/endSession?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);   
    })

    it('should a sessionId');

    it('should require a duration');

    it('should require duration to be a non-negative integer');

    it('should return an error if no valid session is found');

    it('should store events if provided');

  })

  describe('action: offlineSession', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/offlineSession', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/offlineSession?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);   
    })

    it('should require a duration');

    it('should require duration to be a non-negative integer');
    
    it('should require a deviceUuid');

    it('should require a timestamp');

    it('should require duration to be a non-negative integer greater than the Unix epoch');    

    it('should store metadata if provided');    

  })

  describe('action: logPurchase', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/logPurchase', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/logPurchase?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);   
    })
  })

  describe('action: setLimits', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/setLimits', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/setLimits?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })    
  })

  describe('action: getLimits', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/getLimits', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/getLimits?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);  
    })
  })

  describe('action: checkBalance', function() {
    before(function(done) {
      done();
    })

    after(function(done) {
      done();
    })

    it('should require an apiKey', function(done) {
      checkApiKey('/api/checkBalance', done);
    })

    it('should return a not implemented error', function(done) {
      checkNotImplemented('/api/checkBalance?apiKey=12345&email=matt.pichette%40gmail.com&passwordHash=dddadasd', done);
    })    
  })
})


