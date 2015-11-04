import { BaseAPI } from './base';
import { http } from '../utils/http';

export class WebhooksAPI extends BaseAPI {
  validateAuth(headers) {
    return headers && headers.Authorization ? Promise.resolve(headers) : Promise.reject(new Error('Must provide a JWT.'));
  }

  validateProps(props, isTargetRequired = false) {
    if (!props || Object.keys(props).length === 0) {
      return Promise.reject(new Error('Must provide props.'));
    }

    if (isTargetRequired && !props.target) {
      return Promise.reject(new Error('Must provide a target.'));
    }

    return Promise.resolve(props);
  }

  list(auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  create(props, auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return this.validateProps(props, true).then((validatedProps) => {
        return http('POST', url, validatedProps, authHeaders);
      });
    });
  }

  get(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  update(webhookId, props, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return this.validateProps(props).then((validatedProps) => {
        return http('PUT', url, props, authHeaders);
      });
    });
  }

  delete(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return http('DELETE', url, undefined, authHeaders);
    });
  }
}
