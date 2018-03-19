import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { StripeApi } from '../../../src/api/stripe';
import { testJwt } from '../../mocks/jwt';

describe('Stripe API', () => {
    const serviceUrl = 'http://some-url.com';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new StripeApi({serviceUrl, authHeaders});
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#getAccount', () => {
        it('should call http', () => {
            return api.getAccount().then(() => {
                const fullUrl = `${serviceUrl}/v1/stripe/account`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });
});
