import { BaseApi } from './base';
import { AppUsersStripeApi } from './appUsersStripe';
import { AppUsersWeChatApi } from './appUsersWeChat';

/**
 * Init API properties
 * @typedef InitProps
 */

/**
 * @class AppUsersApi
 * @extends BaseApi
 */
export class AppUsersApi extends BaseApi {

    constructor(...args) {
        super(...args);
        this.stripe = new AppUsersStripeApi(...args);
        this.wechat = new AppUsersWeChatApi(...args);
    }

    /**
     * Initializes the conversation for a user
     * @param  {InitProps} props
     * @return {APIResponse}
     */
    init(props) {
        const url = this.getFullURL('init');
        return this.request('POST', url, props);
    }

    create(userId, props = {}) {
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

    /**
     * Fetch an app user
     * @param  {string} userId - a user id
     * @return {APIResponse}
     */
    get(userId) {
        const url = this.getFullURL('appusers', userId);
        return this.request('GET', url);
    }

    /**
     * Update an app user
     * @param  {string} userId     - a user id
     * @param  {object} attributes - the attributes to update
     * @return {APIResponse}
     */
    update(userId, attributes) {
        const url = this.getFullURL('appusers', userId);
        return this.request('PUT', url, attributes);
    }

    /**
     * Track an event for an app user
     * @param  {string} userId     - a user id
     * @param  {string} eventName  - the name of the event to track
     * @param  {object} {attributes} - attributes to update before tracking the event
     * @return {APIResponse}
     */
    trackEvent(userId, eventName, attributes = {}) {
        const url = this.getFullURL('appusers', userId, 'events');
        return this.request('POST', url, {
            name: eventName,
            appUser: attributes
        });
    }

    /**
     * Update the push notification token for a given app user's device
     * @param  {string} userId     - a user id
     * @param  {string} deviceId  - a device id
     * @param  {string} token  - a push notification token
     * @return {APIResponse}
     */
    updatePushToken(userId, deviceId, token) {
        const url = this.getFullURL('appusers', userId, 'pushToken');
        return this.request('POST', url, {
            deviceId,
            token
        });
    }

    /**
    * Update the specified device for a given app user
    * @param {string} userId    - a user id
    * @param  {string} deviceId  - a device id
    * @param  {object} {attributes} - attributes to update on the device
    */
    updateDevice(userId, deviceId, attributes) {
        const url = this.getFullURL('appusers', userId, 'devices', deviceId);
        return this.request('PUT', url, attributes);
    }
}
