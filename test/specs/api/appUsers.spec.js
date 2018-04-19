import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppUsersApi } from '../../../src/api/appUsers';
import { createReadStream } from 'streamifier';
import { testJwt } from '../../mocks/jwt';

describe('AppUsers API', () => {
    const appId = 'app-id';
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const messageId = 'message-id';
    let authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });

    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppUsersApi({
            serviceUrl,
            authHeaders
        });
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
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}`;

                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#update', () => {
        it('should call http', () => {
            const attributes = {
                email: 'new-email'
            };

            return api.update(userId, attributes).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, attributes, authHeaders);
            });
        });
    });

    describe('#create', () => {
        const userId = 'some-id';

        const props = {
            email: 'this is an email'
        };

        authHeaders = getAuthenticationHeaders({
            jwt: testJwt()
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi({
                serviceUrl,
                authHeaders
            });
            return jwtApi.create(userId, props).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, Object.assign({
                    userId: userId
                }, props), authHeaders);
            });
        });

        it('should throw if signedUpAt is not a date object', (done) => {
            const jwtApi = new AppUsersApi({
                serviceUrl,
                authHeaders
            });
            jwtApi.create(userId, {
                signedUpAt: 'not a date'
            }).catch(() => {
                done();
            });
        });
    });

    describe('#getChannels', () => {
        it('should call http', () => {
            return api.getChannels(userId).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/channels`;

                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#getBusinessSystems', () => {
        it('should call http', () => {
            return api.getBusinessSystems(userId).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/businesssystems`;

                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
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
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/channels`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, {
                    ...data
                }, authHeaders);
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
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/channels/twilio`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#pingChannel', () => {
        it('should call http', () => {
            return api.pingChannel(userId, 'twilio').then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/integrations/twilio/ping`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#getMessages', () => {
        it('should call http', () => {
            return api.getMessages(userId).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });

        it('should call http with before param', () => {
            return api.getMessages(userId, {
                before: 'XYZ'
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, {
                    before: 'XYZ'
                }, authHeaders);
            });
        });

        it('should call http with after param', () => {
            return api.getMessages(userId, {
                after: 'XYZ'
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, {
                    after: 'XYZ'
                }, authHeaders);
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
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, message, authHeaders);
            });
        });
    });

    describe('#deleteMessage', () => {
        authHeaders = getAuthenticationHeaders({
            jwt: testJwt()
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi({
                scope: 'account',
                serviceUrl,
                authHeaders
            });
            return jwtApi.deleteMessage({
                appId,
                userId,
                messageId
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/appusers/${userId}/messages/${messageId}`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#deleteMessages', () => {
        authHeaders = getAuthenticationHeaders({
            jwt: testJwt()
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi({
                serviceUrl,
                authHeaders
            });
            return jwtApi.deleteMessages(userId).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/messages`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, {}, authHeaders);
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
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/conversation/activity`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, activity, authHeaders);
            });
        });
    });

    describe('#conversationActivity', () => {
        it('should call http', () => {
            const activity = {
                role: 'appMaker',
                type: 'typing:start'
            };

            return api.conversationActivity(userId, activity).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/conversation/activity`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, activity, authHeaders);
            });
        });
    });

    describe('#uploadImage', () => {
        it('should call http', () => {
            const fullUrl = `${serviceUrl}/v1/appusers/${userId}/images`;
            const source = createReadStream('some source object');
            const message = {
                text: 'this is a message'
            };

            return api.uploadImage(userId, source, message).then(() => {
                httpSpy.args[0][0].should.eq('POST');
                httpSpy.args[0][1].should.eq(fullUrl);
                httpSpy.args[0][2].should.be.instanceof(FormData);
                httpSpy.args[0][3].should.eql(authHeaders);
            });
        });
    });

    describe('#deleteProfile', () => {
        authHeaders = getAuthenticationHeaders({
            jwt: testJwt()
        });

        it('should call http', () => {
            const jwtApi = new AppUsersApi({
                serviceUrl,
                authHeaders
            });
            return jwtApi.deleteProfile(userId).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/profile`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, {}, authHeaders);
            });
        });
    });

    describe('#getLinkRequests', () => {
        it('should call http', () => {
            const fullUrl = `${serviceUrl}/v1/appusers/${userId}/linkrequest`;

            const integrationIds = ['5a04b5df045fedda49fa89f1', '5a04b5e0045fedda49fa89f2'];
            return api.getLinkRequests(userId, integrationIds).then(() => {
                httpSpy.should.have.been.calledWith('GET', fullUrl, {
                    integrationIds: integrationIds.join(',')
                }, authHeaders);
            });
        });

        it('should throw if no type provided', () => {
            expect(() => api.getLinkRequests(userId)).to.throw(Error);
        });
    });

    describe('#getAuthCode', () => {
        it('should call http', () => {
            return api.getAuthCode(userId).then(() => {
                const fullUrl = `${serviceUrl}/v1/appusers/${userId}/authcode`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });
});
