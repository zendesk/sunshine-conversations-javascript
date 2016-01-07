import { BaseApi } from './base';
import { http } from '../utils/http';


/**
 * @class StripeApi
 * @extends BaseApi
 */
export class StripeApi extends BaseApi {

  updateCustomer(userId, token) {
    if (!token) {
      return Promise.reject(new Error('Must a Stripe token.'))
    }

    const url = this.getFullURL('appUsers', userId, 'stripe', 'customer');
    return this.validateAuthHeaders().then((headers) => {
      return http('POST', url, {
        token
      }, headers);
    });
  }

  createTransaction(userId, actionId, token) {
    if (!actionId) {
      return Promise.reject(new Error('Must an action id.'));
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
