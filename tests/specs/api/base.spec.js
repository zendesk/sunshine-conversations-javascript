import { BaseAPI } from '../../../src/api/base';


describe('Base API', () => {
  describe('#constructor', () => {
    it('should set this.root', () => {
      const root = {};

      const baseAPI = new BaseAPI({
        root: root
      });

      baseAPI.root.should.equal(root);
    });

    it('should not crash if no props', () => {
      const baseAPI = new BaseAPI();

      expect(baseAPI.root).to.be.undefined;
    })
  });

  describe('#getAuthenticationHeaders', () => {
    const baseAPI = new BaseAPI();

    it('should return an error if no props provided', (done) => {
      baseAPI.getAuthenticationHeaders().catch(() => {
        done();
      })
    });

    it('should transform a JWT', () => {
      const baseHeaders = {
        jwt: 'jwt'
      };

      return baseAPI.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'Authorization': 'Bearer ' + baseHeaders.jwt
        });
      });
    });

    it('should transform an app token', () => {
      const baseHeaders = {
        appToken: 'app-token'
      };

      return baseAPI.getAuthenticationHeaders(baseHeaders).then((headers) => {
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

      return baseAPI.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'Authorization': 'Bearer ' + baseHeaders.jwt
        });
      });
    });

    it('should return an error if no JWT or appToken provided', (done) => {
      const baseHeaders = {
        what: 'is this?'
      };

      baseAPI.getAuthenticationHeaders(baseHeaders).catch(() => {
        done();
      });
    });
  });

  describe('#getFullURL', () => {
    const serverURL = 'http://some-url.com';
    const baseAPI = new BaseAPI({
      root: {
        serverURL: serverURL
      }
    });

    it('should use the serverURL and encode fragments', () => {
      const finalUrl = baseAPI.getFullURL('some', 'u/rl', 'this is an id');
      finalUrl.should.eql(serverURL + '/some/u%2Frl/this%20is%20an%20id');
    });
  });
});
