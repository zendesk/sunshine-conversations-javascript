import BaseAPI from './base';
import http from '../utils/http';

export default class AppUsersAPI extends BaseAPI {
  constructor(props) {
    super(props);
  }
  init(props, auth) {
    const url = this.getFullURL('init');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('POST', url, props, authHeaders);
    });
  }

  get(userId, auth) {
    const url = this.getFullURL('appUsers', userId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  update(userId, attributes, auth) {
    const url = this.getFullURL('appUsers', userId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('PUT', url, attributes, authHeaders);
    });
  }

  trackEvent(userId, eventName, auth, attributes = {}) {
    const url = this.getFullURL('appUsers', userId, 'events');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('POST', url, {
        name: eventName,
        appUser: attributes
      }, authHeaders);
    });
  }
}
