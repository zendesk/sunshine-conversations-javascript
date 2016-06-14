import { BaseApi } from './base';


/**
 * @class AppUsersWeChatApi
 * @extends BaseApi
 */
export class AppUsersWeChatApi extends BaseApi {

    getQRCode(userId) {
        const url = this.getFullURL('appUsers', userId, 'integrations', 'wechat', 'qrcode');
        return this.request('GET', url);
    }

}
