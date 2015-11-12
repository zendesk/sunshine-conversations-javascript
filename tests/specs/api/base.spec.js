import { BaseApi, SERVICE_URL } from '../../../src/api/base';

const serviceUrl = 'http://some-url.com';
const headers = {jwt:'jwt'};

describe('Base API', () => {
  describe('#constructor', () => {
    it('should set service URL and auth headers', () => {
      const api = new BaseApi(serviceUrl, headers);

      api.serviceUrl.should.equal(serviceUrl);
      api.authHeaders.should.equal(headers);
    });
  });

  describe('#getFullURL', () => {
    const api = new BaseApi(serviceUrl, headers);

    it('should use the serverURL and encode fragments', () => {
      const finalUrl = api.getFullURL('some', 'u/rl', 'this is an id');
      finalUrl.should.eql(serviceUrl + '/some/u%2Frl/this%20is%20an%20id');
    });
  });
});
