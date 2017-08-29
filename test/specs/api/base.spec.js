import { BaseApi } from '../../../src/api/base';
import { testJwt } from '../../mocks/jwt';

const serviceUrl = 'http://some-url.com';
const headers = {
    jwt: testJwt()
};

describe('Base API', () => {
    describe('#constructor', () => {
        it('should set service URL and auth headers', () => {
            const api = new BaseApi(serviceUrl, headers);

            api.serviceUrl.should.equal(serviceUrl);
            api.authHeaders.should.equal(headers);
        });
    });

    describe('#getHeaders', function() {
        it('should include auth headers and custom headers', () => {
            const api = new BaseApi(serviceUrl, {
                Authorization: 'Bearer stuff'
            }, {
                customHeader: '1234'
            });

            api.getHeaders().should.eql({
                Authorization: 'Bearer stuff',
                customHeader: '1234'
            });
        });
    });

    describe('#validateAuthHeaders', () => {
        it('should not return an error if Authorization header is present', () => {
            const api = new BaseApi(serviceUrl, {
                Authorization: 'Bearer stuff'
            });

            return api.validateAuthHeaders();
        });

        it('should return an error if Authorization header is not present', (done) => {
            const api = new BaseApi(serviceUrl, {
                'something': 'whatever'
            });

            api.validateAuthHeaders().catch(() => {
                done();
            });
        });
    });
});
