import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { testJwt } from '../../mocks/jwt';

describe('Auth utils', () => {
    describe('#getAuthenticationHeaders', () => {
        it('should return an error if no props provided', (done) => {
            try {
                getAuthenticationHeaders();
            }
            catch (e) {
                done();
            }
        });

        it('should transform a JWT', () => {
            const baseHeaders = {
                jwt: testJwt()
            };

            const headers = getAuthenticationHeaders(baseHeaders);
            headers.should.eql({
                'Authorization': 'Bearer ' + baseHeaders.jwt
            });
        });

        it('should transform an app token', () => {
            const baseHeaders = {
                appToken: 'app-token'
            };

            const headers = getAuthenticationHeaders(baseHeaders);
            headers.should.eql({
                'app-token': baseHeaders.appToken
            });
        });

        it('should use the JWT if both are provided', () => {
            const baseHeaders = {
                jwt: testJwt(),
                appToken: 'app-token'
            };

            const headers = getAuthenticationHeaders(baseHeaders);
            headers.should.eql({
                'Authorization': 'Bearer ' + baseHeaders.jwt
            });
        });

        it('should return an error if no JWT or appToken provided', (done) => {
            const baseHeaders = {
                what: 'is this?'
            };
            try {
                getAuthenticationHeaders(baseHeaders);
            }
            catch (e) {
                done();
            }
        });
    });
});
