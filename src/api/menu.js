import { BaseApi } from './base';

/**
 * @class MenuApi
 * @extends BaseApi
 */
export class MenuApi extends BaseApi {

    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];
    }

    /**
     * Fetch an app's menu
     * @return {APIResponse}
     */
    get() {
        const url = this.getFullURL('menu');
        return this.request('GET', url);
    }

    /**
     * Update an app's menu
     * @param  {object} menuData
     * @return {APIResponse}
     */
    configure(menuData) {
        if (!menuData) {
            return Promise.reject(new Error('Must provide props.'));
        }

        if (!menuData.items) {
            return Promise.reject(new Error('Must provide an array of items.'));
        }

        const url = this.getFullURL('menu');

        return this.request('PUT', url, menuData);
    }

    /**
     * Delete an app's menu
     * @return {APIResponse}
     */
    remove() {
        const url = this.getFullURL('menu');
        return this.request('DELETE', url);
    }
}
