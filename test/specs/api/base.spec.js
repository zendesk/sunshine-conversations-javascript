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
        it('should not return an error if Authorization header is present and allowed', () => {
            const api = new BaseApi(serviceUrl, {
                Authorization: 'Bearer stuff'
            });

            api.allowedAuth = ['jwt'];

            return api.validateAuthHeaders();
        });

        it('should return an error if Authorization header is present and not allowed', (done) => {
            const api = new BaseApi(serviceUrl, {
                Authorization: 'Bearer stuff'
            });

            api.allowedAuth = ['appToken'];

            api.validateAuthHeaders().catch(() => {
                done();
            });
        });

        it('should not return an error if app-token header is present and allowed', () => {
            const api = new BaseApi(serviceUrl, {
                'app-token': 'some-token'
            });

            api.allowedAuth = ['appToken'];

            return api.validateAuthHeaders();
        });

        it('should return an error if app-token header is present and not allowed', (done) => {
            const api = new BaseApi(serviceUrl, {
                'app-token': 'some-token'
            });

            api.allowedAuth = ['jwt'];

            api.validateAuthHeaders().catch(() => {
                done();
            });
        });

        it('should not return an error if jwt header is present and both are allowed', () => {
            const api = new BaseApi(serviceUrl, {
                Authorization: 'Bearer stuff'
            });

            api.allowedAuth = ['appToken', 'jwt'];

            return api.validateAuthHeaders();
        });

        it('should not return an error if app-token header is present and both are allowed', () => {
            const api = new BaseApi(serviceUrl, {
                'app-token': 'some-token'
            });

            api.allowedAuth = ['appToken', 'jwt'];

            return api.validateAuthHeaders();
        });

        it('should return an error if no allowed auth are present', (done) => {
            const api = new BaseApi(serviceUrl, {
                'app-token': 'some-token'
            });

            api.allowedAuth = [];

            api.validateAuthHeaders().catch(() => {
                done();
            });
        });
    });
});
