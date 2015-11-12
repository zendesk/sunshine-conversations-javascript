import * as httpMock from '../../mocks/http';


describe('Conversations API', () => {
  const serviceUrl = 'http://some-url.com';
  const userId = 'user-id';
  const auth = {
    appToken: 'token'
  };
  let httpSpy;
  let api;

  beforeEach(() => {
    httpSpy = httpMock.mock();
    let ConversationsApi = require('../../../src/api/conversations').ConversationsApi;
    api = new ConversationsApi({
      root: {
        serviceUrl: serviceUrl
      }
    });
  });

  afterEach(() => {
    httpMock.restore();
  });

  describe('#get', () => {
    it('should call http', () => {
      return api.get(userId, auth).then(() => {
        return api.getAuthenticationHeaders(auth).then((httpHeaders) => {
          const fullUrl = api.getFullURL('appUsers', userId, 'conversation');
          httpSpy.should.have.been.calledWith('GET', fullUrl, {}, httpHeaders);
        });
      })
    });

    it('should return an error if no auth', (done) => {
      api.get(userId).catch(() => {
        done();
      })
    });
  });

  describe('#sendMessage', () => {
    it('should call http', () => {
      const message = {
        text: 'this is a message'
      };

      return api.sendMessage(userId, message, auth).then(() => {
        return api.getAuthenticationHeaders(auth).then((httpHeaders) => {
          const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'messages');
          httpSpy.should.have.been.calledWith('POST', fullUrl, message, httpHeaders);
        });
      })
    });

    it('should return an error if no auth', (done) => {
      api.sendMessage(userId, {}).catch(() => {
        done();
      })
    });
  });
});
