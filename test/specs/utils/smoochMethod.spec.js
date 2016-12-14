import { BaseApi } from '../../../src/api/base';
import smoochMethod from '../../../src/utils/smoochMethod';

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
     * @method usesAppId
     * @param {string} appId - The app id
     * @param {string} param1 - The second param
     */
    usesAppId: smoochMethod({
        params: ['appId', 'param1'],
        func: function usesAppId(appId, param1) {
            return this.getFullURLWithApp(appId, 'param1', param1);
        }
    }),

    /**
     * Doesn't use the appId param
     * @memberof TestApi.prototype
     * @method noAppId
     * @param {string} param1 - The first param
     */
    noAppId: smoochMethod({
        params: ['param1'],
        func: function noAppId(param1) {
            return this.getFullURL('param1', param1);
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
        func: function manyParams(param1, param2, param3) {
            return this.getFullURL('param1', param1, 'param2', param2, 'param3', param3);
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
        func: function singleProps(props) {
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
        func: function noParams() {}
    })
});

describe('Smooch Method', () => {
    let testApi;

    describe('method requires appId', () => {
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, true);
        });

        it('should accept param list with appId', () => {
            const result = testApi.usesAppId(appId, param1);
            result.should.equal(`${serviceUrl}/apps/${appId}/param1/${param1}`);
        });

        it('should reject param list missing appId', () => {
            expect(() => testApi.usesAppId(param1)).to.throw(Error, 'incorrect number of parameters');
        });

        it('should accept object with appId', () => {
            const result = testApi.usesAppId({appId, param1});
            result.should.equal(`${serviceUrl}/apps/${appId}/param1/${param1}`);
        });

        it('should reject object missing appId', () => {
            expect(() => testApi.usesAppId({param1})).to.throw(Error, 'missing required argument');
        });
    });

    describe('method does not use appId', () => {
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, true);
        });

        it('should accept param list', () => {
            const result = testApi.noAppId(param1);
            result.should.equal(`${serviceUrl}/param1/${param1}`);
        });

        it('should accept object', () => {
            const result = testApi.noAppId({param1});
            result.should.equal(`${serviceUrl}/param1/${param1}`);
        });

        it('should reject appId in param list', () => {
            expect(() => testApi.noAppId(appId, param1)).to.throw(Error, 'incorrect number of parameters');
        });

        it('should ignore appId in object', () => {
            const result = testApi.noAppId({appId, param1});
            result.should.equal(`${serviceUrl}/param1/${param1}`);
        });
    });

    describe('appId resolved by credential scope', () => {
        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
        });

        it('should accept param list', () => {
            const result = testApi.usesAppId(param1);
            result.should.equal(`${serviceUrl}/param1/${param1}`);
        });

        it('should reject param list with appId', () => {
            expect(() => testApi.usesAppId(appId, param1)).to.throw(Error, 'incorrect number of parameters');
        });

        it('should accept object', () => {
            const result = testApi.usesAppId({param1});
            result.should.equal(`${serviceUrl}/param1/${param1}`);
        });

        it('should ignore appId in object', () => {
            const result = testApi.usesAppId({appId, param1});
            result.should.equal(`${serviceUrl}/param1/${param1}`);
        });
    });

    describe('many params', () => {
        const param2 = 'bar';
        const param3 = 'baz';

        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
        });

        it('should accept param list', () => {
            const result = testApi.manyParams(param1, param2, param3);
            result.should.equal(`${serviceUrl}/param1/${param1}/param2/${param2}/param3/${param3}`);
        });

        it('should accept object', () => {
            const result = testApi.manyParams({param1, param2, param3});
            result.should.equal(`${serviceUrl}/param1/${param1}/param2/${param2}/param3/${param3}`);
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
            const result = testApi.singleProps({props});
            result.should.deep.equal(props);
        });
    });

    describe('method with no params', () => {

        beforeEach(() => {
            testApi = new TestApi(serviceUrl, {}, {}, false);
        });

        it('should accept no params', () => {
            testApi.noParams();
        });

        it('should reject param list', () => {
            expect(() => testApi.noParams('banana')).to.throw(Error);
        });

        it('should ignore object', () => {
            testApi.noParams({foo: 'bar'});
        });
    });
});
