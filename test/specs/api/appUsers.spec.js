import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersApi } from '../../../src/api/appUsers';
import { createReadStream } from 'streamifier';
import { testJwt } from '../../mocks/jwt';

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

    describe('#get', () => {
        it('should call http', () => {
            return api.get(userId).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}`;

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
                const fullUrl = `${serviceUrl}/appusers/${userId}`;
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
                const fullUrl = `${serviceUrl}/init`;
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
            jwt: testJwt()
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
                const fullUrl = `${serviceUrl}/appusers`;
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
                const fullUrl = `${serviceUrl}/appusers/${userId}/events`;
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
                const fullUrl = `${serviceUrl}/appusers/${userId}/pushToken`;
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
                const fullUrl = `${serviceUrl}/appusers/${userId}/devices/${deviceId}`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, attrs, httpHeaders);
            });
        });
    });

    describe('#linkChannel', () => {
        it('should call http', () => {
            const data = {
                type: 'twilio',
                phoneNumber: '15145555555'
            };
            return api.linkChannel(userId, data).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/channels`;
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
                const fullUrl = `${serviceUrl}/appusers/${userId}/channels/twilio`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, httpHeaders);
            });
        });
    });

    describe('#pingChannel', () => {
        it('should call http', () => {
            return api.pingChannel(userId, 'twilio').then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/integrations/twilio/ping`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, undefined, httpHeaders);
            });
        });
    });

    describe('#getMessages', () => {
        it('should call http', () => {
            return api.getMessages(userId).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });

        it('should call http with before param', () => {
            return api.getMessages(userId, {
                before: 'XYZ'
            }).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, {
                    before: 'XYZ'
                }, httpHeaders);
            });
        });

        it('should call http with after param', () => {
            return api.getMessages(userId, {
                after: 'XYZ'
            }).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, {
                    after: 'XYZ'
                }, httpHeaders);
            });
        });

        it('should throw if before and after are specified', () => {
            return api.getMessages(userId, {
                before: 'XYZ',
                after: 'XYZ'
            }).catch(() => {
                httpSpy.should.not.have.been.called;
            });
        });
    });

    describe('#sendMessage', () => {
        it('should call http', () => {
            const message = {
                text: 'this is a message'
            };

            return api.sendMessage(userId, message).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, message, httpHeaders);
            });
        });
    });

    describe('#deleteMessages', () => {
        const jwtHttpHeaders = getAuthenticationHeaders({
            jwt: testJwt()
        });

        it('should throw an error if used with app token', (done) => {
            api.deleteMessages(userId).catch((err) => {
                err.message.should.equal('Must not use an app token for authentication.');
                done();
            });
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi(serviceUrl, jwtHttpHeaders);
            return jwtApi.deleteMessages(userId).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, {}, jwtHttpHeaders);
            });
        });
    });

    describe('#typingActivity', () => {
        it('should call http', () => {
            const activity = {
                role: 'appMaker',
                type: 'typing:start'
            };

            return api.typingActivity(userId, activity).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/conversation/activity`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, activity, httpHeaders);
            });
        });
    });

    describe('#uploadImage', () => {
        it('should call http', () => {
            const fullUrl = `${serviceUrl}/appusers/${userId}/images`;
            const source = createReadStream('some source object');
            const message = {
                text: 'this is a message'
            };

            return api.uploadImage(userId, source, message).then(() => {
                httpSpy.args[0][0].should.eq('POST');
                httpSpy.args[0][1].should.eq(fullUrl);
                httpSpy.args[0][2].should.be.instanceof(FormData);
                httpSpy.args[0][3].should.eql(httpHeaders);
            });
        });
    });

    describe('#deleteProfile', () => {
        const jwtHttpHeaders = getAuthenticationHeaders({
            jwt: testJwt()
        });

        it('should throw an error if used with app token', (done) => {
            api.deleteProfile(userId).catch((err) => {
                err.message.should.equal('Must not use an app token for authentication.');
                done();
            });
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi(serviceUrl, jwtHttpHeaders);
            return jwtApi.deleteProfile(userId).then(() => {
                const fullUrl = `${serviceUrl}/appusers/${userId}/profile`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, {}, jwtHttpHeaders);
            });
        });
    });

    describe('#transferRequest', () => {
        it('should call http', () => {
            const fullUrl = `${serviceUrl}/appusers/${userId}/transferrequest`;

            return api.transferRequest(userId, {
                type: 'messenger'
            }).then(() => {
                httpSpy.should.have.been.calledWith('GET', fullUrl, {
                    type: 'messenger'
                }, httpHeaders);
            });
        });

        it('should throw if no type provided', () => {
            expect(() => api.transferRequest(userId)).to.throw(Error);
        });
    });
});
