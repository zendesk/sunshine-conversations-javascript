import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppKeysApi } from '../../../src/api/appKeys';
import { testJwt } from '../../mocks/jwt';

describe('App Keys API', () => {
    const serviceUrl = 'http://some-url.com';
    const missingParams = 'incorrect number of parameters';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'account';
    const appId = 'appid_12345';
    const keyId = 'key_12345';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppKeysApi({
            serviceUrl,
            authHeaders,
            scope
        });
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#create', () => {
        it('should throw if name not provided', () => {
            expect(() => api.create(appId)).to.throw(Error, missingParams);
        });

        it('should throw if param is wrong type', () => {
            expect(() => api.create(appId, {})).to.throw(Error);
        });

        it('should call http', () => {
            const keyName = 'key_12345';
            return api.create(appId, keyName).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}/keys`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: keyName
                }, authHeaders);
            });
        });
    });

    describe('#list', () => {
        it('should call http', () => {
            return api.list(appId).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}/keys`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(appId, keyId).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}/keys/${keyId}`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should throw if missing keyId', () => {
            expect(() => api.get(appId)).to.throw(Error, missingParams);
        });
    });

    describe('#getJwt', () => {
        it('should call http', () => {
            return api.getJwt(appId, keyId).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}/keys/${keyId}/jwt`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should throw if missing keyId', () => {
            expect(() => api.getJwt(appId)).to.throw(Error, missingParams);
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(appId, keyId).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}/keys/${keyId}`;
                httpSpy.should.have.been.calledWith('DELETE', url, undefined, authHeaders);
            });
        });

        it('should throw error if missing keyId', () => {
            expect(() => api.delete(appId)).to.throw(Error, missingParams);
        });
    });
});
