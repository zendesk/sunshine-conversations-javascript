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
        func: function init(props) {
            const url = this.getFullURL('init');
            return this.request('POST', url, props);
        }
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
        func: function create(userId, props = {}) {
            if (!userId || !userId.trim()) {
                return Promise.reject(new Error('Must provide a userId.'));
            }

            const payload = Object.assign({
                userId: userId
            }, props);

            if (props.signedUpAt && !(props.signedUpAt instanceof Date)) {
                return Promise.reject(new Error('signedUpAt must be a date.'));
            }

            const url = this.getFullURL('appusers');

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
        func: function get(userId) {
            const url = this.getFullURL('appusers', userId);
            return this.request('GET', url);
        }
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
        func: function update(userId, props) {
            const url = this.getFullURL('appusers', userId);
            return this.request('PUT', url, props);
        }
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
        func: function trackEvent(userId, eventName, props = {}) {
            const url = this.getFullURL('appusers', userId, 'events');
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
        func: function updatePushToken(userId, deviceId, token) {
            const url = this.getFullURL('appusers', userId, 'pushToken');
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
        func: function updateDevice(userId, deviceId, props) {
            const url = this.getFullURL('appusers', userId, 'devices', deviceId);
            return this.request('PUT', url, props);
        }
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
        func: function linkChannel(userId, data) {
            if (!data.type) {
                return Promise.reject(new Error('Must provide a channel type.'));
            }

            const url = this.getFullURL('appUsers', userId, 'channels');
            return this.request('POST', url, data);
        }
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
        func: function unlinkChannel(userId, channel) {
            const url = this.getFullURL('appUsers', userId, 'channels', channel);
            return this.request('DELETE', url);
        }
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
        func: function pingChannel(userId, channel) {
            const url = this.getFullURL('appUsers', userId, 'integrations', channel, 'ping');
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
        func: function getMessages(userId, query = {}) {
            const {before, after} = query;
            if (before && after) {
                return Promise.reject(new Error('Parameters "before" and "after" are mutually exclusive. You must provide one or the other.'));
            }

            const q = before ? {
                before
            } : after ? {
                after
            } : undefined;
            const url = this.getFullURL('appUsers', userId, 'messages');
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
        func: function sendMessage(userId, message) {
            const url = this.getFullURL('appUsers', userId, 'messages');
            return this.request('POST', url, message);
        }
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
        func: function uploadImage(userId, source, message = {}) {
            const url = this.getFullURL('appUsers', userId, 'images');
            const data = new FormData();
            data.append('source', source);

            Object.keys(message).forEach((key) => {
                data.append(key, message[key]);
            });

            return this.request('POST', url, data);
        }
    })
});
