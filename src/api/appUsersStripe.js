import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name AppUsersStripeApi
 * @extends BaseApi
 */
export class AppUsersStripeApi extends BaseApi {
}

Object.assign(AppUsersStripeApi.prototype, {
    /**
     * Assign a stripe payment method to an existing user
     * @memberof AppUsersStripeApi.prototype
     * @method updateCustomer
     * @param  {string} userId
     * @param  {string} token
     * @return {APIResponse}
     */
    updateCustomer: smoochMethod({
        params: ['userId', 'token'],
        func: function updateCustomer(userId, token) {
            if (!token) {
                return Promise.reject(new Error('Must provide a Stripe token.'));
            }

            const url = this.getFullURL('appUsers', userId, 'stripe', 'customer');
            return this.request('POST', url, {
                token
            }, {
                allowedAuth: ['jwt']
            });
        }
    }),

    /**
     * Create a one-time stripe transaction
     * @memberof AppUsersStripeApi.prototype
     * @method createTransaction
     * @param  {string} userId
     * @param  {string} actionId
     * @param  {string} token
     * @return {APIResponse}
     */
    createTransaction: smoochMethod({
        params: ['userId', 'actionId', 'token'],
        optional: ['token'],
        func: function createTransaction(userId, actionId, token) {
            if (!actionId) {
                return Promise.reject(new Error('Must provide an action id.'));
            }

            const url = this.getFullURL('appUsers', userId, 'stripe', 'transaction');

            const body = {
                actionId
            };

            if (token) {
                Object.assign(body, {
                    token
                });
            }

            return this.request('POST', url, body);
        }
    })
});
