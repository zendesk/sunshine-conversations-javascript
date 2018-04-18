import hat from 'hat';

import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppsApi } from '../../../src/api/apps';
import { testJwt } from '../../mocks/jwt';

describe('Apps API', () => {
    const serviceUrl = 'http://some-url.com';
    const missingParams = 'incorrect number of parameters';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'app';
    const appId = 'appid_12345';
    const appName = 'My Awesome Unit Test App';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppsApi({
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
            expect(() => api.create()).to.throw(Error, missingParams);
        });

        it('should throw if param is wrong type', () => {
            expect(() => api.create({})).to.throw(Error);
        });

        it('should call http', () => {
            return api.create(appName).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: appName
                }, authHeaders);
            });
        });

        it('should call http', () => {
            return api.create({
                name: appName,
                settings: {},
                metadata: {
                    a: 'b'
                }
            }).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: appName,
                    settings: {},
                    metadata: {
                        a: 'b'
                    }
                }, authHeaders);
            });
        });
    });

    describe('#list', () => {
        const limit = 42;
        const offset = 99;
        it('should call http with no limit or offset', () => {
            return api.list().then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should use limit', () => {
            return api.list(limit).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    limit
                }, authHeaders);
            });
        });

        it('should use offset', () => {
            return api.list(undefined, offset).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    offset
                }, authHeaders);
            });
        });

        it('should use both', () => {
            return api.list(limit, offset).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    limit,
                    offset
                }, authHeaders);
            });
        });

        it('should use serviceAccountId', () => {
            const serviceAccountId = hat();
            return api.list(undefined, undefined, serviceAccountId).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    serviceAccountId
                }, authHeaders);
            });
        });

        it('should use all three', () => {
            const serviceAccountId = hat();
            return api.list(limit, offset, serviceAccountId).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    limit,
                    offset,
                    serviceAccountId
                }, authHeaders);
            });
        });

        it('should allow params object with only serviceAccountId', () => {
            const serviceAccountId = hat();
            
            return api.list({
                serviceAccountId
            }).then(() => {
                const url = `${serviceUrl}/v1/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    serviceAccountId
                }, authHeaders);
            });
        });

        it('should reject non-number limit and offset', () => {
            [['banana'], ['apple', true], [undefined, {}]].forEach((invalid) => {
                expect(() => api.list(...invalid)).to.throw(Error, 'must be a number');
            });
        });

        it('should reject non-string serviceAccountId', () => {
            [1, true, {}].forEach((invalid) => {
                expect(() => api.list(undefined, undefined, invalid)).to.throw(Error, 'must be a string');
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(appId).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, authHeaders);
            });
        });

        it('should throw if missing appId', () => {
            expect(() => api.get()).to.throw(Error, missingParams);
        });
    });

    describe('#put', () => {
        it('should call http', () => {
            const appId = 'app_123456';

            return api.update(appId, {
                name: appName,
                settings: {}
            }).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}`;
                httpSpy.should.have.been.calledWith('PUT', url, {
                    name: appName,
                    settings: {}
                }, authHeaders);
            });
        });

        it('should throw if missing appId', () => {
            expect(() => api.update()).to.throw(Error, missingParams);
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            const appId = 'app_123456';
            return api.delete(appId).then(() => {
                const url = `${serviceUrl}/v1/apps/${appId}`;
                httpSpy.should.have.been.calledWith('DELETE', url, undefined, authHeaders);
            });
        });

        it('should throw error if missing appId', () => {
            expect(() => api.delete()).to.throw(Error, missingParams);
        });
    });
});
