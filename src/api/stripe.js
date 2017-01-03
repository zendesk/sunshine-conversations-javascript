import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name StripeApi
 * @extends BaseApi
 */
export class StripeApi extends BaseApi {
}

Object.assign(StripeApi.prototype, {
    /**
     * Fetch the stripe account associated with an app
     * @memberof StripeApi.prototype
     * @method getAccount
     * @return {APIResponse}
     */
    getAccount: smoochMethod({
        params: [],
        path: '/stripe/account',
        method: 'GET'
    })
});
