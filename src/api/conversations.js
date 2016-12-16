import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @typedef Message
 */

/**
 * @constructor
 * @name ConversationsApi
 * @extends BaseApi
 */
export class ConversationsApi extends BaseApi {
}

Object.assign(ConversationsApi.prototype, {
    /**
     * Fetch an app user's conversation
     * @memberof ConversationsApi.prototype
     * @method get
     * @param  {string} userId - a user id
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['userId'],
        func: function get(userId) {
            const url = this.getFullURL('appUsers', userId, 'conversation');
            return this.request('GET', url);
        }
    }),

    /**
     * Post back to an action button
     * @memberof ConversationsApi.prototype
     * @method postPostback
     * @param  {string} userId - a user id
     * @param  {string} actionId - an action id
     * @return {APIResponse}
     */
    postPostback: smoochMethod({
        params: ['userId', 'actionId'],
        func: function postPostback(userId, actionId) {
            if (!actionId) {
                return Promise.reject(new Error('Must provide an action id.'));
            }

            const url = this.getFullURL('appUsers', userId, 'conversation', 'postback');
            const body = {
                actionId
            };

            return this.request('POST', url, body);
        }
    }),

    /**
     * Reset the unread count of an existing user's conversation
     * @memberof ConversationsApi.prototype
     * @method resetUnreadCount
     * @param  {string} userId - a user id
     * @return {APIResponse}
     */
    resetUnreadCount: smoochMethod({
        params: ['userId'],
        func: function resetUnreadCount(userId) {
            const url = this.getFullURL('appUsers', userId, 'conversation', 'read');
            return this.request('POST', url);
        }
    }),

    /**
     * @memberof ConversationsApi.prototype
     * @deprecated Use appUsers.sendMessage() instead.
     */
    sendMessage: function sendMessage() {
        return Promise.reject(new Error('This endpoint is deprecated. Please use appUsers.sendMessage() instead.'));
    },

    /**
     * @memberof ConversationsApi.prototype
     * @deprecated Use appUsers.uploadImage() instead.
     */
    uploadImage: function uploadImage() {
        return Promise.reject(new Error('This endpoint is deprecated. Please use appUsers.uploadImage() instead.'));
    }
});
