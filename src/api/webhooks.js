import { BaseAPI } from './base';
import { http } from '../utils/http';

export class WebhooksAPI extends BaseAPI {
  list(auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  create(target, eventName, auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      let attributes = {
        target: target
      };

      if (eventName) {
        attributes.event = eventName;
      }

      return http('POST', url, attributes, authHeaders);
    });
  }

  get(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  update(webhookId, target, eventName, auth) {
    if (!target && !eventName) {
      return Promise.reject(new Error('Must provide at least one thing to update.'));
    }

    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      let attributes = {};

      if (eventName) {
        attributes.event = eventName;
      }
      if (target) {
        attributes.target = target;
      }

      return http('PUT', url, attributes, authHeaders);
    });
  }

  delete(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('DELETE', url, undefined, authHeaders);
    });
  }
}
