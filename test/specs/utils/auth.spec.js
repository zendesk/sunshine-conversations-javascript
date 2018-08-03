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

        it('should transform basic auth', () => {
            const baseHeaders = {
                username: 'hello',
                password: 'goodbye'
            };

            const headers = getAuthenticationHeaders(baseHeaders);
            headers.should.eql({
                'Authorization': 'Basic ' + new Buffer(`${baseHeaders.username}:${baseHeaders.password}`).toString('base64')
            });
        });

        it('should return an error if no auth provided', (done) => {
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
