import { BaseApi } from '../../../src/api/base';
import smoochMethod from '../../../src/utils/smoochMethod';
import * as httpMock from '../../mocks/http';

const serviceUrl = 'http://example.org/v1';
const appId = 'appId';
const param1 = 'foo';

/**
 * Foos things
 * @constructor
 * @name Fooer
 */
class TestApi extends BaseApi {
}

Object.assign(TestApi.prototype, {
    /**
     * Uses appId param if its needed
     * @memberof TestApi.prototype
     * @method oneParam
     * @param {string} param1 - The second param
     */
    oneParam: smoochMethod({
        params: ['param1'],
        path: '/param1/:param1',
        func: function oneParam(url, param1) {
            return {
                url,
                param1
            };
        }
    }),

    /**
     * Accepts three params
     * @memberof TestApi.prototype
     * @method manyParams
     * @param {string} param1 - The first param
     * @param {string} param2 - The second param
     * @param {string} param3 - The third param
     */
    manyParams: smoochMethod({
        params: ['param1', 'param2', 'param3'],
        path: '/param1/:param1/param2/:param2/param3/:param3',
        func: function manyParams(url, param1, param2, param3) {
            return {
                url,
                param1,
                param2,
                param3
            };
        }
    }),

    /**
     * Accepts a props object
     * @memberof TestApi.prototype
     * @method singleProps
     * @param {object} props - Props
     */
    singleProps: smoochMethod({
        params: ['props'],
        path: '/foo',
        func: function singleProps(url, props) {
            return props;
        }
    }),

    /**
     * Accepts no params
     * @memberof TestApi.prototype
     * @method noParams 
     */
    noParams: smoochMethod({
        params: [],
        path: '/foo',
        func: function noParams(url) {
            return url;
        }
    }),

    /**
     * Accepts optional params
     * @memberof TestApi.prototype
     * @method optionalParams
     * @param {string} param1 - The first param
     * @param {string=} props - The second param
     */
    optionalParams: smoochMethod({
        params: ['param1', 'param2'],
        optional: ['param2'],
        path: '/foo',
        func: function optionalParams(url, param1, param2 = 'default') {
            return [param1, param2];
        }
    }),

    /**
     * GET method
     * @memberof TestApi.prototype
     * @method getMethod
     * @param {string} param1 - The first param
     */
    getMethod: smoochMethod({
        params: ['param1'],
        path: '/param1/:param1',
        method: 'GET'
    }),

    /**
     * POST method
     * @memberof TestApi.prototype
     * @method postMethod
     * @param {string} param1 - The first param
     * @param {object} props - The props
     */
    postMethod: smoochMethod({
        params: ['param1', 'props'],
        path: '/param1/:param1',
        method: 'POST'
    }),

    /**
     * PUT method
     * @memberof TestApi.prototype
     * @method putMethod
     * @param {string} param1 - The first param
     * @param {object} props - The props
     */
    putMethod: smoochMethod({
        params: ['param1', 'props'],
        path: '/param1/:param1',
        method: 'PUT'
    }),

    /**
     * POST method
     * @memberof TestApi.prototype
     * @method deleteMethod
     * @param {string} param1 - The first param
     */
    deleteMethod: smoochMethod({
        params: ['param1'],
        path: '/param1/:param1',
        method: 'DELETE'
    })
});

