import hat from 'hat';

import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { ServiceAccountKeysApi } from '../../../src/api/serviceAccountKeys';
import { testJwt } from '../../mocks/jwt';

describe('Service Account Keys API', () => {
    const serviceUrl = 'http://some-url.com';
    const missingParams = 'incorrect number of parameters';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'account';
    const serviceAccountId = hat();
    const keyId = hat();
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new ServiceAccountKeysApi({serviceUrl, authHeaders, scope});
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#create', () => {
        it('should throw if name not provided', () => {
            expect(() => api.create(serviceAccountId)).to.throw(Error, missingParams);
        });

        it('should throw if param is wrong type', () => {
            expect(() => api.create(serviceAccountId, {})).to.throw(Error);
        });

        it('should call http', () => {
            const keyName = hat();
            return api.create(serviceAccountId, keyName).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}/keys`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: keyName
                }, authHeaders);
            });
        });
    });

    describe('#list', () => {
        it('should call http', () => {
            return api.list(serviceAccountId).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}/keys`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(serviceAccountId, keyId).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}/keys/${keyId}`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should throw if missing keyId', () => {
            expect(() => api.get(serviceAccountId)).to.throw(Error, missingParams);
        });
    });

    describe('#getJwt', () => {
        it('should call http', () => {
            return api.getJwt(serviceAccountId, keyId).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}/keys/${keyId}/jwt`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should throw if missing keyId', () => {
            expect(() => api.getJwt(serviceAccountId)).to.throw(Error, missingParams);
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(serviceAccountId, keyId).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}/keys/${keyId}`;
                httpSpy.should.have.been.calledWith('DELETE', url, undefined, authHeaders);
            });
        });

        it('should throw error if missing keyId', () => {
            expect(() => api.delete(serviceAccountId)).to.throw(Error, missingParams);
        });
    });
});
