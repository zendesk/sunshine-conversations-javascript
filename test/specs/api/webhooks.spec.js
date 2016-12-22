import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { WebhooksApi } from '../../../src/api/webhooks';
import { testJwt } from '../../mocks/jwt';

describe('Webhooks API', () => {
    const serviceUrl = 'http://some-url.com';
    const webhookId = 'some-id';
    const webhookUrl = 'http://some-url.com/webhook';
    const malformedWebhookUrl = 'some-url-missing-http-prefix.com';
    const invalidAuthErrorMessage = 'Must not use an app token for authentication.';
    const malformedTargetUrl = 'Malformed target url.';
    const noPropsMessage = 'Must provide props.';
    const noTargetMessage = 'Must provide a target.';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new WebhooksApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#validateProps', () => {
        it('should throw an error if props are not provided', () => {
            expect(() => api.validateProps()).to.throw(Error, noPropsMessage);
        });

        it('should throw an error if props are empty', () => {
            expect(() => api.validateProps({})).to.throw(Error, noPropsMessage);
        });

        it('should throw an error if target is not provided and required', () => {
            expect(() => api.validateProps({
                event: 'message'
            }, true)).to.throw(Error, noTargetMessage);
        });

        it('should not throw an error if target is provided and required', () => {
            expect(() => api.validateProps({
                target: webhookUrl,
                event: 'message'
            }, true)).to.not.throw;
        });

        it('should throw an error if props url target is malformed', () => {
            expect(() => api.validateProps({
                target: malformedWebhookUrl,
                event: 'message'
            })).to.throw(Error, malformedTargetUrl);
        });

        it('should not throw an error if props are provided and target is not required', () => {
            expect(() => api.validateProps({
                event: 'message'
            })).to.not.throw;
        });

    });

    describe('#list', () => {
        it('should call http', () => {
            return api.list().then(() => {
                const fullUrl = `${serviceUrl}/webhooks`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }));

            badApi.list().catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(webhookId).then(() => {
                const fullUrl = `${serviceUrl}/webhooks/${webhookId}`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });


        it('should return an error if app token in auth', (done) => {
            const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }));

            badApi.get(webhookId).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#create', () => {
        const props = {
            target: webhookUrl
        };

        it('should call http', () => {
            return api.create(props).then(() => {
                const fullUrl = `${serviceUrl}/webhooks`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
            });
        });

        it('should throw an error if no target', () => {
            expect(() => api.create({
                event: 'event'
            })).to.throw(Error, noTargetMessage);
        });

        it('should throw an error if no props', () => {
            expect(() => api.create(undefined)).to.throw(Error, noPropsMessage);
        });

        it('should throw an error if props are empty', () => {
            expect(() => api.create({})).to.throw(Error, noPropsMessage);
        });

        it('should throw an error if target url is malformed', () => {
            expect(() => api.create({
                target: malformedWebhookUrl
            })).to.throw(Error, malformedTargetUrl);
        });

        it('should reject if app token in auth', () => {
            const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }));

            badApi.create(props).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
            });
        });
    });


    describe('#update', () => {
        const props = {
            target: webhookUrl
        };

        it('should call http', () => {
            return api.update(webhookId, props).then(() => {
                const fullUrl = `${serviceUrl}/webhooks/${webhookId}`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, httpHeaders);
            });
        });

        it('should throw an error if no props', () => {
            expect(() => api.update(webhookId, undefined)).to.throw(Error, noPropsMessage);
        });

        it('should throw an error if props are empty', () => {
            expect(() => api.update(webhookId, {})).to.throw(Error, noPropsMessage);
        });

        it('should throw an error if target url is malformed', () => {
            expect(() => api.update(webhookId, {
                target: malformedWebhookUrl
            })).to.throw(Error, malformedTargetUrl);
        });

        it('should reject if app token in auth', (done) => {
            const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }));

            badApi.update(webhookId, props).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(webhookId).then(() => {
                const fullUrl = `${serviceUrl}/webhooks/${webhookId}`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, httpHeaders);
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }));

            badApi.delete(webhookId).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });
});
