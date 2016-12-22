import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { AppsApi } from '../../../src/api/apps';
import { testJwt } from '../../mocks/jwt';

describe('Apps API', () => {
    const serviceUrl = 'http://some-url.com';
    const missingParams = 'incorrect number of parameters';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const appId = 'appid_12345';
    const appName = 'My Awesome Unit Test App';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new AppsApi(serviceUrl, httpHeaders, null, false);
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
                const url = `${serviceUrl}/apps`;
                httpSpy.should.have.been.calledWith('POST', url, {
                    name: appName
                }, httpHeaders);
            });
        });
    });

    describe('#list', () => {
        const limit = 42;
        const offset = 99;
        it('should call http with no limit or offset', () => {
            return api.list().then(() => {
                const url = `${serviceUrl}/apps`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, httpHeaders);
            });
        });

        it('should use limit', () => {
            return api.list(limit).then(() => {
                const url = `${serviceUrl}/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {limit} , httpHeaders);
            });
        });

        it('should use offset', () => {
            return api.list(undefined, offset).then(() => {
                const url = `${serviceUrl}/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {offset} , httpHeaders);
            });
        });

        it('should use both', () => {
            return api.list(limit, offset).then(() => {
                const url = `${serviceUrl}/apps`;
                httpSpy.should.have.been.calledWith('GET', url, {limit, offset} , httpHeaders);
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
            return api.get(appId).then(() => {
                const url = `${serviceUrl}/apps/${appId}`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, httpHeaders);
            });
        });

        it('should throw if missing appId', () => {
            expect(() => api.get()).to.throw(Error, missingParams);
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            const appId = 'app_123456';
            return api.delete(appId).then(() => {
                const url = `${serviceUrl}/apps/${appId}`;
                httpSpy.should.have.been.calledWith('DELETE', url, undefined, httpHeaders);
            });
        });

        it('should throw error if missing appId', () => {
            expect(() => api.delete()).to.throw(Error, missingParams);
        });
    });
});
