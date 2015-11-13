import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { ConversationsApi } from '../../../src/api/conversations';


describe('Conversations API', () => {
  const serviceUrl = 'http://some-url.com';
  const userId = 'user-id';
  const httpHeaders = getAuthenticationHeaders({
    appToken: 'token'
  });
  let httpSpy;
  let api;

  beforeEach(() => {
    httpSpy = httpMock.mock();
    api = new ConversationsApi(serviceUrl, httpHeaders);
  });

  afterEach(() => {
    httpMock.restore();
  });

  describe('#get', () => {
    it('should call http', () => {
      return api.get(userId).then(() => {
        const fullUrl = api.getFullURL('appUsers', userId, 'conversation');
        httpSpy.should.have.been.calledWith('GET', fullUrl, {}, httpHeaders);
      })
    });
  });

  describe('#sendMessage', () => {
    it('should call http', () => {
      const message = {
        text: 'this is a message'
      };

      return api.sendMessage(userId, message).then(() => {
        const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'messages');
        httpSpy.should.have.been.calledWith('POST', fullUrl, message, httpHeaders);
      })
    });
  });
});
