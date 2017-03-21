import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name IntegrationMenuApi
 * @extends BaseApi
 */
export class IntegrationMenuApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];
    }

    validateProps(props) {
        if (!props) {
            throw new Error('Must provide props.');
        }

        if (!props.items) {
            throw new Error('Must provide an array of items.');
        }
    }
}

Object.assign(IntegrationMenuApi.prototype, {

    /**
     * Fetch an integration's menu
     * @memberof IntegrationMenuApi.prototype
     * @method get
     * @param  {string} integrationId
     * @return {APIResponse}
     */
     get: smoochMethod({
         params: ['integrationId'],
         path: '/integrations/:integrationId/menu',
         method: 'GET'
     }),

    /**
     * Update an integration's menu
     * @memberof IntegrationMenuApi.prototype
     * @method configure
     * @param  {object} props
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['integrationId', 'props'],
        path: '/integrations/:integrationId/menu',
        func: function create(url, integrationId, props) {
            this.validateProps(props);
            return this.request('POST', url, props);
        }
    }),

    /**
     * Update an integration's menu
     * @memberof IntegrationMenuApi.prototype
     * @method configure
     * @param  {object} props
     * @return {APIResponse}
     */
    update: smoochMethod({
        params: ['integrationId', 'props'],
        path: '/integrations/:integrationId/menu',
        func: function update(url, integrationId, props) {
            this.validateProps(props);
            return this.request('PUT', url, props);
        }
    }),

    /**
     * Delete an integration's menu
     * @memberof IntegrationMenuApi.prototype
     * @method delete
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['integrationId'],
        path: '/integrations/:integrationId/menu',
        method: 'DELETE'
    })
});
