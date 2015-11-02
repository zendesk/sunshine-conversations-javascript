import { BaseAPI } from './base';
import { http } from '../utils/http';


/**
 * @typedef Message
 *
 */

/**
 * @class ConversationsAPI
 * @extends BaseAPI
 */
export class ConversationsAPI extends BaseAPI {

  /**
   * Fetch an app user's conversation
   * @param  {string} userId - an user id
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  get(userId, auth) {
    const url = this.getFullURL('appUsers', userId, 'conversation');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  /**
   * Send a message to an app user's conversation
   * @param  {string} userId - an user id
   * @param  {Message} message - the message to be sent
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  sendMessage(userId, message, auth) {
    const url = this.getFullURL('appUsers', userId, 'conversation', 'messages');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('POST', url, message, authHeaders);
    });
  }
}
