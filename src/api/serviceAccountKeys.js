import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name ServiceAccountKeysApi
 * @extends BaseApi
 */
export class ServiceAccountKeysApi extends BaseApi {
    constructor() {
        super(...arguments);

        this.requireAppId = false;
        this.allowedAuth = ['jwt'];
    }
}

Object.assign(ServiceAccountKeysApi.prototype, {
    /**
     * Create a new service account key
     * @memberof ServiceAccountKeysApi.prototype
     * @method create
     * @param  {string} name
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['serviceAccountId', 'name'],
        path: '/serviceaccounts/:serviceAccountId/keys',
        func: function create(url, serviceAccountId, name) {
            if (typeof name !== 'string') {
                throw new Error('Invalid name parameter type, expected string');
            }
            return this.request('POST', url, {
                name
            });
        }
    }),

    /**
     * Fetch the keys currently configured for a service account
     * @memberof ServiceAccountKeysApi.prototype
     * @method list
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: ['serviceAccountId'],
        path: '/serviceaccounts/:serviceAccountId/keys',
        method: 'GET'
    }),

    /**
     * Retrieve an existing service account key
     * @memberof ServiceAccountKeysApi.prototype
     * @method get
     * @param  {string} keyId
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['serviceAccountId', 'keyId'],
        path: '/serviceaccounts/:serviceAccountId/keys/:keyId',
        method: 'GET'
    }),

    /**
     * Generate a JWT with account scope using the specified key
     * @memberof ServiceAccountKeysApi.prototype
     * @method getJwt
     * @param  {string} keyId
     * @return {APIResponse}
     */
    getJwt: smoochMethod({
        params: ['serviceAccountId', 'keyId'],
        path: '/serviceaccounts/:serviceAccountId/keys/:keyId/jwt',
        method: 'GET'
    }),

    /**
     * Delete an existing service account key
     * @memberof ServiceAccountKeysApi.prototype
     * @method delete
     * @param  {string} keyId
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['serviceAccountId', 'keyId'],
        path: '/serviceaccounts/:serviceAccountId/keys/:keyId',
        method: 'DELETE'
    })
});
