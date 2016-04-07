import { BaseApi } from './base';


/**
 * @class AppUsersStripeApi
 * @extends BaseApi
 */
export class AppUsersStripeApi extends BaseApi {

    updateCustomer(userId, token) {
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

    createTransaction(userId, actionId, token) {
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
}
