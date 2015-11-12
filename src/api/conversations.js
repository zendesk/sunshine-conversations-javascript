import { BaseApi } from './base';
import { http } from '../utils/http';


/**
 * @typedef Message
 *
 */

/**
 * @class ConversationsApi
 * @extends BaseApi
 */
export class ConversationsApi extends BaseApi {

  /**
   * Fetch an app user's conversation
   * @param  {string} userId - an user id
   * @return {APIResponse}
   */
  get(userId) {
    const url = this.getFullURL('appUsers', userId, 'conversation');
    return http('GET', url, {}, this.authHeaders);
  }

  /**
   * Send a message to an app user's conversation
   * @param  {string} userId - an user id
   * @param  {Message} message - the message to be sent
   * @return {APIResponse}
   */
  sendMessage(userId, message) {
    const url = this.getFullURL('appUsers', userId, 'conversation', 'messages');
    return http('POST', url, message, this.authHeaders);
  }
}
