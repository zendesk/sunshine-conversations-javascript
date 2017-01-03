import jwt from 'jsonwebtoken';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import Smooch from '../../../src/wrappers/node';
import { testJwt } from '../../mocks/jwt';
import { sign } from 'jsonwebtoken';

describe('Smooch', () => {

    it('should have the webhooks API', () => {
        var smooch = new Smooch({
            jwt: testJwt()
        });
        smooch.webhooks.should.exist;
    });

    it('should have the JWT utils', () => {
        var smooch = new Smooch({
            jwt: testJwt()
        });
        smooch.utils.jwt.should.exist;
    });

    it('should generate the auth headers', () => {
        const authOptions = {
            jwt: testJwt()
        };
        const headers = getAuthenticationHeaders(authOptions);

        var smooch = new Smooch(authOptions);
        smooch.authHeaders.should.deep.equal(headers);
    });

    it('should return disabled integration APIs without account scope', () => {
        const authOptions = {
            jwt: testJwt('app')
        };
        const smooch = new Smooch(authOptions);
        ['create', 'list', 'get', 'delete'].forEach((method) => {
            expect(() => smooch.integrations[method]())
                .to.throw(Error, 'This API requires account level scope');
        });
    });

    it('should return disabled apps APIs without account scope', () => {
        const authOptions = {
            jwt: testJwt('app')
        };
        const smooch = new Smooch(authOptions);
        ['create', 'list', 'get', 'delete'].forEach((method) => {
            expect(() => smooch.apps[method]())
                .to.throw(Error, 'This API requires account level scope');
        });
    });

    ['appUser', 'appMaker', 'integration', 'account'].forEach((scope) => {
        it(`should extract ${scope} scope from a provided jwt`, () => {
            const smooch = new Smooch({
                jwt: testJwt(scope)
            });
            smooch.should.have.property('scope', scope);
        });
    });

    it('should reject a malformed jwt', (done) => {
        try {
            new Smooch({
                jwt: 'malformed'
            });
            done(new Error('should fail'));
        } catch (err) {
            done();
        }
    });

    it('should reject a jwt without scope', (done) => {
        try {
            new Smooch({
                jwt: sign({}, 'secret', {
                    headers: {
                        kid: 'keyid'
                    }
                })
            });
            done(new Error('should fail'));
        } catch (err) {
            done();
        }
    });

    it('should accept custom headers', () => {
        const authOptions = {
            jwt: testJwt()
        };

        const customHeaders = {
            myheader: '1234'
        };

        var smooch = new Smooch(authOptions, {
            headers: customHeaders
        });
        smooch.headers.should.deep.equal(customHeaders);
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

            smooch.should.have.property('scope', scope);
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

            smooch.should.have.property('scope', scope);
            const token = smooch.authHeaders.Authorization.replace('Bearer ', '');
            const decodedToken = jwt.decode(token);
            decodedToken.scope.should.equal(scope);
            decodedToken.userId.should.equal(userId);
        });
    });
});
