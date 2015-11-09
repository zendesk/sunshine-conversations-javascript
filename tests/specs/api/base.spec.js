import { BaseApi } from '../../../src/api/base';


describe('Base API', () => {
  describe('#constructor', () => {
    it('should set this.root', () => {
      const root = {};

      const api = new BaseApi({
        root: root
      });

      api.root.should.equal(root);
    });

    it('should not crash if no props', () => {
      const api = new BaseApi();

      expect(api.root).to.be.undefined;
    })
  });

  describe('#getAuthenticationHeaders', () => {
    const api = new BaseApi();

    it('should return an error if no props provided', (done) => {
      api.getAuthenticationHeaders().catch(() => {
        done();
      })
    });

    it('should transform a JWT', () => {
      const baseHeaders = {
        jwt: 'jwt'
      };

      return api.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'Authorization': 'Bearer ' + baseHeaders.jwt
        });
      });
    });

    it('should transform an app token', () => {
      const baseHeaders = {
        appToken: 'app-token'
      };

      return api.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'app-token': baseHeaders.appToken
        })
      });
    });

    it('should use the JWT if both are provided', () => {
      const baseHeaders = {
        jwt: 'jwt',
        appToken: 'app-token'
      };

      return api.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'Authorization': 'Bearer ' + baseHeaders.jwt
        });
      });
    });

    it('should return an error if no JWT or appToken provided', (done) => {
      const baseHeaders = {
        what: 'is this?'
      };

      api.getAuthenticationHeaders(baseHeaders).catch(() => {
        done();
      });
    });
  });

  describe('#getFullURL', () => {
    const serverURL = 'http://some-url.com';
    const api = new BaseApi({
      root: {
        serverURL: serverURL
      }
    });

    it('should use the serverURL and encode fragments', () => {
      const finalUrl = api.getFullURL('some', 'u/rl', 'this is an id');
      finalUrl.should.eql(serverURL + '/some/u%2Frl/this%20is%20an%20id');
    });
  });
});