describe('Smooch Method', () => {
    let testApi;
    let expected;

    describe('method requires appId', () => {
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, true);
            expected = {
                url: `${serviceUrl}/apps/${appId}/param1/${param1}`,
                param1
            };
        });

        it('should accept param list with appId', () => {
            const result = testApi.oneParam(appId, param1);
            result.should.deep.equal(expected);
        });

        it('should reject param list missing appId', () => {
            expect(() => testApi.oneParam(param1)).to.throw(Error, 'incorrect number of parameters');
        });

        it('should accept object with appId', () => {
            const result = testApi.oneParam({
                appId,
                param1
            });
            result.should.deep.equal(expected);
        });

        it('should reject object missing appId', () => {
            expect(() => testApi.oneParam({
                param1
            })).to.throw(Error, 'missing required argument');
        });
    });

    describe('appId resolved by credential scope', () => {
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
            expected = {
                url: `${serviceUrl}/param1/${param1}`,
                param1
            };
        });

        it('should accept param list', () => {
            const result = testApi.oneParam(param1);
            result.should.deep.equal(expected);
        });

        it('should reject param list with appId', () => {
            expect(() => testApi.oneParam(appId, param1)).to.throw(Error, 'incorrect number of parameters');
        });

        it('should accept object', () => {
            const result = testApi.oneParam({
                param1
            });
            result.should.deep.equal(expected);
        });

        it('should ignore appId in object', () => {
            const result = testApi.oneParam({
                appId,
                param1
            });
            result.should.deep.equal(expected);
        });
    });

    describe('many params', () => {
        const param2 = 'bar';
        const param3 = 'baz';

        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
            expected = {
                url: `${serviceUrl}/param1/${param1}/param2/${param2}/param3/${param3}`,
                param1,
                param2,
                param3
            };
        });

        it('should accept param list', () => {
            const result = testApi.manyParams(param1, param2, param3);
            result.should.deep.equal(expected);
        });

        it('should accept object', () => {
            const result = testApi.manyParams({
                param1,
                param2,
                param3
            });
            result.should.deep.equal(expected);
        });
    });

    describe('method with single props arg', () => {
        let props;
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
            props = {
                a: 'foo',
                b: 'bar'
            };
        });

        it('should accept param list', () => {
            const result = testApi.singleProps(props);
            result.should.deep.equal(props);
        });

        it('should accept object', () => {
            const result = testApi.singleProps({
                props
            });
            result.should.deep.equal(props);
        });
    });

    describe('method with no params', () => {
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
            expected = `${serviceUrl}/foo`;
        });

        it('should accept no params', () => {
            const result = testApi.noParams();
            result.should.equal(expected);
        });

        it('should reject param list', () => {
            expect(() => testApi.noParams('banana')).to.throw(Error);
        });

        it('should ignore object', () => {
            const result = testApi.noParams({
                foo: 'bar'
            });
            result.should.equal(expected);
        });
    });

    describe('method with optional params', () => {
        const param2 = 'bar';
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
        });

        it('should accept full param list', () => {
            const result = testApi.optionalParams(param1, param2);
            result.should.deep.equal([param1, param2]);
        });

        it('should accept full object', () => {
            const result = testApi.optionalParams({
                param1,
                param2
            });
            result.should.deep.equal([param1, param2]);
        });

        it('should accept only required param list', () => {
            const result = testApi.optionalParams(param1);
            result.should.deep.equal([param1, 'default']);
        });

        it('should accept only required object', () => {
            const result = testApi.optionalParams({
                param1
            });
            result.should.deep.equal([param1, 'default']);
        });
    });

    describe('simple methods', () => {
        let httpSpy;
        let expectedUrl;
        let body;

        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
            httpSpy = httpMock.mock();
            expectedUrl = `${serviceUrl}/param1/${param1}`;
            body = {
                'foo': 'bar'
            };
        });

        afterEach(() => httpMock.restore());

        it('should make a GET', () => {
            return testApi.getMethod(param1).then(() => {
                httpSpy.should.have.been.calledWith('GET', expectedUrl, undefined, {});
            });
        });

        it('should make a POST', () => {
            return testApi.postMethod(param1, body).then(() => {
                httpSpy.should.have.been.calledWith('POST', expectedUrl, body, {});
            });
        });

        it('should make a PUT', () => {
            return testApi.putMethod(param1, body).then(() => {
                httpSpy.should.have.been.calledWith('PUT', expectedUrl, body, {});
            });
        });

        it('should make a DELETE', () => {
            return testApi.deleteMethod(param1).then(() => {
                httpSpy.should.have.been.calledWith('DELETE', expectedUrl, undefined, {});
            });
        });
    });
});
