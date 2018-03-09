import hat from 'hat';

import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { ServiceAccountsApi } from '../../../src/api/serviceAccounts';
import { testJwt } from '../../mocks/jwt';

describe('Service Accounts API', () => {
    const serviceUrl = 'http://some-url.com';
    const missingParams = 'incorrect number of parameters';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'app';
    const serviceAccountId = hat();
    const serviceAccountName = hat();
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new ServiceAccountsApi({serviceUrl, authHeaders, scope});
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#create', () => {
        it('should throw if name not provided', () => {
            expect(() => api.create()).to.throw(Error, missingParams);
        });

        it('should throw if param is wrong type', () => {
            expect(() => api.create({})).to.throw(Error);
        });

        it('should call http', () => {
            return api.create(serviceAccountName).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: serviceAccountName
                }, authHeaders);
            });
        });

        it('should call http', () => {
            return api.create({
                name: serviceAccountName
            }).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: serviceAccountName
                }, authHeaders);
            });
        });
    });

    describe('#list', () => {
        const limit = 42;
        const offset = 99;
        it('should call http with no limit or offset', () => {
            return api.list().then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should use limit', () => {
            return api.list(limit).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    limit
                }, authHeaders);
            });
        });

        it('should use offset', () => {
            return api.list(undefined, offset).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    offset
                }, authHeaders);
            });
        });

        it('should use both', () => {
            return api.list(limit, offset).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    limit,
                    offset
                }, authHeaders);
            });
        });

        it('should reject non-number', () => {
            [['banana'], ['apple', true], [undefined, {}]].forEach((invalid) => {
                expect(() => api.list(...invalid)).to.throw(Error, 'must be a number');
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(serviceAccountId).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should throw if missing serviceAccountId', () => {
            expect(() => api.get()).to.throw(Error, missingParams);
        });
    });

    describe('#put', () => {
        it('should call http', () => {
            return api.update(serviceAccountId, {
                name: serviceAccountName
            }).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}`;
                httpSpy.should.have.been.calledWith('PUT', url, {
                    name: serviceAccountName
                }, authHeaders);
            });
        });

        it('should throw if missing serviceAccountId', () => {
            expect(() => api.update()).to.throw(Error, missingParams);
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            return api.delete(serviceAccountId).then(() => {
                const url = `${serviceUrl}/v1/serviceaccounts/${serviceAccountId}`;
                httpSpy.should.have.been.calledWith('DELETE', url, undefined, authHeaders);
            });
        });

        it('should throw error if missing serviceAccountId', () => {
            expect(() => api.delete()).to.throw(Error, missingParams);
        });
    });
});
