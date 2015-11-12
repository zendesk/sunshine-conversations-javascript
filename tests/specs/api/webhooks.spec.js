import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { WebhooksApi } from '../../../src/api/webhooks';


describe('Webhooks API', () => {
  const serviceUrl = 'http://some-url.com';
  const webhookId = 'some-id';
  const noAuthErrorMessage = 'Must provide authentication information.';
  const invalidAuthErrorMessage = 'Must provide a JWT.';
  const noPropsMessage = 'Must provide props.';
  const noTargetMessage = 'Must provide a target.';
  const httpHeaders = getAuthenticationHeaders({
    jwt: 'jwt'
  });
  let httpSpy;
  let api;

  beforeEach(() => {
    httpSpy = httpMock.mock();
    api = new WebhooksApi(serviceUrl, httpHeaders);
  });

  afterEach(() => {
    httpMock.restore();
  });

  describe('#validateAuth', () => {
    it('should not return an error if Authorization header is present', () => {
      return api.validateAuth({
        Authorization: 'Bearer stuff'
      });
    });

    it('should return an error if Authorization header is not present', (done) => {
      api.validateAuth({
        'app-token': 'some-token'
      }).catch((e) => {
        e.message.should.equal(invalidAuthErrorMessage);
        done();
      });
    });
  });

  describe('#validateProps', () => {
    it('should return an error if props are not provided', (done) => {
      api.validateProps().catch((e) => {
        e.message.should.equal(noPropsMessage);
        done();
      });
    });

    it('should return an error if props are empty', (done) => {
      api.validateProps({}).catch((e) => {
        e.message.should.equal(noPropsMessage);
        done();
      });
    });


    it('should return an error if target is not provided and required', (done) => {
      api.validateProps({
        event: 'message'
      }, true).catch((e) => {
        e.message.should.equal(noTargetMessage);
        done();
      });
    });

    it('should not return an error if target is provided and required', () => {
      return api.validateProps({
        target: 'target',
        event: 'message'
      }, true);
    });

    it('should not return an error if props are provided and target is not required', () => {
      return api.validateProps({
        event: 'message'
      });
    });

  });

  describe('#list', () => {
    it('should call http', () => {
      return api.list().then(() => {
        const fullUrl = api.getFullURL('webhooks');
        httpSpy.should.have.been.calledWith('GET', fullUrl, {}, httpHeaders);
      })
    });

    it('should return an error if no JWT in auth', (done) => {
      const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
        appToken: 'some-token'
      }));

      badApi.list().catch((e) => {
        e.message.should.equal(invalidAuthErrorMessage);
        done();
      });
    });
  });

  describe('#get', () => {
    it('should call http', () => {
      return api.get(webhookId).then(() => {
        const fullUrl = api.getFullURL('webhooks', webhookId);
        httpSpy.should.have.been.calledWith('GET', fullUrl, {}, httpHeaders);
      })
    });


    it('should return an error if no JWT in auth', (done) => {
      const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
        appToken: 'some-token'
      }));

      badApi.get(webhookId).catch((e) => {
        e.message.should.equal(invalidAuthErrorMessage);
        done();
      });
    });
  });

  describe('#create', () => {
    const props = {
      target: 'http://some-url.com'
    };

    it('should call http', () => {
      return api.create(props).then(() => {
        const fullUrl = api.getFullURL('webhooks');
        httpSpy.should.have.been.calledWith('POST', fullUrl, props, httpHeaders);
      })
    });

    it('should return an error if no target', (done) => {
      api.create({
        event: 'event'
      }).catch((e) => {
        e.message.should.equal(noTargetMessage);
        done();
      })
    });

    it('should return an error if no props', (done) => {
      api.create(undefined).catch((e) => {
        e.message.should.equal(noPropsMessage);
        done();
      })
    });

    it('should return an error if props are empty', (done) => {
      api.create({}).catch((e) => {
        e.message.should.equal(noPropsMessage);
        done();
      })
    });

    it('should return an error if no JWT in auth', (done) => {
      const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
        appToken: 'some-token'
      }));

      badApi.create(props).catch((e) => {
        e.message.should.equal(invalidAuthErrorMessage);
        done();
      });
    });
  });


  describe('#update', () => {
    const props = {
      target: 'http://some-url.com'
    };

    it('should call http', () => {
      return api.update(webhookId, props).then(() => {
        const fullUrl = api.getFullURL('webhooks', webhookId);
        httpSpy.should.have.been.calledWith('PUT', fullUrl, props, httpHeaders);
      })
    });

    it('should return an error if no props', (done) => {
      api.update(webhookId, undefined).catch((e) => {
        e.message.should.equal(noPropsMessage);
        done();
      })
    });

    it('should return an error if props are empty', (done) => {
      api.update(webhookId, {}).catch((e) => {
        e.message.should.equal(noPropsMessage);
        done();
      })
    });

    it('should return an error if no JWT in auth', (done) => {
      const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
        appToken: 'some-token'
      }));

      badApi.update(webhookId, props).catch((e) => {
        e.message.should.equal(invalidAuthErrorMessage);
        done();
      });
    });
  });

  describe('#delete', () => {
    it('should call http', () => {
      return api.delete(webhookId).then(() => {
        const fullUrl = api.getFullURL('webhooks', webhookId);
        httpSpy.should.have.been.calledWith('DELETE', fullUrl, undefined, httpHeaders);
      })
    });

    it('should return an error if no JWT in auth', (done) => {
      const badApi = new WebhooksApi(serviceUrl, getAuthenticationHeaders({
        appToken: 'some-token'
      }));

      badApi.delete(webhookId).catch((e) => {
        e.message.should.equal(invalidAuthErrorMessage);
        done();
      });
    });
  });
});
