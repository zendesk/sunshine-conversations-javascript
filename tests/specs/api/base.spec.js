import { BaseApi } from '../../../src/api/base';


describe('Base API', () => {
  describe('#constructor', () => {
    it('should set this.root', () => {
      const root = {};

      const BaseApi = new BaseApi({
        root: root
      });

      BaseApi.root.should.equal(root);
    });

    it('should not crash if no props', () => {
      const BaseApi = new BaseApi();

      expect(BaseApi.root).to.be.undefined;
    })
  });

  describe('#getAuthenticationHeaders', () => {
    const BaseApi = new BaseApi();

    it('should return an error if no props provided', (done) => {
      BaseApi.getAuthenticationHeaders().catch(() => {
        done();
      })
    });

    it('should transform a JWT', () => {
      const baseHeaders = {
        jwt: 'jwt'
      };

      return BaseApi.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'Authorization': 'Bearer ' + baseHeaders.jwt
        });
      });
    });

    it('should transform an app token', () => {
      const baseHeaders = {
        appToken: 'app-token'
      };

      return BaseApi.getAuthenticationHeaders(baseHeaders).then((headers) => {
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

      return BaseApi.getAuthenticationHeaders(baseHeaders).then((headers) => {
        headers.should.eql({
          'Authorization': 'Bearer ' + baseHeaders.jwt
        });
      });
    });

    it('should return an error if no JWT or appToken provided', (done) => {
      const baseHeaders = {
        what: 'is this?'
      };

      BaseApi.getAuthenticationHeaders(baseHeaders).catch(() => {
        done();
      });
    });
  });

  describe('#getFullURL', () => {
    const serverURL = 'http://some-url.com';
    const BaseApi = new BaseApi({
      root: {
        serverURL: serverURL
      }
    });

    it('should use the serverURL and encode fragments', () => {
      const finalUrl = BaseApi.getFullURL('some', 'u/rl', 'this is an id');
      finalUrl.should.eql(serverURL + '/some/u%2Frl/this%20is%20an%20id');
    });
  });
});
