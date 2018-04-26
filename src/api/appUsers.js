import { BaseApi } from './base';
import { AppUsersStripeApi } from './appUsersStripe';
import { AppUsersViberApi } from './appUsersViber';
import { AppUsersWeChatApi } from './appUsersWeChat';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name AppUsersApi
 * @extends BaseApi
 */
export class AppUsersApi extends BaseApi {
    constructor(...args) {
        super(...args);
        this.stripe = new AppUsersStripeApi(...args);
        this.viber = new AppUsersViberApi(...args);
        this.wechat = new AppUsersWeChatApi(...args);
    }
}

Object.assign(AppUsersApi.prototype, {
    /**
     * Create
     * @memberof AppUsersApi.prototype
     * @method create
     * @param  {string} userId
     * @param  {object=} props
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['userId', 'props'],
        optional: ['props'],
        path: '/appusers',
        func: function create(url, userId, props = {}) {
            if (!userId || !userId.trim()) {
                return Promise.reject(new Error('Must provide a userId.'));
            }

            const payload = Object.assign({
                userId: userId
            }, props);

            if (props.signedUpAt && !(props.signedUpAt instanceof Date)) {
                return Promise.reject(new Error('signedUpAt must be a date.'));
            }

            // this endpoint only accepts JWT auth with app scope
            return this.request('POST', url, payload, {
                allowedAuth: ['jwt']
            });
        }
    }),

    /**
     * Fetch an app user
     * @memberof AppUsersApi.prototype
     * @method get
     * @param  {string} userId - a user id
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId',
        method: 'GET'
    }),

    /**
     * Update an app user
     * @memberof AppUsersApi.prototype
     * @method update
     * @param  {string} userId - a user id
     * @param  {object} props  - the props to update
     * @return {APIResponse}
     */
    update: smoochMethod({
        params: ['userId', 'props'],
        path: '/appusers/:userId',
        method: 'PUT'
    }),

    /**
     * Retrieves all of the app user’s channel entity IDs
     * @memberof AppUsersApi.prototype
     * @method getChannels
     * @param  {string} userId - a user id
     * @return {APIResponse}
     */
    getChannels: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId/channels',
        method: 'GET'
    }),

    /**
     * Retrieves all of the app user's business system IDs
     * @memberof AppUsersApi.prototype
     * @method getBusinessSystems
     * @param {string} userId - a user id
     * @return {APIResponse}
     */
    getBusinessSystems: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId/businesssystems',
        method: 'GET'
    }),

    /**
     * Links the specified channel to a user
     * @memberof AppUsersApi.prototype
     * @method linkChannel
     * @param  {string} userId - a user id
     * @param  {object} data   - the data object
     * @return {APIResponse}
     */
    linkChannel: smoochMethod({
        params: ['userId', 'data'],
        path: '/appusers/:userId/channels',
        method: 'POST'
    }),

    /**
     * Unlinks the specified channel
     * @memberof AppUsersApi.prototype
     * @method unlinkChannel
     * @param  {string} userId  - a user id
     * @param  {string} channel - the channel to unlink
     * @return {APIResponse}
     */
    unlinkChannel: smoochMethod({
        params: ['userId', 'channel'],
        path: '/appusers/:userId/channels/:channel',
        method: 'DELETE'
    }),

    /**
     * Pings linked channel
     * @memberof AppUsersApi.prototype
     * @method pingChannel
     * @param  {string} userId  - a user id
     * @param  {string} channel - the channel to ping
     * @return {APIResponse}
     */
    pingChannel: smoochMethod({
        params: ['userId', 'channel'],
        path: '/appusers/:userId/integrations/:channel/ping',
        func: function pingChannel(url) {
            return this.request('POST', url);
        }
    }),

    /**
     * Fetch app user's messages
     * @memberof AppUsersApi.prototype
     * @method getMessages
     * @param  {string} userId - a user id
     * @param  {object=} query - paging parameters (before, after)
     * @return {APIResponse}
     */
    getMessages: smoochMethod({
        params: ['userId', 'query'],
        optional: ['query'],
        path: '/appusers/:userId/messages',
        func: function getMessages(url, userId, query = {}) {
            const {before, after} = query;
            if (before && after) {
                return Promise.reject(new Error('Parameters "before" and "after" are mutually exclusive. You must provide one or the other.'));
            }

            const q = before ? {
                before
            } : after ? {
                after
            } : undefined;
            return this.request('GET', url, q);
        }
    }),

    /**
     * Send a message to an app user's conversation
     * @memberof AppUsersApi.prototype
     * @method sendMessage
     * @param  {string} userId   - a user id
     * @param  {Message} message - the message to be sent
     * @return {APIResponse}
     */
    sendMessage: smoochMethod({
        params: ['userId', 'message'],
        path: '/appusers/:userId/messages',
        method: 'POST'
    }),

    /**
     * Send an image to an app user's conversation
     * @memberof AppUsersApi.prototype
     * @method uploadImage
     * @param  {string} userId   - a user id
     * @param  {Readable} source - source image readable stream
     * @param  {Message=} message - the message to be sent
     * @return {APIResponse}
     */
    uploadImage: smoochMethod({
        params: ['userId', 'source', 'message'],
        optional: ['message'],
        path: '/appusers/:userId/images',
        func: function uploadImage(url, userId, source, message = {}) {
            const data = new FormData();
            data.append('source', source);

            Object.keys(message).forEach((key) => {
                data.append(key, message[key]);
            });

            return this.request('POST', url, data);
        }
    }),

    /**
     * Deletes a single message
     * @memberof AppUsersApi.prototype
     * @method deleteMessage
     * @param  {string} userId    - a user id
     * @param  {string} messageId - a message id
     * @return {APIResponse}
     */
    deleteMessage: smoochMethod({
        params: ['userId', 'messageId'],
        path: '/appusers/:userId/messages/:messageId',
        method: 'DELETE'
    }),

    /**
     * Deletes an appUser's message history
     * @memberof AppUsersApi.prototype
     * @method deleteMessages
     * @param  {string} userId    - a user id
     * @return {APIResponse}
     */
    deleteMessages: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId/messages',
        func: function deleteMessages(url, userId) {
            if (!userId || !userId.trim()) {
                return Promise.reject(new Error('Must provide a userId.'));
            }

            // this endpoint only accepts JWT auth with app scope
            return this.request('DELETE', url, {}, {
                allowedAuth: ['jwt']
            });
        }
    }),

    /**
     * Sets or resets the appMaker's typing indicator
     * @memberof AppUsersApi.prototype
     * @method typingActivity
     * @param  {string} userId    - a user id
     * @param  {object=} activityProps  - properties as defined in https://docs.smooch.io/rest
     * @return {APIResponse}
     * @deprecated use conversationActivity instead
     */
    typingActivity: smoochMethod({
        params: ['userId', 'activityProps'],
        path: '/appusers/:userId/conversation/activity',
        method: 'POST'
    }),

    /**
     * Sends conversation activity
     * @memberof AppUsersApi.prototype
     * @method conversationActivity
     * @param  {string} userId    - a user id
     * @param  {object=} activityProps  - properties as defined in https://docs.smooch.io/rest
     * @return {APIResponse}
     */
    conversationActivity: smoochMethod({
        params: ['userId', 'activityProps'],
        path: '/appusers/:userId/conversation/activity',
        method: 'POST'
    }),

    /**
     * Deletes an appUser's profile
     * @memberof AppUsersApi.prototype
     * @method deleteProfile
     * @param  {string} userId    - a user id
     * @return {APIResponse}
     */
    deleteProfile: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId/profile',
        func: function deleteProfile(url, userId) {
            if (!userId || !userId.trim()) {
                return Promise.reject(new Error('Must provide a userId.'));
            }

            // this endpoint only accepts JWT auth
            return this.request('DELETE', url, {}, {
                allowedAuth: ['jwt']
            });
        }
    }),

    /**
     * Initiates a channel link request in order to link a new channel to the user's conversation
     * @memberof AppUsersApi.prototype
     * @method getLinkRequests
     * @param  {array} integrationIds - An array of integrationIds to generate link requests for
     * @return {APIResponse}
     */
    getLinkRequests: smoochMethod({
        params: ['userId', 'integrationIds'],
        path: '/appusers/:userId/linkrequest',
        func: function getLinkRequests(url, userId, integrationIds) {
            if (!integrationIds.join) {
                return Promise.reject(new Error('IntegrationIds must be an array of strings'));
            }

            return this.request('GET', url, {
                integrationIds: integrationIds.join(',')
            });
        }
    }),

    /**
     * Get an auth code for facilitating a channel transfer
     * @memberof AppUsersApi.prototype
     * @method getAuthCode
     * @return {APIResponse}
     */
    getAuthCode: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId/authcode',
        method: 'GET'
    })
});
