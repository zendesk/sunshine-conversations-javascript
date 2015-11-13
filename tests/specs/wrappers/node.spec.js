import jwt from 'jsonwebtoken';

import { getAuthenticationHeaders } from '../../../src/utils/auth';

import Smooch from '../../../src/wrappers/node';

describe('Smooch', () => {

  it('should have the webhooks API', () => {
    var smooch = new Smooch({
      jwt: 'jwt'
    });
    smooch.webhooks.should.exist;
  });

  it('should have the JWT utils', () => {
    var smooch = new Smooch({
      jwt: 'jwt'
    });
    smooch.utils.jwt.should.exist;
  });

  it('should generate the auth headers', () => {
    const authOptions = {
      jwt: 'jwt'
    };
    const headers = getAuthenticationHeaders(authOptions);

    var smooch = new Smooch(authOptions);
    smooch.authHeaders.should.deep.equal(headers);
  });
  describe('generating jwt', () => {
    const keyId = 'keyId';
    const secret = 'secret';
    const userId = 'userId';
    const scope = 'scope';

    it('should generate a jwt', () => {
      const smooch = new Smooch({
        keyId: keyId,
        secret: secret,
        scope: scope
      });

      const token = smooch.authHeaders.Authorization.replace('Bearer ', '');

      const decodedToken = jwt.decode(token);

      decodedToken.scope.should.equal(scope);
    });

    it('should generate a jwt with user id', () => {
      const smooch = new Smooch({
        keyId: keyId,
        secret: secret,
        scope: scope,
        userId: userId
      });

      const token = smooch.authHeaders.Authorization.replace('Bearer ', '');

      const decodedToken = jwt.decode(token);

      decodedToken.scope.should.equal(scope);
      decodedToken.userId.should.equal(userId);
    });
  });
});
