function Exception() {
  this.map = {
    GENERAL: { code: 1000, message: 'General Exception' },
    NOT_IMPLEMENTED: { code: 1001, message: 'Function Not Implemented' },
    DB_UNAVAILABLE: { code: 5000, message: 'Database Unavailable' }
  }
}

Exception.prototype.raise = function(type) {
  e = new Error();
  e.type = type;
  e.payload = this.map[type];

  throw e;
}

module.exports = Exception;