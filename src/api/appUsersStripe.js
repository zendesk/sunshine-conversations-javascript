import { BaseApi } from './base';
import { http } from '../utils/http';


/**
 * @class AppUsersStripeApi
 * @extends BaseApi
 */
export class AppUsersStripeApi extends BaseApi {

  updateCustomer(userId, token) {
    if (!token) {
      return Promise.reject(new Error('Must provide a Stripe token.'))
    }

    const url = this.getFullURL('appUsers', userId, 'stripe', 'customer');
    return this.validateAuthHeaders(['jwt']).then((headers) => {
      return http('POST', url, {
        token
      }, headers);
    });
  }

  createTransaction(userId, actionId, token) {
    if (!actionId) {
      return Promise.reject(new Error('Must provide an action id.'));
    }

    const url = this.getFullURL('appUsers', userId, 'stripe', 'transaction');

    let body = {
      actionId
    };

    if (token) {
      Object.assign(body, {
        token
      });
    }

    return this.validateAuthHeaders().then((headers) => {
      return http('POST', url, body, headers);
    });
  }
}
