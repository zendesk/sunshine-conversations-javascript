import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { testJwt } from '../../mocks/jwt';
import { TemplatesApi } from '../../../src/api/templates';

describe.only('Template API', () => {
    const serviceUrl = 'http://some-url.com';
    const noPropsMessage = 'Must provide props.';
    const noNameMessage = 'Must provide name for your template.';
    const noMessageMessage = 'Must provide message for your template.';
    const noNameOrMessageMessage = 'Must provide either name or message to update.';
    const authHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const scope = 'account';
    const appId = 'appid_12345';
    const templateId = 'templateid_12345';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new TemplatesApi({
            serviceUrl,
            authHeaders,
            scope
        });
    });

    afterEach(() => {
        httpMock.restore();
    });

    const templateApiSuite = (propsOnly) => {
        describe('#create', () => {
            const preArgs = [];

            const props = {
                name: 'test',
                message: {}
            };

            const data = { };

            if (propsOnly) {
                Object.assign(data, {
                    appId,
                    templateId,
                    props
                });
            } else {
                preArgs.push(appId);
                Object.assign(data, props);
            }

            it('should call http', () => {
                return api.create(...preArgs, data)
                    .then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates`;
                        httpSpy.should.have.been.calledWith('POST', fullUrl, props, authHeaders);
                    });
            });

            if (!propsOnly) {
                it('should return an error if no props', () => {
                    return api.create(...preArgs, {
                        ...data
                    }).catch((e) => {
                        e.message.should.equal(noPropsMessage);
                    });
                });

                it('should return an error if no name', () => {
                    return api.create(...preArgs, {
                        ...data,
                        props: {
                            ...props,
                            name: undefined
                        }
                    }).catch((e) => {
                        e.message.should.equal(noNameMessage);
                    });
                });

                it('should return an error if no message', () => {
                    return api.create(...preArgs, {
                        ...data,
                        props: {
                            ...props,
                            message: undefined
                        }
                    }).catch((e) => {
                        e.message.should.equal(noMessageMessage);
                    });
                });
            }
        });

        describe('#list', () => {
            const limit = 0;
            const offset = 0;

            const preArgs = [];

            const props = {
                limit,
                offset
            };

            const data = { };

            if (propsOnly) {
                Object.assign(data, {
                    appId,
                    props
                });
            } else {
                preArgs.push(appId);
                Object.assign(data, props);
            }

            it('should call http', () => {
                if (propsOnly) {
                    return api.list(...preArgs, {
                        ...data,
                        props: { }
                    }).then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates`;
                        httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                    });
                } else {
                    return api.list(...preArgs).then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates`;
                        httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                    });
                }
            });

            it('should call http with limit/offset', () => {
                return api.list(...preArgs, data).then(() => {
                    const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?limit=${limit}&offset=${offset}`;
                    httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                });
            });

            it('should call http with just limit', () => {
                return api.list(...preArgs, {
                    ...data,
                    offset: undefined,
                    props: {
                        ...props,
                        offset: undefined
                    }
                }).then(() => {
                    const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?limit=${limit}`;
                    httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                });
            });

            it('should call http with just offset', () => {
                return api.list(...preArgs, {
                    ...data,
                    limit: undefined,
                    props: {
                        ...props,
                        limit: undefined
                    }
                }).then(() => {
                    const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?offset=${offset}`;
                    httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                });
            });

            it('should call http without extra query stuff', () => {
                return api.list(...preArgs, {
                    ...data,
                    props: {
                        ...props,
                        fake: 'stuff'
                    }
                }).then(() => {
                    const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates?limit=${limit}&offset=${offset}`;
                    httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                });
            });
        });

        describe('#get', () => {
            const preArgs = [];

            const data = { };

            if (propsOnly) {
                Object.assign(data, {
                    appId,
                    templateId
                });
            } else {
                preArgs.push(appId, templateId);
            }

            it('should call http', () => {
                if (propsOnly) {
                    return api.get(...preArgs, data).then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                        httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                    });
                } else {
                    return api.get(...preArgs).then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                        httpSpy.should.have.been.calledWith('GET', fullUrl, undefined, authHeaders);
                    });
                }
            });
        });

        describe('#update', () => {
            const preArgs = [];

            const props = {
                name: 'test',
                message: {}
            };

            const data = { };

            if (propsOnly) {
                Object.assign(data, {
                    appId,
                    templateId,
                    props
                });
            } else {
                preArgs.push(appId, templateId);
                Object.assign(data, props);
            }

            it('should call http', () => {
                return api.update(...preArgs, data).then(() => {
                    const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                    httpSpy.should.have.been.calledWith('PUT', fullUrl, props, authHeaders);
                });
            });

            if (!propsOnly) {
                it('should return an error if no props', () => {
                    return api.update(...preArgs, {
                        ...data
                    })
                        .catch((e) => {
                            e.message.should.equal(noPropsMessage);
                        });
                });

                it('should return an error if no name or message', () => {
                    return api.update(...preArgs, {
                        ...data,
                        props: {
                            ...props,
                            name: undefined,
                            message: undefined
                        }
                    })
                        .catch((e) => {
                            e.message.should.equal(noNameOrMessageMessage);
                        });
                });
            }
        });

        describe('#delete', () => {
            const preArgs = [];

            const data = { };

            if (propsOnly) {
                Object.assign(data, {
                    appId,
                    templateId
                });
            } else {
                preArgs.push(appId, templateId);
            }

            it('should call http', () => {
                if (propsOnly) {
                    return api.delete(...preArgs, data).then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                        httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
                    });
                } else {
                    return api.delete(...preArgs).then(() => {
                        const fullUrl = `${serviceUrl}/v1/apps/${appId}/templates/${templateId}`;
                        httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, authHeaders);
                    });
                }
            });
        });
    };

    describe('with props only', () => {
        templateApiSuite(true);
    });

    describe('with appId, templateId as args', () => {
        templateApiSuite(false);
    });
});
