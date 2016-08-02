import { BaseApi } from './base';


/**
 * @class AppUsersLinkApi
 * @extends BaseApi
 */
export class AppUsersLinkApi extends BaseApi {

    /**
     * Links the specified channel to a user
     * @param {string} userId - a user id
     * @param {object} data - the data object
     * @return {APIResponse}
     */
    linkChannel(userId, data) {
        if (!data.type) {
            return Promise.reject(new Error('Must provide a channel type.'));
        }

        const url = this.getFullURL('appUsers', userId, 'channels');
        return this.request('POST', url, data);
    }

    /**
     * Unlinks the specified channel
     * @param {string} userId - a user id
     * @param {string} channel - the channel to unlink
     * @return {APIResponse}
     */
    unlinkChannel(userId, channel) {
        const url = this.getFullURL('appUsers', userId, 'channels', channel);
        return this.request('DELETE', url);
    }

    /**
     * Pings linked channel
     * @param {string} userId - a user id
     * @param {string} channel - the channel to ping
     */
    pingChannel(userId, channel) {
        const url = this.getFullURL('appUsers', userId, 'integrations', channel, 'ping');
        return this.request('GET', url);
    }
}
