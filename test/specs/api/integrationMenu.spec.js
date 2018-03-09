import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { IntegrationMenuApi } from '../../../src/api/integrationMenu';
import { testJwt } from '../../mocks/jwt';

describe('Integration Menu API', () => {
    const serviceUrl = 'http://some-url.com';
    const noPropsMessage = 'Must provide props.';
    const noItemsMessage = 'Must provide an array of items.';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'account';
    const appId = 'appid_12345';
    const integrationId = 'integrationid_12345';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new IntegrationMenuApi({serviceUrl, authHeaders, scope});
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(appId, integrationId).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
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
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('POST', fullUrl, props, authHeaders);
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
    });

    describe('#update', () => {
        const props = {
            items: []
        };

        it('should call http', () => {
            return api.update(appId, integrationId, props).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, authHeaders);
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
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(appId, integrationId).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/integrations/${integrationId}/menu`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
            });
        });
    });
});
