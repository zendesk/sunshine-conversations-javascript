import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name AppUsersViberApi
 * @extends BaseApi
 */
export class AppUsersViberApi extends BaseApi {
}

Object.assign(AppUsersViberApi.prototype, {
    /**
     * Generage a QR code to link an existing user with Viber
     * @memberof AppUsersViberApi.prototype
     * @method getQRCode
     * @param  {string} userId
     * @return {APIResponse}
     */
    getQRCode: smoochMethod({
        params: ['userId'],
        func: function getQRCode(userId) {
            const url = this.getFullURL('appUsers', userId, 'integrations', 'viber', 'qrcode');
            return this.request('GET', url);
        }
    })
});
