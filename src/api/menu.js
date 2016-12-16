import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name MenuApi
 * @extends BaseApi
 */
export class MenuApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];
    }
}

Object.assign(MenuApi.prototype, {

    /**
     * Fetch an app's menu
     * @memberof MenuApi.prototype
     * @method get
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: [],
        func: function get() {
            const url = this.getFullURL('menu');
            return this.request('GET', url);
        }
    }),

    /**
     * Update an app's menu
     * @memberof MenuApi.prototype
     * @method configure
     * @param  {object} props
     * @return {APIResponse}
     */
    configure: smoochMethod({
        params: ['props'],
        func: function configure(props) {
            if (!props) {
                return Promise.reject(new Error('Must provide props.'));
            }

            if (!props.items) {
                return Promise.reject(new Error('Must provide an array of items.'));
            }

            const url = this.getFullURL('menu');

            return this.request('PUT', url, props);
        }
    }),

    /**
     * Delete an app's menu
     * @memberof MenuApi.prototype
     * @method remove
     * @return {APIResponse}
     */
    remove: smoochMethod({
        params: [],
        func: function remove() {
            const url = this.getFullURL('menu');
            return this.request('DELETE', url);
        }
    })
});
