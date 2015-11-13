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
