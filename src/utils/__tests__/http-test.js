describe('HTTP', () => {
  var http = require('../http').http;
  var sandbox;
  var fetchSpy;
  before(() => {
    sandbox = sinon.sandbox.create();
    fetchSpy = sandbox.spy(global, 'fetch');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('fetch', () => {
    it('should call fetch', () => {
      // TODO : mock network calls
      return http('GET', 'http://wtfismyip.com/json', {}, {});
    });
  })

});
