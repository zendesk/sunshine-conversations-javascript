import BaseAPI from './base';
import http from '../utils/http';

export default class ConversationsAPI extends BaseAPI {
  retrieve(userId, auth) {
    const url = this.getFullURL('appUsers', userId, 'conversation');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  sendMessage(userId, message, auth) {
    const url = this.getFullURL('appUsers', userId, 'conversation', 'messages');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('POST', url, message, authHeaders);
    });
  }
}
