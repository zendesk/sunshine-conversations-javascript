import { BaseApi } from './base';
import { AppUsersStripeApi } from './appUsersStripe';
import { AppUsersViberApi } from './appUsersViber';
import { AppUsersWeChatApi } from './appUsersWeChat';
import smoochMethod from '../utils/smoochMethod';

/**
 * Init API properties
 * @typedef InitProps
 */

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
     * Initializes the conversation for a user
     * @memberof AppUsersApi.prototype
     * @method init
     * @param  {InitProps} props
     * @return {APIResponse}
     */
    init: smoochMethod({
        params: ['props'],
        path: '/init',
        method: 'POST'
    }),

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
     * Track an event for an app user
     * @memberof AppUsersApi.prototype
     * @method trackEvent
     * @param  {string} userId    - a user id
     * @param  {string} eventName - the name of the event to track
     * @param  {object=} props    - props to update before tracking the event
     * @return {APIResponse}
     */
    trackEvent: smoochMethod({
        params: ['userId', 'eventName', 'props'],
        optional: ['props'],
        path: '/appusers/:userId/events',
        func: function trackEvent(url, userId, eventName, props = {}) {
            return this.request('POST', url, {
                name: eventName,
                appUser: props
            });
        }
    }),

    /**
     * Update the push notification token for a given app user's device
     * @memberof AppUsersApi.prototype
     * @method updatePushToken
     * @param  {string} userId   - a user id
     * @param  {string} deviceId - a device id
     * @param  {string} token    - a push notification token
     * @return {APIResponse}
     */
    updatePushToken: smoochMethod({
        params: ['userId', 'deviceId', 'token'],
        path: '/appusers/:userId/pushToken',
        func: function updatePushToken(url, userId, deviceId, token) {
            return this.request('POST', url, {
                deviceId,
                token
            });
        }
    }),

    /**
    * Update the specified device for a given app user
    * @memberof AppUsersApi.prototype
    * @method updateDevice
    * @param  {string} userId   - a user id
    * @param  {string} deviceId - a device id
    * @param  {object} props    - props to update on the device
    */
    updateDevice: smoochMethod({
        params: ['userId', 'deviceId', 'props'],
        path: '/appusers/:userId/devices/:deviceId',
        method: 'PUT'
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
     * @param  {object=} activityProps  - properties as defined in http://docs.smooch.io/rest
     * @return {APIResponse}
     */
    typingActivity: smoochMethod({
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
     * Initiates a channel tranfser request in order to link a new channel to the user's conversation
     * @memberof AppUsersApi.prototype
     * @method transferRequest
     * @param  {object} channel - the channel criteria, eg { type: 'messenger' }
     * @return {APIResponse}
     */
    transferRequest: smoochMethod({
        params: ['userId', 'channel'],
        path: '/appusers/:userId/transferrequest',
        func: function transferRequest(url, userId, channel) {
            return this.request('GET', url, {
                type: channel.type
            });
        }
    })
});
