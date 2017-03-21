import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { IntegrationMenuApi } from '../../../src/api/integrationMenu';
import { testJwt } from '../../mocks/jwt';

describe('Integration Menu API', () => {
    const serviceUrl = 'http://some-url.com';
    const invalidAuthErrorMessage = 'Must not use an app token for authentication.';
    const noPropsMessage = 'Must provide props.';
    const noItemsMessage = 'Must provide an array of items.';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const appId = 'appid_12345';
    const integrationId = 'integrationid_12345';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new IntegrationMenuApi(serviceUrl, httpHeaders, null, true);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(appId, integrationId).then(() => {
                const fullUrl = `${serviceUrl}/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, httpHeaders);
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new IntegrationMenuApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }), null, true);

            badApi.get(appId, integrationId).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#create', () => {
        const props = {
            items: []
        };

        it('should call http', (done) => {
            api.create(appId, integrationId, props)
            .then(() => {
                const fullUrl = `${serviceUrl}/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
                done();
            });
        });

        it('should return an error if no items', (done) => {
            try {
                api.create(appId, integrationId, {});
            } catch(e) {
                e.message.should.equal(noItemsMessage);
                done();
            }
        });

        it('should return an error if no props', (done) => {
            try {
                api.create(appId, integrationId, undefined);
            } catch(e) {
                e.message.should.equal(noPropsMessage);
                done();
            }
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new IntegrationMenuApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }), null, true);

            badApi.create(appId, integrationId, props).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#update', () => {
        const props = {
            items: []
        };

        it('should call http', () => {
            return api.update(appId, integrationId, props).then(() => {
                const fullUrl = `${serviceUrl}/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, httpHeaders);
            });
        });

        it('should return an error if no items', (done) => {
            try {
                api.update(appId, integrationId, {});
            } catch(e) {
                e.message.should.equal(noItemsMessage);
                done();
            }
        });

        it('should return an error if no props', (done) => {
            try {
                api.update(appId, integrationId, undefined);
            } catch(e) {
                e.message.should.equal(noPropsMessage);
                done();
            }
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new IntegrationMenuApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }), null, true);

            badApi.update(appId, integrationId, props).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(appId, integrationId).then(() => {
                const fullUrl = `${serviceUrl}/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, httpHeaders);
            });
        });

        it('should return an error if app token in auth', (done) => {
            const badApi = new IntegrationMenuApi(serviceUrl, getAuthenticationHeaders({
                appToken: 'some-token'
            }), null, true);

            badApi.delete(appId, integrationId).catch((e) => {
                e.message.should.equal(invalidAuthErrorMessage);
                done();
            });
        });
    });
});
