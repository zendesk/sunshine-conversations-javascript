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
     * Deprecated. Use appUsers.sendMessage() instead.
     */
    sendMessage() {
        return Promise.reject(new Error('This endpoint is deprecated. Please use appUsers.sendMessage() instead.'));
    }

    /**
     * Deprecated. Use appusers.uploadImage() instead.
     */
    uploadImage() {
        return Promise.reject(new Error('This endpoint is deprecated. Please use appUsers.uploadImage() instead.'));
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
