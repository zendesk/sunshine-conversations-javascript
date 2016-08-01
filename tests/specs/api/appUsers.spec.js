import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersApi } from '../../../src/api/appUsers';


describe('AppUsers API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = getAuthenticationHeaders({
        appToken: 'token'
    });

    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppUsersApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    it('should have the Stripe API', () => {
        api.stripe.should.exist;
    });

    it('should have the WeChat API', () => {
        api.wechat.should.exist;
    });

    it('should have the Link API', () => {
        api.link.should.exist;
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(userId).then(() => {
                const fullUrl = api.getFullURL('appusers', userId);

                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });
    });

    describe('#update', () => {
        it('should call http', () => {
            const attributes = {
                email: 'new-email'
            };

            return api.update(userId, attributes).then(() => {
                const fullUrl = api.getFullURL('appusers', userId);
                httpSpy.should.have.been.calledWith('PUT', fullUrl, attributes, httpHeaders);
            });
        });
    });

    describe('#init', () => {
        it('should call http', () => {
            const props = {
                email: 'this is an email'
            };

            return api.init(props).then(() => {
                const fullUrl = api.getFullURL('init');
                httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
            });
        });
    });

    describe('#create', () => {
        const userId = 'some-id';

        const props = {
            email: 'this is an email'
        };

        const jwtHttpHeaders = getAuthenticationHeaders({
            jwt: 'jwt'
        });

        it('should throw an error if used with app token', (done) => {
            api.create(userId).catch((err) => {
                err.message.should.equal('Must not use an app token for authentication.');
                done();
            });
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi(serviceUrl, jwtHttpHeaders);
            return jwtApi.create(userId, props).then(() => {
                const fullUrl = jwtApi.getFullURL('appusers');
                httpSpy.should.have.been.calledWith('POST', fullUrl, Object.assign({
                    userId: userId
                }, props), jwtHttpHeaders);
            });
        });

        it('should throw if signedUpAt is not a date object', (done) => {
            const jwtApi = new AppUsersApi(serviceUrl, jwtHttpHeaders);
            jwtApi.create(userId, {
                signedUpAt: 'not a date'
            }).catch(() => {
                done();
            });
        });
    });

    describe('#trackEvent', () => {
        it('should call http', () => {
            const eventName = 'some-event';
            const props = {
                email: 'this is an email'
            };

            return api.trackEvent(userId, eventName, props).then(() => {
                const fullUrl = api.getFullURL('appusers', userId, 'events');
                httpSpy.should.have.been.calledWith('POST', fullUrl, {
                    name: eventName,
                    appUser: props
                }, httpHeaders);
            });
        });
    });

    describe('#updatePushToken', () => {
        it('should call http', () => {
            const deviceId = 'device-id';
            const token = 'some-token';

            return api.updatePushToken(userId, deviceId, token).then(() => {
                const fullUrl = api.getFullURL('appusers', userId, 'pushToken');
                httpSpy.should.have.been.calledWith('POST', fullUrl, {
                    deviceId,
                    token
                }, httpHeaders);
            });
        });
    });

    describe('#updateDevice', () => {
        it('should call http', () => {
            const deviceId = 'device-id';
            const attrs = {
                test: true
            };

            return api.updateDevice(userId, deviceId, attrs).then(() => {
                const fullUrl = api.getFullURL('appusers', userId, 'devices', deviceId);
                httpSpy.should.have.been.calledWith('PUT', fullUrl, attrs, httpHeaders);
            });
        });
    });
});
