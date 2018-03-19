import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { MenuApi } from '../../../src/api/menu';
import { testJwt } from '../../mocks/jwt';

describe('Menu API', () => {
    const serviceUrl = 'http://some-url.com';
    const noPropsMessage = 'Must provide props.';
    const noItemsMessage = 'Must provide an array of items.';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new MenuApi({serviceUrl, authHeaders});
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get().then(() => {
                const fullUrl = `${serviceUrl}/v1/menu`;
                httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
            });
        });
    });

    describe('#configure', () => {
        const props = {
            items: [],
            name: 'menieu'
        };

        it('should call http', () => {
            return api.configure(props).then(() => {
                const fullUrl = `${serviceUrl}/v1/menu`;
                httpSpy.should.have.been.calledWith('PUT', fullUrl, props, authHeaders);
            });
        });

        it('should return an error if no items', (done) => {
            api.configure({
                name: 'menieu'
            }).catch((e) => {
                e.message.should.equal(noItemsMessage);
                done();
            });
        });

        it('should return an error if no props', (done) => {
            api.configure(undefined).catch((e) => {
                e.message.should.equal(noPropsMessage);
                done();
            });
        });
    });

    describe('#remove', () => {
        it('should call http', () => {
            return api.remove().then(() => {
                const fullUrl = `${serviceUrl}/v1/menu`;
                httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
            });
        });
    });
});
