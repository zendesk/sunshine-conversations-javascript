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
        it('should return an error if props are not provided', () => {
            expect(() => api.validateProps()).to.throw(Error, 'incorrect number of parameters');
        });

        it('should return an error if props are empty', (done) => {
            api.validateProps({}).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });


        it('should return an error if target is not provided and required', (done) => {
            api.validateProps({
                event: 'message'
            }, true).catch((e) => {
                e.message.should.equal(noTargetMessage);
                done();
            });
        });

        it('should not return an error if target is provided and required', () => {
            return api.validateProps({
                target: webhookUrl,
                event: 'message'
            }, true);
        });

       it('should return an error if props url target is malformed', (done) => {
            api.validateProps({
                target: malformedWebhookUrl,
                event: 'message'
            }).catch((e) => {
                e.message.should.equal(malformedTargetUrl);
                done();
            });
        });

        it('should not return an error if props are provided and target is not required', () => {
            return api.validateProps({
                event: 'message'
            });
        });

    });

    describe('#list', () => {
        it('should call http', () => {
            return api.list().then(() => {
                const fullUrl = api.getFullURL('webhooks');
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
                const fullUrl = api.getFullURL('webhooks', webhookId);
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
                const fullUrl = api.getFullURL('webhooks');
                httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
            });
        });

        it('should return an error if no target', (done) => {
            api.create({
                event: 'event'
            }).catch((e) => {
                e.message.should.equal(noTargetMessage);
                done();
            });
        });

        it('should return an error if no props', (done) => {
            api.create(undefined).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });

        it('should return an error if props are empty', (done) => {
            api.create({}).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });

        it('should return an error if target url is malformed', (done) => {
            api.create({
                target: malformedWebhookUrl
            }).catch((e) => {
                e.message.should.equal(malformedTargetUrl);
                done();
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }));

            badApi.create(props).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });


    describe('#update', () => {
        const props = {
            target: webhookUrl
        };

        it('should call http', () => {
            return api.update(webhookId, props).then(() => {
                const fullUrl = api.getFullURL('webhooks', webhookId);
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, httpHeaders);
            });
        });

        it('should return an error if no props', (done) => {
            api.update(webhookId, undefined).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });

        it('should return an error if props are empty', (done) => {
            api.update(webhookId, {}).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });

        it('should return an error if target url is malformed', (done) => {
            api.update(webhookId, {
                target: malformedWebhookUrl
            }).catch((e) => {
                e.message.should.equal(malformedTargetUrl);
                done();
            });
        });

        it('should return an error if app token in auth', (done) => {
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
                const fullUrl = api.getFullURL('webhooks', webhookId);
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
