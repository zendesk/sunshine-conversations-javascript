import { BaseApi } from './base';

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
     * @param  {string} userId - a user id
     * @return {APIResponse}
     */
    get(userId) {
        const url = this.getFullURL('appUsers', userId, 'conversation');
        return this.request('GET', url);
    }

    /**
     * Post back to an action button
     * @param  {string} userId - a user id
     * @param  {string} actionId - an action id
     * @return {APIResponse}
     */
    postPostback(userId, actionId) {
        if (!actionId) {
            return Promise.reject(new Error('Must provide an action id.'));
        }

        const url = this.getFullURL('appUsers', userId, 'conversation', 'postback');
        const body = {
            actionId
        };

        return this.request('POST', url, body);
    }

    /**
     * Send a message to an app user's conversation
     * @param  {string} userId - a user id
     * @param  {Message} message - the message to be sent
     * @return {APIResponse}
     */
    sendMessage(userId, message) {
        const url = this.getFullURL('appUsers', userId, 'conversation', 'messages');
        return this.request('POST', url, message);
    }

    /**
     * Send an image to an app user's conversation
     * @param  {string} userId - a user id
     * @param  {Blob|Readable stream} source - source image
     * @param  {Message} message - the message to be sent
     * @return {APIResponse}
     */
    uploadImage(userId, source, message = {}) {
        const url = this.getFullURL('appUsers', userId, 'conversation', 'images');
        const data = new FormData();
        data.append('source', source);

        Object.keys(message).forEach((key) => {
            data.append(key, message[key]);
        });

        return this.request('POST', url, data);
    }

    /**
     * Reset the unread count of the conversation
     * @return {APIResponse}
     */
    resetUnreadCount(userId) {
        const url = this.getFullURL('appUsers', userId, 'conversation', 'read');
        return this.request('POST', url);
    }
}
