import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersViberApi } from '../../../src/api/appUsersViber';
import { testJwt } from '../../mocks/jwt';

describe('AppUsersViber API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppUsersViberApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#getQRCode', () => {
        it('should call http', () => {
            return api.getQRCode(userId).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/integrations/viber/qrcode`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });
    });
});
