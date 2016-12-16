import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { StripeApi } from '../../../src/api/stripe';
import { testJwt } from '../../mocks/jwt';

describe('Stripe API', () => {
    const serviceUrl = 'http://some-url.com';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
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
                const fullUrl = `${serviceUrl}/stripe/account`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });

        it('should accept appToken as authentication method', () => {
            const httpHeaders = getAuthenticationHeaders({
                appToken: 'appToken'
            });
            api = new StripeApi(serviceUrl, httpHeaders);

            return api.getAccount()
                .then(() => {
                    const fullUrl = `${serviceUrl}/stripe/account`;
                    httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
                });
        });

    });
});
