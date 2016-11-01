import { BaseApi } from './base';


/**
 * @class AppUsersViberApi
 * @extends BaseApi
 */
export class AppUsersViberApi extends BaseApi {

    getQRCode(userId) {
        const url = this.getFullURL('appUsers', userId, 'integrations', 'viber', 'qrcode');
        return this.request('GET', url);
    }

}
