import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersApi } from '../../../src/api/appUsers';



describe('AppUsers API', () => {
  const serviceUrl = 'http://some-url.com';
  const userId = 'user-id';
  const httpHeaders = getAuthenticationHeaders({
    appToken: 'token'
  });

  let httpSpy;
  let api;

  beforeEach(() => {
    httpSpy = httpMock.mock();
    api = new AppUsersApi(serviceUrl, httpHeaders);
  });

  afterEach(() => {
    httpMock.restore();
  });

  describe('#get', () => {
    it('should call http', () => {
      return api.get(userId).then(() => {
        const fullUrl = api.getFullURL('appusers', userId);

        httpSpy.should.have.been.calledWith('GET', fullUrl, {}, httpHeaders);
      })
    });
  });

  describe('#update', () => {
    it('should call http', () => {
      const attributes = {
        email: 'new-email'
      };

      return api.update(userId, attributes).then(() => {
        const fullUrl = api.getFullURL('appusers', userId);
        httpSpy.should.have.been.calledWith('PUT', fullUrl, attributes, httpHeaders);
      });
    });
  });

  describe('#init', () => {
    it('should call http', () => {
      const props = {
        email: 'this is an email'
      };

      return api.init(props).then(() => {
        const fullUrl = api.getFullURL('init');
        httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
      });
    });
  });

  describe('#create', () => {
    const userId = 'some-id';

    const props = {
      email: 'this is an email'
    };

    const jwtHttpHeaders = getAuthenticationHeaders({
      jwt: 'jwt'
    });

    it('should throw an error if used with app token', (done) => {
      api.create(userId).catch((err) => {
        err.message.should.equal('Must not use an app token for authentication.');
        done();
      });
    });

    it('should call http', () => {
      const jwtApi = new AppUsersApi(serviceUrl, jwtHttpHeaders);
      return jwtApi.create(userId, props).then(() => {
        const fullUrl = jwtApi.getFullURL('appusers');
        httpSpy.should.have.been.calledWith('POST', fullUrl, Object.assign({
          userId: userId
        }, props), jwtHttpHeaders);
      });
    });

    it('should convert a signedUpAt date object to ISO string', () => {
      const jwtApi = new AppUsersApi(serviceUrl, jwtHttpHeaders);

      const isoString = '2015-01-01T00:00:00.000Z';
      const isoDate = new Date(isoString);

      return jwtApi.create(userId, {
        signedUpAt: isoDate
      }).then(() => {
        const fullUrl = jwtApi.getFullURL('appusers');
        httpSpy.should.have.been.calledWith('POST', fullUrl, {
          userId,
          signedUpAt: isoString
        }, jwtHttpHeaders);
      });
    });
  });

  describe('#trackEvent', () => {
    it('should call http', () => {
      const eventName = 'some-event';
      const props = {
        email: 'this is an email'
      };

      return api.trackEvent(userId, eventName, props).then(() => {
        const fullUrl = api.getFullURL('appusers', userId, 'events');
        httpSpy.should.have.been.calledWith('POST', fullUrl, {
          name: eventName,
          appUser: props
        }, httpHeaders);
      });
    });
  });
});
