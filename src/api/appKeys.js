import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name AppKeysApi
 * @extends BaseApi
 */
export class AppKeysApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];
    }
}

Object.assign(AppKeysApi.prototype, {
    /**
     * Create a new app key
     * @memberof AppKeysApi.prototype
     * @method create
     * @param  {string} name
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['name'],
        path: '/keys',
        func: function create(url, name) {
            if (typeof name !== 'string') {
                throw new Error('Invalid name parameter type, expected string');
            }
            return this.request('POST', url, {name});
        }
    }),

    /**
     * Fetch the keys currently configured for an app
     * @memberof AppKeysApi.prototype
     * @method list
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: [],
        path: '/keys',
        method: 'GET'
    }),

    /**
     * Retrieve an existing app key
     * @memberof AppKeysApi.prototype
     * @method get
     * @param  {stirng} keyId
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['keyId'],
        path: '/keys/:keyId',
        method: 'GET'
    }),

    /**
     * Generate a JWT with app scope using the specified key
     * @memberof AppKeysApi.prototype
     * @method getJwt
     * @param  {stirng} keyId
     * @return {APIResponse}
     */
    getJwt: smoochMethod({
        params: ['keyId'],
        path: '/keys/:keyId/jwt',
        method: 'GET'
    }),

    /**
     * Delete an existing app
     * @memberof AppKeysApi.prototype
     * @method delete
     * @param  {stirng} keyId
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['keyId'],
        path: '/keys/:keyId', method: 'DELETE'
    })
});
