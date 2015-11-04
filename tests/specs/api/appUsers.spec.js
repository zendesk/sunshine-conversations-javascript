import * as httpMock from '../../mocks/http';


describe('AppUsers API', () => {
  const serverURL = 'http://some-url.com';
  const userId = 'user-id';
  const auth = {
    appToken: 'token'
  };
  let httpSpy;
  let api;

  beforeEach(() => {
    httpSpy = httpMock.mock();
    let AppUsersAPI = require('../../../src/api/appUsers').AppUsersAPI;
    api = new AppUsersAPI({
      root: {
        serverURL: serverURL
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
          const fullUrl = api.getFullURL('appusers', userId);
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

  describe('#update', () => {
    it('should call http', () => {
      const attributes = {
        email: 'new-email'
      };

      return api.update(userId, attributes, auth).then(() => {
        return api.getAuthenticationHeaders(auth).then((httpHeaders) => {
          const fullUrl = api.getFullURL('appusers', userId);
          httpSpy.should.have.been.calledWith('PUT', fullUrl, attributes, httpHeaders);
        });
      })
    });

    it('should return an error if no auth', (done) => {
      api.update(userId, {}).catch(() => {
        done();
      })
    });
  });

  describe('#init', () => {
    it('should call http', () => {
      const props = {
        email: 'this is an email'
      };

      return api.init(props, auth).then(() => {
        return api.getAuthenticationHeaders(auth).then((httpHeaders) => {
          const fullUrl = api.getFullURL('init');
          httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
        });
      })
    });

    it('should return an error if no auth', (done) => {
      api.init({}, {}).catch(() => {
        done();
      })
    });
  });

  describe('#trackEvent', () => {
    it('should call http', () => {
      const eventName = 'some-event';
      const props = {
        email: 'this is an email'
      };

      return api.trackEvent(userId, eventName, auth, props).then(() => {
        return api.getAuthenticationHeaders(auth).then((httpHeaders) => {
          const fullUrl = api.getFullURL('appusers', userId, 'events');
          httpSpy.should.have.been.calledWith('POST', fullUrl, {
            name: eventName,
            appUser: props
          }, httpHeaders);
        });
      })
    });

    it('should return an error if no auth', (done) => {
      api.trackEvent(userId, {}, {}).catch(() => {
        done();
      })
    });
  });
});
