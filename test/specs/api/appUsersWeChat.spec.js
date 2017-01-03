import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersWeChatApi } from '../../../src/api/appUsersWeChat';
import { testJwt } from '../../mocks/jwt';

describe('AppUsersWeChat API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppUsersWeChatApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#getQRCode', () => {
        it('should call http', () => {
            return api.getQRCode(userId).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/integrations/wechat/qrcode`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });
    });
});
