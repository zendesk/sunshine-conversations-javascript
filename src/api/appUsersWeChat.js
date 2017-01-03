import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name AppUsersWeChatApi
 * @extends BaseApi
 */
export class AppUsersWeChatApi extends BaseApi {
}

Object.assign(AppUsersWeChatApi.prototype, {
    /**
     * Generage a QR code to link an existing user with WeChat
     * @memberof AppUsersViberApi.prototype
     * @method getQRCode
     * @param  {string} userId
     * @return {APIResponse}
     */
    getQRCode: smoochMethod({
        params: ['userId'],
        path: '/appusers/:userId/integrations/wechat/qrcode',
        method: 'GET'
    })
});
