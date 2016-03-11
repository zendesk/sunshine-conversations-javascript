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
        return this.validateAuthHeaders().then((headers) => {
            return http('GET', url, {}, headers);
        });
    }

    /**
     * Send a message to an app user's conversation
     * @param  {string} userId - an user id
     * @param  {Message} message - the message to be sent
     * @return {APIResponse}
     */
    sendMessage(userId, message) {
        const url = this.getFullURL('appUsers', userId, 'conversation', 'messages');
        return this.validateAuthHeaders().then((headers) => {
            return http('POST', url, message, headers);
        });
    }

    /**
     * Send a message to an app user's conversation
     * @param  {string} userId - an user id
     * @param  {Message} message - the message to be sent
     * @return {APIResponse}
     */
    uploadImage(userId, source, message = {}) {
        const url = this.getFullURL('appUsers', userId, 'conversation', 'images');
        return this.validateAuthHeaders().then((headers) => {
            const data = new FormData();
            data.append('source', source);
            Object.keys(message).forEach((key) => {
                data.append(key, message[key]);
            });

            return http('POST', url, data, headers);
        });
    }

    /**
     * Reset the unread count of the conversation
     * @return {APIResponse}
     */
    resetUnreadCount(userId) {
        const url = this.getFullURL('appUsers', userId, 'conversation', 'read');
        return this.validateAuthHeaders().then((headers) => {
            return http('POST', url, {}, headers);
        });
    }
}
