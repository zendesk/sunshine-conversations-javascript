import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { IntegrationsApi } from '../../../src/api/integrations';
import { testJwt } from '../../mocks/jwt';

describe('Integrations API', () => {
    const serviceUrl = 'http://some-url.com';
    const missingParams = 'incorrect number of parameters';
    const httpHeaders = getAuthenticationHeaders({
        jwt: testJwt()
    });
    const appId = 'appid_12345';
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new IntegrationsApi(serviceUrl, httpHeaders, null, true);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#create', () => {
        it('should throw if props are not provided', () => {
            expect(() => api.create(appId)).to.throw(Error, missingParams);
        });

        it('should throw if props are empty', () => {
            expect(() => api.create(appId, {})).to.throw(Error, 'props missing required field type');
        });

        describe('messenger', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'messenger'
                };
                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: pageAccessToken, appId, appSecret');
            });

            it('should call http', () => {
                const props = {
                    type: 'messenger',
                    pageAccessToken: 'foo',
                    appId: 'bar',
                    appSecret: 'baz'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('twilio', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'twilio'
                };
                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: accountSid, authToken, phoneNumberSid');
            });

            it('should call http', () => {
                const props = {
                    type: 'twilio',
                    accountSid: 'foo',
                    authToken: 'bar',
                    phoneNumberSid: 'baz'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('telegram', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'telegram'
                };
                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: token');
            });

            it('should call http', () => {
                const props = {
                    type: 'telegram',
                    token: 'foo'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('line', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'line'
                };
                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: channelAccessToken, channelSecret');
            });

            it('should call http', () => {
                const props = {
                    type: 'line',
                    channelAccessToken: 'foo',
                    channelSecret: 'bar'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('viber', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'viber'
                };
                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: token');
            });

            it('should call http', () => {
                const props = {
                    type: 'viber',
                    token: 'foo'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('wechat', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'wechat'
                };
                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: appId, appSecret');
            });

            it('should call http', () => {
                const props = {
                    type: 'wechat',
                    appId: 'foo',
                    appSecret: 'bar'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });

            it('should call http with optional props', () => {
                const props = {
                    type: 'wechat',
                    appId: 'foo',
                    appSecret: 'bar',
                    encodingAesKey: 'baz'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('fcm', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'fcm'
                };

                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: serverKey, senderId');
            });

            it('should call http', () => {
                const props = {
                    type: 'fcm',
                    serverKey: 'yay',
                    senderId: 'woo'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });

        describe('apn', () => {
            it('should throw if missing required params', () => {
                const invalid = {
                    type: 'apn'
                };

                expect(() => api.create(appId, invalid)).to.throw(Error, 'integration has missing required keys: certificate');
            });

            it('should call http', () => {
                const props = {
                    type: 'apn',
                    certificate: 'yay'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });

            it('should call http with optional props', () => {
                const props = {
                    type: 'apn',
                    certificate: 'yay',
                    password: 'oooooh',
                    autoUpdateBadge: true
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });

            it('should throw an error if the property types are wrong', () => {
                const props = {
                    type: 'apn',
                    certificate: {},
                    autoUpdateBadge: 12345,
                    password: false
                };

                const expectedTypes = [{
                    name: 'certificate',
                    type: 'string'
                }, {
                    name: 'autoUpdateBadge',
                    type: 'boolean'
                }, {
                    name: 'password',
                    type: 'string'
                }];

                expect(() => api.create(appId, props)).to.throw(Error, `integration has invalid types: ${JSON.stringify(expectedTypes)}`);
            });
        });

        describe('frontendEmail', () => {
            it('should call http', () => {
                const props = {
                    type: 'frontendEmail'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });

            it('should call http with optional props', () => {
                const props = {
                    type: 'frontendEmail',
                    fromAddress: 'foo'
                };
                return api.create(appId, props).then(() => {
                    const url = `${serviceUrl}/apps/${appId}/integrations`;
                    httpSpy.should.have.been.calledWith('POST', url, props, httpHeaders);
                });
            });
        });
    });


    describe('#list', () => {
        it('should call http', () => {
            return api.list(appId).then(() => {
                const url = `${serviceUrl}/apps/${appId}/integrations`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, httpHeaders);
            });
        });

        it('should accept types string', () => {
            const types = 'type1,type2';
            return api.list(appId, types).then(() => {
                const url = `${serviceUrl}/apps/${appId}/integrations`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    types
                }, httpHeaders);
            });
        });

        it('should accept types array', () => {
            const types = ['type1', 'type2'];
            return api.list(appId, types).then(() => {
                const url = `${serviceUrl}/apps/${appId}/integrations`;
                httpSpy.should.have.been.calledWith('GET', url, {
                    types: 'type1,type2'
                }, httpHeaders);
            });
        });
    });

    describe('#get', () => {
        it('should call http', () => {
            const integrationId = 'integration_123456';
            return api.get(appId, integrationId).then(() => {
                const url = `${serviceUrl}/apps/${appId}/integrations/${integrationId}`;
                httpSpy.should.have.been.calledWith('GET', url, undefined, httpHeaders);
            });
        });

        it('should throw if missing integrationId', () => {
            expect(() => api.get(appId)).to.throw(Error, missingParams);
        });
    });

    describe('#delete', () => {
        it('should call http', () => {
            const integrationId = 'integration_123456';
            return api.delete(appId, integrationId).then(() => {
                const url = `${serviceUrl}/apps/${appId}/integrations/${integrationId}`;
                httpSpy.should.have.been.calledWith('DELETE', url, undefined, httpHeaders);
            });
        });

        it('should throw error if missing integrationId', () => {
            expect(() => api.delete(appId)).to.throw(Error, missingParams);
        });
    });
});
