import * as httpMock from '../../mocks/http';
import { StripeApi } from '../../../src/api/stripe';
import credential from '../../../src/utils/credential';
import { testJwt } from '../../mocks/jwt';

describe('Stripe API', () => {
    const serviceUrl = 'http://some-url.com';
    const httpHeaders = credential({
        jwt: testJwt()
    }).authHeaders;
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new StripeApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#getAccount', () => {

        it('should call http', () => {
            return api.getAccount().then(() => {
                const fullUrl = api.getFullURL('stripe', 'account');
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });

        it('should accept appToken as authentication method', () => {
            const httpHeaders = credential({
                appToken: 'appToken'
            }).authHeaders;
            api = new StripeApi(serviceUrl, httpHeaders);

            return api.getAccount()
                .then(() => {
                    const fullUrl = api.getFullURL('stripe', 'account');
                    httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
                });
        });

    });
});
