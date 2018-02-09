import { BaseApi } from './base';
import { ServiceAccountKeysApi } from './serviceAccountKeys';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name ServiceAccountsApi
 * @extends BaseApi
 */
export class ServiceAccountsApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.requireAppId = false;
        this.allowedAuth = ['jwt'];

        this.keys = new ServiceAccountKeysApi(...arguments);
    }
}

Object.assign(ServiceAccountsApi.prototype, {
    /**
     * Create a new service account
     * @memberof ServiceAccountsApi.prototype
     * @method create
     * @param  {object} data
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['name'],
        path: '/serviceaccounts',
        func: function create(url, name) {
            if (typeof name !== 'string') {
                throw new Error('Invalid name parameter type, expected string');
            }

            return this.request('POST', url, {
                name
            });
        }
    }),

    /**
     * Fetch the service accounts currently configured
     * @memberof ServiceAccountsApi.prototype
     * @method list
     * @param  {number} limit
     * @param  {number} offset
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: ['limit', 'offset'],
        optional: ['limit', 'offset'],
        path: '/serviceaccounts',
        func: function list(url, limit, offset) {
            const q = {};
            if (limit) {
                if (typeof limit !== 'number') {
                    throw new Error('limit must be a number');
                }
                q.limit = limit;
            }
            if (offset) {
                if (typeof offset !== 'number') {
                    throw new Error('offset must be a number');
                }
                q.offset = offset;
            }

            if (q.limit || q.offset) {
                return this.request('GET', url, q);
            } else {
                return this.request('GET', url);
            }
        }
    }),

    /**
     * Retrieve an existing service account
     * @memberof ServiceAccountsApi.prototype
     * @method get
     * @param  {string} serviceAccountId
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['serviceAccountId'],
        path: '/serviceaccounts/:serviceAccountId',
        method: 'GET'
    }),

    /**
     * Update an existing service account
     * @memberof ServiceAccountsApi.prototype
     * @method put
     * @param  {string} serviceAccountId
     * @return {APIResponse}
     */
    update: smoochMethod({
        params: ['serviceAccountId', 'data'],
        path: '/serviceaccounts/:serviceAccountId',
        method: 'PUT'
    }),

    /**
     * Delete an existing service account
     * @memberof ServiceAccountsApi.prototype
     * @method delete
     * @param  {string} serviceAccountId
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['serviceAccountId'],
        path: '/serviceaccounts/:serviceAccountId',
        method: 'DELETE'
    })
});
