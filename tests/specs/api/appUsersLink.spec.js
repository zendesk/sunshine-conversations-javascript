import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersLinkApi } from '../../../src/api/appUsersLink';

describe('AppUsersLink API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = getAuthenticationHeaders({
        jwt: 'jwt'
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppUsersLinkApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#linkChannel', () => {
        it('should call http', () => {
            const data = {
                type: 'twilio',
                phoneNumber: '15145555555'
            };
            return api.linkChannel(userId, data).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'channels');
                httpSpy.should.have.been.calledWith('POST', fullUrl, {
                    ...data
                }, httpHeaders);
            });
        });

        it('should throw if no channelType provided', () => {
            return api.linkChannel(userId, {}).catch(() => {
                httpSpy.should.not.have.been.called;
            });
        });
    });

    describe('#unlinkChannel', () => {
        it('should call http', () => {
            return api.unlinkChannel(userId, 'twilio').then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'channels', 'twilio');
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, httpHeaders);
            });
        });
    });
});
