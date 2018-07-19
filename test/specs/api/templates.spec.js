import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { testJwt } from '../../mocks/jwt';
import { TemplatesApi } from '../../../src/api/templates';

describe('Template API', () => {
    const serviceUrl = 'http://some-url.com';
    const noPropsMessage = 'Must provide props.';
    const noNameMessage = 'Must provide name for your template.';
    const noMessageMessage = 'Must provide message for your template.';
    const noNameOrMessageMessage = 'Must provide either name or message to update.';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'account';
    const appId = 'appid_12345';
    const templateId = 'templateid_12345';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new TemplatesApi({
            serviceUrl,
            authHeaders,
            scope
        });
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#create', () => {
        const props = {
            name: 'test',
            message: {}
        };

        it('should call http', () => {
            return api.create(appId, props)
                .then(() => {
                    const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates`;
                    httpSpy.should.have.been.calledWith('POST', fullUrl, props, authHeaders);
                });
        });

        it('should return an error if no props', () => {
            return api.create(appId, undefined)
                .catch((e) => {
                    e.message.should.equal(noPropsMessage);
                });
        });

        it('should return an error if no name', () => {
            return api.create(appId, {
                ...props,
                name: undefined
            }).catch((e) => {
                e.message.should.equal(noNameMessage);
            });
        });

        it('should return an error if no message', () => {
            return api.create(appId, {
                ...props,
                message: undefined
            }).catch((e) => {
                e.message.should.equal(noMessageMessage);
            });
        });
    });

    describe('#list', () => {
        const limit = 0;
        const offset = 0;

        it('should call http', () => {
            return api.list(appId).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });

        it('should call http with limit/offset', () => {
            return api.list(appId, {
                limit,
                offset
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?limit=${limit}&offset=${offset}`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });

        it('should call http with just limit', () => {
            return api.list(appId, {
                limit
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?limit=${limit}`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });

        it('should call http with just offset', () => {
            return api.list(appId, {
                offset
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?offset=${offset}`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });

        it('should call http without extra query stuff', () => {
            return api.list(appId, {
                fake: 'stuff'
            }).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(appId, templateId).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#update', () => {
        const props = {
            name: 'test',
            message: {}
        };

        it('should call http', () => {
            return api.update(appId, templateId, props).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, authHeaders);
            });
        });

        it('should return an error if no props', () => {
            return api.update(appId, templateId, undefined)
                .catch((e) => {
                    e.message.should.equal(noPropsMessage);
                });
        });

        it('should return an error if no name or message', () => {
            return api.update(appId, templateId, {})
                .catch((e) => {
                    e.message.should.equal(noNameOrMessageMessage);
                });
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(appId, templateId).then(() => {
                const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
            });
        });
    });
});
