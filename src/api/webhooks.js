import BaseAPI from './base';
import http from '../utils/http';

export default class WebhooksAPI extends BaseAPI {
  list(auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  create(target, events, auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      let data = {
        target: target
      };

      if (events) {
        data.events = events;
      }

      return http('POST', url, data, authHeaders);
    });
  }

  get(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  update(webhookId, target, events, auth) {
    if (!target && !events) {
      return Promise.reject(new Error('Must provide at least one thing to update.'));
    }

    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      let data = {};

      if (events) {
        data.events = events;
      }
      if (target) {
        data.target = target;
      }

      return http('PUT', url, attributes, authHeaders);
    });
  }

  delete(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('DELETE', url, {}, authHeaders);
    });
  }
}
