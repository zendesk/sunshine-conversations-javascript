import { BaseApi } from './base';
import { AppUsersStripeApi } from './appUsersStripe';
import { http } from '../utils/http';

/**
 * Init API properties
 * @typedef InitProps
 */

/**
 * @class AppUsersApi
 * @extends BaseApi
 */
export class AppUsersApi extends BaseApi {

  constructor(...args) {
    super(...args);
    this.stripe = new AppUsersStripeApi(...args);
  }

  /**
   * Initializes the conversation for a user
   * @param  {InitProps} props
   * @return {APIResponse}
   */
  init(props) {
    const url = this.getFullURL('init');
    return this.validateAuthHeaders().then((headers) => {
      return http('POST', url, props, headers);
    });
  }

  create(userId, props = {}) {
    if (!userId || !userId.trim()) {
      return Promise.reject(new Error('Must provide an userId.'));
    }

    let payload = Object.assign({
      userId: userId
    }, props);

    if (props.signedUpAt && !(props.signedUpAt instanceof Date)) {
      return Promise.reject(new Error('signedUpAt must be a date.'));
    }

    const url = this.getFullURL('appusers');

    // this endpoint only accepts JWT auth with app scope
    return this.validateAuthHeaders(['jwt']).then((authHeaders) => {
      return http('POST', url, payload, authHeaders);
    });

  }

  /**
   * Fetch an app user
   * @param  {string} userId - an user id
   * @return {APIResponse}
   */
  get(userId) {
    const url = this.getFullURL('appusers', userId);
    return this.validateAuthHeaders().then((headers) => {
      return http('GET', url, {}, headers);
    });
  }

  /**
   * Update an app user
   * @param  {string} userId     - an user id
   * @param  {object} attributes - the attributes to update
   * @return {APIResponse}
   */
  update(userId, attributes) {
    const url = this.getFullURL('appusers', userId);
    return this.validateAuthHeaders().then((headers) => {
      return http('PUT', url, attributes, headers);
    });
  }



  /**
   * Track an event for an app user
   * @param  {string} userId     - an user id
   * @param  {string} eventName  - the name of the event to track
   * @param  {object} {attributes} - attributes to update before tracking the event
   * @return {APIResponse}
   */
  trackEvent(userId, eventName, attributes = {}) {
    const url = this.getFullURL('appusers', userId, 'events');
    return this.validateAuthHeaders().then((headers) => {
      return http('POST', url, {
        name: eventName,
        appUser: attributes
      }, headers);
    });
  }
}
