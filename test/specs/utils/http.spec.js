import sinon from 'sinon';
import hat from 'hat';
import * as fetchMock from '../../mocks/fetch';
import { http, stringifyGETParams, handleResponse } from '../../../src/utils/http';

function getMockedHeaders(headers = {}) {
    return {
        get: (header) => {
            return headers[header];
        }
    };
}

function generateExpectation(method, url, data, headers, agent) {
    method = method.toUpperCase();

    const options = {
        method: method,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, headers)
    };

    if (agent) {
        options.agent = agent;
    }

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

function generateTestName(method, data, headers, agent) {
    const dataPart = data && Object.keys(data).length > 0 ? 'with data' : 'without data';
    const headersPart = headers && Object.keys(headers).length > 0 ? 'with headers' : 'without headers';
    const agentPart = agent ? 'with headers' : 'without headers';

    return `${method} ${dataPart}, ${headersPart}, ${agentPart}`;
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
                method: 'GET',
                agent: 'yes'
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
                method: 'POST',
                data: {
                    some: 'data'
                },
                agent: 'yes'
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
                method: 'DELETE',
                data: {
                    some: 'data'
                },
                agent: 'yes'
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
                method: 'POST',
                data: {
                    some: 'data'
                },
                headers: {
                    header: 'yes'
                },
                agent: 'yes'
            },
            {
                url: 'http://some-url.com',
                method: 'PUT',
                headers: {
                    header: 'yes'
                }
            },
            {
                url: 'http://some-url.com',
                method: 'PUT',
                headers: {
                    header: 'yes'
                },
                agent: 'yes'
            }
        ].forEach((options) => {
            describe(generateTestName(options.method, options.data, options.headers, options.agent), () => {
                it('should transform the options correctly', () => {
                    const expection = generateExpectation(options.method, options.url, options.data, options.headers, options.agent);

                    return http(options.method, options.url, options.data, options.headers, options.agent).then(() => {
                        fetchSpy.should.have.been.calledWith(expection.url, expection.options);
                    });
                });
            });
        });

        describe('#handleResponse', () => {
            let response;

            beforeEach(function() {
                response = {
                    status: 200,
                    statusText: hat(),
                    headers: getMockedHeaders()
                };
            });

            [202, 204].forEach((status) => {
                it('should not return a body if HTTP ' + status, () => {
                    response.status = status;

                    return handleResponse(response).then((body) => {
                        expect(body).to.be.undefined;
                    });
                });
            });

            [200, 201, 203, 299].forEach((status) => {
                it('should return the value of json() if HTTP ' + status, () => {
                    const jsonData = {
                        val1: hat()
                    };

                    response.status = status;
                    response.json = sinon.stub().resolves(jsonData);
                    response.headers = getMockedHeaders({
                        'Content-Type': 'application/json'
                    });

                    return handleResponse(response).then((body) => {
                        response.json.should.have.been.calledOnce;
                        body.should.equals(jsonData);
                    });
                });
            });

            it('should not return a body if content type is not application/json', () => {
                response.json = sinon.stub();

                return handleResponse(response).then((body) => {
                    response.json.should.not.have.been.called;
                    expect(body).to.be.undefined;
                });
            });

            [300, 301, 302, 303, 304, 401, 402, 403, 404, 429, 500, 503, 599].forEach((status) => {
                it('should throw an error with HTTP ' + status, () => {
                    response.status = status;

                    const promise = handleResponse(response);

                    return promise.should.be.rejected
                        .then(function() {
                            return promise;
                        })
                        .catch((e) => {
                            e.message.should.equal(response.statusText);
                            e.response.should.equal(response);
                        });
                });

                it('should parse the json error with HTTP ' + status, () => {
                    const jsonData = {
                        error: {
                            code: hat(),
                            description: hat()
                        }
                    };

                    response.status = status;
                    response.json = sinon.stub().resolves(jsonData);
                    response.headers = getMockedHeaders({
                        'Content-Type': 'application/json'
                    });

                    const promise = handleResponse(response);

                    return promise.should.be.rejected
                        .then(function() {
                            return promise;
                        })
                        .catch((e) => {
                            e.message.should.equal(jsonData.error.description);
                            e.description.should.equal(jsonData.error.description);
                            e.code.should.equal(jsonData.error.code);
                            e.response.should.equal(response);
                        });
                });
            });
        });
    });

});
