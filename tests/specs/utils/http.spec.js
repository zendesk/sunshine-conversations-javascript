import sinon from 'sinon';
import * as fetchMock from '../../mocks/fetch';
import { http, stringifyGETParams, handleStatus, handleBody } from '../../../src/utils/http';

function getMockedHeaders(headers = {}) {
    return {
        get: (header) => {
            return headers[header];
        }
    };
}

function generateExpectation(method, url, data, headers) {
    method = method.toUpperCase();

    const options = {
        method: method,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, headers)
    };

    if (data) {
        data = Object.assign({}, data);

        if (method === 'GET') {
            url = stringifyGETParams(url, data);
        } else if (method === 'POST' || method === 'PUT') {
            options.body = JSON.stringify(data);
        }
    }

    return {
        url: url,
        options: options
    };
}

function generateTestName(method, data, headers) {
    const dataPart = data && Object.keys(data).length > 0 ? 'with data' : 'without data';
    const headersPart = headers && Object.keys(headers).length > 0 ? 'with headers' : 'without headers';

    return `${method} ${dataPart}, ${headersPart}`;
}

describe('HTTP', () => {
    var fetchSpy;
    beforeEach(() => {
        fetchSpy = fetchMock.mock();
    });

    afterEach(() => {
        fetchMock.restore();
    });

    describe('fetch', () => {
        [
            {
                url: 'http://some-url.com',
                method: 'get'
            },
            {
                url: 'http://some-url.com',
                method: 'GET'
            },
            {
                url: 'http://some-url.com',
                method: 'post',
                data: {
                    some: 'data'
                }
            },
            {
                url: 'http://some-url.com',
                method: 'POST',
                data: {
                    some: 'data'
                }
            },
            {
                url: 'http://some-url.com',
                method: 'DELETE',
                data: {
                    some: 'data'
                }
            },
            {
                url: 'http://some-url.com',
                method: 'POST',
                data: {
                    some: 'data'
                },
                headers: {
                    header: 'yes'
                }
            },
            {
                url: 'http://some-url.com',
                method: 'PUT',
                headers: {
                    header: 'yes'
                }
            }
        ].forEach((options) => {
            describe(generateTestName(options.method, options.data, options.headers), () => {
                it('should transform the options correctly', () => {
                    const expection = generateExpectation(options.method, options.url, options.data, options.headers);

                    return http(options.method, options.url, options.data, options.headers).then(() => {
                        fetchSpy.should.have.been.calledWith(expection.url, expection.options);
                    });
                });
            });
        });

        describe('#handleStatus', () => {
            [200, 201, 202, 203, 204, 299].forEach((status) => {
                it('should not throw an error with HTTP ' + status, () => {
                    const response = handleStatus({
                        status: status
                    });

                    response.status.should.equals(status);
                });
            });

            [300, 301, 302, 303, 304, 401, 402, 403, 404, 429, 500, 503, 599].forEach((status) => {
                it('should throw an error with HTTP ' + status, () => {
                    const response = {
                        status: status,
                        statusText: 'status text of error ' + status
                    };

                    try {
                        handleStatus(response);
                    }
                    catch (e) {
                        e.message.should.equal(response.statusText);
                        e.response.should.equal(response);
                    }
                });

            });
        });

        describe('#handleBody', () => {
            [202, 204].forEach((status) => {
                it('should not return a body if HTTP ' + status, () => {
                    return handleBody({
                        status: status,
                        headers: getMockedHeaders({
                            'Content-Type': 'application/json'
                        })
                    }).then((body) => {
                        expect(body).to.be.undefined;
                    });
                });
            });
            [200, 201, 203, 299].forEach((status) => {
                it('should return the value of json() if HTTP ' + status, () => {
                    const response = {
                        status: status,
                        headers: getMockedHeaders({
                            'Content-Type': 'application/json'
                        }),
                        json: sinon.spy(() => 'body for http ' + status)
                    };

                    const body = handleBody(response);

                    response.json.should.have.been.calledOnce;
                    body.should.equals(response.json());
                });
            });

            it('should not return a body if content type is not application/json', () => {
                return handleBody({
                    status: 200,
                    headers: getMockedHeaders()
                }).then((body) => {
                    expect(body).to.be.undefined;
                });
            });
        });
    });

});
