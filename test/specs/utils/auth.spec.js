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

        it('should return an error if no JWT provided', (done) => {
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
