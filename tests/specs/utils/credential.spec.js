import credential from '../../../src/utils/credential';
import { testJwt } from '../../mocks/jwt';

describe('Credential util', () => {
    describe('#credential', () => {
        it('should return an error if no props provided', (done) => {
            try {
                credential();
            }
            catch (e) {
                done();
            }
        });

        it('should transform a JWT', () => {
            const baseHeaders = {
                jwt: testJwt()
            };

            const headers = credential(baseHeaders).authHeaders;
            headers.should.eql({
                'Authorization': 'Bearer ' + baseHeaders.jwt
            });
        });

        it('should transform an app token', () => {
            const baseHeaders = {
                appToken: 'app-token'
            };

            const headers = credential(baseHeaders).authHeaders;
            headers.should.eql({
                'app-token': baseHeaders.appToken
            });
        });

        it('should use the JWT if both are provided', () => {
            const baseHeaders = {
                jwt: testJwt(),
                appToken: 'app-token'
            };

            const headers = credential(baseHeaders).authHeaders;
            headers.should.eql({
                'Authorization': 'Bearer ' + baseHeaders.jwt
            });
        });

        it('should return an error if no JWT or appToken provided', (done) => {
            const baseHeaders = {
                what: 'is this?'
            };
            try {
                credential(baseHeaders);
            }
            catch (e) {
                done();
            }
        });

        it('should reject malformed JWT', (done) => {
            const baseHeaders = {
                jwt: 'banana'
            };
            try {
                credential(baseHeaders);
            }
            catch (e) {
                done();
            }
        });
    });
});
