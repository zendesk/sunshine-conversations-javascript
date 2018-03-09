import { BaseApi } from '../../../src/api/base';
import { testJwt } from '../../mocks/jwt';

const serviceUrl = 'http://some-url.com';
const authHeaders = {
    jwt: testJwt()
};

describe('Base API', () => {
    describe('#constructor', () => {
        it('should set service URL and auth headers', () => {
            const api = new BaseApi({
                serviceUrl,
                authHeaders
            });

            api.serviceUrl.should.equal(serviceUrl);
            api.authHeaders.should.equal(authHeaders);
        });

        it('should strip trailing slash in serviceUrl', () => {
            const api = new BaseApi({
                serviceUrl: serviceUrl + '/',
                authHeaders
            });

            api.serviceUrl.should.equal(serviceUrl);
            api.authHeaders.should.equal(authHeaders);
        });
    });

    describe('#getHeaders', function() {
        it('should include auth headers', () => {
            const api = new BaseApi({
                serviceUrl,
                authHeaders: {
                    Authorization: 'Bearer stuff'
                }
            });

            api.getHeaders().should.eql({
                Authorization: 'Bearer stuff'
            });
        });
    });

    describe('#validateAuthHeaders', () => {
        it('should not return an error if Authorization header is present', () => {
            const api = new BaseApi({
                serviceUrl,
                authHeaders: {
                    Authorization: 'Bearer stuff'
                }
            });

            return api.validateAuthHeaders();
        });

        it('should return an error if Authorization header is not present', (done) => {
            const api = new BaseApi({
                serviceUrl,
                authHeaders: {}
            });

            api.validateAuthHeaders().catch(() => {
                done();
            });
        });
    });
});
